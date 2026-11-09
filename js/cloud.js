// Google-Anmeldung + Cloud-Sync (Firebase). Lädt das SDK erst bei Bedarf, damit die App auch offline funktioniert.
const SDK = "https://www.gstatic.com/firebasejs/11.0.2";
const config = {
  apiKey: "AIzaSyDfscG3TzLsOIljFUMRjJdq2MKMh5s7Aww",
  authDomain: "pruefungspilot-3253.firebaseapp.com",
  projectId: "pruefungspilot-3253",
  storageBucket: "pruefungspilot-3253.firebasestorage.app",
  messagingSenderId: "868460446006",
  appId: "1:868460446006:web:7fd21d32c1a2e87c8bf397"
};

let fb = null;
let user = null;
let timer = null;
let hooks = { getState: () => ({}), setState: () => {}, onUser: () => {}, notify: () => {} };

async function sdk() {
  if (fb) return fb;
  const [app, auth, fs] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-auth.js`),
    import(`${SDK}/firebase-firestore.js`)
  ]);
  const a = app.initializeApp(config);
  fb = { auth: auth.getAuth(a), db: fs.getFirestore(a), A: auth, F: fs };
  return fb;
}

const max = (a, b) => Math.max(a || 0, b || 0);
const union = (a = [], b = []) => [...new Set([...a, ...b])];

export function mergeStates(local, remote) {
  if (!remote) return local;
  const out = { ...remote, ...local };
  out.subjects = { ...remote.subjects };
  for (const [id, l] of Object.entries(local.subjects || {})) {
    const r = remote.subjects?.[id];
    if (!r) { out.subjects[id] = l; continue; }
    const best = { ...r.best };
    for (const [k, v] of Object.entries(l.best || {})) best[k] = max(best[k], v);
    out.subjects[id] = {
      ...r, ...l,
      unlocked: max(l.unlocked, r.unlocked),
      completed: union(r.completed, l.completed).sort((x, y) => x - y),
      best,
      examBest: max(l.examBest, r.examBest),
      examPassed: !!(l.examPassed || r.examPassed),
      examHistory: (l.examHistory?.length || 0) >= (r.examHistory?.length || 0) ? l.examHistory : r.examHistory
    };
  }
  out.missed = { ...remote.missed, ...local.missed };
  out.cards = { ...remote.cards };
  for (const [id, c] of Object.entries(local.cards || {})) {
    const r = remote.cards?.[id];
    out.cards[id] = !r || (c.due || "") >= (r.due || "") ? c : r;
  }
  out.xp = max(local.xp, remote.xp);
  const ls = local.streak || {}, rs = remote.streak || {};
  out.streak = (ls.last || "") > (rs.last || "") ? ls : (rs.last || "") > (ls.last || "") ? rs : (ls.count || 0) >= (rs.count || 0) ? ls : rs;
  out.activity = { ...remote.activity };
  for (const [d, n] of Object.entries(local.activity || {})) out.activity[d] = max(out.activity[d], n);
  out.stats = { ...remote.stats };
  for (const [k, v] of Object.entries(local.stats || {})) out.stats[k] = max(out.stats[k], v);
  out.badges = union(remote.badges, local.badges);
  out.settings = { ...remote.settings, ...local.settings };
  return out;
}

async function pull() {
  const { db, F } = await sdk();
  const snap = await F.getDoc(F.doc(db, "users", user.uid));
  const remote = snap.exists() ? JSON.parse(snap.data().state || "null") : null;
  hooks.setState(mergeStates(hooks.getState(), remote));
  await push();
}

async function push() {
  if (!user) return;
  const { db, F } = await sdk();
  await F.setDoc(F.doc(db, "users", user.uid), { state: JSON.stringify(hooks.getState()), updated: F.serverTimestamp() });
}

export function schedulePush() {
  if (!user) return;
  clearTimeout(timer);
  timer = setTimeout(() => push().catch((e) => console.warn("Cloud-Sync fehlgeschlagen", e)), 1500);
}

export function currentUser() { return user; }

export async function signIn() {
  try {
    const { auth, A } = await sdk();
    await A.signInWithPopup(auth, new A.GoogleAuthProvider());
  } catch (e) {
    if (e?.code === "auth/popup-closed-by-user" || e?.code === "auth/cancelled-popup-request") return;
    console.warn(e);
    hooks.notify(`Anmeldung fehlgeschlagen (${e?.code || "Netzwerk"})`, "bad");
  }
}

export async function signOut() {
  const { auth, A } = await sdk();
  await push().catch(() => {});
  await A.signOut(auth);
}

export async function initCloud(h) {
  hooks = { ...hooks, ...h };
  try {
    const { auth, A } = await sdk();
    A.onAuthStateChanged(auth, async (u) => {
      user = u ? { uid: u.uid, name: u.displayName || u.email, photo: u.photoURL } : null;
      hooks.onUser(user);
      if (user) {
        try { await pull(); hooks.notify("☁️ Lernstand synchronisiert", "ok"); }
        catch (e) { console.warn(e); hooks.notify("Cloud-Sync gerade nicht möglich – lokal gespeichert", "bad"); }
      }
    });
  } catch (e) {
    console.warn("Firebase nicht erreichbar – nur lokaler Modus", e);
    hooks.onUser(null);
  }
}
