import { subjects as rawSubjects } from "./content.js";
import { levelExtras, studyTips, operators, videos } from "./extras.js";
import { renderDiagram } from "./diagrams.js";

/* ---------- Daten zusammenführen ---------- */
const subjects = {};
for (const [sid, s] of Object.entries(rawSubjects)) {
  subjects[sid] = {
    ...s,
    id: sid,
    levels: s.levels.map((lvl, i) => {
      const ex = levelExtras[sid]?.[i] || {};
      return {
        ...lvl,
        ...ex,
        index: i,
        tasks: [...(lvl.tasks || []), ...(ex.tasks || [])],
        test: [...lvl.test, ...(ex.extraTest || [])],
        videos: videos[sid]?.[i] || []
      };
    })
  };
}
const SUBJECT_IDS = Object.keys(subjects);

const questionIndex = new Map();
for (const s of Object.values(subjects)) {
  s.levels.forEach((l, i) => {
    if (l.practice) questionIndex.set(l.practice.id, { q: l.practice, sid: s.id, level: i });
    l.test.forEach((q) => questionIndex.set(q.id, { q, sid: s.id, level: i }));
  });
  s.exam.forEach((q) => questionIndex.set(q.id, { q, sid: s.id, level: "exam" }));
}

/* ---------- Hilfsfunktionen ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
function localDate(d = new Date()) { const z = d.getTimezoneOffset() * 60000; return new Date(d - z).toISOString().slice(0, 10); }
function addDays(dateStr, n) { const d = new Date(dateStr + "T12:00:00"); d.setDate(d.getDate() + n); return localDate(d); }
function daysBetween(a, b) { return Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000); }
const fmtDate = (s) => new Date(s + "T12:00:00").toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });

function normalizeAnswer(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ß/g, "ss").replace(/[^a-z0-9]/g, "");
}
function answerMatches(value, accepted = []) {
  const v = normalizeAnswer(value);
  return v.length > 0 && accepted.some((a) => normalizeAnswer(a) === v);
}

/* ---------- Speicher (v2 + Migration aus v1) ---------- */
const KEY = "pruefungspilot-v2";
const OLD_KEY = "lernpfade-progress-v1";

function defaultState() {
  return {
    version: 2,
    subjects: Object.fromEntries(SUBJECT_IDS.map((id) => [id, { unlocked: 0, completed: [], best: {}, examBest: 0, examPassed: false, examHistory: [] }])),
    missed: {},
    cards: {},
    xp: 0,
    streak: { count: 0, last: null },
    activity: {},
    stats: { reviews: 0, answered: 0, correct: 0, pomodoros: 0 },
    settings: { theme: "auto", freeMode: false, examDates: {} },
    badges: [],
    lastVisit: null
  };
}

function loadState() {
  const base = defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      return { ...base, ...s, subjects: { ...base.subjects, ...s.subjects }, settings: { ...base.settings, ...s.settings }, stats: { ...base.stats, ...s.stats } };
    }
    const old = localStorage.getItem(OLD_KEY);
    if (old) {
      const o = JSON.parse(old);
      for (const id of SUBJECT_IDS) {
        if (!o[id]) continue;
        const n = subjects[id].levels.length;
        const completed = (o[id].completed || []).filter((x) => Number.isInteger(x) && x < n);
        base.subjects[id].completed = completed;
        base.subjects[id].unlocked = Math.min(n - 1, Math.max(o[id].unlocked || 0, completed.length ? Math.max(...completed) + 1 : 0));
        base.subjects[id].examPassed = !!o[id].examPassed;
        base.subjects[id].examBest = o[id].bestExam || 0;
      }
      for (const qid of Object.keys(o.missed || {})) {
        const ref = questionIndex.get(qid);
        if (ref) base.missed[qid] = { sid: ref.sid, level: ref.level, count: 1, added: localDate() };
      }
    }
  } catch (e) { console.warn("Lernstand konnte nicht geladen werden", e); }
  return base;
}
let state = loadState();
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* Speicher voll oder gesperrt */ } }

/* ---------- Gamification ---------- */
function recordActivity(xp = 0) {
  const t = localDate();
  state.activity[t] = (state.activity[t] || 0) + 1;
  if (state.streak.last !== t) {
    state.streak.count = state.streak.last === addDays(t, -1) ? state.streak.count + 1 : 1;
    state.streak.last = t;
  }
  if (xp) state.xp += xp;
  checkBadges();
  save();
  updateChrome();
}
function currentStreak() {
  const t = localDate();
  return state.streak.last === t || state.streak.last === addDays(t, -1) ? state.streak.count : 0;
}
const rank = (xp) => {
  const names = ["Neuling", "Einsteiger/in", "Lernprofi", "Wissensjäger/in", "Prüfungsfit", "Meister/in", "Legende"];
  const lvl = Math.floor(xp / 300);
  return { level: lvl + 1, name: names[Math.min(lvl, names.length - 1)], progress: pct(xp % 300, 300) };
};

const BADGES = [
  { id: "first-level", icon: "🎯", title: "Erster Schritt", desc: "Ein Level bestanden", test: () => SUBJECT_IDS.some((id) => state.subjects[id].completed.length) },
  { id: "perfect", icon: "⭐", title: "Volltreffer", desc: "Einen Level-Check mit 100 % abgeschlossen", test: () => SUBJECT_IDS.some((id) => Object.values(state.subjects[id].best).some((b) => b >= 100)) },
  { id: "subject-done", icon: "🏁", title: "Fach durchgespielt", desc: "Alle Level eines Fachs bestanden", test: () => SUBJECT_IDS.some((id) => state.subjects[id].completed.length === subjects[id].levels.length) },
  { id: "exam", icon: "🎓", title: "Prüfung bestanden", desc: "Eine Prüfungssimulation mit mind. 75 %", test: () => SUBJECT_IDS.some((id) => state.subjects[id].examPassed) },
  { id: "both-exams", icon: "🏆", title: "Doppelt sicher", desc: "Beide Prüfungssimulationen bestanden", test: () => SUBJECT_IDS.every((id) => state.subjects[id].examPassed) },
  { id: "streak3", icon: "🔥", title: "Dranbleiber/in", desc: "3 Tage in Folge gelernt", test: () => state.streak.count >= 3 },
  { id: "streak7", icon: "🚀", title: "Wochenserie", desc: "7 Tage in Folge gelernt", test: () => state.streak.count >= 7 },
  { id: "cards50", icon: "🗂️", title: "Kartenprofi", desc: "50 Karteikarten wiederholt", test: () => state.stats.reviews >= 50 },
  { id: "answers100", icon: "💯", title: "Hundert Antworten", desc: "100 Fragen beantwortet", test: () => state.stats.answered >= 100 },
  { id: "focus", icon: "⏱️", title: "Fokussiert", desc: "Eine Pomodoro-Einheit abgeschlossen", test: () => state.stats.pomodoros >= 1 },
  { id: "clean", icon: "🧹", title: "Fehlerfrei", desc: "Wiederholungsliste nach Fehlern geleert", test: () => state.stats.cleared === true }
];
function checkBadges() {
  for (const b of BADGES) {
    if (!state.badges.includes(b.id) && b.test()) {
      state.badges.push(b.id);
      toast(`${b.icon} Abzeichen freigeschaltet: <strong>${esc(b.title)}</strong>`);
    }
  }
}

function toast(html, kind = "info") {
  const host = $("#toasts");
  if (!host) return;
  const el = document.createElement("div");
  el.className = `toast toast-${kind}`;
  el.innerHTML = html;
  host.append(el);
  setTimeout(() => el.classList.add("out"), 3600);
  setTimeout(() => el.remove(), 4200);
}

/* ---------- Fortschritt ---------- */
const sub = (sid) => state.subjects[sid];
const isUnlocked = (sid, n) => state.settings.freeMode || n === 0 || n <= sub(sid).unlocked || sub(sid).completed.includes(n - 1);
const isCompleted = (sid, n) => sub(sid).completed.includes(n);
const stars = (score) => (score >= 100 ? 3 : score >= 85 ? 2 : score >= 66.6 ? 1 : 0);
const starHtml = (n) => `<span class="stars" aria-label="${n} von 3 Sternen">${[0, 1, 2].map((i) => `<span class="${i < n ? "on" : ""}">★</span>`).join("")}</span>`;
function subjectProgress(sid) { return pct(sub(sid).completed.length, subjects[sid].levels.length); }
function nextLevel(sid) {
  const s = subjects[sid];
  const i = s.levels.findIndex((_, n) => !isCompleted(sid, n) && isUnlocked(sid, n));
  return i === -1 ? null : i;
}

/* ---------- Karteikarten (Leitner) ---------- */
const BOX_DAYS = [0, 1, 3, 7, 14, 30];
function allCards() {
  const list = [];
  for (const s of Object.values(subjects)) {
    s.cards.forEach((c, i) => list.push({ id: `${s.id}-c${i}`, sid: s.id, level: null, front: c.front, back: c.back }));
    s.levels.forEach((l, n) => (l.keyTerms || []).forEach((k, j) => list.push({ id: `${s.id}-l${n}-k${j}`, sid: s.id, level: n, front: `Was bedeutet „${k.term}“?`, back: k.def })));
  }
  return list;
}
const CARDS = allCards();
const cardAvailable = (c) => c.level === null || isUnlocked(c.sid, c.level);
function dueCards(sid) {
  const t = localDate();
  return CARDS.filter((c) => (!sid || c.sid === sid) && cardAvailable(c) && (!state.cards[c.id] || state.cards[c.id].due <= t));
}
function reviewCard(id, known) {
  const cur = state.cards[id] || { box: 0 };
  const box = known ? Math.min(5, (cur.box || 0) + 1) : 1;
  state.cards[id] = { box, due: addDays(localDate(), known ? BOX_DAYS[box] : 1) };
  state.stats.reviews++;
  recordActivity(known ? 3 : 1);
}

