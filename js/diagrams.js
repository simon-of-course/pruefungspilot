// Erklärgrafiken als SVG. Farben kommen aus CSS-Variablen (Hell/Dunkel-Modus).
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(id, w, h, body, label) {
  return `<svg class="dg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ah-${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="dg-head"/></marker></defs>
  ${body.replace(/MARK/g, `url(#ah-${id})`)}</svg>`;
}
const box = (x, y, w, h, cls = "dg-box", rx = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" class="${cls}"/>`;
const text = (x, y, t, cls = "dg-t", anchor = "middle") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${esc(t)}</text>`;
const line = (x1, y1, x2, y2, cls = "dg-line", arrow = true) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"${arrow ? ' marker-end="MARK"' : ""}/>`;

// Organ-Schemata: nummerierte Marker; mit Legende (Lernansicht) oder ohne (Beschriftungsaufgabe).
const ORGAN_MAPS = {
  tract: {
    w: 470, h: 500, title: "Verdauungstrakt (schematisch)",
    body: `
      <ellipse cx="212" cy="36" rx="17" ry="11" class="dg-box dg-accent2"/><ellipse cx="226" cy="62" rx="12" ry="7" class="dg-box dg-accent2"/>
      <ellipse cx="270" cy="40" rx="36" ry="15" class="dg-box dg-soft"/>
      <path d="M290,54 L296,84 L304,160" class="dg-tube dg-thin"/>
      <path d="M110,150 C150,120 260,118 296,140 C300,160 280,195 240,205 C190,215 130,205 110,180 Z" class="dg-box dg-accent2"/>
      <ellipse cx="236" cy="218" rx="15" ry="10" class="dg-box dg-accent"/>
      <path d="M300,240 C330,230 380,234 412,228 C420,234 414,246 402,248 C372,252 332,254 304,258 Z" class="dg-box dg-accent2"/>
      <path d="M296,160 C340,135 410,160 398,210 C390,250 340,258 312,236 C330,230 350,215 345,195 C340,178 318,172 300,176 Z" class="dg-box dg-soft"/>
      <path d="M310,234 C282,232 272,262 296,268 C312,272 318,282 318,304" class="dg-tube dg-thin"/>
      <path d="M318,304 C360,302 410,312 400,332 C390,352 250,332 232,347 C214,362 250,374 300,370" class="dg-tube dg-thin"/>
      <path d="M300,370 C360,368 420,372 410,392 C400,412 300,397 250,407 C220,414 200,426 186,434" class="dg-tube dg-thin dg-tube2"/>
      <path d="M170,430 L170,304 Q170,290 184,290 L424,284 Q440,284 440,300 L440,400 C440,440 392,416 362,432" class="dg-tube"/>
      <ellipse cx="170" cy="440" rx="17" ry="15" class="dg-box dg-accent2"/>
      <path d="M164,452 C160,470 174,478 180,470" class="dg-tube dg-thin"/>
      <path d="M362,432 C342,442 326,440 324,456 L324,470" class="dg-tube dg-tube2"/>
      <rect x="312" y="472" width="24" height="10" rx="4" class="dg-box dg-accent"/>`,
    items: [
      [1, 270, 40, "Mundhöhle – Cavum oris"], [2, 318, 70, "Rachen – Pharynx"], [3, 326, 124, "Speiseröhre – Ösophagus"],
      [4, 372, 196, "Magen – Gaster"], [5, 262, 258, "Zwölffingerdarm – Duodenum"], [6, 212, 330, "Leerdarm – Jejunum"],
      [7, 214, 400, "Krummdarm – Ileum"], [8, 140, 446, "Blinddarm – Caecum"], [9, 212, 270, "Grimmdarm – Colon"],
      [10, 300, 452, "Mastdarm – Rektum"], [11, 350, 480, "After – Anus"], ["A", 190, 56, "Speicheldrüsen"],
      ["B", 170, 166, "Leber – Hepar"], ["C", 214, 234, "Gallenblase"], ["D", 430, 236, "Bauchspeicheldrüse – Pankreas"]
    ]
  },
  stomach: {
    w: 410, h: 330, title: "Magen (Gaster)",
    body: `
      <path d="M245,6 L245,66" class="dg-tube"/>
      <path d="M260,62 C290,20 370,25 380,90 C395,170 370,270 280,295 C200,320 120,290 95,250 L80,238 L80,200 C110,200 160,225 195,205 C228,185 232,130 230,70 Z" class="dg-box dg-soft"/>
      <line x1="262" y1="64" x2="372" y2="64" class="dg-line dg-dash"/>
      <line x1="196" y1="205" x2="236" y2="303" class="dg-line dg-dash"/>
      <line x1="82" y1="198" x2="82" y2="240" class="dg-pylorus"/>
      <path d="M78,219 L44,219 L34,262" class="dg-tube"/>
      ${text(40, 290, "Duodenum", "dg-t dg-xs dg-muted")}`,
    items: [
      [1, 268, 86, "Kardia – Mageneingang"], [2, 320, 46, "Fundus – Magengrund"], [3, 300, 170, "Korpus – Magenkörper"],
      [4, 150, 262, "Antrum – Pförtnervorraum"], [5, 82, 180, "Pylorus – Magenpförtner"], [6, 172, 186, "Curvatura minor"],
      [7, 396, 196, "Curvatura major"]
    ],
    extra: () => {
      let b = box(420, 196, 250, 124, "dg-box dg-accent2") + text(545, 216, "Zellen der Magenschleimhaut", "dg-t dg-xs dg-b");
      [["Hauptzellen", "Pepsinogen"], ["Belegzellen", "HCl + Intrinsic-Faktor"], ["Nebenzellen", "Schleim (Schutz)"], ["G-Zellen (Antrum)", "Gastrin (Hormon)"]]
        .forEach(([z, p], i) => { b += text(432, 240 + i * 20, z, "dg-t dg-xs dg-b", "start") + text(660, 240 + i * 20, p, "dg-t dg-xs", "end"); });
      return b;
    }
  },
  colon: {
    w: 580, h: 430, title: "Dickdarm (Intestinum crassum)",
    body: `
      <path d="M250,300 C200,300 170,320 140,328" class="dg-tube dg-thin dg-tube2"/>
      ${text(256, 304, "Ileum (Bauhin-Klappe)", "dg-t dg-xs dg-muted", "start")}
      <path d="M120,330 L120,95 Q120,70 145,70 Q320,115 485,70 Q510,70 510,95 L510,270 C510,330 430,300 400,320 C375,336 340,320 335,345" class="dg-tube"/>
      <ellipse cx="120" cy="345" rx="22" ry="20" class="dg-box dg-accent2"/>
      <path d="M112,362 C108,385 125,395 132,388" class="dg-tube dg-thin"/>
      <path d="M335,345 L335,395" class="dg-tube dg-tube2"/>
      <rect x="322" y="398" width="26" height="12" rx="4" class="dg-box dg-accent"/>
      ${text(320, 230, "Nummern = Weg des Stuhls", "dg-t dg-xs dg-muted")}
      ${text(320, 248, "von kranial (1) nach kaudal (10)", "dg-t dg-xs dg-muted")}`,
    items: [
      [1, 80, 345, "Caecum – Blinddarm"], [2, 150, 398, "Appendix vermiformis"], [3, 150, 200, "Colon ascendens"],
      [4, 100, 52, "Flexura coli dextra"], [5, 320, 126, "Colon transversum"], [6, 532, 52, "Flexura coli sinistra"],
      [7, 540, 200, "Colon descendens"], [8, 455, 345, "Colon sigmoideum (Sigma)"], [9, 362, 372, "Rektum – Mastdarm"],
      [10, 362, 408, "Anus – After"]
    ]
  },
  liver: {
    w: 540, h: 400, title: "Leber, Gallenwege und Pankreas",
    body: `
      <path d="M40,60 C120,20 380,20 470,60 C480,90 420,130 330,150 C230,170 90,160 40,120 Z" class="dg-box dg-accent2"/>
      <path d="M235,280 C260,262 300,290 340,280 C400,266 450,252 515,256 C530,262 522,284 505,288 C450,298 390,310 330,325 C280,336 230,320 235,280 Z" class="dg-box dg-soft"/>
      <path d="M505,272 C440,282 360,300 302,334" class="dg-line dg-dash"/>
      <path d="M230,236 C180,240 175,345 250,345 L360,345" class="dg-tube"/>
      <path d="M300,150 L300,205 L300,334" class="dg-tube dg-duct"/>
      <ellipse cx="228" cy="216" rx="20" ry="34" transform="rotate(-35 228 216)" class="dg-box dg-accent"/>
      <path d="M246,190 C265,202 285,206 300,206" class="dg-tube dg-duct"/>
      <circle cx="300" cy="340" r="5" class="dg-mark"/>`,
    items: [
      [1, 160, 95, "Leber – Hepar"], [2, 222, 220, "Gallenblase"], [3, 268, 182, "Ductus cysticus"], [4, 322, 235, "Ductus choledochus"],
      [5, 460, 276, "Pankreas"], [6, 168, 300, "Duodenum"], [7, 300, 378, "Papilla Vateri"]
    ]
  }
};

function organMap(id, blank) {
  const m = ORGAN_MAPS[id];
  const legendX = m.w + 10;
  const w = blank ? m.w : legendX + 250;
  let b = m.body;
  m.items.forEach(([n, x, y]) => { b += `<circle cx="${x}" cy="${y}" r="11" class="dg-mark"/>` + text(x, y + 4, n, "dg-t dg-xs dg-b"); });
  if (!blank) {
    b += text(legendX, 22, m.title, "dg-t dg-s dg-b", "start");
    m.items.forEach(([n, , , label], i) => {
      const y = 46 + i * 24;
      b += `<circle cx="${legendX + 10}" cy="${y - 4}" r="9" class="dg-mark"/>` + text(legendX + 10, y, n, "dg-t dg-xs dg-b") + text(legendX + 26, y, label, "dg-t dg-xs", "start");
    });
    if (m.extra) b += m.extra();
  }
  const label = blank ? `${m.title} – leere Vorlage zum Beschriften` : `${m.title} mit Beschriftung`;
  return svg(id + (blank ? "-blank" : ""), w, m.h, b, label);
}

const diagrams = {
  rights: () => svg("rights", 640, 320, `
    ${box(20, 16, 600, 44, "dg-box dg-accent")}
    ${text(320, 44, "Art. 1 GG: „Die Würde des Menschen ist unantastbar.“", "dg-t dg-b")}
    <ellipse cx="320" cy="190" rx="290" ry="118" class="dg-box dg-soft"/>
    ${text(320, 100, "Menschenrechte – gelten für ALLE Menschen", "dg-t dg-b")}
    ${text(170, 150, "„Jeder hat das Recht …“", "dg-t dg-s")}
    ${text(170, 175, "Meinungsfreiheit (Art. 5)", "dg-t dg-s")}
    ${text(170, 200, "Glaubensfreiheit (Art. 4)", "dg-t dg-s")}
    ${text(170, 225, "Gleichheit (Art. 3)", "dg-t dg-s")}
    <ellipse cx="455" cy="200" rx="135" ry="80" class="dg-box dg-accent2"/>
    ${text(455, 165, "Bürgerrechte", "dg-t dg-b")}
    ${text(455, 185, "nur für Deutsche", "dg-t dg-s")}
    ${text(455, 210, "Versammlung (Art. 8)", "dg-t dg-s")}
    ${text(455, 230, "Berufsfreiheit (Art. 12)", "dg-t dg-s")}
    ${text(455, 250, "Bundestagswahl (Art. 38)", "dg-t dg-s")}
  `, "Menschenrechte umfassen alle Menschen, Bürgerrechte nur Deutsche"),

  powers: () => {
    const cols = [
      ["Legislative", "beschließt Gesetze", ["Bundestag", "Bundesrat (wirkt mit)"]],
      ["Exekutive", "führt Gesetze aus", ["Bundesregierung", "Verwaltung, Polizei"]],
      ["Judikative", "spricht Recht", ["Gerichte", "BVerfG (Karlsruhe)"]]
    ];
    let b = `<polygon points="320,10 610,70 30,70" class="dg-box dg-accent"/>${text(320, 58, "Grundgesetz – Volk als Souverän", "dg-t dg-b")}`;
    cols.forEach(([t, s, items], i) => {
      const x = 40 + i * 195;
      b += box(x, 86, 170, 170, "dg-box dg-soft") + text(x + 85, 116, t, "dg-t dg-b") + text(x + 85, 140, s, "dg-t dg-s dg-muted");
      items.forEach((it, j) => { b += box(x + 12, 160 + j * 44, 146, 34, "dg-box", 8) + text(x + 85, 182 + j * 44, it, "dg-t dg-s"); });
    });
    b += box(30, 268, 580, 40, "dg-box dg-accent2") + text(320, 293, "Gegenseitige Kontrolle verhindert Machtmissbrauch", "dg-t dg-b");
    return svg("powers", 640, 320, b, "Drei Gewalten unter dem Dach des Grundgesetzes");
  },

  organs: () => svg("organs", 640, 360, `
    ${box(250, 10, 140, 40, "dg-box dg-accent")}${text(320, 36, "Volk (Wähler)", "dg-t dg-b")}
    ${box(20, 10, 160, 40, "dg-box dg-accent")}${text(100, 36, "16 Länder", "dg-t dg-b")}
    ${line(320, 50, 320, 98)}${text(332, 80, "wählt", "dg-t dg-s dg-muted", "start")}
    ${line(100, 50, 100, 98)}${text(112, 80, "entsenden", "dg-t dg-s dg-muted", "start")}
    ${box(230, 100, 180, 50, "dg-box dg-soft")}${text(320, 122, "Bundestag", "dg-t dg-b")}${text(320, 140, "Parlament, Gesetze", "dg-t dg-s")}
    ${box(20, 100, 160, 50, "dg-box dg-soft")}${text(100, 122, "Bundesrat", "dg-t dg-b")}${text(100, 140, "Länderkammer", "dg-t dg-s")}
    ${line(180, 125, 228, 125, "dg-line dg-dash", false)}${text(204, 116, "Gesetze", "dg-t dg-xs dg-muted")}
    ${line(320, 150, 320, 198)}${text(332, 180, "wählt", "dg-t dg-s dg-muted", "start")}
    ${box(230, 200, 180, 50, "dg-box dg-soft")}${text(320, 222, "Bundeskanzler/in", "dg-t dg-b")}${text(320, 240, "Richtlinienkompetenz", "dg-t dg-s")}
    ${line(320, 250, 320, 288)}${text(332, 274, "schlägt Minister vor", "dg-t dg-s dg-muted", "start")}
    ${box(230, 290, 180, 50, "dg-box dg-soft")}${text(320, 312, "Bundesregierung", "dg-t dg-b")}${text(320, 330, "Kanzler/in + Minister", "dg-t dg-s")}
    ${box(460, 100, 160, 70, "dg-box dg-accent2")}${text(540, 124, "Bundesversammlung", "dg-t dg-b")}${text(540, 144, "Bundestag + gleich", "dg-t dg-xs")}${text(540, 160, "viele Ländervertreter", "dg-t dg-xs")}
    ${line(410, 120, 458, 130)}
    ${line(540, 170, 540, 198)}${text(552, 188, "wählt", "dg-t dg-s dg-muted", "start")}
    ${box(460, 200, 160, 50, "dg-box dg-soft")}${text(540, 222, "Bundespräsident", "dg-t dg-b")}${text(540, 240, "Staatsoberhaupt", "dg-t dg-s")}
    ${line(540, 250, 412, 310)}${text(500, 296, "ernennt", "dg-t dg-s dg-muted")}
    ${box(20, 240, 160, 60, "dg-box dg-soft")}${text(100, 264, "BVerfG", "dg-t dg-b")}${text(100, 284, "kontrolliert alle", "dg-t dg-s")}
  `, "Zusammenspiel der Verfassungsorgane"),

  ballot: () => svg("ballot", 640, 330, `
    ${box(40, 10, 560, 310, "dg-box")}
    ${text(320, 40, "Stimmzettel Bundestagswahl", "dg-t dg-b")}
    ${text(320, 60, "Sie haben 2 Stimmen", "dg-t dg-s dg-muted")}
    ${box(60, 76, 250, 228, "dg-box dg-soft")}${box(330, 76, 250, 228, "dg-box dg-accent2")}
    ${text(185, 102, "Erststimme", "dg-t dg-b")}${text(185, 122, "Person im Wahlkreis", "dg-t dg-s")}
    ${text(455, 102, "Zweitstimme", "dg-t dg-b")}${text(455, 122, "Landesliste einer Partei", "dg-t dg-s")}
    ${[0, 1, 2].map((i) => `<circle cx="90" cy="${156 + i * 40}" r="11" class="dg-box"/>${text(110, 161 + i * 40, ["Kandidat/in A", "Kandidat/in B", "Kandidat/in C"][i], "dg-t dg-s", "start")}`).join("")}
    ${[0, 1, 2].map((i) => `<circle cx="360" cy="${156 + i * 40}" r="11" class="dg-box"/>${text(380, 161 + i * 40, ["Partei X", "Partei Y", "Partei Z"][i], "dg-t dg-s", "start")}`).join("")}
    <path d="M84,150 l6,7 l10,-13" class="dg-check"/><path d="M354,190 l6,7 l10,-13" class="dg-check"/>
    ${text(185, 288, "299 Wahlkreise", "dg-t dg-xs dg-muted")}
    ${text(455, 280, "bestimmt die Sitzverteilung", "dg-t dg-xs dg-b")}
    ${text(455, 296, "(5-%-Hürde, Sainte-Laguë)", "dg-t dg-xs dg-muted")}
  `, "Stimmzettel mit Erst- und Zweitstimme"),

  osi: () => {
    const rows = [
      [7, "Anwendung", "HTTP, DNS, SMTP", "Daten"],
      [6, "Darstellung", "TLS, Kodierung", "Daten"],
      [5, "Sitzung", "Sitzungssteuerung", "Daten"],
      [4, "Transport", "TCP, UDP · Ports", "Segment"],
      [3, "Vermittlung", "IP · Router", "Paket"],
      [2, "Sicherung", "Ethernet, MAC · Switch", "Rahmen"],
      [1, "Bitübertragung", "Kabel, Funk · Hub", "Bits"]
    ];
    let b = text(70, 22, "Nr.", "dg-t dg-xs dg-muted") + text(200, 22, "Schicht", "dg-t dg-xs dg-muted") + text(410, 22, "Beispiele", "dg-t dg-xs dg-muted") + text(570, 22, "Einheit (PDU)", "dg-t dg-xs dg-muted");
    rows.forEach(([n, name, ex, pdu], i) => {
      const y = 32 + i * 44;
      const cls = n >= 5 ? "dg-box dg-accent2" : n === 4 ? "dg-box dg-accent" : "dg-box dg-soft";
      b += box(40, y, 560, 38, cls, 8) + text(70, y + 25, n, "dg-t dg-b") + text(200, y + 25, name, "dg-t dg-b") + text(410, y + 25, ex, "dg-t dg-s") + text(570, y + 25, pdu, "dg-t dg-s");
    });
    b += `<path d="M20,52 L20,330" class="dg-line" marker-end="MARK"/>` + text(14, 190, "Senden", "dg-t dg-xs dg-muted vert");
    b += `<path d="M622,330 L622,52" class="dg-line" marker-end="MARK"/>` + text(628, 190, "Empfangen", "dg-t dg-xs dg-muted vert");
    return svg("osi", 640, 345, b, "OSI-Modell mit sieben Schichten");
  },

  encapsulation: () => {
    const layers = [
      ["Anwendung", [["Daten", 230, 180, "dg-soft"]]],
      ["Transport", [["TCP/UDP", 150, 80, "dg-accent"], ["Daten", 230, 180, "dg-soft"]]],
      ["Vermittlung", [["IP-Header", 70, 80, "dg-accent2"], ["TCP/UDP", 150, 80, "dg-accent"], ["Daten", 230, 180, "dg-soft"]]],
      ["Sicherung", [["Eth-Header", 0 - 10, 80, "dg-box2"], ["IP-Header", 70, 80, "dg-accent2"], ["TCP/UDP", 150, 80, "dg-accent"], ["Daten", 230, 180, "dg-soft"], ["FCS", 410, 50, "dg-box2"]]]
    ];
    let b = "";
    layers.forEach(([name, parts], i) => {
      const y = 14 + i * 64;
      b += text(10, y + 28, name, "dg-t dg-s dg-b", "start");
      parts.forEach(([t, x, w, c]) => { b += box(x + 130, y, w, 42, `dg-box ${c}`, 6) + text(x + 130 + w / 2, y + 26, t, "dg-t dg-s"); });
      if (i < 3) b += line(400, y + 44, 400, y + 62);
    });
    b += text(320, 284, "Jede Schicht ergänzt beim Senden ihren Header – der Empfänger entfernt sie wieder.", "dg-t dg-xs dg-muted");
    return svg("encapsulation", 640, 296, b, "Kapselung der Daten durch die Schichten");
  },

  arp: () => svg("arp", 640, 300, `
    ${box(20, 20, 150, 60, "dg-box dg-soft")}${text(95, 46, "PC A", "dg-t dg-b")}${text(95, 66, "192.168.1.10", "dg-t dg-xs")}
    ${box(470, 20, 150, 60, "dg-box dg-soft")}${text(545, 46, "PC B", "dg-t dg-b")}${text(545, 66, "192.168.1.20", "dg-t dg-xs")}
    ${line(95, 80, 95, 290, "dg-line dg-dash", false)}${line(545, 80, 545, 290, "dg-line dg-dash", false)}
    ${line(97, 120, 541, 120)}
    ${box(150, 96, 340, 18, "dg-tag dg-accent", 4)}${text(320, 109, "ARP-Request · Ziel-MAC ff:ff:ff:ff:ff:ff (Broadcast)", "dg-t dg-xs")}
    ${text(320, 140, "„Wer hat 192.168.1.20? Sag es 192.168.1.10.“", "dg-t dg-s")}
    ${line(543, 190, 99, 190)}
    ${box(150, 166, 340, 18, "dg-tag dg-accent2", 4)}${text(320, 179, "ARP-Reply · Unicast an PC A", "dg-t dg-xs")}
    ${text(320, 210, "„192.168.1.20 ist bei MAC 00:1b:44:11:3a:b7.“", "dg-t dg-s")}
    ${box(110, 240, 420, 44, "dg-box dg-soft")}${text(320, 258, "PC A speichert die Zuordnung im ARP-Cache.", "dg-t dg-s")}
    ${text(320, 276, "Fremdes Netz? Dann wird die MAC des Gateways erfragt!", "dg-t dg-xs dg-b")}
  `, "Ablauf von ARP-Request und ARP-Reply"),

  csma: () => svg("csma", 640, 330, `
    ${text(160, 22, "CSMA/CD – Kabel-Ethernet (Halbduplex)", "dg-t dg-b")}
    ${text(480, 22, "CSMA/CA – WLAN", "dg-t dg-b")}
    ${[["Medium abhören (Carrier Sense)", "dg-soft"], ["frei → senden", "dg-soft"], ["Kollision erkannt? → Jam-Signal", "dg-accent"], ["zufällig warten (Backoff), neu", "dg-soft"]].map(([t, c], i) => box(30, 40 + i * 70, 260, 44, `dg-box ${c}`) + text(160, 67 + i * 70, t, "dg-t dg-s") + (i < 3 ? line(160, 84 + i * 70, 160, 108 + i * 70) : "")).join("")}
    ${[["Medium abhören", "dg-soft"], ["frei → zufällige Wartezeit", "dg-accent2"], ["senden (optional RTS/CTS)", "dg-soft"], ["auf ACK warten – sonst neu", "dg-soft"]].map(([t, c], i) => box(350, 40 + i * 70, 260, 44, `dg-box ${c}`) + text(480, 67 + i * 70, t, "dg-t dg-s") + (i < 3 ? line(480, 84 + i * 70, 480, 108 + i * 70) : "")).join("")}
    ${text(160, 320, "Detect: Kollision erkennen", "dg-t dg-xs dg-muted")}${text(480, 320, "Avoid: Kollision vermeiden", "dg-t dg-xs dg-muted")}
  `, "Ablauf CSMA/CD und CSMA/CA im Vergleich"),

  tcpudp: () => svg("tcpudp", 640, 320, `
    ${text(160, 22, "TCP – verbindungsorientiert", "dg-t dg-b")}${text(480, 22, "UDP – verbindungslos", "dg-t dg-b")}
    ${text(60, 50, "Client", "dg-t dg-s dg-b")}${text(260, 50, "Server", "dg-t dg-s dg-b")}
    ${line(60, 58, 60, 300, "dg-line dg-dash", false)}${line(260, 58, 260, 300, "dg-line dg-dash", false)}
    ${line(62, 80, 256, 110)}${text(160, 86, "SYN", "dg-t dg-s dg-b")}
    ${line(258, 130, 64, 160)}${text(160, 136, "SYN-ACK", "dg-t dg-s dg-b")}
    ${line(62, 180, 256, 210)}${text(160, 186, "ACK", "dg-t dg-s dg-b")}
    ${box(70, 222, 180, 30, "dg-box dg-accent", 6)}${text(160, 242, "Daten + Bestätigungen", "dg-t dg-xs")}
    ${text(160, 280, "3-Wege-Handshake", "dg-t dg-xs dg-muted")}
    ${text(380, 50, "Sender", "dg-t dg-s dg-b")}${text(580, 50, "Empfänger", "dg-t dg-s dg-b")}
    ${line(380, 58, 380, 300, "dg-line dg-dash", false)}${line(580, 58, 580, 300, "dg-line dg-dash", false)}
    ${[0, 1, 2, 3].map((i) => line(382, 90 + i * 44, 576, 100 + i * 44) + text(480, 92 + i * 44, `Datagramm ${i + 1}`, "dg-t dg-xs")).join("")}
    ${text(480, 280, "kein Handshake, keine Quittung", "dg-t dg-xs dg-muted")}
  `, "TCP-Handshake im Vergleich zu UDP"),

  subnet: () => {
    let b = text(320, 22, "192.168.10.0 /26 → Maske 255.255.255.192", "dg-t dg-b");
    for (let i = 0; i < 32; i++) {
      const x = 24 + i * 18.5 + Math.floor(i / 8) * 4;
      b += box(x, 40, 16, 32, i < 26 ? "dg-box dg-accent2" : "dg-box dg-accent", 3) + text(x + 8, 62, i < 26 ? "1" : "0", "dg-t dg-xs");
    }
    b += text(260, 92, "26 Netzbits", "dg-t dg-s dg-b") + text(580, 92, "6 Hostbits", "dg-t dg-s dg-b");
    b += text(320, 118, "Blockgröße 2⁶ = 64 · Hosts je Subnetz 64 − 2 = 62", "dg-t dg-s");
    ["0", "64", "128", "192"].forEach((n, i) => {
      const x = 24 + i * 152;
      b += box(x, 136, 140, 150, i === 0 ? "dg-box dg-soft" : "dg-box", 8) + text(x + 70, 160, `Subnetz ${i + 1}`, "dg-t dg-s dg-b");
      b += text(x + 70, 184, `Netz .${n}`, "dg-t dg-xs") + text(x + 70, 206, `Hosts .${+n + 1}–.${+n + 62}`, "dg-t dg-xs") + text(x + 70, 228, `Broadcast .${+n + 63}`, "dg-t dg-xs");
      b += text(x + 70, 262, "62 Hosts", "dg-t dg-xs dg-muted");
    });
    return svg("subnet", 640, 300, b, "Subnetting eines /26-Netzes");
  },

  capture: () => {
    const rows = [
      ["Frame", "Mitschnitt: 74 Bytes auf der Leitung", "dg-box"],
      ["Ethernet II", "Ziel-MAC · Quell-MAC · Typ 0x0800 (IPv4)", "dg-box dg-soft"],
      ["IPv4", "Quell-IP · Ziel-IP · TTL · Protokoll 6 (TCP) / 17 (UDP)", "dg-box dg-accent2"],
      ["TCP / UDP", "Quellport · Zielport (z. B. 443) · Flags SYN/ACK", "dg-box dg-accent"],
      ["Anwendung", "z. B. TLS / HTTP / DNS – Nutzdaten", "dg-box dg-soft"]
    ];
    let b = "";
    rows.forEach(([t, d, c], i) => {
      const x = 20 + i * 22;
      b += box(x, 14 + i * 50, 600 - i * 44, 42, c, 8) + text(x + 14, 40 + i * 50, "▸ " + t, "dg-t dg-s dg-b", "start") + text(x + 150, 40 + i * 50, d, "dg-t dg-xs", "start");
    });
    b += text(320, 284, "Wie in Wireshark: jede Schicht ist in die vorherige eingebettet.", "dg-t dg-xs dg-muted");
    return svg("capture", 640, 296, b, "Aufbau eines Paketmitschnitts nach Schichten");
  },

  // ---------- MFA: Verdauungsapparat ----------
  tract: () => organMap("tract", false),
  "tract-blank": () => organMap("tract", true),
  stomach: () => organMap("stomach", false),
  "stomach-blank": () => organMap("stomach", true),
  colon: () => organMap("colon", false),
  "colon-blank": () => organMap("colon", true),
  liver: () => organMap("liver", false),
  "liver-blank": () => organMap("liver", true),

  swallow: () => {
    const phases = [
      ["1 Orale Phase", "willkürlich", ["Zunge formt den Bolus", "und schiebt ihn", "in den Rachen"]],
      ["2 Pharyngeale Phase", "Reflex", ["Gaumensegel ↑ → Nasenraum zu", "Kehldeckel → Luftröhre zu", "kurzer Atemstopp"]],
      ["3 Ösophageale Phase", "Reflex", ["oberer Schließmuskel öffnet", "Peristaltik schiebt den", "Bolus in den Magen"]]
    ];
    let b = text(330, 24, "Der Schluckakt", "dg-t dg-b");
    phases.forEach(([t, s, l], i) => {
      const x = 14 + i * 218;
      b += box(x, 38, 196, 138, i ? "dg-box dg-soft" : "dg-box dg-accent") + text(x + 98, 62, t, "dg-t dg-s dg-b") + text(x + 98, 82, s, "dg-t dg-xs dg-muted");
      l.forEach((z, j) => { b += text(x + 98, 110 + j * 20, z, "dg-t dg-xs"); });
      if (i < 2) b += line(x + 198, 107, x + 216, 107);
    });
    const glands = [
      ["Glandula parotidea", "Ohrspeicheldrüse", "vor/unter dem Ohr", "dünnflüssig, viel Amylase"],
      ["Glandula submandibularis", "Unterkieferspeicheldrüse", "unter dem Unterkiefer", "gemischter Speichel"],
      ["Glandula sublingualis", "Unterzungenspeicheldrüse", "unter der Zunge", "eher schleimig"]
    ];
    b += text(330, 210, "Die drei großen Speicheldrüsen (zusammen ca. 1–1,5 l Speichel/Tag)", "dg-t dg-s dg-b");
    glands.forEach(([f, d, w, z], i) => {
      const x = 14 + i * 218;
      b += box(x, 222, 196, 100, "dg-box dg-accent2") + text(x + 98, 246, f, "dg-t dg-xs dg-b") + text(x + 98, 266, d, "dg-t dg-xs") + text(x + 98, 290, w, "dg-t dg-xs dg-muted") + text(x + 98, 308, z, "dg-t dg-xs dg-muted");
    });
    return svg("swallow", 668, 334, b, "Drei Phasen des Schluckakts und die drei großen Speicheldrüsen");
  },

  villi: () => {
    let b = text(330, 24, "Oberflächenvergrößerung im Dünndarm", "dg-t dg-b");
    const cols = [["Kerckring-Falten", "× 3", "Ringfalten der Schleimhaut"], ["Darmzotten (Villi)", "× 10", "mit Kapillaren + Lymphgefäß"], ["Mikrovilli", "× 20", "Bürstensaum jeder Zelle"]];
    cols.forEach(([t, f, s], i) => {
      const x = 14 + i * 218;
      b += box(x, 38, 196, 210, "dg-box dg-soft") + text(x + 98, 62, t, "dg-t dg-s dg-b") + text(x + 98, 236, s, "dg-t dg-xs dg-muted");
      b += `<rect x="${x + 150}" y="70" width="38" height="22" rx="11" class="dg-box dg-accent"/>` + text(x + 169, 86, f, "dg-t dg-xs dg-b");
      if (i < 2) b += line(x + 198, 143, x + 216, 143);
    });
    b += `<path d="M30,200 Q55,110 80,200 Q105,110 130,200 Q155,110 180,200 L195,200" class="dg-tube dg-thin"/>`;
    for (let k = 0; k < 4; k++) {
      const x = 258 + k * 40;
      b += `<path d="M${x},212 L${x},128 Q${x + 14},104 ${x + 28},128 L${x + 28},212" class="dg-box dg-accent2"/>`;
      b += `<path d="M${x + 7},210 L${x + 7},132 Q${x + 14},120 ${x + 21},132 L${x + 21},210" class="dg-vessel"/>`;
      b += `<line x1="${x + 14}" y1="208" x2="${x + 14}" y2="135" class="dg-lymph"/>`;
    }
    b += box(478, 140, 140, 72, "dg-box dg-accent2", 4);
    for (let k = 0; k < 17; k++) b += `<line x1="${484 + k * 8}" y1="140" x2="${484 + k * 8}" y2="116" class="dg-check"/>`;
    b += text(548, 182, "Darmzelle", "dg-t dg-xs");
    b += box(14, 262, 640, 50, "dg-box dg-accent") + text(334, 283, "3 × 10 × 20 ≈ 600-fache Fläche (ca. 200 m²) → maximale Resorption", "dg-t dg-s dg-b");
    b += text(334, 302, "Zucker & Aminosäuren → Blut → Pfortader → Leber   ·   Fette → Lymphe", "dg-t dg-xs");
    return svg("villi", 668, 322, b, "Falten, Zotten und Mikrovilli vergrößern die Oberfläche etwa 600-fach");
  },

  pancreas: () => {
    let b = box(14, 14, 316, 270, "dg-box dg-soft") + text(172, 40, "Exokrin (ca. 98 %)", "dg-t dg-b") + text(172, 60, "Pankreassaft über Gang → Duodenum", "dg-t dg-xs dg-muted");
    const ex = [["Amylase", "Stärke → Maltose"], ["Lipase", "Fette → Fettsäuren + Glycerin"], ["Trypsin(ogen)", "Eiweiß → Peptide"], ["Chymotrypsin(ogen)", "Eiweiß → Peptide"], ["Bikarbonat", "neutralisiert den sauren Chymus"]];
    ex.forEach(([e, w], i) => { b += box(28, 74 + i * 40, 288, 32, "dg-box", 8) + text(38, 95 + i * 40, e, "dg-t dg-xs dg-b", "start") + text(306, 95 + i * 40, w, "dg-t dg-xs", "end"); });
    b += box(342, 14, 316, 270, "dg-box dg-accent2") + text(500, 40, "Endokrin (Langerhans-Inseln)", "dg-t dg-b") + text(500, 60, "Hormone direkt ins Blut", "dg-t dg-xs dg-muted");
    const en = [["B-Zellen → Insulin", "senkt den Blutzucker ↓", "Glukose in die Zellen"], ["A-Zellen → Glukagon", "erhöht den Blutzucker ↑", "Glykogenabbau in der Leber"]];
    en.forEach(([h, w, z], i) => { b += box(356, 76 + i * 100, 288, 86, "dg-box", 8) + text(500, 102 + i * 100, h, "dg-t dg-s dg-b") + text(500, 126 + i * 100, w, "dg-t dg-xs") + text(500, 146 + i * 100, z, "dg-t dg-xs dg-muted"); });
    b += text(336, 312, "Bildungsorte: Amylase – Speicheldrüsen + Pankreas · Lipase, Trypsin, Chymotrypsin – Pankreas", "dg-t dg-xs");
    b += text(336, 332, "Maltase – Dünndarmschleimhaut · Pepsin(ogen) – Magen (Hauptzellen)", "dg-t dg-xs");
    return svg("pancreas", 672, 344, b, "Exokrines und endokrines Pankreas mit Enzymen und Hormonen");
  },

  diabetes: () => {
    let b = text(334, 24, "Diabetes mellitus – Diagnose (ein Kriterium genügt, Bestätigung nötig)", "dg-t dg-s dg-b");
    const c = [["HbA1c", "≥ 6,5 %", "(48 mmol/mol)"], ["Nüchtern-Glukose", "≥ 126 mg/dl", "(7,0 mmol/l)"], ["Gelegenheits-Glukose", "≥ 200 mg/dl", "(11,1 mmol/l)"], ["oGTT nach 2 h", "≥ 200 mg/dl", "(11,1 mmol/l)"]];
    c.forEach(([t, v, m], i) => { const x = 14 + i * 162; b += box(x, 38, 150, 86, "dg-box dg-accent") + text(x + 75, 62, t, "dg-t dg-xs dg-b") + text(x + 75, 90, v, "dg-t dg-b") + text(x + 75, 112, m, "dg-t dg-xs dg-muted"); });
    b += text(334, 156, "Spätschäden (Folgeerkrankungen)", "dg-t dg-s dg-b");
    const s = [["Makroangiopathie", "große Gefäße", ["Herzinfarkt", "Schlaganfall", "pAVK"]], ["Mikroangiopathie", "kleine Gefäße", ["Retinopathie (Auge)", "Nephropathie (Niere)", "→ Erblindung, Dialyse"]], ["Neuropathie", "Nerven", ["Kribbeln, Taubheit", "Diabetisches Fußsyndrom", "→ Amputationsgefahr"]]];
    s.forEach(([t, u, l], i) => {
      const x = 14 + i * 216;
      b += box(x, 170, 204, 132, "dg-box dg-soft") + text(x + 102, 194, t, "dg-t dg-s dg-b") + text(x + 102, 214, u, "dg-t dg-xs dg-muted");
      l.forEach((z, j) => { b += text(x + 102, 240 + j * 20, z, "dg-t dg-xs"); });
    });
    return svg("diabetes", 668, 314, b, "Diagnosekriterien und Spätschäden des Diabetes mellitus");
  },

  ifobt: () => {
    let b = text(334, 24, "Körperliche Untersuchung des Bauchs", "dg-t dg-s dg-b");
    ["Anamnese", "Inspektion", "Auskultation", "Perkussion", "Palpation"].forEach((t, i) => {
      const x = 14 + i * 130;
      b += box(x, 36, 116, 36, i ? "dg-box dg-soft" : "dg-box dg-accent", 18) + text(x + 58, 59, t, "dg-t dg-xs dg-b");
      if (i < 4) b += line(x + 117, 54, x + 128, 54);
    });
    b += text(334, 92, "am Bauch: erst abhören, dann klopfen und tasten (Darmgeräusche nicht verfälschen)", "dg-t dg-xs dg-muted");
    b += text(334, 128, "iFOB-Test (immunologischer Stuhltest auf verborgenes Blut) – keine Diät nötig", "dg-t dg-s dg-b");
    const st = [["1", "Röhrchen", "beschriften"], ["2", "Stuhl auffangen,", "nicht aus dem Wasser"], ["3", "an mehreren Stellen", "einstechen"], ["4", "Stäbchen zurück,", "fest verschließen"], ["5", "rasch in die Praxis,", "bis dahin kühl"]];
    st.forEach(([n, a, c], i) => {
      const x = 14 + i * 130;
      b += box(x, 142, 116, 86, "dg-box dg-accent2") + `<circle cx="${x + 58}" cy="164" r="12" class="dg-mark"/>` + text(x + 58, 169, n, "dg-t dg-xs dg-b") + text(x + 58, 196, a, "dg-t dg-xs") + text(x + 58, 214, c, "dg-t dg-xs");
      if (i < 4) b += line(x + 117, 185, x + 128, 185);
    });
    b += box(14, 244, 636, 52, "dg-box dg-accent") + text(334, 266, "Positiv → Abklärung durch Koloskopie (Darmspiegelung)", "dg-t dg-s dg-b");
    b += text(334, 286, "Anspruch (seit 04/2025): Frauen und Männer ab 50 – iFOBT alle 2 Jahre oder 2 Koloskopien im Abstand von 10 Jahren", "dg-t dg-xs");
    return svg("ifobt", 664, 306, b, "Reihenfolge der Bauchuntersuchung und Ablauf des iFOB-Tests");
  }
};

export function renderDiagram(id) {
  return diagrams[id] ? diagrams[id]() : "";
}
