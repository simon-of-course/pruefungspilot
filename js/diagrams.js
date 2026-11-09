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
  }
};

export function renderDiagram(id) {
  return diagrams[id] ? diagrams[id]() : "";
}