/* ---------- Fragen darstellen & bewerten ---------- */
function renderQuestion(q, num, { shuffleOptions = false } = {}) {
  let body = "";
  if (q.type === "short") {
    body = `<input class="input" type="text" name="${esc(q.id)}" autocomplete="off" spellcheck="false" placeholder="Deine Antwort" aria-label="Antwort">`;
  } else if (q.type === "table") {
    body = `<div class="table-q">${q.rows.map((r, i) => `<label class="table-row"><span>${esc(r.label)}</span><input class="input" type="text" name="${esc(q.id)}__${i}" autocomplete="off"></label>`).join("")}</div>`;
  } else {
    const order = q.options.map((_, i) => i);
    body = `<div class="options">${(shuffleOptions ? shuffle(order) : order).map((i) => `<label class="option"><input type="radio" name="${esc(q.id)}" value="${i}"><span>${esc(q.options[i])}</span></label>`).join("")}</div>`;
  }
  return `<fieldset class="question" data-q="${esc(q.id)}"><legend><span class="q-num">${num}</span>${esc(q.prompt)}</legend>${body}<div class="q-feedback" aria-live="polite"></div></fieldset>`;
}
function gradeQuestion(q, form) {
  if (q.type === "short") return answerMatches(form.elements[q.id]?.value, q.accepted);
  if (q.type === "table") return q.rows.every((r, i) => answerMatches(form.elements[`${q.id}__${i}`]?.value, r.accepted));
  const sel = form.querySelector(`input[name="${CSS.escape(q.id)}"]:checked`);
  return !!sel && Number(sel.value) === q.answer;
}
function correctText(q) {
  if (q.type === "short") return q.expected;
  if (q.type === "table") return q.rows.map((r) => `${r.label}: ${r.expected}`).join(" · ");
  return q.options[q.answer];
}
function showFeedback(form, q, ok) {
  const fs = form.querySelector(`[data-q="${CSS.escape(q.id)}"]`);
  if (!fs) return;
  fs.classList.remove("is-right", "is-wrong");
  fs.classList.add(ok ? "is-right" : "is-wrong");
  if (q.type === "table") {
    q.rows.forEach((r, i) => {
      const inp = form.elements[`${q.id}__${i}`];
      inp?.classList.toggle("bad", !answerMatches(inp.value, r.accepted));
      inp?.classList.toggle("good", answerMatches(inp.value, r.accepted));
    });
  }
  if (!q.type || q.type === "choice") {
    $$(".option", fs).forEach((lab) => {
      const v = Number(lab.querySelector("input").value);
      lab.classList.toggle("correct", v === q.answer);
    });
  }
  fs.querySelector(".q-feedback").innerHTML = `<strong>${ok ? "✓ Richtig." : "✗ Nicht ganz."}</strong> ${ok ? "" : `Richtig: <em>${esc(correctText(q))}</em>. `}${esc(q.explanation || "")}`;
  $$("input", fs).forEach((i) => (i.disabled = true));
}
function trackAnswer(q, ok) {
  state.stats.answered++;
  if (ok) state.stats.correct++;
  const ref = questionIndex.get(q.id);
  if (!ref) return;
  if (ok) {
    if (state.missed[q.id]) {
      delete state.missed[q.id];
      if (!Object.keys(state.missed).length) state.stats.cleared = true;
    }
  } else {
    const m = state.missed[q.id];
    state.missed[q.id] = { sid: ref.sid, level: ref.level, count: (m?.count || 0) + 1, added: m?.added || localDate() };
  }
}

/* ---------- Video ---------- */
function videoBlock(list, key) {
  if (!list.length) return "";
  const v = list[0];
  return `<section class="card video-card" data-video-host="${key}">
    <div class="section-head"><h3>🎬 Erklärvideo</h3><span class="muted small">${esc(v.duration || "")}</span></div>
    <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(v.id)}?rel=0" title="${esc(v.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
    <p class="video-meta"><strong data-video-title>${esc(v.title)}</strong> · <span data-video-channel>${esc(v.channel)}</span></p>
    ${list.length > 1 ? `<div class="chips"><span class="muted small">Alternative Videos:</span>${list.map((x, i) => `<button type="button" class="chip ${i === 0 ? "active" : ""}" data-action="video" data-id="${esc(x.id)}" data-title="${esc(x.title)}" data-channel="${esc(x.channel)}">${i + 1}. ${esc(x.channel)} (${esc(x.duration)})</button>`).join("")}</div>` : ""}
    <p class="muted small">Tipp: Erst Video schauen, dann die Erklärung unten lesen – zwei Wege zum selben Wissen bleiben besser hängen.</p>
  </section>`;
}

/* ---------- Werkzeuge ---------- */
const TOOLS = {
  subnet: { title: "Subnetz-Rechner", icon: "🧮" },
  "hex-db": { title: "Zahlensysteme & Dezibel", icon: "🔢" },
  seats: { title: "Sitzverteilung (Sainte-Laguë)", icon: "🗳️" },
  "osi-game": { title: "OSI-Sortierspiel", icon: "🧩" },
  pomodoro: { title: "Fokus-Timer (Pomodoro)", icon: "⏱️" }
};
function toolHtml(id) {
  if (id === "subnet") return `<div class="tool" data-tool="subnet">
    <div class="tool-inputs"><label>IPv4-Adresse<input class="input mono" name="ip" value="192.168.10.77"></label><label>Präfix /<input class="input mono" name="prefix" type="number" min="0" max="32" value="26"></label></div>
    <div class="tool-out" data-out></div></div>`;
  if (id === "hex-db") return `<div class="tool" data-tool="hex-db">
    <div class="tool-inputs"><label>Zahl<input class="input mono" name="num" value="0x0800"></label><label>Basis<select class="input" name="base"><option value="auto">automatisch</option><option value="10">dezimal</option><option value="16">hex</option><option value="2">binär</option></select></label></div>
    <div class="tool-out" data-out-num></div>
    <h4>Dämpfung / Verstärkung in dB</h4>
    <div class="tool-inputs"><label>U₁ (bzw. P₁)<input class="input mono" name="u1" type="number" step="any" value="10"></label><label>U₂ (bzw. P₂)<input class="input mono" name="u2" type="number" step="any" value="1"></label></div>
    <div class="tool-out" data-out-db></div></div>`;
  if (id === "seats") {
    const parties = [["CDU/CSU", 28.5], ["AfD", 20.8], ["SPD", 16.4], ["Grüne", 11.6], ["Linke", 8.8], ["BSW", 4.97], ["FDP", 4.3], ["Sonstige", 4.63]];
    return `<div class="tool" data-tool="seats">
      <p class="muted small">Beispielwerte angelehnt an die Bundestagswahl 2025 (Zweitstimmen, gerundet). Ändere die Prozente und beobachte die Sitze.</p>
      <div class="seat-inputs">${parties.map(([n, v]) => `<label><span>${n}</span><input class="input mono" type="number" step="0.1" min="0" name="p" data-name="${n}" value="${v}"></label>`).join("")}</div>
      <label class="check"><input type="checkbox" name="threshold" checked> Fünf-Prozent-Hürde anwenden</label>
      <div class="tool-out" data-out></div>
      <p class="muted small">Vereinfachung: 630 Sitze, ohne Grundmandatsklausel, Minderheitenregel (SSW) und Verteilung auf Landeslisten.</p></div>`;
  }
  if (id === "osi-game") return `<div class="tool" data-tool="osi-game"><p>Klicke die Schichten in der richtigen Reihenfolge – <strong>von Schicht 1 (unten) bis 7 (oben)</strong>.</p><div class="osi-game" data-board></div></div>`;
  if (id === "pomodoro") return `<div class="tool" data-tool="pomodoro"><div class="pomo-big"><span data-pomo-time>${fmtPomo()}</span><span class="muted" data-pomo-mode>${pomo.mode === "focus" ? "Fokus" : "Pause"}</span></div>
    <div class="btn-row"><button class="btn primary" data-action="pomo-toggle" data-pomo-btn>${pomo.running ? "Pausieren" : "Starten"}</button><button class="btn" data-action="pomo-reset">Zurücksetzen</button></div>
    <p class="muted small">25 Minuten konzentriert lernen, 5 Minuten Pause. Handy weg, eine Aufgabe, dann belohnen.</p></div>`;
  return "";
}

function ipToInt(ip) {
  const p = ip.trim().split(".");
  if (p.length !== 4 || p.some((x) => !/^\d{1,3}$/.test(x) || +x > 255)) return null;
  return p.reduce((a, x) => ((a << 8) | +x) >>> 0, 0) >>> 0;
}
const intToIp = (n) => [24, 16, 8, 0].map((s) => (n >>> s) & 255).join(".");
const bin32 = (n, prefix) => {
  const b = (n >>> 0).toString(2).padStart(32, "0");
  return [0, 8, 16, 24].map((o) => [...b.slice(o, o + 8)].map((c, i) => `<span class="${o + i < prefix ? "net" : "host"}">${c}</span>`).join("")).join(".");
};

function updateTool(el) {
  const kind = el.dataset.tool;
  if (kind === "subnet") {
    const ip = ipToInt(el.querySelector("[name=ip]").value);
    const prefix = Number(el.querySelector("[name=prefix]").value);
    const out = el.querySelector("[data-out]");
    if (ip === null || !(prefix >= 0 && prefix <= 32)) { out.innerHTML = `<p class="warn">Bitte eine gültige IPv4-Adresse (z. B. 192.168.1.10) und ein Präfix von 0 bis 32 eingeben.</p>`; return; }
    const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
    const net = (ip & mask) >>> 0;
    const bc = (net | (~mask >>> 0)) >>> 0;
    const hosts = prefix >= 31 ? (prefix === 31 ? 2 : 1) : 2 ** (32 - prefix) - 2;
    const first = prefix >= 31 ? net : net + 1;
    const last = prefix >= 31 ? bc : bc - 1;
    out.innerHTML = `<dl class="result-grid">
      <dt>Subnetzmaske</dt><dd class="mono">${intToIp(mask)}</dd>
      <dt>Netzadresse</dt><dd class="mono">${intToIp(net)}/${prefix}</dd>
      <dt>Broadcast</dt><dd class="mono">${intToIp(bc)}</dd>
      <dt>Erster Host</dt><dd class="mono">${intToIp(first)}</dd>
      <dt>Letzter Host</dt><dd class="mono">${intToIp(last)}</dd>
      <dt>Nutzbare Hosts</dt><dd class="mono">${hosts.toLocaleString("de-DE")} ${prefix < 31 ? `<span class="muted">= 2^${32 - prefix} − 2</span>` : ""}</dd></dl>
      <div class="bits"><div><span class="muted small">Adresse</span><code>${bin32(ip, prefix)}</code></div><div><span class="muted small">Maske</span><code>${bin32(mask, prefix)}</code></div><p class="small"><span class="net legend">Netzanteil</span> <span class="host legend">Hostanteil</span></p></div>`;
  }
  if (kind === "hex-db") {
    const raw = el.querySelector("[name=num]").value.trim().replace(/\s/g, "");
    let base = el.querySelector("[name=base]").value;
    let s = raw;
    if (base === "auto") {
      if (/^0x/i.test(s)) { base = 16; s = s.slice(2); } else if (/^0b/i.test(s)) { base = 2; s = s.slice(2); } else base = /[a-f]/i.test(s) ? 16 : 10;
    }
    base = Number(base);
    const valid = { 2: /^[01]+$/, 10: /^\d+$/, 16: /^[0-9a-f]+$/i }[base].test(s);
    const n = valid ? parseInt(s, base) : NaN;
    el.querySelector("[data-out-num]").innerHTML = Number.isSafeInteger(n)
      ? `<dl class="result-grid"><dt>Dezimal</dt><dd class="mono">${n}</dd><dt>Hexadezimal</dt><dd class="mono">0x${n.toString(16).toUpperCase()}</dd><dt>Binär</dt><dd class="mono">${n.toString(2).replace(/\B(?=(\d{4})+(?!\d))/g, " ")}</dd></dl>`
      : `<p class="warn">Ungültige Zahl für diese Basis.</p>`;
    const u1 = parseFloat(el.querySelector("[name=u1]").value), u2 = parseFloat(el.querySelector("[name=u2]").value);
    el.querySelector("[data-out-db]").innerHTML = u1 > 0 && u2 > 0
      ? `<dl class="result-grid"><dt>Spannung</dt><dd class="mono">20 · log₁₀(${u1}/${u2}) = ${(20 * Math.log10(u1 / u2)).toFixed(2)} dB</dd><dt>Leistung</dt><dd class="mono">10 · log₁₀(${u1}/${u2}) = ${(10 * Math.log10(u1 / u2)).toFixed(2)} dB</dd></dl>`
      : `<p class="warn">Beide Werte müssen größer als 0 sein.</p>`;
  }
  if (kind === "seats") {
    const useHurdle = el.querySelector("[name=threshold]").checked;
    const parties = $$("[name=p]", el).map((i) => ({ name: i.dataset.name, v: Math.max(0, parseFloat(i.value) || 0) }));
    const total = parties.reduce((a, p) => a + p.v, 0);
    const eligible = parties.filter((p) => p.name !== "Sonstige" && (!useHurdle || (total && (p.v / total) * 100 >= 5)));
    eligible.forEach((p) => (p.seats = 0));
    if (eligible.some((p) => p.v > 0)) {
      for (let k = 0; k < 630; k++) {
        let best = eligible[0];
        for (const p of eligible) if (p.v / (p.seats + 0.5) > best.v / (best.seats + 0.5)) best = p;
        best.seats++;
      }
    }
    const max = Math.max(1, ...eligible.map((p) => p.seats));
    const out = parties.map((p) => {
      const seats = eligible.includes(p) ? p.seats : 0;
      return `<div class="bar-row"><span>${esc(p.name)}</span><div class="bar"><i style="width:${(seats / max) * 100}%"></i></div><b class="mono">${seats}</b><span class="muted small">${total ? ((p.v / total) * 100).toFixed(1) : 0} %</span></div>`;
    }).join("");
    const coalition = eligible.filter((p) => ["CDU/CSU", "SPD"].includes(p.name)).reduce((a, p) => a + p.seats, 0);
    el.querySelector("[data-out]").innerHTML = `${out}<p class="small">Mehrheit: <b>316</b> von 630 Sitzen · CDU/CSU + SPD: <b class="${coalition >= 316 ? "ok" : "warn"}">${coalition}</b></p>`;
  }
}

function initOsiGame(el) {
  const names = ["Bitübertragung", "Sicherung", "Vermittlung", "Transport", "Sitzung", "Darstellung", "Anwendung"];
  el.dataset.next = "0";
  el.dataset.errors = "0";
  const board = el.querySelector("[data-board]");
  board.innerHTML = `<div class="osi-stack" data-stack></div><div class="osi-pool">${shuffle(names.map((n, i) => [n, i])).map(([n, i]) => `<button type="button" class="chip big" data-action="osi-pick" data-i="${i}">${n}</button>`).join("")}</div><p class="small" data-status>Welche Schicht ist Nr. 1?</p>`;
}

/* ---------- Pomodoro ---------- */
const pomo = { mode: "focus", remaining: 25 * 60, running: false, endAt: 0, timer: null };
function fmtPomo() { const r = Math.max(0, Math.round(pomo.remaining)); return `${String(Math.floor(r / 60)).padStart(2, "0")}:${String(r % 60).padStart(2, "0")}`; }
function pomoTick() {
  if (pomo.running) {
    pomo.remaining = (pomo.endAt - Date.now()) / 1000;
    if (pomo.remaining <= 0) {
      if (pomo.mode === "focus") { state.stats.pomodoros++; recordActivity(20); toast("⏱️ Fokuszeit geschafft! +20 XP – jetzt 5 Minuten Pause.", "ok"); }
      else toast("Pause vorbei – weiter geht's!");
      pomo.mode = pomo.mode === "focus" ? "break" : "focus";
      pomo.remaining = (pomo.mode === "focus" ? 25 : 5) * 60;
      pomo.endAt = Date.now() + pomo.remaining * 1000;
    }
  }
  $$("[data-pomo-time]").forEach((e) => (e.textContent = fmtPomo()));
  $$("[data-pomo-mode]").forEach((e) => (e.textContent = pomo.mode === "focus" ? "Fokus" : "Pause"));
  $$("[data-pomo-btn]").forEach((e) => (e.textContent = pomo.running ? "Pausieren" : "Starten"));
  $$(".pomo-mini").forEach((e) => e.classList.toggle("running", pomo.running));
}

/* ---------- Sitzungen (Prüfung, Training, Karten) ---------- */
let exam = null;
let training = null;
let cardSession = null;

/* ---------- Ansichten ---------- */
const routes = [
  [/^$/, viewHome],
  [/^fach\/(\w+)$/, viewSubject],
  [/^fach\/(\w+)\/level\/(\d+)(?:\/(\d))?$/, viewLevel],
  [/^fach\/(\w+)\/karten$/, (sid) => viewCards(sid)],
  [/^karten$/, () => viewCards(null)],
  [/^fach\/(\w+)\/pruefung$/, viewExam],
  [/^fach\/(\w+)\/spickzettel$/, viewCheatsheet],
  [/^training$/, viewTraining],
  [/^wiederholen$/, viewMissed],
  [/^glossar$/, viewGlossary],
  [/^werkzeuge$/, viewTools],
  [/^lernplan$/, viewPlan],
  [/^lernen$/, viewMethod],
  [/^fortschritt$/, viewProgress]
];

function render() {
  const path = location.hash.replace(/^#\/?/, "").split("?")[0].replace(/\/$/, "");
  const app = $("#app");
  let html = null;
  for (const [re, fn] of routes) {
    const m = path.match(re);
    if (m) {
      if (m[1] && /^fach/.test(path) && !subjects[m[1]]) break;
      html = fn(...m.slice(1));
      break;
    }
  }
  if (html === null) html = `<div class="card empty"><h1>Seite nicht gefunden</h1><p><a class="btn primary" href="#/">Zur Übersicht</a></p></div>`;
  app.innerHTML = html;
  if (path && !/pruefung|training/.test(path)) state.lastVisit = "#/" + path;
  save();
  $$("[data-tool]", app).forEach((el) => (el.dataset.tool === "osi-game" ? initOsiGame(el) : updateTool(el)));
  const sid = path.match(/^fach\/(\w+)/)?.[1];
  document.body.dataset.subject = sid || "";
  updateChrome(path);
  document.body.classList.remove("nav-open");
  if (!window.__noScroll) window.scrollTo({ top: 0 });
  window.__noScroll = false;
  const h1 = $("h1", app);
  document.title = `${h1 ? h1.textContent.trim() + " – " : ""}PrüfungsPilot`;
  if (exam && path === `fach/${exam.sid}/pruefung` && !exam.done) startExamTimer();
}

function updateChrome(path = location.hash.replace(/^#\/?/, "").split("?")[0]) {
  const nav = $("#nav");
  if (!nav) return;
  const due = dueCards().length;
  const missed = Object.keys(state.missed).length;
  const item = (href, icon, label, badge = "") => {
    const active = href === "#/" ? path === "" : path.startsWith(href.slice(2));
    return `<a class="nav-item ${active ? "active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}><span class="nav-ico" aria-hidden="true">${icon}</span><span>${label}</span>${badge !== "" && badge !== 0 ? `<span class="nav-badge">${badge}</span>` : ""}</a>`;
  };
  nav.innerHTML = `
    ${item("#/", "🏠", "Übersicht")}
    <p class="nav-label">Fächer</p>
    ${SUBJECT_IDS.map((id) => item(`#/fach/${id}`, subjects[id].icon, subjects[id].shortTitle, `${subjectProgress(id)}%`)).join("")}
    <p class="nav-label">Üben</p>
    ${item("#/training", "🔀", "Gemischtes Training")}
    ${item("#/karten", "🗂️", "Karteikarten", due)}
    ${item("#/wiederholen", "🔁", "Fehler wiederholen", missed)}
    <p class="nav-label">Hilfen</p>
    ${item("#/lernen", "🧠", "Richtig lernen")}
    ${item("#/lernplan", "📅", "Lernplan")}
    ${item("#/glossar", "📖", "Glossar")}
    ${item("#/werkzeuge", "🛠️", "Werkzeuge")}
    ${item("#/fortschritt", "📈", "Fortschritt")}`;
  const r = rank(state.xp);
  $("#hud").innerHTML = `<span class="hud-chip" title="Lernserie">🔥 ${currentStreak()}</span><span class="hud-chip" title="Erfahrungspunkte – ${r.name}">⚡ ${state.xp} XP</span>`;
}

/* --- Übersicht --- */
function viewHome() {
  const t = localDate();
  const r = rank(state.xp);
  const tip = studyTips[new Date().getDate() % studyTips.length];
  const cont = state.lastVisit && state.lastVisit !== "#/" ? state.lastVisit : null;
  const firstNext = SUBJECT_IDS.map((id) => [id, nextLevel(id)]).find(([, n]) => n !== null);
  const due = dueCards().length;
  const missed = Object.keys(state.missed).length;
  const countdowns = SUBJECT_IDS.filter((id) => state.settings.examDates[id]).map((id) => {
    const d = daysBetween(t, state.settings.examDates[id]);
    return `<div class="countdown"><b>${d >= 0 ? d : "–"}</b><span>Tage bis ${esc(subjects[id].shortTitle)}</span></div>`;
  }).join("");
  return `
  <section class="hero">
    <div>
      <p class="eyebrow">${greeting()}</p>
      <h1>Klar lernen. <span class="grad">Sicher bestehen.</span></h1>
      <p class="lead">Dein Lernpfad für <strong>Politik</strong> und <strong>Netzwerktechnik</strong>: kurze Lektionen mit Grafiken und Videos, aktive Übungen, Karteikarten mit Wiederholungsplan und echte Prüfungssimulationen.</p>
      <div class="btn-row">
        ${cont ? `<a class="btn primary" href="${esc(cont)}">▶ Weiterlernen</a>` : firstNext ? `<a class="btn primary" href="#/fach/${firstNext[0]}/level/${firstNext[1]}/1">▶ Jetzt starten</a>` : `<a class="btn primary" href="#/training">▶ Training starten</a>`}
        <a class="btn" href="#/lernen">So lernst du hier</a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat"><b>${currentStreak()}</b><span>🔥 Tage Serie</span></div>
      <div class="stat"><b>${state.xp}</b><span>⚡ XP · ${esc(r.name)}</span></div>
      <a class="stat link" href="#/karten"><b>${due}</b><span>🗂️ Karten fällig</span></a>
      <a class="stat link" href="#/wiederholen"><b>${missed}</b><span>🔁 Fehler offen</span></a>
      ${countdowns}
    </div>
  </section>

  <h2 class="section-title">Deine Fächer</h2>
  <div class="grid two">${SUBJECT_IDS.map(subjectCard).join("")}</div>

  <div class="grid two">
    <section class="card">
      <div class="section-head"><h2>Heute empfohlen</h2></div>
      <ol class="todo">
        ${due ? `<li><a href="#/karten">${due} Karteikarten wiederholen</a> <span class="muted small">≈ ${Math.ceil(due * 0.3)} Min.</span></li>` : ""}
        ${missed ? `<li><a href="#/wiederholen">${missed} falsch beantwortete Fragen nacharbeiten</a></li>` : ""}
        ${SUBJECT_IDS.map((id) => { const n = nextLevel(id); return n === null ? "" : `<li><a href="#/fach/${id}/level/${n}/1">${esc(subjects[id].shortTitle)} · Level ${n + 1}: ${esc(subjects[id].levels[n].title)}</a></li>`; }).join("")}
        <li><a href="#/training">10 gemischte Fragen (Interleaving)</a></li>
      </ol>
    </section>
    <section class="card tip-card">
      <p class="eyebrow">Lerntipp des Tages</p>
      <h3>${esc(tip.title)}</h3>
      <p>${esc(tip.text)}</p>
      <p class="muted small">Hier im Einsatz: ${esc(tip.where)}</p>
      <a class="link-arrow" href="#/lernen">Alle Lernstrategien →</a>
    </section>
  </div>

  <section class="card">
    <div class="section-head"><h2>Deine Lernaktivität</h2><a class="link-arrow" href="#/fortschritt">Details →</a></div>
    ${heatmap()}
  </section>`;
}
function greeting() {
  const h = new Date().getHours();
  return h < 11 ? "Guten Morgen 👋" : h < 18 ? "Hallo 👋" : "Guten Abend 👋";
}
function ring(p, label = "") {
  const c = 2 * Math.PI * 26;
  return `<svg class="ring" viewBox="0 0 64 64" aria-label="${p} Prozent ${esc(label)}"><circle cx="32" cy="32" r="26" class="ring-bg"/><circle cx="32" cy="32" r="26" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p / 100)}"/><text x="32" y="37" text-anchor="middle">${p}%</text></svg>`;
}
function subjectCard(id) {
  const s = subjects[id];
  const n = nextLevel(id);
  return `<a class="card subject-card theme-${id}" href="#/fach/${id}">
    <div class="subject-top"><span class="subject-icon">${esc(s.icon)}</span>${ring(subjectProgress(id), s.title)}</div>
    <h3>${esc(s.title)}</h3>
    <p class="muted">${esc(s.description)}</p>
    <div class="level-dots">${s.levels.map((_, i) => `<span class="${isCompleted(id, i) ? "done" : isUnlocked(id, i) ? "open" : ""}"></span>`).join("")}</div>
    <p class="small">${n === null ? (sub(id).examPassed ? "🎓 Prüfung bestanden" : "✅ Alle Level geschafft – jetzt Prüfung simulieren") : `Als Nächstes: Level ${n + 1} · ${esc(s.levels[n].title)}`}</p>
  </a>`;
}
function heatmap() {
  const t = localDate();
  const cells = [];
  const offset = (new Date().getDay() + 6) % 7;
  const start = addDays(t, -77 - offset);
  for (let i = 0; i <= 77 + offset; i++) {
    const d = addDays(start, i);
    const v = state.activity[d] || 0;
    const lvl = v === 0 ? 0 : v < 5 ? 1 : v < 15 ? 2 : v < 30 ? 3 : 4;
    cells.push(`<i class="h${lvl}" title="${fmtDate(d)}: ${v} Aktionen"></i>`);
  }
  const days = Object.keys(state.activity).length;
  return `<div class="heatmap" role="img" aria-label="Aktivität der letzten 12 Wochen">${cells.join("")}</div><p class="muted small">${days} Lerntage insgesamt · längste Serie zählt jeden Tag mit mindestens einer Übung.</p>`;
}

/* --- Fach --- */
function viewSubject(sid) {
  const s = subjects[sid];
  const st = sub(sid);
  const allDone = st.completed.length === s.levels.length;
  return `
  <nav class="crumbs"><a href="#/">Übersicht</a> / <span>${esc(s.shortTitle)}</span></nav>
  <header class="page-head theme-${sid}">
    <span class="subject-icon xl">${esc(s.icon)}</span>
    <div><h1>${esc(s.title)}</h1><p class="lead">${esc(s.description)}</p></div>
    ${ring(subjectProgress(sid), s.title)}
  </header>
  <div class="action-tiles">
    <a class="tile" href="#/fach/${sid}/karten"><span>🗂️</span><b>Karteikarten</b><small>${dueCards(sid).length} fällig</small></a>
    <a class="tile" href="#/fach/${sid}/pruefung"><span>🎓</span><b>Prüfung simulieren</b><small>${st.examBest ? `Bestwert ${st.examBest} %` : allDone || state.settings.freeMode ? "bereit" : "empfohlen nach allen Leveln"}</small></a>
    <a class="tile" href="#/fach/${sid}/spickzettel"><span>📝</span><b>Spickzettel</b><small>zum Ausdrucken</small></a>
    <a class="tile" href="#/training?fach=${sid}" data-action="train-subject" data-sid="${sid}"><span>🔀</span><b>Training</b><small>gemischte Fragen</small></a>
  </div>
  <h2 class="section-title">Lernpfad</h2>
  <ol class="path">
    ${s.levels.map((l, i) => {
      const open = isUnlocked(sid, i), done = isCompleted(sid, i);
      const best = st.best[i] || 0;
      return `<li class="path-step ${done ? "done" : open ? "open" : "locked"}">
        <span class="path-node">${done ? "✓" : open ? i + 1 : "🔒"}</span>
        <div class="card path-card">
          <div class="section-head"><h3>Level ${i + 1}: ${esc(l.title)}</h3>${done ? starHtml(stars(best)) : ""}</div>
          <p class="muted">${esc(l.goal)}</p>
          <p class="small meta">${l.videos.length ? "🎬 Video · " : ""}${l.diagram ? "🖼️ Grafik · " : ""}${l.tasks.length} Aufgaben · ${l.test.length} Testfragen${l.tool ? ` · ${TOOLS[l.tool].icon} ${esc(TOOLS[l.tool].title)}` : ""}</p>
          ${open ? `<a class="btn ${done ? "" : "primary"}" href="#/fach/${sid}/level/${i}/1">${done ? "Wiederholen" : best ? "Fortsetzen" : "Level starten"}</a>` : `<p class="small muted">Bestehe Level ${i} (mind. 2/3 richtig), um dieses Level freizuschalten – oder aktiviere den freien Modus unter <a href="#/fortschritt">Fortschritt</a>.</p>`}
        </div></li>`;
    }).join("")}
    <li class="path-step ${allDone ? "open" : "locked"} final">
      <span class="path-node">🎓</span>
      <div class="card path-card"><h3>Abschlussprüfung</h3><p class="muted">15 gemischte Fragen, 20 Minuten. Bestanden ab 75 %.</p><a class="btn ${allDone ? "primary" : ""}" href="#/fach/${sid}/pruefung">Zur Prüfung</a></div>
    </li>
  </ol>`;
}

/* --- Level / Lektion --- */
const STEPS = ["Vorab-Frage", "Verstehen", "Anwenden", "Level-Check", "Zusammenfassung"];
function viewLevel(sid, nStr, stepStr) {
  const s = subjects[sid];
  const n = Number(nStr);
  const l = s.levels[n];
  if (!l) return null;
  if (!isUnlocked(sid, n)) return `<div class="card empty"><h1>🔒 Level ${n + 1} ist noch gesperrt</h1><p>Bestehe zuerst Level ${n}. Du kannst unter <a href="#/fortschritt">Fortschritt</a> auch den freien Modus aktivieren.</p><a class="btn primary" href="#/fach/${sid}">Zum Lernpfad</a></div>`;
  const step = Math.min(5, Math.max(1, Number(stepStr) || 1));
  const base = `#/fach/${sid}/level/${n}`;
  const stepper = `<ol class="stepper">${STEPS.map((t, i) => `<li class="${i + 1 === step ? "current" : i + 1 < step ? "past" : ""}"><a href="${base}/${i + 1}"><span>${i + 1}</span>${t}</a></li>`).join("")}</ol>`;
  const nav = (prev, next, nextLabel = "Weiter") => `<div class="step-nav">${prev ? `<a class="btn" href="${base}/${step - 1}">← Zurück</a>` : "<span></span>"}${next ? `<a class="btn primary" href="${base}/${step + 1}">${nextLabel} →</a>` : ""}</div>`;
  let body = "";

  if (step === 1) {
    body = `<section class="card">
      <p class="eyebrow">Schritt 1 · Aktivieren</p>
      <h2>Was weißt du schon?</h2>
      <p class="muted">Rate ruhig! Wer sich vor dem Lernen kurz an einer Frage versucht, merkt sich die Erklärung danach deutlich besser (Pretesting-Effekt).</p>
      <div class="goal"><b>🎯 Lernziel:</b> ${esc(l.goal)}</div>
      ${l.practice ? `<form class="quiz" data-form="practice" data-sid="${sid}" data-level="${n}">${renderQuestion(l.practice, "?")}<div class="btn-row"><button class="btn primary" type="submit">Antwort prüfen</button></div></form>` : ""}
    </section>${nav(false, true, "Zur Erklärung")}`;
  }

  if (step === 2) {
    body = `
    <section class="card prose">
      <p class="eyebrow">Schritt 2 · Verstehen</p>
      <h2>${esc(l.title)}</h2>
      ${l.explanation.map((p) => `<p>${esc(p)}</p>`).join("")}
    </section>
    ${l.diagram ? `<figure class="card diagram">${renderDiagram(l.diagram)}<figcaption class="muted small">Grafik: Präge dir die Struktur ein – in der Prüfung hilft es, sie kurz zu skizzieren.</figcaption></figure>` : ""}
    ${videoBlock(l.videos, `${sid}-${n}`)}
    <div class="grid two">
      ${l.example ? `<section class="card callout example"><h3>💡 Beispiel aus dem Alltag</h3><p>${esc(l.example)}</p></section>` : ""}
      ${l.mnemonic ? `<section class="card callout mnemonic"><h3>🧠 Eselsbrücke</h3><p>${esc(l.mnemonic)}</p></section>` : ""}
    </div>
    ${l.keyTerms?.length ? `<section class="card"><h3>📖 Fachbegriffe</h3><dl class="terms">${l.keyTerms.map((k) => `<div><dt>${esc(k.term)}</dt><dd>${esc(k.def)}</dd></div>`).join("")}</dl><p class="muted small">Alle Begriffe landen automatisch in deinen <a href="#/fach/${sid}/karten">Karteikarten</a>.</p></section>` : ""}
    ${l.mistakes?.length ? `<section class="card callout warn-box"><h3>⚠️ Typische Fehler</h3><ul>${l.mistakes.map((m) => `<li>${esc(m)}</li>`).join("")}</ul></section>` : ""}
    ${l.supplement ? `<section class="card callout supplement"><h3>➕ Ergänzung / aktueller Stand</h3><p>${esc(l.supplement)}</p></section>` : ""}
    ${l.source ? `<p class="muted small source">Quelle im Unterricht: ${esc(l.source)}</p>` : ""}
    ${nav(true, true, "Jetzt anwenden")}`;
  }

  if (step === 3) {
    body = `<section class="card"><p class="eyebrow">Schritt 3 · Anwenden</p><h2>Übe aktiv</h2><p class="muted">Erst selbst lösen, dann prüfen. Bei „Erkläre es selbst“ vergleichst du deine Antwort mit der Musterlösung (Feynman-Methode).</p></section>
    ${l.tasks.map((t) => taskHtml(t)).join("")}
    ${l.tool ? `<section class="card"><h3>${TOOLS[l.tool].icon} Werkzeug: ${esc(TOOLS[l.tool].title)}</h3>${toolHtml(l.tool)}</section>` : ""}
    ${!l.tasks.length && !l.tool ? `<section class="card"><p>Für dieses Level gibt es keine zusätzlichen Aufgaben. Weiter zum Level-Check!</p></section>` : ""}
    ${nav(true, true, "Zum Level-Check")}`;
  }

  if (step === 4) {
    const best = sub(sid).best[n];
    body = `<section class="card"><p class="eyebrow">Schritt 4 · Level-Check</p><h2>${l.test.length} Fragen</h2>
      <p class="muted">Bestanden ab 2/3 richtig. ★ ab 67 %, ★★ ab 85 %, ★★★ bei 100 %. ${best !== undefined ? `Dein Bestwert: <b>${best} %</b> ${starHtml(stars(best))}` : ""}</p>
      <form class="quiz" data-form="level" data-sid="${sid}" data-level="${n}">
        ${l.test.map((q, i) => renderQuestion(q, i + 1, { shuffleOptions: true })).join("")}
        <div class="btn-row"><button class="btn primary" type="submit">Auswerten</button></div>
        <div data-result></div>
      </form></section>${nav(true, false)}`;
  }

  if (step === 5) {
    const best = sub(sid).best[n];
    const next = n + 1 < s.levels.length ? n + 1 : null;
    body = `<section class="card"><p class="eyebrow">Schritt 5 · Festigen</p><h2>Das Wichtigste in Kürze</h2>
      <ul class="recap">${l.recap.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      ${best !== undefined ? `<p>Level-Check: <b>${best} %</b> ${starHtml(stars(best))}</p>` : `<p class="warn">Du hast den Level-Check noch nicht gemacht.</p>`}
      <div class="callout"><b>Abruf-Tipp:</b> Schließ kurz die Augen und erkläre die Punkte oben in eigenen Worten. Morgen kommen die Begriffe als Karteikarten wieder.</div>
      <div class="btn-row">
        ${next !== null && isUnlocked(sid, next) ? `<a class="btn primary" href="#/fach/${sid}/level/${next}/1">Nächstes Level →</a>` : next === null ? `<a class="btn primary" href="#/fach/${sid}/pruefung">Zur Abschlussprüfung 🎓</a>` : `<a class="btn primary" href="${base}/4">Level-Check machen</a>`}
        <a class="btn" href="#/fach/${sid}/karten">Karteikarten üben</a>
        <a class="btn" href="#/fach/${sid}">Zum Lernpfad</a>
      </div></section>${nav(true, false)}`;
  }

  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <a href="#/fach/${sid}">${esc(s.shortTitle)}</a> / <span>Level ${n + 1}</span></nav>
    <header class="page-head slim theme-${sid}"><div><p class="eyebrow">Level ${n + 1} von ${s.levels.length}</p><h1>${esc(l.title)}</h1></div></header>
    ${stepper}${body}`;
}

function taskHtml(t) {
  if (t.type === "table") {
    return `<section class="card"><h3>📋 ${esc(t.title)}</h3><p>${esc(t.prompt)}</p>
      <form class="quiz" data-form="task-table" data-task="${esc(t.id)}"><div class="table-q">${t.rows.map((r, i) => `<label class="table-row"><span>${esc(r.label)}</span><input class="input" name="r${i}" autocomplete="off"><em class="solution" hidden>${esc(r.expected)}</em></label>`).join("")}</div>
      <div class="btn-row"><button class="btn primary" type="submit">Prüfen</button><button class="btn" type="button" data-action="show-solution">Lösung zeigen</button></div><div data-result></div></form></section>`;
  }
  if (t.type === "writing") {
    return `<section class="card"><h3>✍️ ${esc(t.title)}</h3><p>${esc(t.prompt)}</p>
      <form data-form="task-writing"><textarea class="input" rows="5" placeholder="Schreibe deine Antwort in eigenen Worten …"></textarea>
      <div class="btn-row"><button class="btn primary" type="submit">Mit Musterlösung vergleichen</button></div>
      <div class="model" hidden><h4>Musterlösung</h4><p>${esc(t.modelAnswer)}</p><h4>Hast du an alles gedacht?</h4>
      <ul class="checklist">${(t.criteria || []).map((c) => `<li><label class="check"><input type="checkbox"> ${esc(c)}</label></li>`).join("")}</ul></div></form></section>`;
  }
  return "";
}
const TASKS = new Map();
Object.values(subjects).forEach((s) => s.levels.forEach((l) => l.tasks.forEach((t) => TASKS.set(t.id, t))));

/* --- Karteikarten --- */
function viewCards(sid) {
  const title = sid ? `Karteikarten · ${subjects[sid].shortTitle}` : "Karteikarten";
  const pool = CARDS.filter((c) => (!sid || c.sid === sid) && cardAvailable(c));
  const boxes = [0, 1, 2, 3, 4, 5].map((b) => pool.filter((c) => (state.cards[c.id]?.box || 0) === b).length);
  if (!cardSession || cardSession.sid !== sid) cardSession = { sid, queue: shuffle(dueCards(sid)).slice(0, 25).map((c) => c.id), flipped: false, done: 0, known: 0 };
  const cur = CARDS.find((c) => c.id === cardSession.queue[0]);
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / ${sid ? `<a href="#/fach/${sid}">${esc(subjects[sid].shortTitle)}</a> / ` : ""}<span>Karteikarten</span></nav>
  <header class="page-head slim"><div><h1>${esc(title)}</h1><p class="muted">Leitner-System: Gewusste Karten wandern ein Fach weiter und kommen seltener (1 → 3 → 7 → 14 → 30 Tage). Nicht gewusste starten wieder in Fach 1.</p></div></header>
  ${!sid ? `<div class="chips">${SUBJECT_IDS.map((id) => `<a class="chip" href="#/fach/${id}/karten">${esc(subjects[id].icon)} ${esc(subjects[id].shortTitle)}</a>`).join("")}</div>` : ""}
  <div class="leitner">${boxes.map((b, i) => `<div class="lbox"><b>${b}</b><span>${i === 0 ? "neu" : `Fach ${i}`}</span></div>`).join("")}</div>
  ${cur ? `<div class="flashcard ${cardSession.flipped ? "flipped" : ""}" data-action="flip" tabindex="0" role="button" aria-label="Karte umdrehen">
      <div class="fc-inner"><div class="fc-face fc-front"><span class="eyebrow">${esc(subjects[cur.sid].shortTitle)} · Frage</span><p>${esc(cur.front)}</p><span class="muted small">Antwort im Kopf formulieren – dann tippen/Leertaste zum Umdrehen</span></div>
      <div class="fc-face fc-back"><span class="eyebrow">Antwort</span><p>${esc(cur.back)}</p></div></div></div>
      <div class="btn-row center">${cardSession.flipped ? `<button class="btn bad" data-action="card" data-known="0">✗ Nicht gewusst</button><button class="btn good" data-action="card" data-known="1">✓ Gewusst</button>` : `<button class="btn primary" data-action="flip">Umdrehen</button>`}</div>
      <p class="center muted small">Noch ${cardSession.queue.length} Karte(n) in dieser Runde · Tastatur: Leertaste, 1 = nicht gewusst, 2 = gewusst</p>`
    : `<section class="card empty"><h2>🎉 Alles erledigt!</h2><p>${cardSession.done ? `Du hast ${cardSession.done} Karten wiederholt (${cardSession.known} gewusst).` : "Gerade sind keine Karten fällig."} Komm morgen wieder – verteiltes Wiederholen schlägt Pauken.</p>
      <div class="btn-row center"><button class="btn" data-action="cards-all">Trotzdem alle Karten üben</button><a class="btn primary" href="#/training">Training starten</a></div></section>`}`;
}

/* --- Prüfung --- */
function viewExam(sid) {
  const s = subjects[sid];
  const st = sub(sid);
  const head = `<nav class="crumbs"><a href="#/">Übersicht</a> / <a href="#/fach/${sid}">${esc(s.shortTitle)}</a> / <span>Prüfung</span></nav>`;
  if (exam && exam.sid === sid && !exam.done) {
    return `${head}<header class="page-head slim theme-${sid}"><div><h1>Prüfungssimulation ${esc(s.shortTitle)}</h1><p class="muted">Beantworte alle Fragen. Keine Rückmeldung bis zur Abgabe.</p></div><div class="timer" data-timer>--:--</div></header>
      <form class="quiz" data-form="exam" data-sid="${sid}">${exam.questions.map((q, i) => renderQuestion(q, i + 1, { shuffleOptions: true })).join("")}
      <div class="btn-row"><button class="btn primary" type="submit">Prüfung abgeben</button><button class="btn" type="button" data-action="exam-cancel">Abbrechen</button></div></form>`;
  }
  if (exam && exam.sid === sid && exam.done) {
    const r = exam.result;
    const pass = r.score >= 75;
    return `${head}<section class="card result-card ${pass ? "pass" : "fail"}">
      <p class="eyebrow">Ergebnis</p><h1>${pass ? "🎓 Bestanden!" : "Noch nicht bestanden"}</h1>
      <div class="big-score">${r.score}<small>%</small></div><p>${r.correct} von ${r.total} richtig · Zeit: ${r.time}${r.auto ? " (Zeit abgelaufen)" : ""}</p>
      <h3>Nach Themen</h3>
      ${Object.entries(r.byLevel).map(([k, v]) => `<div class="bar-row"><span>${k === "exam" ? "Prüfungsfragen" : esc(s.levels[k].title)}</span><div class="bar"><i style="width:${pct(v.c, v.t)}%"></i></div><b>${v.c}/${v.t}</b>${k !== "exam" && v.c < v.t ? `<a class="small" href="#/fach/${sid}/level/${k}/2">wiederholen</a>` : "<span></span>"}</div>`).join("")}
      <div class="btn-row"><button class="btn primary" data-action="exam-start" data-sid="${sid}">Neue Prüfung</button>${Object.keys(state.missed).length ? `<a class="btn" href="#/wiederholen">Fehler wiederholen</a>` : ""}<a class="btn" href="#/fach/${sid}">Zum Lernpfad</a></div></section>
      <h2 class="section-title">Auswertung</h2><form class="quiz review" data-review>${exam.questions.map((q, i) => renderQuestion(q, i + 1)).join("")}</form>`;
  }
  const total = s.exam.length + s.levels.reduce((a, l) => a + l.test.length, 0);
  return `${head}<header class="page-head theme-${sid}"><span class="subject-icon xl">🎓</span><div><h1>Prüfungssimulation: ${esc(s.title)}</h1><p class="lead">Wie in der echten Arbeit: 15 zufällige Fragen aus allen Leveln (Pool: ${total} Fragen), 20 Minuten, Rückmeldung erst am Ende. Bestanden ab 75 %.</p></div></header>
    <div class="grid two"><section class="card"><h3>Vorbereitung</h3><ul class="checklist plain"><li>${st.completed.length === s.levels.length ? "✅" : "⬜"} Alle ${s.levels.length} Level bestanden (${st.completed.length}/${s.levels.length})</li><li>${dueCards(sid).length ? "⬜" : "✅"} Keine fälligen Karteikarten</li><li>${Object.values(state.missed).some((m) => m.sid === sid) ? "⬜" : "✅"} Keine offenen Fehler</li></ul>
    <button class="btn primary big" data-action="exam-start" data-sid="${sid}">Prüfung starten (20 Min.)</button></section>
    <section class="card"><h3>Bisherige Versuche</h3>${st.examHistory.length ? `<div class="history">${st.examHistory.slice(-10).map((h) => `<div class="hist-bar ${h.score >= 75 ? "pass" : ""}" style="height:${Math.max(6, h.score)}%" title="${fmtDate(h.date)}: ${h.score} %"><span>${h.score}</span></div>`).join("")}</div><p class="small">Bestwert: <b>${st.examBest} %</b></p>` : `<p class="muted">Noch keine Versuche.</p>`}</section></div>`;
}
function startExam(sid) {
  const s = subjects[sid];
  const pool = [...s.exam, ...s.levels.flatMap((l) => l.test)];
  exam = { sid, questions: shuffle(pool).slice(0, 15), start: Date.now(), endAt: Date.now() + 20 * 60 * 1000, done: false };
  location.hash = `#/fach/${sid}/pruefung`;
  render();
}
let examTimer = null;
function startExamTimer() {
  clearInterval(examTimer);
  const tick = () => {
    const el = $("[data-timer]");
    if (!exam || exam.done || !el) { clearInterval(examTimer); return; }
    const r = Math.max(0, Math.round((exam.endAt - Date.now()) / 1000));
    el.textContent = `${String(Math.floor(r / 60)).padStart(2, "0")}:${String(r % 60).padStart(2, "0")}`;
    el.classList.toggle("urgent", r < 120);
    if (r <= 0) { clearInterval(examTimer); submitExam($('[data-form="exam"]'), true); }
  };
  tick();
  examTimer = setInterval(tick, 1000);
}
function submitExam(form, auto = false) {
  if (!form || !exam) return;
  const answers = {};
  let correct = 0;
  const byLevel = {};
  exam.questions.forEach((q) => {
    const ok = gradeQuestion(q, form);
    answers[q.id] = ok;
    if (ok) correct++;
    trackAnswer(q, ok);
    const lv = questionIndex.get(q.id)?.level ?? "exam";
    byLevel[lv] = byLevel[lv] || { c: 0, t: 0 };
    byLevel[lv].t++;
    if (ok) byLevel[lv].c++;
  });
  const values = new FormData(form);
  const secs = Math.round((Math.min(Date.now(), exam.endAt) - exam.start) / 1000);
  const score = pct(correct, exam.questions.length);
  exam.done = true;
  exam.values = values;
  exam.result = { score, correct, total: exam.questions.length, byLevel, auto, time: `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")} Min.` };
  const st = sub(exam.sid);
  st.examHistory.push({ date: localDate(), score });
  st.examBest = Math.max(st.examBest, score);
  if (score >= 75) st.examPassed = true;
  recordActivity(correct * 5 + (score >= 75 ? 100 : 0));
  render();
  const review = $("[data-review]");
  if (review) {
    for (const [k, v] of values.entries()) {
      review.querySelectorAll(`[name="${CSS.escape(k)}"]`).forEach((inp) => { if (inp.type === "radio") inp.checked = inp.value === v; else inp.value = v; });
    }
    exam.questions.forEach((q) => showFeedback(review, q, answers[q.id]));
  }
}

/* --- Training --- */
function viewTraining() {
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  if (!training) {
    const chosen = params.get("fach");
    return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Training</span></nav>
    <header class="page-head slim"><div><h1>🔀 Gemischtes Training</h1><p class="lead">Fragen aus verschiedenen Leveln gemischt – du musst jedes Mal selbst erkennen, welches Wissen gefragt ist (Interleaving). Sofortige Rückmeldung nach jeder Frage.</p></div></header>
    <section class="card"><form data-form="training-setup">
      <fieldset class="plain"><legend>Fächer</legend>${SUBJECT_IDS.map((id) => `<label class="check"><input type="checkbox" name="sid" value="${id}" ${!chosen || chosen === id ? "checked" : ""}> ${esc(subjects[id].icon)} ${esc(subjects[id].title)}</label>`).join("")}</fieldset>
      <fieldset class="plain"><legend>Anzahl Fragen</legend><div class="chips">${[5, 10, 20].map((n) => `<label class="chip"><input type="radio" name="count" value="${n}" ${n === 10 ? "checked" : ""}> ${n}</label>`).join("")}</div></fieldset>
      <label class="check"><input type="checkbox" name="all"> Auch Fragen aus noch gesperrten Leveln</label>
      <div class="btn-row"><button class="btn primary big" type="submit">Training starten</button></div></form></section>`;
  }
  const q = training.queue[training.idx];
  if (!q) {
    const p = pct(training.correct, training.queue.length);
    const done = training;
    training = null;
    return `<section class="card result-card ${p >= 75 ? "pass" : ""}"><p class="eyebrow">Training beendet</p><h1>${p >= 90 ? "Stark! 💪" : p >= 66 ? "Gut gemacht 👍" : "Dranbleiben! 🌱"}</h1><div class="big-score">${done.correct}<small>/${done.queue.length}</small></div>
      <p>${done.mode === "missed" ? "Richtig beantwortete Fragen wurden aus deiner Fehlerliste entfernt." : "Falsche Antworten findest du jetzt unter „Fehler wiederholen“."}</p>
      <div class="btn-row center"><a class="btn primary" href="#/training">Neue Runde</a>${Object.keys(state.missed).length ? `<a class="btn" href="#/wiederholen">Fehler wiederholen</a>` : ""}<a class="btn" href="#/">Übersicht</a></div></section>`;
  }
  const ref = questionIndex.get(q.id);
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>${training.mode === "missed" ? "Fehler wiederholen" : "Training"}</span></nav>
  <div class="progress-line"><i style="width:${pct(training.idx, training.queue.length)}%"></i></div>
  <p class="muted small">Frage ${training.idx + 1} von ${training.queue.length} · ${esc(subjects[ref.sid].shortTitle)}${ref.level !== "exam" ? ` · Level ${ref.level + 1}` : " · Prüfungsfrage"} · ${training.correct} richtig</p>
  <section class="card"><form class="quiz" data-form="training">${renderQuestion(q, training.idx + 1, { shuffleOptions: true })}
  <div class="btn-row"><button class="btn primary" type="submit" data-check>Prüfen</button><button class="btn primary" type="button" data-action="train-next" hidden>Weiter →</button><button class="btn" type="button" data-action="train-quit">Beenden</button></div></form></section>`;
}
function startTraining(ids, mode = "mixed") {
  training = { queue: ids.map((id) => questionIndex.get(id).q), idx: 0, correct: 0, mode, answered: false };
  if (location.hash !== "#/training") location.hash = "#/training";
  else render();
}

/* --- Fehler --- */
function viewMissed() {
  const entries = Object.entries(state.missed).filter(([id]) => questionIndex.has(id)).sort((a, b) => b[1].count - a[1].count);
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Fehler wiederholen</span></nav>
  <header class="page-head slim"><div><h1>🔁 Fehler wiederholen</h1><p class="lead">Jede falsch beantwortete Frage landet hier. Beantwortest du sie im Training richtig, verschwindet sie. Gezielt Fehler nacharbeiten ist die effizienteste Lernzeit.</p></div></header>
  ${entries.length ? `<div class="btn-row"><button class="btn primary big" data-action="train-missed">Alle ${entries.length} Fehler üben</button></div>
  <div class="list">${entries.map(([id, m]) => { const { q } = questionIndex.get(id); return `<div class="card list-item"><div><p class="small muted">${esc(subjects[m.sid].shortTitle)} · ${m.level === "exam" ? "Prüfungsfrage" : `Level ${m.level + 1}`} · ${m.count}× falsch</p><p><b>${esc(q.prompt)}</b></p><details><summary>Lösung anzeigen</summary><p>${esc(correctText(q))}</p><p class="muted small">${esc(q.explanation || "")}</p></details></div>${m.level !== "exam" ? `<a class="btn small" href="#/fach/${m.sid}/level/${m.level}/2">Nachlesen</a>` : ""}</div>`; }).join("")}</div>`
    : `<section class="card empty"><h2>✨ Keine offenen Fehler</h2><p>Mach einen Level-Check, eine Prüfung oder ein Training – falsche Antworten erscheinen dann hier.</p><a class="btn primary" href="#/training">Training starten</a></section>`}`;
}

/* --- Glossar --- */
function viewGlossary() {
  const terms = [];
  Object.values(subjects).forEach((s) => s.levels.forEach((l, n) => (l.keyTerms || []).forEach((k) => terms.push({ ...k, sid: s.id, n, lt: l.title }))));
  terms.sort((a, b) => a.term.localeCompare(b.term, "de"));
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Glossar</span></nav>
  <header class="page-head slim"><div><h1>📖 Glossar</h1><p class="lead">${terms.length} Fachbegriffe aus beiden Fächern.</p></div></header>
  <div class="search"><input class="input" type="search" placeholder="Begriff suchen …" data-filter=".glossary .term-item" aria-label="Glossar durchsuchen"><div class="chips">${SUBJECT_IDS.map((id) => `<button class="chip" data-action="gloss-filter" data-sid="${id}">${esc(subjects[id].icon)} ${esc(subjects[id].shortTitle)}</button>`).join("")}<button class="chip active" data-action="gloss-filter" data-sid="">Alle</button></div></div>
  <dl class="glossary">${terms.map((t) => `<div class="card term-item theme-${t.sid}" data-sid="${t.sid}"><dt>${esc(t.term)}</dt><dd>${esc(t.def)}</dd><a class="small" href="#/fach/${t.sid}/level/${t.n}/2">${esc(subjects[t.sid].shortTitle)} · Level ${t.n + 1}: ${esc(t.lt)}</a></div>`).join("")}</dl>`;
}

/* --- Werkzeuge --- */
function viewTools() {
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Werkzeuge</span></nav>
  <header class="page-head slim"><div><h1>🛠️ Werkzeuge</h1><p class="lead">Interaktiv ausprobieren statt nur lesen. Tipp: Erst im Kopf rechnen, dann mit dem Werkzeug kontrollieren.</p></div></header>
  <div class="grid two">${Object.entries(TOOLS).map(([id, t]) => `<section class="card" id="tool-${id}"><h2>${t.icon} ${esc(t.title)}</h2>${toolHtml(id)}</section>`).join("")}</div>`;
}

/* --- Lernplan --- */
function viewPlan() {
  const t = localDate();
  const plans = SUBJECT_IDS.map((id) => {
    const s = subjects[id];
    const date = state.settings.examDates[id] || "";
    const open = s.levels.map((_, i) => i).filter((i) => !isCompleted(id, i));
    let plan = "";
    if (date) {
      const days = daysBetween(t, date);
      if (days < 0) plan = `<p class="muted">Der Termin liegt in der Vergangenheit.</p>`;
      else {
        const items = [];
        const learnDays = Math.max(1, days - 2);
        const perDay = Math.ceil(open.length / learnDays) || 0;
        let d = 0;
        for (let i = 0; i < open.length; i += perDay || 1) { items.push([addDays(t, d), `Level ${open.slice(i, i + perDay).map((x) => x + 1).join(" + ")} (${open.slice(i, i + perDay).map((x) => s.levels[x].title).join(", ")}) + Karteikarten`]); d++; }
        if (days >= 2) items.push([addDays(date, -2), "Prüfungssimulation + Fehler wiederholen"]);
        if (days >= 1) items.push([addDays(date, -1), "Spickzettel lesen, Karteikarten, früh schlafen 😴"]);
        items.push([date, "🎓 Prüfungstag – du schaffst das!"]);
        plan = `<p><b>${days}</b> Tage · ${open.length} offene Level${days < open.length ? ` · <span class="warn">knapp – ${perDay} Level pro Tag</span>` : ""}</p><ol class="timeline">${items.map(([d, txt]) => `<li class="${d === t ? "today" : ""}"><time>${fmtDate(d)}</time><span>${esc(txt)}</span></li>`).join("")}</ol>`;
      }
    } else plan = `<p class="muted">Trage deinen Prüfungstermin ein – dann verteilt der Plan die Level automatisch auf die verbleibenden Tage.</p>`;
    return `<section class="card theme-${id}"><h2>${esc(s.icon)} ${esc(s.title)}</h2><label class="inline">Prüfungstermin <input class="input" type="date" data-exam-date="${id}" value="${esc(date)}" min="${t}"></label>${plan}</section>`;
  }).join("");
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Lernplan</span></nav>
  <header class="page-head slim"><div><h1>📅 Lernplan</h1><p class="lead">Lieber täglich 20–30 Minuten als einmal fünf Stunden. Der Plan verteilt die Level und lässt die letzten zwei Tage für Prüfungssimulation und Wiederholung frei.</p></div></header>
  <div class="grid two">${plans}</div>
  <section class="card"><h2>Deine ideale Lerneinheit (≈ 30 Min.)</h2><ol class="timeline plain">
  <li><time>5 Min.</time><span>Fällige Karteikarten wiederholen</span></li><li><time>15 Min.</time><span>Ein Level: Vorab-Frage → Video/Erklärung → Aufgaben</span></li><li><time>5 Min.</time><span>Level-Check und Zusammenfassung</span></li><li><time>5 Min.</time><span>Gemischtes Training oder Fehler wiederholen</span></li></ol>
  <p><a class="btn" href="#/werkzeuge">⏱️ Fokus-Timer öffnen</a></p></section>`;
}

/* --- Richtig lernen --- */
function viewMethod() {
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Richtig lernen</span></nav>
  <header class="page-head slim"><div><h1>🧠 So lernst du effektiv</h1><p class="lead">PrüfungsPilot ist nach Lernstrategien aufgebaut, die in der Lernforschung gut belegt sind. Hier siehst du, was dahintersteckt.</p></div></header>
  <section class="card"><h2>Der Ablauf jedes Levels</h2><ol class="steps-explain">
    <li><b>Vorab-Frage</b> – Raten aktiviert Vorwissen und macht neugierig auf die Erklärung.</li>
    <li><b>Verstehen</b> – Text, Grafik und Video zusammen (Dual Coding), dazu Beispiel und Eselsbrücke.</li>
    <li><b>Anwenden</b> – Arbeitsblätter, „Erkläre es selbst“ und interaktive Werkzeuge.</li>
    <li><b>Level-Check</b> – aktives Abrufen; ab 2/3 richtig wird das nächste Level frei.</li>
    <li><b>Zusammenfassung</b> – Kernaussagen festigen; Begriffe wandern in die Karteikarten.</li></ol></section>
  <div class="grid three">${studyTips.map((t) => `<section class="card"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p><p class="muted small">Hier: ${esc(t.where)}</p></section>`).join("")}</div>
  <section class="card"><h2>Operatoren verstehen</h2><p class="muted">Das Verb in der Aufgabe sagt dir, was erwartet wird. Anforderungsbereich I = wiedergeben, II = anwenden, III = beurteilen.</p>
  <div class="table-wrap"><table class="table"><thead><tr><th>Operator</th><th>AFB</th><th>Was wird erwartet?</th><th>Beispiel</th></tr></thead><tbody>${operators.map((o) => `<tr><td><b>${esc(o.op)}</b></td><td>${esc(o.level)}</td><td>${esc(o.expect)}</td><td class="muted">${esc(o.example)}</td></tr>`).join("")}</tbody></table></div></section>
  <section class="card"><h2>In der Prüfung</h2><ul><li>Erst alle Aufgaben überfliegen, mit der leichtesten anfangen.</li><li>Operator unterstreichen und Fachbegriffe verwenden.</li><li>Bei Rechenaufgaben (Subnetz, dB) den Rechenweg aufschreiben – auch Teilpunkte zählen.</li><li>Bei Skizzen (OSI, Gewaltenteilung) lieber sauber und beschriftet als schön.</li><li>Am Ende 5 Minuten zum Kontrollieren einplanen.</li></ul></section>`;
}

/* --- Fortschritt --- */
function viewProgress() {
  const r = rank(state.xp);
  const acc = pct(state.stats.correct, state.stats.answered);
  return `<nav class="crumbs"><a href="#/">Übersicht</a> / <span>Fortschritt</span></nav>
  <header class="page-head slim"><div><h1>📈 Dein Fortschritt</h1></div></header>
  <div class="hero-stats wide">
    <div class="stat"><b>${state.xp}</b><span>XP · Rang ${r.level}: ${esc(r.name)}</span><div class="progress-line"><i style="width:${r.progress}%"></i></div></div>
    <div class="stat"><b>${currentStreak()}</b><span>🔥 Tage Serie</span></div>
    <div class="stat"><b>${state.stats.answered}</b><span>Antworten · ${acc} % richtig</span></div>
    <div class="stat"><b>${state.stats.reviews}</b><span>Karten wiederholt</span></div>
  </div>
  <div class="grid two">${SUBJECT_IDS.map((id) => `<section class="card theme-${id}"><div class="section-head"><h2>${esc(subjects[id].icon)} ${esc(subjects[id].shortTitle)}</h2>${ring(subjectProgress(id))}</div>
    <ul class="level-list">${subjects[id].levels.map((l, i) => `<li><span>${i + 1}. ${esc(l.title)}</span>${sub(id).best[i] !== undefined ? `${starHtml(stars(sub(id).best[i]))} <span class="muted small">${sub(id).best[i]} %</span>` : `<span class="muted small">${isUnlocked(id, i) ? "offen" : "🔒"}</span>`}</li>`).join("")}</ul>
    <p class="small">Prüfung: ${sub(id).examBest ? `Bestwert ${sub(id).examBest} % ${sub(id).examPassed ? "🎓" : ""}` : "noch nicht versucht"}</p></section>`).join("")}</div>
  <section class="card"><h2>Abzeichen</h2><div class="badges">${BADGES.map((b) => `<div class="badge ${state.badges.includes(b.id) ? "earned" : ""}" title="${esc(b.desc)}"><span>${b.icon}</span><b>${esc(b.title)}</b><small>${esc(b.desc)}</small></div>`).join("")}</div></section>
  <section class="card"><h2>Aktivität</h2>${heatmap()}</section>
  <section class="card"><h2>Einstellungen</h2>
    <label class="switch"><input type="checkbox" data-setting="freeMode" ${state.settings.freeMode ? "checked" : ""}><span></span> Freier Modus – alle Level sofort freischalten</label>
    <label class="inline">Darstellung <select class="input" data-setting="theme">${[["auto", "wie System"], ["light", "hell"], ["dark", "dunkel"]].map(([v, t]) => `<option value="${v}" ${state.settings.theme === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
    <h3>Lernstand sichern</h3><p class="muted small">Der Lernstand liegt nur in diesem Browser. Exportiere ihn, um ihn auf ein anderes Gerät mitzunehmen.</p>
    <div class="btn-row"><button class="btn" data-action="export">⬇ Exportieren</button><label class="btn">⬆ Importieren<input type="file" accept="application/json" data-import hidden></label><button class="btn bad" data-action="reset">Alles zurücksetzen</button></div></section>`;
}

/* --- Spickzettel --- */
function viewCheatsheet(sid) {
  const s = subjects[sid];
  return `<nav class="crumbs no-print"><a href="#/">Übersicht</a> / <a href="#/fach/${sid}">${esc(s.shortTitle)}</a> / <span>Spickzettel</span></nav>
  <header class="page-head slim"><div><h1>📝 Spickzettel: ${esc(s.title)}</h1><p class="muted no-print">Zum Wiederholen kurz vor der Prüfung – oder ausdrucken und selbst ergänzen. (In der Prüfung natürlich nicht erlaubt 😉)</p></div><button class="btn no-print" data-action="print">🖨️ Drucken</button></header>
  <div class="cheatsheet">${s.levels.map((l, i) => `<section class="card sheet"><h2>${i + 1}. ${esc(l.title)}</h2><ul>${l.recap.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
    ${l.keyTerms?.length ? `<dl class="mini-terms">${l.keyTerms.map((k) => `<dt>${esc(k.term)}</dt><dd>${esc(k.def)}</dd>`).join("")}</dl>` : ""}
    ${l.mnemonic ? `<p class="small"><b>Merke:</b> ${esc(l.mnemonic)}</p>` : ""}</section>`).join("")}
    <section class="card sheet"><h2>Karteikarten</h2><dl class="mini-terms">${s.cards.map((c) => `<dt>${esc(c.front)}</dt><dd>${esc(c.back)}</dd>`).join("")}</dl></section></div>`;
}

/* ---------- Ereignisse ---------- */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = el.dataset.action;
  if (a === "menu") { document.body.classList.toggle("nav-open"); return; }
  if (a === "theme") {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    state.settings.theme = cur === "dark" ? "light" : "dark";
    applyTheme(); save(); return;
  }
  if (a === "video") {
    const host = el.closest("[data-video-host]");
    host.querySelector("iframe").src = `https://www.youtube-nocookie.com/embed/${el.dataset.id}?rel=0`;
    host.querySelector("iframe").title = el.dataset.title;
    host.querySelector("[data-video-title]").textContent = el.dataset.title;
    host.querySelector("[data-video-channel]").textContent = el.dataset.channel;
    $$(".chip", host).forEach((c) => c.classList.toggle("active", c === el));
    return;
  }
  if (a === "show-solution") {
    const form = el.closest("form");
    $$(".solution", form).forEach((s) => (s.hidden = false));
    return;
  }
  if (a === "flip") { cardSession.flipped = !cardSession.flipped; window.__noScroll = true; render(); return; }
  if (a === "retry") { e.preventDefault(); render(); return; }
  if (a === "card") {
    const id = cardSession.queue.shift();
    const known = el.dataset.known === "1";
    reviewCard(id, known);
    cardSession.done++;
    if (known) cardSession.known++;
    else if (!cardSession.requeued?.includes(id)) { cardSession.queue.push(id); cardSession.requeued = [...(cardSession.requeued || []), id]; }
    cardSession.flipped = false;
    window.__noScroll = true;
    render();
    return;
  }
  if (a === "cards-all") {
    const sid = cardSession?.sid ?? null;
    cardSession = { sid, queue: shuffle(CARDS.filter((c) => (!sid || c.sid === sid) && cardAvailable(c))).slice(0, 30).map((c) => c.id), flipped: false, done: 0, known: 0 };
    render(); return;
  }
  if (a === "exam-start") { startExam(el.dataset.sid); return; }
  if (a === "exam-cancel") { if (confirm("Prüfung wirklich abbrechen? Der Versuch wird nicht gewertet.")) { exam = null; clearInterval(examTimer); render(); } return; }
  if (a === "train-next") { training.idx++; window.__noScroll = false; render(); return; }
  if (a === "train-quit") { training = null; render(); return; }
  if (a === "train-subject") { e.preventDefault(); training = null; location.hash = `#/training?fach=${el.dataset.sid}`; return; }
  if (a === "train-missed") { startTraining(shuffle(Object.keys(state.missed).filter((id) => questionIndex.has(id))), "missed"); return; }
  if (a === "gloss-filter") {
    $$("[data-action=gloss-filter]").forEach((c) => c.classList.toggle("active", c === el));
    $$(".term-item").forEach((t) => t.classList.toggle("hidden-sid", !!el.dataset.sid && t.dataset.sid !== el.dataset.sid));
    return;
  }
  if (a === "osi-pick") {
    const tool = el.closest("[data-tool]");
    const next = Number(tool.dataset.next);
    const status = tool.querySelector("[data-status]");
    if (Number(el.dataset.i) === next) {
      el.remove();
      tool.querySelector("[data-stack]").insertAdjacentHTML("afterbegin", `<div class="osi-layer">${next + 1} · ${esc(el.textContent)}</div>`);
      tool.dataset.next = next + 1;
      if (next + 1 === 7) {
        const errs = Number(tool.dataset.errors);
        status.innerHTML = `🎉 Geschafft${errs ? ` mit ${errs} Fehlversuch(en)` : " – fehlerfrei"}! <button type="button" class="btn small" data-action="osi-restart">Nochmal</button>`;
        recordActivity(errs ? 5 : 15);
      } else status.textContent = `Richtig! Welche Schicht ist Nr. ${next + 2}?`;
    } else {
      tool.dataset.errors = Number(tool.dataset.errors) + 1;
      el.classList.add("shake");
      setTimeout(() => el.classList.remove("shake"), 400);
      status.textContent = `Nicht ganz – gesucht ist Schicht ${next + 1}. Tipp: ${["„Bitte“", "„Suche“", "„Vernünftige“", "„Transporte“", "„Seit“", "„Dem“", "„Abend“"][next]}`;
    }
    return;
  }
  if (a === "osi-restart") { initOsiGame(el.closest("[data-tool]")); return; }
  if (a === "pomo-toggle") {
    pomo.running = !pomo.running;
    if (pomo.running) pomo.endAt = Date.now() + pomo.remaining * 1000;
    pomoTick(); return;
  }
  if (a === "pomo-reset") { pomo.running = false; pomo.mode = "focus"; pomo.remaining = 25 * 60; pomoTick(); return; }
  if (a === "print") { window.print(); return; }
  if (a === "export") {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement("a"), { href: url, download: `pruefungspilot-lernstand-${localDate()}.json` });
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return;
  }
  if (a === "reset") {
    if (confirm("Wirklich den gesamten Lernstand löschen? Das kann nicht rückgängig gemacht werden.")) {
      state = defaultState(); exam = null; training = null; cardSession = null; save(); applyTheme(); render(); toast("Lernstand zurückgesetzt.");
    }
  }
});

document.addEventListener("submit", (e) => {
  const form = e.target;
  const kind = form.dataset.form;
  if (!kind) return;
  e.preventDefault();
  if (kind === "practice") {
    const l = subjects[form.dataset.sid].levels[form.dataset.level];
    const q = l.practice;
    if (!form.querySelector("input:checked")) { toast("Wähle zuerst eine Antwort – raten ist ausdrücklich erlaubt!"); return; }
    const ok = gradeQuestion(q, form);
    showFeedback(form, q, ok);
    state.stats.answered++; if (ok) state.stats.correct++;
    recordActivity(ok ? 5 : 2);
    form.querySelector("[type=submit]").remove();
    form.insertAdjacentHTML("beforeend", `<p class="small muted">${ok ? "Super – mal sehen, ob du auch das Warum erklären kannst." : "Kein Problem! Genau dafür ist die Erklärung im nächsten Schritt da."}</p>`);
    return;
  }
  if (kind === "level") {
    const sid = form.dataset.sid, n = Number(form.dataset.level);
    const l = subjects[sid].levels[n];
    let correct = 0;
    l.test.forEach((q) => { const ok = gradeQuestion(q, form); if (ok) correct++; trackAnswer(q, ok); showFeedback(form, q, ok); });
    const score = pct(correct, l.test.length);
    const passed = correct / l.test.length >= 2 / 3;
    const st = sub(sid);
    const first = !st.completed.includes(n) && passed;
    st.best[n] = Math.max(st.best[n] || 0, score);
    if (passed) {
      if (!st.completed.includes(n)) st.completed.push(n);
      st.unlocked = Math.max(st.unlocked, Math.min(n + 1, subjects[sid].levels.length - 1));
    }
    recordActivity(correct * 10 + (first ? 50 : 0));
    form.querySelector("[type=submit]").outerHTML = `<a class="btn" href="#/fach/${sid}/level/${n}/4" data-action="retry">Nochmal versuchen</a>`;
    form.querySelector("[data-result]").innerHTML = `<div class="result-banner ${passed ? "pass" : "fail"}"><div><b>${correct} von ${l.test.length} richtig (${score} %)</b> ${starHtml(stars(score))}<p>${passed ? (first ? "Level bestanden! +50 XP Bonus. Das nächste Level ist frei. 🎉" : "Bestanden!") : "Noch nicht bestanden (mind. 2/3 nötig). Lies die Erklärungen oben und schau dir den Schritt „Verstehen“ noch einmal an."}</p></div>
      <a class="btn primary" href="#/fach/${sid}/level/${n}/${passed ? 5 : 2}">${passed ? "Zur Zusammenfassung →" : "Nochmal verstehen"}</a></div>`;
    if (passed && score === 100) confetti();
    return;
  }
  if (kind === "task-table") {
    const t = TASKS.get(form.dataset.task);
    let c = 0;
    t.rows.forEach((r, i) => {
      const inp = form.elements[`r${i}`];
      const ok = answerMatches(inp.value, r.accepted);
      if (ok) c++;
      inp.classList.toggle("good", ok);
      inp.classList.toggle("bad", !ok);
      inp.nextElementSibling.hidden = ok;
    });
    form.querySelector("[data-result]").innerHTML = `<p class="${c === t.rows.length ? "ok" : "warn"}"><b>${c} von ${t.rows.length} richtig.</b> ${c === t.rows.length ? "Perfekt!" : "Die richtigen Lösungen stehen jetzt neben den falschen Feldern."}</p>`;
    recordActivity(c * 2);
    return;
  }
  if (kind === "task-writing") {
    const txt = form.querySelector("textarea").value.trim();
    if (txt.length < 20) { toast("Schreib zuerst ein paar Sätze – erst denken, dann vergleichen!"); return; }
    form.querySelector(".model").hidden = false;
    recordActivity(8);
    return;
  }
  if (kind === "exam") {
    const unanswered = exam.questions.filter((q) => (q.type === "short" || q.type === "table") ? false : !form.querySelector(`input[name="${CSS.escape(q.id)}"]:checked`)).length;
    if (unanswered && !confirm(`${unanswered} Frage(n) sind unbeantwortet. Trotzdem abgeben?`)) return;
    clearInterval(examTimer);
    submitExam(form);
    return;
  }
  if (kind === "training-setup") {
    const sids = $$("[name=sid]:checked", form).map((i) => i.value);
    if (!sids.length) { toast("Wähle mindestens ein Fach."); return; }
    const all = form.elements.all.checked || state.settings.freeMode;
    const count = Number(form.querySelector("[name=count]:checked").value);
    const pool = [...questionIndex.entries()].filter(([, r]) => sids.includes(r.sid) && (all || r.level === "exam" || isUnlocked(r.sid, r.level))).map(([id]) => id);
    startTraining(shuffle(pool).slice(0, count));
    return;
  }
  if (kind === "training") {
    const q = training.queue[training.idx];
    if (q.type !== "short" && q.type !== "table" && !form.querySelector("input:checked")) { toast("Wähle eine Antwort."); return; }
    const ok = gradeQuestion(q, form);
    if (ok) training.correct++;
    trackAnswer(q, ok);
    showFeedback(form, q, ok);
    recordActivity(ok ? 5 : 1);
    form.querySelector("[data-check]").hidden = true;
    const next = form.querySelector("[data-action=train-next]");
    next.hidden = false;
    next.focus();
  }
});

document.addEventListener("input", (e) => {
  const tool = e.target.closest("[data-tool]");
  if (tool && tool.dataset.tool !== "osi-game") updateTool(tool);
  if (e.target.matches("[data-filter]")) {
    const q = normalizeAnswer(e.target.value);
    $$(e.target.dataset.filter).forEach((el) => el.classList.toggle("hidden-search", !!q && !normalizeAnswer(el.textContent).includes(q)));
  }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.matches("[data-exam-date]")) { state.settings.examDates[t.dataset.examDate] = t.value; save(); render(); }
  if (t.matches("[data-setting=freeMode]")) { state.settings.freeMode = t.checked; save(); toast(t.checked ? "Freier Modus aktiv – alle Level sind offen." : "Freier Modus aus."); updateChrome(); }
  if (t.matches("[data-setting=theme]")) { state.settings.theme = t.value; applyTheme(); save(); }
  if (t.matches("[data-import]") && t.files[0]) {
    t.files[0].text().then((txt) => {
      const data = JSON.parse(txt);
      if (data.version !== 2 || !data.subjects) throw new Error("Format");
      localStorage.setItem(KEY, txt);
      state = loadState(); applyTheme(); render(); toast("Lernstand importiert ✓", "ok");
    }).catch(() => toast("Diese Datei ist kein gültiger PrüfungsPilot-Lernstand.", "bad"));
  }
});
document.addEventListener("keydown", (e) => {
  if (!$(".flashcard") || e.target.matches("input, textarea, select")) return;
  if ((e.key === " " || e.key === "Enter") && !e.target.closest("button, a")) { e.preventDefault(); $(".flashcard").click(); }
  if (cardSession?.flipped && (e.key === "1" || e.key === "2")) $(`[data-action=card][data-known="${e.key === "2" ? 1 : 0}"]`)?.click();
});

function confetti() {
  const host = document.createElement("div");
  host.className = "confetti";
  host.innerHTML = Array.from({ length: 40 }, (_, i) => `<i style="left:${Math.random() * 100}%;animation-delay:${Math.random() * 0.4}s;background:hsl(${i * 37},80%,60%)"></i>`).join("");
  document.body.append(host);
  setTimeout(() => host.remove(), 2200);
}
function applyTheme() {
  const t = state.settings.theme;
  if (t === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = t;
}

applyTheme();
window.addEventListener("hashchange", render);
setInterval(pomoTick, 1000);
render();
