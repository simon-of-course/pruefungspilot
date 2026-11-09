// Ergänzungen je Level: Fachbegriffe, typische Fehler, Merkhilfen, zusätzliche Aufgaben,
// Grafiken, interaktive Werkzeuge und Videos. Wird in app.js mit content.js zusammengeführt.
export const levelExtras = {
  politics: [
    {
      diagram: "rights",
      mnemonic: "„Jeder“ oder „alle Menschen“ im Artikeltext → Menschenrecht. „Alle Deutschen“ → Bürgerrecht.",
      keyTerms: [
        { term: "Demokratie", def: "Herrschaftsform, in der alle Staatsgewalt vom Volk ausgeht (Art. 20 Abs. 2 GG) – durch Wahlen und Abstimmungen sowie durch Parlament, Regierung und Gerichte." },
        { term: "Bundesstaat", def: "Staat aus Bund und Ländern; Deutschland hat 16 Länder mit eigenen Parlamenten und Regierungen (Art. 20 Abs. 1 GG)." },
        { term: "Menschenwürde", def: "Höchster Wert des Grundgesetzes (Art. 1 Abs. 1 GG): unantastbar; alle staatliche Gewalt muss sie achten und schützen." },
        { term: "Menschenrecht (Jedermannsrecht)", def: "Grundrecht, das jedem Menschen zusteht, z. B. Meinungsfreiheit (Art. 5) oder Glaubensfreiheit (Art. 4)." },
        { term: "Bürgerrecht (Deutschenrecht)", def: "Grundrecht, das nur Deutschen zusteht, z. B. Versammlungsfreiheit (Art. 8) oder Berufsfreiheit (Art. 12)." },
        { term: "Ewigkeitsklausel", def: "Art. 79 Abs. 3 GG: Die Grundsätze aus Art. 1 und Art. 20 dürfen auch durch eine Verfassungsänderung nicht abgeschafft werden." }
      ],
      mistakes: [
        "„Grundrechte gelten nur für Deutsche.“ – Falsch: Viele Grundrechte sind Menschenrechte und gelten für alle.",
        "„Demokratie heißt: Die Mehrheit darf alles.“ – Falsch: Grundrechte schützen auch Minderheiten vor der Mehrheit.",
        "Art. 1 nur sinngemäß wiedergeben – in der Prüfung lieber den genauen Wortlaut „Die Würde des Menschen ist unantastbar.“ verwenden."
      ],
      tasks: [
        {
          type: "table",
          id: "pol-l1-rights-table",
          title: "Arbeitsblatt: Menschenrecht oder Bürgerrecht?",
          prompt: "Ordne jedes Grundrecht zu. Schreibe „Menschenrecht“ oder „Bürgerrecht“.",
          rows: [
            { label: "Meinungsfreiheit (Art. 5 GG: „Jeder hat das Recht …“)", accepted: ["menschenrecht", "jedermannsrecht"], expected: "Menschenrecht" },
            { label: "Versammlungsfreiheit (Art. 8 GG: „Alle Deutschen …“)", accepted: ["bürgerrecht", "buergerrecht", "deutschenrecht"], expected: "Bürgerrecht" },
            { label: "Glaubens- und Gewissensfreiheit (Art. 4 GG)", accepted: ["menschenrecht", "jedermannsrecht"], expected: "Menschenrecht" },
            { label: "Berufsfreiheit (Art. 12 GG: „Alle Deutschen …“)", accepted: ["bürgerrecht", "buergerrecht", "deutschenrecht"], expected: "Bürgerrecht" },
            { label: "Gleichheit vor dem Gesetz (Art. 3 GG: „Alle Menschen …“)", accepted: ["menschenrecht", "jedermannsrecht"], expected: "Menschenrecht" }
          ]
        },
        {
          type: "writing",
          id: "pol-l1-writing",
          title: "Erkläre es selbst: Menschen- und Bürgerrechte",
          prompt: "Erkläre einer Mitschülerin den Unterschied zwischen Menschenrechten und Bürgerrechten. Nenne je ein Beispiel.",
          modelAnswer: "Menschenrechte stehen jedem Menschen zu, unabhängig von der Staatsangehörigkeit – zum Beispiel die Menschenwürde oder die Meinungsfreiheit. Bürgerrechte stehen nur deutschen Staatsangehörigen zu, zum Beispiel das Wahlrecht zum Bundestag oder die Versammlungsfreiheit. Am Wortlaut erkennt man den Unterschied: „Jeder“ bzw. „alle Menschen“ oder „alle Deutschen“.",
          criteria: ["Menschenrechte gelten für alle Menschen.", "Bürgerrechte knüpfen an die deutsche Staatsangehörigkeit an.", "Je ein passendes Beispiel."]
        }
      ],
      extraTest: [
        { id: "pol-l1-q4", prompt: "Wie beschreibt Art. 20 Abs. 1 GG die Bundesrepublik Deutschland?", options: ["Als demokratischen und sozialen Bundesstaat", "Als zentralistischen Einheitsstaat", "Als konstitutionelle Monarchie"], answer: 0, explanation: "Art. 20 Abs. 1 GG: „Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat.“" },
        { id: "pol-l1-q5", type: "short", prompt: "Wie heißt die Regel in Art. 79 Abs. 3 GG, nach der die Grundsätze aus Art. 1 und 20 nicht abgeschafft werden dürfen?", accepted: ["ewigkeitsklausel", "ewigkeitsgarantie"], expected: "Ewigkeitsklausel", explanation: "Die Ewigkeitsklausel schützt Menschenwürde, Demokratie, Rechts-, Sozial- und Bundesstaat vor der Abschaffung." }
      ]
    },
    {
      diagram: "powers",
      mnemonic: "L-E-J: Legislative legt fest, Exekutive erledigt, Judikative judiziert (urteilt).",
      keyTerms: [
        { term: "Legislative", def: "Gesetzgebende Gewalt; auf Bundesebene Bundestag und (mitwirkend) Bundesrat." },
        { term: "Exekutive", def: "Ausführende Gewalt: Regierung, Verwaltung, Polizei setzen Gesetze um." },
        { term: "Judikative", def: "Rechtsprechende Gewalt: unabhängige Gerichte entscheiden Rechtsstreitigkeiten." },
        { term: "Gewaltenteilung", def: "Aufteilung der Staatsgewalt auf voneinander unabhängige Organe, die sich gegenseitig kontrollieren – Schutz vor Machtmissbrauch." },
        { term: "Bundesverfassungsgericht", def: "Höchstes deutsches Gericht in Verfassungsfragen mit Sitz in Karlsruhe; „Hüter des Grundgesetzes“." },
        { term: "Verfassungsbeschwerde", def: "Jeder kann sie beim Bundesverfassungsgericht erheben, wenn er sich durch die öffentliche Gewalt in seinen Grundrechten verletzt sieht." },
        { term: "Vertikale Gewaltenteilung", def: "Verteilung staatlicher Aufgaben auf Bund, Länder und Kommunen (Föderalismus)." }
      ],
      mistakes: [
        "Bundesrat und Bundesregierung verwechseln – der Bundesrat wirkt an der Gesetzgebung mit, die Regierung führt aus.",
        "„Die Polizei spricht Recht.“ – Nein: Polizei gehört zur Exekutive, Recht sprechen nur Gerichte.",
        "Das Bundesverfassungsgericht in Berlin verorten – es sitzt in Karlsruhe."
      ],
      tasks: [
        {
          type: "table",
          id: "pol-l2-powers-table",
          title: "Arbeitsblatt: Wer gehört zu welcher Gewalt?",
          prompt: "Trage Legislative, Exekutive oder Judikative ein.",
          rows: [
            { label: "Deutscher Bundestag", accepted: ["legislative"], expected: "Legislative" },
            { label: "Bundesregierung", accepted: ["exekutive"], expected: "Exekutive" },
            { label: "Polizei", accepted: ["exekutive"], expected: "Exekutive" },
            { label: "Amtsgericht", accepted: ["judikative"], expected: "Judikative" },
            { label: "Bundesverfassungsgericht", accepted: ["judikative"], expected: "Judikative" },
            { label: "Finanzamt (Verwaltung)", accepted: ["exekutive"], expected: "Exekutive" }
          ]
        },
        {
          type: "writing",
          id: "pol-l2-writing",
          title: "Erkläre es selbst: Warum Gewaltenteilung?",
          prompt: "Begründe, warum die Staatsgewalt auf drei Gewalten verteilt wird. Was könnte passieren, wenn eine Person alle Gewalten hätte?",
          modelAnswer: "Die Gewaltenteilung verhindert, dass eine Person oder Gruppe die gesamte Macht besitzt. Die Gewalten kontrollieren sich gegenseitig: Gerichte können zum Beispiel Entscheidungen der Verwaltung überprüfen und das Bundesverfassungsgericht Gesetze aufheben. Hätte eine Person alle Gewalten, könnte sie Gesetze machen, selbst ausführen und selbst über Streitfälle urteilen – Machtmissbrauch und Willkür wären kaum zu verhindern.",
          criteria: ["Schutz vor Machtmissbrauch/Machtkonzentration.", "Gegenseitige Kontrolle mit Beispiel.", "Folgen einer Machtbündelung beschrieben."]
        }
      ],
      extraTest: [
        { id: "pol-l2-q4", prompt: "Wer kann eine Verfassungsbeschwerde erheben?", options: ["Jeder, der sich durch die öffentliche Gewalt in seinen Grundrechten verletzt sieht", "Nur Abgeordnete des Bundestages", "Nur der Bundespräsident"], answer: 0, explanation: "Die Verfassungsbeschwerde steht grundsätzlich jedem offen (Art. 93 Abs. 1 Nr. 4a GG)." },
        { id: "pol-l2-q5", prompt: "Was beschreibt die vertikale Gewaltenteilung?", options: ["Die Aufteilung der Staatsaufgaben auf Bund, Länder und Kommunen", "Die Trennung von Kirche und Staat", "Die Teilung des Bundestages in Fraktionen"], answer: 0, explanation: "Vertikal = zwischen den staatlichen Ebenen (Föderalismus); horizontal = Legislative, Exekutive, Judikative." }
      ]
    },
    {
      diagram: "organs",
      mnemonic: "Bundes-TAG = Volksvertretung (tagt für das Volk), Bundes-RAT = Länder beraten mit.",
      keyTerms: [
        { term: "Bundestag", def: "Vom Volk gewähltes Parlament: beschließt Gesetze und den Haushalt, wählt den Bundeskanzler, kontrolliert die Regierung. Seit 2025 höchstens 630 Sitze." },
        { term: "Bundesrat", def: "Vertretung der 16 Länder auf Bundesebene; Mitglieder der Landesregierungen wirken an Gesetzgebung und Verwaltung des Bundes mit." },
        { term: "Bundesregierung", def: "Bundeskanzler/in und Bundesminister/innen (Kabinett); leitet die Politik und führt Gesetze aus." },
        { term: "Richtlinienkompetenz", def: "Der Bundeskanzler bestimmt die Richtlinien der Politik und trägt dafür die Verantwortung (Art. 65 GG)." },
        { term: "Bundespräsident", def: "Staatsoberhaupt: vertritt Deutschland völkerrechtlich, fertigt Gesetze aus, ernennt Kanzler und Minister; Amtszeit 5 Jahre, einmal wiederwählbar." },
        { term: "Bundesversammlung", def: "Wählt den Bundespräsidenten; besteht aus allen Bundestagsabgeordneten und ebenso vielen von den Landesparlamenten gewählten Mitgliedern." },
        { term: "Konstruktives Misstrauensvotum", def: "Der Bundestag kann den Kanzler nur abwählen, indem er mit Mehrheit einen Nachfolger wählt (Art. 67 GG)." }
      ],
      mistakes: [
        "„Das Volk wählt den Bundeskanzler direkt.“ – Nein: Der Bundestag wählt ihn (auf Vorschlag des Bundespräsidenten).",
        "„Der Bundespräsident wird vom Volk gewählt.“ – Nein: Die Bundesversammlung wählt ihn.",
        "Bundesrat mit Bundestag gleichsetzen – der Bundesrat wird nicht vom Volk gewählt, sondern von den Landesregierungen besetzt."
      ],
      tasks: [
        {
          type: "table",
          id: "pol-l3-organs-table",
          title: "Arbeitsblatt: Welches Organ ist gemeint?",
          prompt: "Nenne das zuständige Verfassungsorgan.",
          rows: [
            { label: "Wählt den Bundeskanzler", accepted: ["bundestag", "der bundestag"], expected: "Bundestag" },
            { label: "Vertritt die Länder auf Bundesebene", accepted: ["bundesrat", "der bundesrat"], expected: "Bundesrat" },
            { label: "Ist das Staatsoberhaupt", accepted: ["bundespräsident", "bundespraesident", "der bundespräsident"], expected: "Bundespräsident" },
            { label: "Bestimmt die Richtlinien der Politik", accepted: ["bundeskanzler", "bundeskanzlerin", "kanzler", "der bundeskanzler"], expected: "Bundeskanzler/in" },
            { label: "Wählt den Bundespräsidenten", accepted: ["bundesversammlung", "die bundesversammlung"], expected: "Bundesversammlung" }
          ]
        }
      ],
      extraTest: [
        { id: "pol-l3-q6", prompt: "Wer wählt den Bundeskanzler?", options: ["Der Bundestag auf Vorschlag des Bundespräsidenten", "Das Volk direkt", "Der Bundesrat"], answer: 0, explanation: "Art. 63 GG: Der Bundeskanzler wird auf Vorschlag des Bundespräsidenten vom Bundestag gewählt." },
        { id: "pol-l3-q7", prompt: "Was bedeutet „konstruktives Misstrauensvotum“?", options: ["Der Bundestag kann den Kanzler nur abwählen, wenn er gleichzeitig einen Nachfolger wählt.", "Der Bundesrat kann jeden Minister entlassen.", "Das Volk kann den Kanzler per Volksentscheid abwählen."], answer: 0, explanation: "Art. 67 GG – so soll eine Regierungskrise ohne neue Regierung vermieden werden." }
      ]
    },
    {
      diagram: "ballot",
      tool: "seats",
      mnemonic: "Wahlgrundsätze: „Alle Unsere Freunde Gehen Gern“ – allgemein, unmittelbar, frei, gleich, geheim.",
      keyTerms: [
        { term: "Erststimme", def: "Stimme für eine Person (Kandidat/in) im eigenen Wahlkreis; Deutschland hat 299 Wahlkreise." },
        { term: "Zweitstimme", def: "Stimme für die Landesliste einer Partei; bestimmt maßgeblich, wie viele Sitze eine Partei bekommt." },
        { term: "Wahlgrundsätze", def: "Art. 38 Abs. 1 GG: allgemein, unmittelbar, frei, gleich und geheim." },
        { term: "Fünf-Prozent-Hürde", def: "Parteien brauchen grundsätzlich mindestens 5 % der Zweitstimmen, um bei der Sitzverteilung berücksichtigt zu werden." },
        { term: "Grundmandatsklausel", def: "Ausnahme von der 5-%-Hürde: Eine Partei, die mindestens drei Wahlkreise gewinnt, nimmt trotzdem an der Sitzverteilung teil (vom BVerfG 2024 vorerst bestätigt)." },
        { term: "Zweitstimmendeckung", def: "Seit 2023/2025: Eine Partei bekommt höchstens so viele Sitze, wie ihr nach Zweitstimmen zustehen – Wahlkreissieger ohne Deckung erhalten kein Mandat." },
        { term: "Aktives Wahlrecht", def: "Bei der Bundestagswahl: deutsche Staatsangehörige ab 18 Jahren (Art. 38 Abs. 2 GG)." }
      ],
      mistakes: [
        "Erst- und Zweitstimme vertauschen – Erststimme = Person, Zweitstimme = Partei.",
        "„Die Erststimme ist wichtiger, weil sie zuerst kommt.“ – Nein: Für die Stärke der Parteien ist die Zweitstimme entscheidend.",
        "„Öffentlich“ als Wahlgrundsatz nennen – richtig ist „geheim“."
      ],
      tasks: [
        {
          type: "table",
          id: "pol-l4-principles-table",
          title: "Arbeitsblatt: Welcher Wahlgrundsatz ist gemeint?",
          prompt: "Trage den passenden Wahlgrundsatz ein (allgemein, unmittelbar, frei, gleich, geheim).",
          rows: [
            { label: "Alle Wahlberechtigten dürfen wählen – unabhängig von Einkommen, Geschlecht oder Religion.", accepted: ["allgemein"], expected: "allgemein" },
            { label: "Die Abgeordneten werden direkt gewählt, ohne Wahlmänner dazwischen.", accepted: ["unmittelbar"], expected: "unmittelbar" },
            { label: "Niemand darf zur Wahl einer bestimmten Partei gezwungen oder unter Druck gesetzt werden.", accepted: ["frei"], expected: "frei" },
            { label: "Jede Stimme hat das gleiche Gewicht.", accepted: ["gleich"], expected: "gleich" },
            { label: "Niemand darf erfahren, wie jemand gewählt hat (Wahlkabine).", accepted: ["geheim"], expected: "geheim" }
          ]
        },
        {
          type: "writing",
          id: "pol-l4-writing",
          title: "Erkläre es selbst: Zwei Stimmen",
          prompt: "Erkläre, wofür du bei der Bundestagswahl die Erst- und die Zweitstimme abgibst und warum die Zweitstimme für die Sitzverteilung wichtiger ist.",
          modelAnswer: "Mit der Erststimme wähle ich eine Kandidatin oder einen Kandidaten in meinem Wahlkreis. Mit der Zweitstimme wähle ich die Landesliste einer Partei. Die Zweitstimmen entscheiden, wie viele der Sitze im Bundestag eine Partei insgesamt erhält; seit der Wahlrechtsreform bekommt eine Partei höchstens so viele Sitze, wie ihr nach Zweitstimmen zustehen.",
          criteria: ["Erststimme = Person im Wahlkreis.", "Zweitstimme = Partei/Landesliste.", "Zweitstimme bestimmt die Sitzanteile der Parteien."]
        }
      ],
      extraTest: [
        { id: "pol-l4-q4", prompt: "Was bedeutet der Wahlgrundsatz „unmittelbar“?", options: ["Die Wähler wählen die Abgeordneten direkt, ohne Zwischeninstanz.", "Man muss sofort nach Erhalt der Wahlbenachrichtigung wählen.", "Die Stimme wird unmittelbar veröffentlicht."], answer: 0, explanation: "Unmittelbar heißt: Zwischen Wählern und Abgeordneten stehen keine Wahlmänner." },
        { id: "pol-l4-q5", type: "short", prompt: "Ab welchem Alter darf man in Deutschland den Bundestag wählen?", accepted: ["18", "18 jahre", "ab 18", "ab 18 jahren"], expected: "18 Jahre", explanation: "Art. 38 Abs. 2 GG: Wahlberechtigt ist, wer das 18. Lebensjahr vollendet hat." }
      ]
    }
  ],
  network: [
    {
      diagram: "osi",
      tool: "osi-game",
      mnemonic: "Von unten nach oben: „Bitte Suche Vernünftige Transporte Seit Dem Abend“ (1 → 7).",
      keyTerms: [
        { term: "OSI-Modell", def: "Referenzmodell mit sieben Schichten, das Netzwerkkommunikation in klar abgegrenzte Aufgaben teilt." },
        { term: "Kapselung (Encapsulation)", def: "Jede Schicht verpackt die Daten der darüberliegenden Schicht und ergänzt eigene Steuerinformationen (Header)." },
        { term: "PDU", def: "Protocol Data Unit – Dateneinheit einer Schicht: Bits (1), Rahmen/Frame (2), Paket (3), Segment bzw. Datagramm (4)." },
        { term: "Repeater / Hub", def: "Arbeiten auf Schicht 1: verstärken bzw. verteilen Signale, ohne Adressen auszuwerten." },
        { term: "Switch", def: "Arbeitet typisch auf Schicht 2 und leitet Rahmen anhand von MAC-Adressen gezielt weiter." },
        { term: "Router", def: "Arbeitet auf Schicht 3 und verbindet IP-Netze; entscheidet anhand der Ziel-IP-Adresse." }
      ],
      mistakes: [
        "Reihenfolge von oben statt von unten zählen – Schicht 1 ist die Bitübertragung.",
        "Switch und Router verwechseln: Switch = MAC/Schicht 2, Router = IP/Schicht 3.",
        "Ports (Schicht 4) mit physischen Anschlüssen am Switch verwechseln."
      ],
      extraTest: [
        { id: "net-l1-q4", prompt: "Wie heißt die Dateneinheit (PDU) auf Schicht 2?", options: ["Rahmen (Frame)", "Segment", "Paket"], answer: 0, explanation: "Schicht 2 überträgt Rahmen (Frames); Schicht 3 Pakete, Schicht 4 Segmente bzw. Datagramme." }
      ]
    },
    {
      diagram: "encapsulation",
      mnemonic: "MAC = „Mein Abschnitt Cheffe“ (nur bis zum nächsten Gerät), IP = Ende-zu-Ende, Port = Dienst.",
      keyTerms: [
        { term: "MAC-Adresse", def: "48 Bit lange Hardware-Adresse einer Netzwerkschnittstelle, meist hexadezimal geschrieben (z. B. 00:1A:2B:3C:4D:5E)." },
        { term: "Ethernet-Rahmen", def: "Schicht-2-Dateneinheit mit Ziel-MAC, Quell-MAC, EtherType, Nutzdaten und Prüfsumme (FCS)." },
        { term: "EtherType", def: "Feld im Ethernet-Rahmen, das den Inhalt angibt: 0x0800 = IPv4, 0x0806 = ARP, 0x86DD = IPv6." },
        { term: "Standardgateway", def: "Router im lokalen Netz, an den Pakete für Ziele außerhalb des eigenen Netzes gesendet werden." },
        { term: "Portnummer", def: "16-Bit-Nummer in TCP/UDP, die einen Dienst bzw. Prozess auf dem Zielgerät kennzeichnet (z. B. 443 = HTTPS)." }
      ],
      mistakes: [
        "„Die Ziel-MAC ist die des Internetservers.“ – Nein: Für entfernte Ziele ist es die MAC des Gateways.",
        "„Die Ziel-IP ändert sich an jedem Router.“ – Nein (ohne NAT): Die IP-Zieladresse bleibt, der Rahmen wird neu gebaut."
      ],
      extraTest: [
        { id: "net-l2-q6", prompt: "Wie lang ist eine MAC-Adresse?", options: ["48 Bit", "32 Bit", "128 Bit"], answer: 0, explanation: "MAC-Adressen sind 48 Bit (6 Byte) lang; IPv4 hat 32 Bit, IPv6 128 Bit." }
      ]
    },
    {
      diagram: "arp",
      mnemonic: "ARP fragt laut in den Raum (Broadcast): „Wer hat 192.168.1.20?“ – nur einer antwortet leise (Unicast).",
      keyTerms: [
        { term: "ARP", def: "Address Resolution Protocol: ermittelt im lokalen IPv4-Netz die MAC-Adresse zu einer IP-Adresse (RFC 826)." },
        { term: "ARP-Request", def: "Anfrage als Broadcast an FF:FF:FF:FF:FF:FF: „Wer hat IP x? Sag es IP y.“" },
        { term: "ARP-Reply", def: "Antwort des gesuchten Geräts mit seiner MAC-Adresse, normalerweise direkt (Unicast) an den Fragenden." },
        { term: "ARP-Cache", def: "Zwischenspeicher mit gelernten Zuordnungen IP → MAC; Einträge verfallen nach einiger Zeit (Anzeige: arp -a)." },
        { term: "NDP", def: "Neighbor Discovery Protocol – Nachbarerkennung bei IPv6 über ICMPv6 (RFC 4861)." }
      ],
      mistakes: [
        "„ARP fragt nach der MAC des Internetservers.“ – Nein: Für entfernte Ziele wird die Gateway-MAC gesucht.",
        "„ARP-Reply ist auch ein Broadcast.“ – In der Regel nicht: Die Antwort geht direkt an den Fragenden."
      ],
      extraTest: [
        { id: "net-l3-q5", prompt: "An welche Ziel-MAC wird ein ARP-Request gesendet?", options: ["FF:FF:FF:FF:FF:FF (Broadcast)", "00:00:00:00:00:00", "An die MAC des DNS-Servers"], answer: 0, explanation: "Der Request geht als Broadcast an alle Geräte im lokalen Netz." }
      ]
    },
    {
      diagram: "csma",
      mnemonic: "CD = Detect (Kabel merkt den Crash), CA = Avoid (Funk geht dem Crash aus dem Weg).",
      keyTerms: [
        { term: "CSMA", def: "Carrier Sense Multiple Access: Vor dem Senden wird geprüft, ob das Medium frei ist; mehrere Stationen teilen sich das Medium." },
        { term: "CSMA/CD", def: "Collision Detection: Kollisionen werden während des Sendens erkannt; Abbruch, Jam-Signal, Backoff und neuer Versuch (klassisches Halbduplex-Ethernet)." },
        { term: "CSMA/CA", def: "Collision Avoidance: Kollisionen werden durch Abhören, Wartezeiten und zufälligen Backoff vermieden (WLAN)." },
        { term: "Backoff", def: "Zufällige Wartezeit vor einem erneuten Sendeversuch, damit nicht alle Stationen gleichzeitig wieder senden." },
        { term: "Vollduplex", def: "Gleichzeitiges Senden und Empfangen; bei geschaltetem Ethernet gibt es dann keine Kollisionen auf der Leitung." },
        { term: "RTS/CTS", def: "Request to Send / Clear to Send: optionale Kanalreservierung im WLAN, hilft z. B. beim Hidden-Station-Problem." }
      ],
      mistakes: [
        "CSMA/CD und CSMA/CA vertauschen – CD = Kabel (klassisch), CA = WLAN.",
        "CSMA mit TCP/UDP verwechseln – CSMA regelt den Medienzugriff (Schicht 2), nicht den Transport."
      ],
      extraTest: [
        { id: "net-l4-q5", prompt: "Wozu dient der zufällige Backoff?", options: ["Damit nicht alle Stationen nach einer Kollision gleichzeitig erneut senden", "Um die IP-Adresse zu wechseln", "Um TCP-Pakete zu verschlüsseln"], answer: 0, explanation: "Durch zufällige Wartezeiten sinkt die Wahrscheinlichkeit einer erneuten Kollision." }
      ]
    },
    {
      diagram: "tcpudp",
      mnemonic: "TCP = Telefonat (erst verbinden, dann reden, Quittungen). UDP = Postkarte (abschicken und hoffen).",
      keyTerms: [
        { term: "TCP", def: "Transmission Control Protocol: verbindungsorientiert, zuverlässig, geordnet; Bestätigungen, Wiederholungen, Fluss- und Staukontrolle (RFC 9293)." },
        { term: "UDP", def: "User Datagram Protocol: verbindungslos, schlank, ohne eigene Zustell- oder Reihenfolgegarantie (RFC 768)." },
        { term: "Drei-Wege-Handshake", def: "TCP-Verbindungsaufbau: SYN → SYN/ACK → ACK." },
        { term: "Sequenznummer", def: "Nummeriert bei TCP die übertragenen Bytes, damit der Empfänger Reihenfolge und Lücken erkennt." },
        { term: "Well-known Ports", def: "Ports 0–1023 für Standarddienste, z. B. 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS." }
      ],
      mistakes: [
        "„UDP ist unsicher und daher schlecht.“ – UDP ist für Echtzeit oft die bessere Wahl; „unzuverlässig“ heißt nur: keine eigene Zustellgarantie.",
        "Handshake-Reihenfolge falsch: Es beginnt immer mit SYN vom Client."
      ],
      extraTest: [
        { id: "net-l5-q4", prompt: "In welcher Reihenfolge läuft der TCP-Drei-Wege-Handshake ab?", options: ["SYN → SYN/ACK → ACK", "ACK → SYN → FIN", "SYN → ACK → SYN/ACK"], answer: 0, explanation: "Client sendet SYN, Server antwortet mit SYN/ACK, Client bestätigt mit ACK." },
        { id: "net-l5-q5", type: "short", prompt: "Welcher Port ist typisch für DNS?", accepted: ["53"], expected: "53", explanation: "DNS nutzt typischerweise Port 53 (meist UDP, bei großen Antworten auch TCP)." }
      ]
    },
    {
      diagram: "subnet",
      tool: "subnet",
      mnemonic: "Hosts = 2^(32 − Präfix) − 2. Blockgröße im letzten Oktett = 256 − Maskenwert (bei /26: 256 − 192 = 64).",
      keyTerms: [
        { term: "IPv4-Adresse", def: "32-Bit-Adresse, geschrieben als vier Oktette in Dezimalschreibweise (z. B. 192.168.1.20)." },
        { term: "Subnetzmaske", def: "Trennt Netz- und Hostanteil; /26 entspricht 255.255.255.192." },
        { term: "CIDR-Präfix", def: "Schreibweise /n für die Anzahl der Netzbits, z. B. /24 = 255.255.255.0." },
        { term: "Netzwerkadresse", def: "Erste Adresse eines Subnetzes (alle Hostbits 0); nicht an Hosts vergeben." },
        { term: "Broadcastadresse", def: "Letzte Adresse eines Subnetzes (alle Hostbits 1); erreicht alle Hosts im Subnetz." },
        { term: "TTL", def: "Time to Live: wird von jedem Router verringert; bei 0 wird das Paket verworfen." },
        { term: "Private Adressbereiche", def: "Nicht im Internet geroutet (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16." }
      ],
      mistakes: [
        "Netzwerk- und Broadcastadresse mitzählen – nutzbar sind 2^Hostbits − 2.",
        "Blockgrenzen falsch: Bei /26 beginnen Netze bei .0, .64, .128, .192."
      ],
      extraTest: [
        { id: "net-l6-q5", prompt: "Welche Adresse ist eine private IPv4-Adresse?", options: ["192.168.10.5", "8.8.8.8", "193.99.144.80"], answer: 0, explanation: "192.168.0.0/16 ist ein privater Adressbereich nach RFC 1918." },
        { id: "net-l6-q6", type: "short", prompt: "Welche Subnetzmaske in Dezimalschreibweise entspricht /24?", accepted: ["255.255.255.0"], expected: "255.255.255.0", explanation: "24 Netzbits = drei volle Oktette mit 255." }
      ]
    },
    {
      diagram: "capture",
      tool: "hex-db",
      mnemonic: "Mitschnitt lesen wie eine Zwiebel: außen Ethernet, dann IP, dann TCP/UDP, innen die Anwendung.",
      keyTerms: [
        { term: "Hexadezimal", def: "Zahlensystem zur Basis 16 (0–9, A–F); 0x11 = 1·16 + 1 = 17." },
        { term: "Paketmitschnitt", def: "Aufzeichnung von Netzwerkverkehr, z. B. mit Wireshark, um Header-Felder auszuwerten." },
        { term: "traceroute / tracert", def: "Zeigt die Router (Hops) auf dem Weg zum Ziel und deren Antwortzeiten; nutzt steigende TTL-Werte." },
        { term: "Dezibel (dB)", def: "Logarithmisches Maß für Verhältnisse; Spannung: a = 20 · log10(U1/U2). 20 dB ≙ Faktor 10." }
      ],
      mistakes: [
        "Hex-Werte als Dezimalzahl lesen: 0x11 ist 17, nicht 11.",
        "20 dB Spannungsdämpfung als „10 % Verlust“ deuten – es kommen nur 10 % an."
      ],
      extraTest: [
        { id: "net-l7-q4", type: "short", prompt: "Welcher Dezimalwert entspricht 0x0050? (Hinweis: typischer Webport)", accepted: ["80"], expected: "80", explanation: "0x50 = 5·16 = 80 – der typische HTTP-Port." }
      ]
    }
  ],
  digestion: [
    {
      diagram: "tract",
      tool: "tract-game",
      supplement: "Die Kompetenzliste verweist auf die „Fachbegriffe der Seiten 389–391“ eures Schulbuchs. Das Buch liegt hier nicht vor: Die Karteikarten und das Glossar decken die üblichen Fachbegriffe des Verdauungsapparats ab – gleiche sie mit den Buchseiten ab und ergänze fehlende Begriffe.",
      mnemonic: "„Mama Pass Sehr Mal Den Jungen In Crass Coolen Rennen An“: Mund – Pharynx – Speiseröhre – Magen – Duodenum – Jejunum – Ileum – Caecum – Colon – Rektum – Anus.",
      keyTerms: [
        { term: "Cavum oris", def: "Mundhöhle – Zerkleinern, Einspeicheln, Beginn der Stärkeverdauung." },
        { term: "Pharynx", def: "Rachen – Kreuzung von Luft- und Speiseweg; Schluckakt." },
        { term: "Ösophagus", def: "Speiseröhre (ca. 25 cm) – Transport des Bissens durch Peristaltik in den Magen." },
        { term: "Gaster / Ventriculus", def: "Magen – Speichern, Durchmischen, Ansäuern, Beginn der Eiweißverdauung." },
        { term: "Intestinum tenue", def: "Dünndarm (Duodenum, Jejunum, Ileum) – Hauptort der Verdauung und Resorption." },
        { term: "Intestinum crassum", def: "Dickdarm (Caecum, Colon, Rektum) – Wasser- und Elektrolytrückgewinnung, Darmflora." },
        { term: "Rektum / Anus", def: "Mastdarm / After – Speicherung und kontrollierte Ausscheidung des Stuhls (Defäkation)." },
        { term: "Peristaltik", def: "Wellenförmige Kontraktion der Darmmuskulatur, die den Inhalt aboral transportiert." },
        { term: "Resorption", def: "Aufnahme von Nährstoffen, Wasser und Salzen aus dem Darm ins Blut oder in die Lymphe." }
      ],
      mistakes: [
        "Leber, Gallenblase und Pankreas als Stationen des Nahrungswegs einzeichnen – sie sind Anhangsdrüsen, die Nahrung fließt nicht hindurch.",
        "Jejunum und Ileum vertauschen – merke „D-J-I“: Duodenum → Jejunum → Ileum (nicht alphabetisch!).",
        "Bei der Schemazeichnung nur deutsch ODER nur Fachbegriff schreiben – die Kompetenzliste verlangt beides."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l1-label",
          diagram: "tract-blank",
          title: "Arbeitsblatt: Schemazeichnung beschriften",
          prompt: "Beschrifte die Nummern. Schreibe den deutschen Begriff ODER den Fachbegriff (auf dem Prüfungsblatt dann beides!).",
          rows: [
            { label: "1", accepted: ["mundhöhle", "mund", "cavum oris", "os"], expected: "Mundhöhle – Cavum oris" },
            { label: "2", accepted: ["rachen", "pharynx"], expected: "Rachen – Pharynx" },
            { label: "3", accepted: ["speiseröhre", "ösophagus", "oesophagus"], expected: "Speiseröhre – Ösophagus" },
            { label: "4", accepted: ["magen", "gaster", "ventriculus", "ventrikel"], expected: "Magen – Gaster/Ventriculus" },
            { label: "5", accepted: ["zwölffingerdarm", "duodenum"], expected: "Zwölffingerdarm – Duodenum" },
            { label: "6", accepted: ["leerdarm", "jejunum"], expected: "Leerdarm – Jejunum" },
            { label: "7", accepted: ["krummdarm", "ileum"], expected: "Krummdarm – Ileum" },
            { label: "8", accepted: ["blinddarm", "caecum", "zäkum", "zakum", "coecum"], expected: "Blinddarm – Caecum (mit Appendix)" },
            { label: "9", accepted: ["grimmdarm", "colon", "kolon"], expected: "Grimmdarm – Colon" },
            { label: "10", accepted: ["mastdarm", "rektum", "rectum"], expected: "Mastdarm – Rektum" },
            { label: "11", accepted: ["after", "anus"], expected: "After – Anus" },
            { label: "A", accepted: ["speicheldrüsen", "speicheldrüse", "glandulae salivariae"], expected: "Speicheldrüsen" },
            { label: "B", accepted: ["leber", "hepar"], expected: "Leber – Hepar" },
            { label: "C", accepted: ["gallenblase", "vesica biliaris", "vesica fellea"], expected: "Gallenblase – Vesica biliaris" },
            { label: "D", accepted: ["bauchspeicheldrüse", "pankreas", "pancreas"], expected: "Bauchspeicheldrüse – Pankreas" }
          ]
        },
        {
          type: "table",
          id: "dig-l1-tasks",
          title: "Arbeitsblatt: Wer macht was?",
          prompt: "Nenne den Abschnitt (deutsch oder Fachbegriff), zu dem die Aufgabe passt.",
          rows: [
            { label: "Hauptort der Nährstoffresorption", accepted: ["dünndarm", "intestinum tenue"], expected: "Dünndarm" },
            { label: "Wasser zurückgewinnen, Stuhl eindicken", accepted: ["dickdarm", "intestinum crassum", "colon", "kolon"], expected: "Dickdarm" },
            { label: "Speichern, Ansäuern, Eiweißverdauung beginnt", accepted: ["magen", "gaster", "ventriculus"], expected: "Magen" },
            { label: "Transport des Bissens durch Peristaltik in den Magen", accepted: ["speiseröhre", "ösophagus", "oesophagus"], expected: "Speiseröhre" }
          ]
        }
      ],
      extraTest: [
        { id: "dig-l1-q4", prompt: "Welches Organ gehört NICHT zum Nahrungsweg, sondern ist eine Anhangsdrüse?", options: ["Leber", "Duodenum", "Ösophagus"], answer: 0, explanation: "Leber, Gallenblase, Pankreas und Speicheldrüsen liefern Sekrete, werden aber nicht von der Nahrung durchlaufen." },
        { id: "dig-l1-q5", prompt: "Was bedeutet „aboral“?", options: ["Vom Mund weg (Richtung After)", "Zum Mund hin", "Kopfwärts"], answer: 0, explanation: "ab = weg, os/oris = Mund." }
      ]
    },
    {
      diagram: "swallow",
      mnemonic: "„Par-OHR-tis“ liegt am Ohr, „sub-LINGUA-lis“ unter der Zunge, „sub-MANDIBULA-ris“ unter dem Unterkiefer (Mandibula).",
      keyTerms: [
        { term: "Glandula parotidea (Parotis)", def: "Ohrspeicheldrüse – größte Speicheldrüse, vor und unter dem Ohr; dünnflüssiger, amylasereicher Speichel." },
        { term: "Glandula submandibularis", def: "Unterkieferspeicheldrüse – liegt unter dem Unterkiefer, gemischter Speichel." },
        { term: "Glandula sublingualis", def: "Unterzungenspeicheldrüse – liegt unter der Zunge, eher schleimiger Speichel." },
        { term: "α-Amylase (Ptyalin)", def: "Enzym im Speichel, das Stärke in kleinere Zucker (z. B. Maltose) spaltet." },
        { term: "Bolus", def: "Der geformte, eingespeichelte Bissen, der geschluckt wird." },
        { term: "Epiglottis", def: "Kehldeckel – verschließt beim Schlucken den Kehlkopfeingang und damit die Luftröhre." },
        { term: "Dysphagie", def: "Schluckstörung, z. B. nach Schlaganfall; Gefahr der Aspiration." },
        { term: "Aspiration", def: "Eindringen von Nahrung oder Flüssigkeit in die Atemwege." }
      ],
      mistakes: [
        "„Der Kehldeckel verschließt die Nase.“ – Nein: Das Gaumensegel verschließt den Nasenrachen, der Kehldeckel die Luftröhre.",
        "Den ganzen Schluckakt als willkürlich beschreiben – nur die orale Phase ist willkürlich, danach läuft ein Reflex ab.",
        "Nur die Fachbegriffe der Drüsen lernen – die Kompetenzliste verlangt auch die deutschen Namen und die Funktion."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l2-glands",
          title: "Arbeitsblatt: Speicheldrüsen",
          prompt: "Nenne den Fachbegriff zur deutschen Bezeichnung.",
          rows: [
            { label: "Ohrspeicheldrüse", accepted: ["glandula parotidea", "parotis", "glandula parotis"], expected: "Glandula parotidea (Parotis)" },
            { label: "Unterkieferspeicheldrüse", accepted: ["glandula submandibularis", "submandibularis"], expected: "Glandula submandibularis" },
            { label: "Unterzungenspeicheldrüse", accepted: ["glandula sublingualis", "sublingualis"], expected: "Glandula sublingualis" }
          ]
        },
        {
          type: "writing",
          id: "dig-l2-writing",
          title: "Erkläre es selbst: Der Schluckakt",
          prompt: "Erläutere den Schluckakt in seinen drei Phasen. Gehe darauf ein, wie verhindert wird, dass Nahrung in Nase oder Luftröhre gelangt.",
          modelAnswer: "Der Schluckakt beginnt mit der oralen Phase: Die Zunge formt willkürlich einen Bissen und schiebt ihn in den Rachen. Dadurch wird der Schluckreflex ausgelöst und es folgt die pharyngeale Phase: Das Gaumensegel hebt sich und verschließt den Nasenrachen, der Kehlkopf wird angehoben und der Kehldeckel verschließt die Luftröhre, die Atmung wird kurz unterbrochen. In der ösophagealen Phase öffnet sich der obere Speiseröhrenschließmuskel und peristaltische Wellen transportieren den Bissen durch die Speiseröhre in den Magen.",
          criteria: ["Drei Phasen genannt: oral, pharyngeal, ösophageal.", "Orale Phase willkürlich, danach reflektorisch.", "Gaumensegel verschließt den Nasenraum.", "Kehldeckel verschließt die Luftröhre, Atemstopp.", "Transport durch Peristaltik."]
        }
      ],
      extraTest: [
        { id: "dig-l2-q4", prompt: "Wie viel Speichel bildet ein Erwachsener etwa pro Tag?", options: ["1–1,5 Liter", "100 ml", "5 Liter"], answer: 0, explanation: "Rund 1–1,5 Liter täglich." },
        { id: "dig-l2-q5", prompt: "Welche Aussage über Speichel ist FALSCH?", options: ["Speichel enthält Pepsin zur Eiweißverdauung.", "Speichel macht den Bissen gleitfähig.", "Speichel wirkt durch Lysozym antibakteriell."], answer: 0, explanation: "Pepsin entsteht im Magen. Speichel enthält Amylase, Schleim, Lysozym und IgA." }
      ]
    },
    {
      diagram: "stomach",
      mnemonic: "„Kein Fisch Kommt Am Pier“: Kardia – Fundus – Korpus – Antrum – Pylorus. Zellen: „Haupt-Pepsi, Beleg-Salz + IF, Neben-Schleim, G-Gastrin“.",
      keyTerms: [
        { term: "Kardia", def: "Mageneingang (Pars cardiaca) am Übergang von der Speiseröhre." },
        { term: "Fundus", def: "Magengrund bzw. Magenkuppel – oberster Teil, oft mit Luftblase." },
        { term: "Korpus", def: "Magenkörper – größter Abschnitt, hier liegen die meisten Haupt- und Belegzellen." },
        { term: "Antrum pyloricum", def: "Pförtnervorraum – hier liegen die G-Zellen (Gastrin); kräftige Durchmischung." },
        { term: "Pylorus", def: "Magenpförtner – Ringmuskel am Magenausgang, gibt den Speisebrei portionsweise ins Duodenum ab." },
        { term: "Curvatura minor / major", def: "Kleine (innere) und große (äußere) Krümmung des Magens." },
        { term: "Hauptzellen", def: "Bilden Pepsinogen, die inaktive Vorstufe von Pepsin." },
        { term: "Belegzellen (Parietalzellen)", def: "Bilden Salzsäure (HCl) und den Intrinsic-Faktor." },
        { term: "Nebenzellen", def: "Bilden Schleim (Muzin), der die Magenschleimhaut vor Selbstverdauung schützt." },
        { term: "Pepsin", def: "Eiweißspaltendes Enzym des Magens; entsteht aus Pepsinogen durch Salzsäure." },
        { term: "Intrinsic-Faktor", def: "Eiweiß der Belegzellen, das Vitamin B12 bindet und seine Aufnahme im Ileum ermöglicht." },
        { term: "Gastrin", def: "Hormon der G-Zellen im Antrum; regt Salzsäure- und Pepsinogenbildung und Magenbewegung an." }
      ],
      mistakes: [
        "Pepsin und Pepsinogen gleichsetzen – die Hauptzellen bilden die inaktive Vorstufe Pepsinogen, erst HCl macht daraus Pepsin.",
        "Gastrin als Enzym bezeichnen – Gastrin ist ein Hormon.",
        "Fundus und Kardia vertauschen: Die Kardia ist der Eingang, der Fundus die Kuppel daneben/darüber."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l3-label",
          diagram: "stomach-blank",
          title: "Arbeitsblatt: Magen beschriften",
          prompt: "Beschrifte die Nummern mit Fachbegriff oder deutschem Begriff.",
          rows: [
            { label: "1", accepted: ["kardia", "cardia", "pars cardiaca", "mageneingang", "magenmund"], expected: "Kardia – Mageneingang" },
            { label: "2", accepted: ["fundus", "magengrund", "magenkuppel", "fundus gastricus"], expected: "Fundus – Magengrund/-kuppel" },
            { label: "3", accepted: ["korpus", "corpus", "magenkörper", "corpus gastricum"], expected: "Korpus – Magenkörper" },
            { label: "4", accepted: ["antrum", "antrum pyloricum", "pförtnervorraum", "pars pylorica"], expected: "Antrum pyloricum – Pförtnervorraum" },
            { label: "5", accepted: ["pylorus", "magenpförtner", "pförtner"], expected: "Pylorus – Magenpförtner" },
            { label: "6", accepted: ["curvatura minor", "kleine kurvatur", "kleine krümmung"], expected: "Curvatura minor – kleine Kurvatur" },
            { label: "7", accepted: ["curvatura major", "große kurvatur", "grosse kurvatur", "große krümmung", "grosse krümmung"], expected: "Curvatura major – große Kurvatur" }
          ]
        },
        {
          type: "writing",
          id: "dig-l3-writing",
          title: "Erkläre es selbst: Pepsin, Intrinsic-Faktor, Gastrin",
          prompt: "Gib für Pepsin, Intrinsic-Faktor und Gastrin jeweils Bildungsort und Funktion an.",
          modelAnswer: "Pepsin entsteht aus Pepsinogen, das die Hauptzellen bilden; die Salzsäure aktiviert es. Pepsin spaltet Eiweiße in kleinere Polypeptide. Der Intrinsic-Faktor wird von den Belegzellen gebildet; er bindet Vitamin B12 und ermöglicht dessen Aufnahme im Ileum. Gastrin ist ein Hormon der G-Zellen im Antrum; es regt die Bildung von Salzsäure und Pepsinogen sowie die Magenbewegung an.",
          criteria: ["Pepsin: Hauptzellen (Pepsinogen), spaltet Eiweiß.", "Intrinsic-Faktor: Belegzellen, Vitamin-B12-Aufnahme im Ileum.", "Gastrin: G-Zellen (Antrum), Hormon, fördert Säurebildung."]
        }
      ],
      extraTest: [
        { id: "dig-l3-q4", prompt: "Welche Erkrankung droht bei fehlendem Intrinsic-Faktor?", options: ["Perniziöse Anämie (Vitamin-B12-Mangel)", "Diabetes mellitus Typ 1", "Obstipation"], answer: 0, explanation: "Ohne IF kein B12 → gestörte Blutbildung." },
        { id: "dig-l3-q5", prompt: "Wo liegen die Gastrin bildenden G-Zellen?", options: ["Im Antrum (Pförtnervorraum)", "Im Fundus", "Im Duodenum-Bürstensaum"], answer: 0, explanation: "G-Zellen liegen hauptsächlich im Antrum." }
      ]
    },
    {
      diagram: "villi",
      mnemonic: "„Falte – Zotte – Bürste“: grob, mittel, fein. 3 × 10 × 20 ≈ 600-fache Fläche.",
      keyTerms: [
        { term: "Duodenum", def: "Zwölffingerdarm (ca. 25–30 cm), C-förmig um den Pankreaskopf; Mündung von Gallen- und Pankreasgang." },
        { term: "Jejunum", def: "Leerdarm – mittlerer Dünndarmabschnitt (ca. 2/5)." },
        { term: "Ileum", def: "Krummdarm – letzter Dünndarmabschnitt (ca. 3/5); Aufnahme von Vitamin B12 und Gallensäuren." },
        { term: "Kerckring-Falten", def: "Ringfalten (Plicae circulares) der Schleimhaut und Unterschleimhaut – vergrößern die Oberfläche ca. 3-fach." },
        { term: "Darmzotten (Villi)", def: "Fingerförmige Ausstülpungen der Schleimhaut mit Blutkapillaren und Lymphgefäß – ca. 10-fach." },
        { term: "Mikrovilli (Bürstensaum)", def: "Ausstülpungen der Zellmembran der Darmzellen – ca. 20-fach; Sitz von Enzymen wie Maltase." },
        { term: "Chymus", def: "Speisebrei, der vom Magen in den Dünndarm gelangt." },
        { term: "Papilla Vateri", def: "Papilla duodeni major – gemeinsame Mündung von Ductus choledochus und Pankreasgang im Duodenum." }
      ],
      mistakes: [
        "Die Stufen falsch ordnen – Mikrovilli sind die kleinste Stufe (auf jeder einzelnen Zelle).",
        "Nur „Zotten“ schreiben – erkläre das Prinzip: größere Fläche → mehr Kontakt → mehr Resorption.",
        "Haustren (Dickdarm) mit Kerckring-Falten (Dünndarm) verwechseln."
      ],
      tasks: [
        {
          type: "writing",
          id: "dig-l4-writing",
          title: "Erkläre es selbst: Oberflächenvergrößerung",
          prompt: "Erkläre das Prinzip der Oberflächenvergrößerung im Dünndarm und nenne die drei Strukturen.",
          modelAnswer: "Im Dünndarm werden die Nährstoffe resorbiert. Je größer die innere Oberfläche ist, desto mehr Nährstoffe können gleichzeitig ins Blut bzw. in die Lymphe aufgenommen werden. Deshalb vergrößert der Dünndarm seine Oberfläche in drei Stufen: Die Schleimhaut bildet Ringfalten (Kerckring-Falten), auf diesen sitzen fingerförmige Darmzotten und die Zellen der Zotten tragen Mikrovilli (Bürstensaum). So wird die Fläche etwa 600-fach vergrößert.",
          criteria: ["Ziel: mehr Resorption durch mehr Fläche.", "Kerckring-Falten.", "Zotten.", "Mikrovilli / Bürstensaum.", "Größenordnung (ca. 600-fach bzw. ca. 200 m² laut Lehrbuch)."]
        }
      ],
      extraTest: [
        { id: "dig-l4-q4", prompt: "Wohin werden Fette aus den Zotten hauptsächlich abtransportiert?", options: ["In das zentrale Lymphgefäß (Chylusgefäß)", "Direkt in die Gallenblase", "In den Magen zurück"], answer: 0, explanation: "Fette gelangen über die Lymphe, Zucker und Aminosäuren über die Pfortader zur Leber." },
        { id: "dig-l4-q5", prompt: "In welchem Dünndarmabschnitt münden Gallen- und Pankreasgang?", options: ["Duodenum", "Jejunum", "Ileum"], answer: 0, explanation: "An der Papilla Vateri im Duodenum." }
      ]
    },
    {
      diagram: "colon",
      tool: "colon-game",
      supplement: "„Von kranial“ wird hier als Aufzählung in Richtung der Nahrung gelesen (Caecum → … → Anus), „von kaudal“ als umgekehrte Reihenfolge (Anus → … → Caecum, so wie das Koloskop vorgeschoben wird). Wenn eure Lehrkraft es anders meint, gilt ihre Lesart.",
      mnemonic: "Von kranial einmal „um den Bauch herum“: rechts hoch (ascendens), quer rüber (transversum), links runter (descendens), S-Kurve (Sigma), Mastdarm, After.",
      keyTerms: [
        { term: "Caecum", def: "Blinddarm – erster Dickdarmabschnitt im rechten Unterbauch, unterhalb der Ileumeinmündung." },
        { term: "Appendix vermiformis", def: "Wurmfortsatz am Caecum; lymphatisches Gewebe. Entzündung = Appendizitis." },
        { term: "Bauhin-Klappe", def: "Ileozäkalklappe zwischen Ileum und Caecum; verhindert den Rückfluss von Dickdarminhalt." },
        { term: "Colon ascendens", def: "Aufsteigender Grimmdarm (rechte Bauchseite)." },
        { term: "Colon transversum", def: "Querverlaufender Grimmdarm zwischen rechter und linker Kolonflexur." },
        { term: "Colon descendens", def: "Absteigender Grimmdarm (linke Bauchseite)." },
        { term: "Colon sigmoideum (Sigma)", def: "S-förmiger Grimmdarm im linken Unterbauch vor dem Rektum." },
        { term: "Rektum", def: "Mastdarm – Speicher für den Stuhl vor der Entleerung." },
        { term: "Flexura coli dextra / sinistra", def: "Rechte (an der Leber) und linke (an der Milz) Kolonbiegung." },
        { term: "Obstipation", def: "Verstopfung: seltener (Richtwert < 3×/Woche), harter, schwer absetzbarer Stuhl." },
        { term: "Ballaststoffe", def: "Unverdauliche Pflanzenfasern, die Wasser binden, das Stuhlvolumen erhöhen und die Darmtätigkeit anregen." }
      ],
      mistakes: [
        "Kranial und kaudal verwechseln: kranial = kopfwärts. „Von kranial“ heißt hier: vom Dünndarm her in Nahrungsrichtung beginnen (Caecum zuerst). Kläre die genaue Lesart im Zweifel mit deiner Lehrkraft.",
        "Sagen, im Dickdarm würden Nährstoffe verdaut – er gewinnt vor allem Wasser und Salze zurück.",
        "Als Obstipationsprophylaxe nur „viel trinken“ nennen – Ballaststoffe, Bewegung und den Stuhldrang nicht unterdrücken gehören dazu."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l5-label",
          diagram: "colon-blank",
          title: "Arbeitsblatt: Dickdarm beschriften (von kranial nach kaudal)",
          prompt: "Beschrifte die Nummern mit Fachbegriff oder deutschem Begriff. Die Nummern folgen dem Weg der Nahrung.",
          rows: [
            { label: "1", accepted: ["caecum", "zäkum", "zakum", "coecum", "blinddarm"], expected: "Caecum – Blinddarm" },
            { label: "2", accepted: ["appendix vermiformis", "appendix", "wurmfortsatz"], expected: "Appendix vermiformis – Wurmfortsatz" },
            { label: "3", accepted: ["colon ascendens", "kolon ascendens", "aufsteigender grimmdarm", "aufsteigender dickdarm", "aufsteigendes kolon"], expected: "Colon ascendens – aufsteigender Grimmdarm" },
            { label: "4", accepted: ["flexura coli dextra", "rechte kolonflexur", "rechte flexur", "flexura hepatica"], expected: "Flexura coli dextra – rechte Kolonflexur" },
            { label: "5", accepted: ["colon transversum", "kolon transversum", "querverlaufender grimmdarm", "querer grimmdarm", "querverlaufender dickdarm"], expected: "Colon transversum – querverlaufender Grimmdarm" },
            { label: "6", accepted: ["flexura coli sinistra", "linke kolonflexur", "linke flexur", "flexura lienalis"], expected: "Flexura coli sinistra – linke Kolonflexur" },
            { label: "7", accepted: ["colon descendens", "kolon descendens", "absteigender grimmdarm", "absteigender dickdarm"], expected: "Colon descendens – absteigender Grimmdarm" },
            { label: "8", accepted: ["colon sigmoideum", "sigma", "sigmoid", "s-förmiger grimmdarm", "sigmadarm", "s-darm"], expected: "Colon sigmoideum – Sigma (S-förmiger Grimmdarm)" },
            { label: "9", accepted: ["rektum", "rectum", "mastdarm"], expected: "Rektum – Mastdarm" },
            { label: "10", accepted: ["anus", "after", "analkanal", "canalis analis"], expected: "Anus – After" }
          ]
        },
        {
          type: "writing",
          id: "dig-l5-writing",
          title: "Patientengespräch: Obstipation",
          prompt: "Ein Patient fragt dich, was Verstopfung eigentlich ist und was er selbst dagegen tun kann. Antworte in ganzen Sätzen.",
          modelAnswer: "Von einer Verstopfung (Obstipation) spricht man, wenn der Stuhlgang seltener als etwa dreimal pro Woche kommt, der Stuhl hart ist und nur mit starkem Pressen abgesetzt werden kann – oft bleibt das Gefühl, nicht vollständig entleert zu sein. Vorbeugen können Sie, indem Sie ballaststoffreich essen, also Vollkornprodukte, Gemüse, Obst und Hülsenfrüchte, und dazu ausreichend trinken, etwa 1,5 bis 2 Liter am Tag. Regelmäßige Bewegung regt den Darm an. Geben Sie dem Stuhldrang sofort nach und nehmen Sie Abführmittel bitte nicht dauerhaft ohne Rücksprache mit dem Arzt.",
          criteria: ["Definition mit Häufigkeit/Konsistenz.", "Ballaststoffreiche Ernährung.", "Ausreichend trinken.", "Bewegung.", "Stuhldrang nicht unterdrücken / keine Abführmittel auf Dauer."]
        }
      ],
      extraTest: [
        { id: "dig-l5-q4", prompt: "Welche Aufzählung beginnt korrekt von kaudal?", options: ["Anus → Rektum → Sigma → Colon descendens", "Caecum → Colon ascendens → Colon transversum", "Rektum → Colon ascendens → Sigma"], answer: 0, explanation: "Von kaudal (vom After her): Anus, Rektum, Sigma, Colon descendens, linke Flexur, Colon transversum …" },
        { id: "dig-l5-q5", prompt: "Welches Vitamin bilden Darmbakterien im Dickdarm?", options: ["Vitamin K", "Vitamin C", "Vitamin D"], answer: 0, explanation: "Die Darmflora bildet Vitamin K (wichtig für die Blutgerinnung)." }
      ]
    },
    {
      diagram: "liver",
      mnemonic: "Leber-Aufgaben „SEGBS“: Stoffwechsel/Speicher – Entgiftung – Galle bilden – Bluteiweiße & Gerinnungsfaktoren – Spaltung von Hämoglobin (Bilirubin). Galle: Leber bildet, Blase speichert.",
      keyTerms: [
        { term: "Hepar", def: "Leber – größte Drüse des Körpers (ca. 1,5 kg), rechter Oberbauch." },
        { term: "Vesica biliaris (fellea)", def: "Gallenblase – speichert und dickt die Galle ein." },
        { term: "Galle (Bilis)", def: "Von der Leber gebildete Flüssigkeit (0,5–1 l/Tag) mit Gallensäuren, Bilirubin, Cholesterin; emulgiert Fette." },
        { term: "Emulgieren", def: "Zerteilen großer Fetttropfen in viele kleine Tröpfchen → größere Angriffsfläche für die Lipase." },
        { term: "Ductus choledochus", def: "Hauptgallengang aus Ductus hepaticus communis und Ductus cysticus; mündet an der Papilla Vateri." },
        { term: "Ductus cysticus", def: "Gallenblasengang – Verbindung zwischen Gallenblase und Gallengang." },
        { term: "Vena portae", def: "Pfortader – bringt nährstoffreiches Blut aus Darm, Magen und Milz zur Leber." },
        { term: "Glykogen", def: "Speicherform der Glukose in Leber und Muskeln." },
        { term: "Bilirubin", def: "Gelber Abbaustoff des Hämoglobins; wird mit der Galle ausgeschieden. Erhöht → Ikterus (Gelbsucht)." }
      ],
      mistakes: [
        "„Die Gallenblase bildet die Galle.“ – Falsch: Die Leber bildet sie, die Gallenblase speichert und dickt ein.",
        "„Galle verdaut Fett.“ – Galle emulgiert nur; spalten tut die Lipase.",
        "Leberaufgaben nur stichwortartig nennen – die Kompetenzliste verlangt ganze Sätze."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l6-label",
          diagram: "liver-blank",
          title: "Arbeitsblatt: Leber, Gallenwege und Pankreas beschriften",
          prompt: "Beschrifte die Nummern (deutsch oder Fachbegriff).",
          rows: [
            { label: "1", accepted: ["leber", "hepar"], expected: "Leber – Hepar" },
            { label: "2", accepted: ["gallenblase", "vesica biliaris", "vesica fellea"], expected: "Gallenblase – Vesica biliaris (fellea)" },
            { label: "3", accepted: ["ductus cysticus", "gallenblasengang"], expected: "Ductus cysticus – Gallenblasengang" },
            { label: "4", accepted: ["ductus choledochus", "hauptgallengang", "gallengang", "choledochus"], expected: "Ductus choledochus – Hauptgallengang" },
            { label: "5", accepted: ["pankreas", "bauchspeicheldrüse", "pancreas"], expected: "Pankreas – Bauchspeicheldrüse" },
            { label: "6", accepted: ["duodenum", "zwölffingerdarm"], expected: "Duodenum – Zwölffingerdarm" },
            { label: "7", accepted: ["papilla vateri", "papilla duodeni major", "vater-papille", "vaterpapille"], expected: "Papilla Vateri (Papilla duodeni major)" }
          ]
        },
        {
          type: "writing",
          id: "dig-l6-writing",
          title: "In ganzen Sätzen: Hauptaufgaben der Leber",
          prompt: "Zähle die Hauptaufgaben der Leber auf und erläutere sie in ganzen Sätzen (mindestens vier).",
          modelAnswer: "Die Leber ist das zentrale Stoffwechselorgan: Sie speichert Glukose als Glykogen und gibt sie bei Bedarf wieder ins Blut ab. Sie bildet lebenswichtige Eiweiße wie Albumin und die Gerinnungsfaktoren. Sie entgiftet das Blut, indem sie Alkohol, Medikamente und Ammoniak abbaut. Sie bildet täglich etwa 0,5 bis 1 Liter Galle, die für die Fettverdauung gebraucht wird. Außerdem speichert sie Vitamine und Eisen und baut den roten Blutfarbstoff zu Bilirubin ab.",
          criteria: ["Stoffwechsel/Glykogenspeicher.", "Bildung von Plasmaproteinen/Gerinnungsfaktoren.", "Entgiftung.", "Gallebildung.", "Speicherung (Vitamine, Eisen) oder Bilirubinabbau.", "Ganze Sätze!"]
        }
      ],
      extraTest: [
        { id: "dig-l6-q4", prompt: "Warum ist die Emulgierung der Fette durch die Galle wichtig?", options: ["Die Lipase bekommt eine viel größere Angriffsfläche.", "Fette werden dadurch zu Glukose.", "Die Galle spaltet die Fette selbst vollständig."], answer: 0, explanation: "Kleinere Tröpfchen = größere Oberfläche für die Lipase." },
        { id: "dig-l6-q5", prompt: "Was gibt dem Stuhl seine braune Farbe?", options: ["Abbauprodukte des Bilirubins aus der Galle", "Die Amylase", "Der Intrinsic-Faktor"], answer: 0, explanation: "Bilirubin wird im Darm zu braunen Farbstoffen umgebaut; heller (acholischer) Stuhl spricht für Gallenstau." }
      ]
    },
    {
      diagram: "pancreas",
      mnemonic: "EXOkrin = EXit über den Gang (in den Darm). ENDOkrin = direkt hinEIN ins Blut. Insulin = „Schlüssel“, der Zucker in die Zellen lässt → Blutzucker sinkt.",
      keyTerms: [
        { term: "Pankreas", def: "Bauchspeicheldrüse – gemischte exokrine und endokrine Drüse hinter dem Magen." },
        { term: "Exokrine Drüse", def: "Gibt ihr Sekret über einen Ausführungsgang nach außen bzw. in ein Hohlorgan ab (Pankreassaft → Duodenum)." },
        { term: "Endokrine Drüse", def: "Gibt Hormone ohne Ausführungsgang direkt ins Blut ab (Langerhans-Inseln)." },
        { term: "Langerhans-Inseln", def: "Endokrine Zellhaufen im Pankreas: B-Zellen (Insulin), A-Zellen (Glukagon), D-Zellen (Somatostatin)." },
        { term: "Insulin", def: "Hormon der B-Zellen; senkt den Blutzucker, indem es die Aufnahme von Glukose in die Zellen fördert." },
        { term: "Glukagon", def: "Hormon der A-Zellen; erhöht den Blutzucker (Glykogenabbau in der Leber)." },
        { term: "Amylase", def: "Bildungsort: Speicheldrüsen und Pankreas. Spaltet Stärke in Maltose/kleinere Zucker." },
        { term: "Lipase", def: "Bildungsort: Pankreas. Spaltet Fette (Triglyceride) in Glycerin/Monoglyceride und Fettsäuren." },
        { term: "Trypsin", def: "Bildungsort: Pankreas (als Trypsinogen). Spaltet Eiweiße/Polypeptide in kleinere Peptide." },
        { term: "Chymotrypsin", def: "Bildungsort: Pankreas (als Chymotrypsinogen). Spaltet Eiweiße in Peptide." },
        { term: "Maltase", def: "Bildungsort: Dünndarmschleimhaut (Bürstensaum). Spaltet Maltose in 2 Glukose." },
        { term: "Bikarbonat", def: "Basischer Bestandteil des Pankreassafts; neutralisiert den sauren Speisebrei im Duodenum." }
      ],
      mistakes: [
        "Insulin als Verdauungsenzym bezeichnen – Insulin ist ein Hormon des endokrinen Teils.",
        "Bei „je zwei Stoffe“ nur Enzyme für den endokrinen Teil nennen – endokrin sind Insulin und Glukagon.",
        "Den Bildungsort der Maltase mit Pankreas angeben – sie stammt aus der Dünndarmschleimhaut."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l7-origin",
          title: "Arbeitsblatt: Bildungsort der Enzyme",
          prompt: "Wo wird das Enzym gebildet? (Speicheldrüsen, Pankreas, Dünndarmschleimhaut, Magen)",
          rows: [
            { label: "Trypsin", accepted: ["pankreas", "bauchspeicheldrüse"], expected: "Pankreas" },
            { label: "Chymotrypsin", accepted: ["pankreas", "bauchspeicheldrüse"], expected: "Pankreas" },
            { label: "Lipase", accepted: ["pankreas", "bauchspeicheldrüse"], expected: "Pankreas" },
            { label: "Maltase", accepted: ["dünndarmschleimhaut", "dünndarm", "bürstensaum", "dünndarmwand"], expected: "Dünndarmschleimhaut (Bürstensaum)" },
            { label: "Amylase (zwei Orte, durch „und“ getrennt)", accepted: ["speicheldrüsen und pankreas", "pankreas und speicheldrüsen", "mund und pankreas", "speicheldrüse und pankreas", "speicheldrüsen und bauchspeicheldrüse"], expected: "Speicheldrüsen und Pankreas" }
          ]
        },
        {
          type: "table",
          id: "dig-l7-exo-endo",
          title: "Arbeitsblatt: exokrin oder endokrin?",
          prompt: "Schreibe „exokrin“ oder „endokrin“.",
          rows: [
            { label: "Insulin", accepted: ["endokrin"], expected: "endokrin" },
            { label: "Lipase", accepted: ["exokrin"], expected: "exokrin" },
            { label: "Glukagon", accepted: ["endokrin"], expected: "endokrin" },
            { label: "Bikarbonat", accepted: ["exokrin"], expected: "exokrin" },
            { label: "Trypsinogen", accepted: ["exokrin"], expected: "exokrin" }
          ]
        }
      ],
      extraTest: [
        { id: "dig-l7-q4", prompt: "Warum gibt das Pankreas Trypsin als inaktives Trypsinogen ab?", options: ["Damit es sich nicht selbst verdaut", "Weil Trypsin im Blut wirken soll", "Damit Fette besser emulgiert werden"], answer: 0, explanation: "Erst im Duodenum wird Trypsinogen aktiviert – Schutz vor Selbstverdauung (sonst Pankreatitis)." },
        { id: "dig-l7-q5", prompt: "Welches Stoffpaar stammt aus dem ENDOKRINEN Pankreas?", options: ["Insulin und Glukagon", "Lipase und Amylase", "Trypsin und Bikarbonat"], answer: 0, explanation: "Endokrin (Langerhans-Inseln, ins Blut): Insulin und Glukagon. Exokrin (Pankreassaft): z. B. Lipase, Amylase, Trypsin, Bikarbonat." }
      ]
    },
    {
      diagram: "diabetes",
      mnemonic: "Diagnose „6,5 – 126 – 200 – 200“: HbA1c 6,5 % · nüchtern 126 · Gelegenheit 200 · oGTT 2 h 200 (mg/dl). Spätschäden „Augen, Nieren, Nerven“ = Retino-, Nephro-, Neuropathie.",
      keyTerms: [
        { term: "Diabetes mellitus", def: "Chronische Stoffwechselerkrankung mit dauerhaft erhöhtem Blutzucker durch absoluten/relativen Insulinmangel und/oder Insulinresistenz." },
        { term: "HbA1c", def: "„Blutzuckergedächtnis“: Anteil verzuckerten Hämoglobins, spiegelt den Blutzucker der letzten 8–12 Wochen; Diabetes ab 6,5 %." },
        { term: "oGTT", def: "Oraler Glukosetoleranztest: nüchtern 75 g Glukose trinken, Blutzucker nach 2 Stunden; Diabetes ab 200 mg/dl." },
        { term: "Insulinresistenz", def: "Die Körperzellen sprechen vermindert auf Insulin an (typisch Typ 2)." },
        { term: "Ketoazidose", def: "Lebensgefährliche Übersäuerung durch Fettabbau bei absolutem Insulinmangel (typisch Typ 1)." },
        { term: "Gestationsdiabetes", def: "Erstmals in der Schwangerschaft aufgetretene/erkannte Glukosetoleranzstörung; Screening 24.–28. SSW." },
        { term: "Makrosomie", def: "Übermäßig großes, schweres Neugeborenes – mögliche Folge eines Gestationsdiabetes." },
        { term: "Makroangiopathie", def: "Schädigung der großen Arterien (Arteriosklerose) → Herzinfarkt, Schlaganfall, pAVK." },
        { term: "Mikroangiopathie", def: "Schädigung der kleinen Gefäße – Grundlage von Retinopathie und Nephropathie." },
        { term: "Diabetische Retinopathie", def: "Netzhautschaden am Auge → Sehverschlechterung bis Erblindung; jährliche Augenarztkontrolle." },
        { term: "Diabetische Nephropathie", def: "Nierenschaden → Eiweiß im Urin, Niereninsuffizienz bis Dialyse." },
        { term: "Diabetische Neuropathie", def: "Nervenschaden → Kribbeln, Taubheit, Schmerzunempfindlichkeit (v. a. Füße)." },
        { term: "Diabetisches Fußsyndrom", def: "Schlecht heilende Wunden am Fuß durch Neuropathie und Durchblutungsstörung; Amputationsgefahr." }
      ],
      mistakes: [
        "Die Definition ohne Ursache wiedergeben – „vollständig“ heißt: chronisch + Hyperglykämie + Insulinmangel und/oder Insulinresistenz.",
        "Den Gelegenheitswert (200 mg/dl) mit dem Nüchternwert (126 mg/dl) verwechseln.",
        "Typ 2 als „Alterszucker, der nur Ältere trifft“ bezeichnen – zunehmend erkranken auch junge Menschen."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l8-criteria",
          title: "Arbeitsblatt: Vier Diagnosekriterien",
          prompt: "Ergänze die Grenzwerte (Zahl genügt, z. B. „126“).",
          rows: [
            { label: "HbA1c ≥ … %", accepted: ["6,5", "6.5", "65"], expected: "6,5 %" },
            { label: "Nüchtern-Plasmaglukose ≥ … mg/dl", accepted: ["126"], expected: "126 mg/dl (7,0 mmol/l)" },
            { label: "Gelegenheits-Plasmaglukose ≥ … mg/dl", accepted: ["200"], expected: "200 mg/dl (11,1 mmol/l)" },
            { label: "oGTT 2-Stunden-Wert ≥ … mg/dl", accepted: ["200"], expected: "200 mg/dl (11,1 mmol/l)" }
          ]
        },
        {
          type: "writing",
          id: "dig-l8-compare",
          title: "Vergleiche: Diabetes Typ 1 und Typ 2",
          prompt: "Vergleiche Typ 1 und Typ 2 (Ursache, Insulinmangel, Alter/Beginn, Körpergewicht, Häufigkeit, Therapie).",
          modelAnswer: "Typ 1 ist eine Autoimmunerkrankung, bei der die insulinbildenden B-Zellen zerstört werden; es besteht ein absoluter Insulinmangel. Er beginnt meist in Kindheit oder Jugend und oft plötzlich, die Betroffenen sind meist schlank, und es droht eine Ketoazidose. Er macht nur etwa 5 % aus und muss lebenslang mit Insulin behandelt werden. Typ 2 entsteht durch Insulinresistenz und einen relativen Insulinmangel, begünstigt durch Übergewicht, Bewegungsmangel und Vererbung. Er beginnt schleichend, meist im Erwachsenenalter, und macht etwa 90–95 % aus. Behandelt wird mit Ernährungsumstellung, Bewegung, Gewichtsabnahme, Tabletten und ggf. Insulin. Gemeinsam ist beiden der erhöhte Blutzucker und das Risiko derselben Spätschäden.",
          criteria: ["Ursache: autoimmun vs. Insulinresistenz.", "Absoluter vs. relativer Insulinmangel.", "Alter/Beginn.", "Körpergewicht/Risikofaktoren.", "Häufigkeit.", "Therapie.", "Mindestens eine Gemeinsamkeit (Vergleichen!)."]
        },
        {
          type: "writing",
          id: "dig-l8-gdm",
          title: "Erläutere: Gestationsdiabetes",
          prompt: "Erläutere den Gestationsdiabetes und nenne zwei mögliche Folgen für das Neugeborene.",
          modelAnswer: "Der Gestationsdiabetes ist eine Störung des Zuckerstoffwechsels, die erstmals in der Schwangerschaft auftritt oder erkannt wird. Schwangerschaftshormone verringern die Insulinwirkung; reicht die Insulinproduktion der Mutter nicht aus, steigt der Blutzucker. Deshalb wird allen Schwangeren zwischen der 24. und 28. SSW ein Zuckertest angeboten. Das Kind erhält über die Plazenta zu viel Zucker und bildet selbst viel Insulin. Folgen können ein zu hohes Geburtsgewicht (Makrosomie) mit Geburtskomplikationen und eine Unterzuckerung des Neugeborenen direkt nach der Geburt sein; außerdem Atemnot durch verzögerte Lungenreife.",
          criteria: ["Erstmals in der Schwangerschaft.", "Screening 24.–28. SSW (oGTT).", "Folge 1, z. B. Makrosomie.", "Folge 2, z. B. Hypoglykämie / Atemnotsyndrom."]
        }
      ],
      extraTest: [
        { id: "dig-l8-q4", prompt: "Welche Aussage passt zu Typ-2-Diabetes?", options: ["Insulinresistenz und relativer Insulinmangel, oft mit Übergewicht", "Absoluter Insulinmangel durch Autoimmunprozess", "Tritt nur in der Schwangerschaft auf"], answer: 0, explanation: "Typ 2: Insulinresistenz + relativer Mangel; Typ 1: absolut/autoimmun." },
        { id: "dig-l8-q5", prompt: "Wie nennt man den Spätschaden an den kleinen Blutgefäßen?", options: ["Mikroangiopathie", "Makroangiopathie", "Hepatopathie"], answer: 0, explanation: "Mikro = klein; Makro = groß." }
      ]
    },
    {
      diagram: "ifobt",
      supplement: "Darmkrebsvorsorge (Stand: Regelung seit 01.04.2025): Frauen und Männer ab 50 können alle 2 Jahre einen iFOBT oder alternativ insgesamt 2 Früherkennungskoloskopien im Abstand von mindestens 10 Jahren wählen. Der G-BA überprüft derzeit Altersgrenze und Häufigkeit der Koloskopie – maßgeblich ist der Stand aus eurem Unterricht.",
      mnemonic: "Untersuchungsreihenfolge Bauch: „Ich Aus Per Pal“ – Inspektion, Auskultation, Perkussion, Palpation (am Bauch wird vor dem Abtasten abgehört, damit die Darmgeräusche nicht verfälscht werden). Davor immer die Anamnese.",
      keyTerms: [
        { term: "Anamnese", def: "Erhebung der Krankengeschichte im Gespräch; Eigen- oder Fremdanamnese." },
        { term: "Inspektion", def: "Untersuchung durch Betrachten (z. B. Bauchform, Narben, Hautfarbe, Ikterus)." },
        { term: "Palpation", def: "Untersuchung durch Abtasten (z. B. Druckschmerz, Abwehrspannung, Organgröße)." },
        { term: "Resistenz", def: "Bei der Palpation tastbarer Widerstand bzw. tastbare Verhärtung, z. B. vergrößertes Organ, Tumor, Kotballen." },
        { term: "Auskultation", def: "Abhören mit dem Stethoskop – am Bauch v. a. die Darmgeräusche." },
        { term: "Perkussion", def: "Abklopfen der Körperoberfläche zur Beurteilung des darunterliegenden Gewebes (Luft, Flüssigkeit, Organ)." },
        { term: "GOT (AST) / GPT (ALT)", def: "Leberenzyme (Transaminasen) – steigen bei Leberzellschaden; GPT ist leberspezifischer." },
        { term: "γ-GT", def: "Gamma-Glutamyltransferase – empfindlicher Leber-/Gallewert, z. B. bei Alkohol oder Gallenstau erhöht." },
        { term: "AP", def: "Alkalische Phosphatase – erhöht bei Gallenstau (auch bei Knochenerkrankungen)." },
        { term: "Lipase", def: "Pankreasenzym im Serum – wichtigster Laborwert bei akuter Pankreatitis." },
        { term: "iFOBT", def: "Immunologischer fäkaler okkulter Bluttest: weist mit Antikörpern menschliches Blut im Stuhl nach; keine Diät nötig." },
        { term: "okkult", def: "Verborgen, mit bloßem Auge nicht sichtbar." },
        { term: "Sonografie", def: "Ultraschalluntersuchung – schmerzfrei, ohne Strahlenbelastung; Oberbauch nüchtern." }
      ],
      mistakes: [
        "Beim iFOBT eine Fleischdiät verlangen – das galt für den alten Guajak-Test (Haemoccult), nicht für den immunologischen Test.",
        "Die Stuhlprobe aus dem Toilettenwasser entnehmen lassen – das verfälscht das Ergebnis.",
        "Amylase und Lipase der Leber zuordnen – beides sind Pankreaswerte.",
        "Resistenz mit „Abwehrspannung“ gleichsetzen: Abwehrspannung ist ein reflektorisches Anspannen der Bauchdecke, Resistenz ein tastbarer Widerstand/eine Verhärtung."
      ],
      tasks: [
        {
          type: "table",
          id: "dig-l9-lab",
          title: "Arbeitsblatt: Laborwerte zuordnen",
          prompt: "Schreibe „Leber“ oder „Pankreas“.",
          rows: [
            { label: "GPT (ALT)", accepted: ["leber"], expected: "Leber" },
            { label: "Lipase", accepted: ["pankreas", "bauchspeicheldrüse"], expected: "Pankreas" },
            { label: "γ-GT", accepted: ["leber"], expected: "Leber" },
            { label: "α-Amylase", accepted: ["pankreas", "bauchspeicheldrüse"], expected: "Pankreas (auch Speicheldrüsen)" },
            { label: "Bilirubin", accepted: ["leber"], expected: "Leber" },
            { label: "GOT (AST)", accepted: ["leber"], expected: "Leber" },
            { label: "AP (alkalische Phosphatase)", accepted: ["leber"], expected: "Leber/Galle" }
          ]
        },
        {
          type: "writing",
          id: "dig-l9-ifobt",
          title: "Patientengespräch: iFOB-Test erklären",
          prompt: "Ein 52-jähriger Patient erhält einen iFOB-Test. Erkläre ihm Zweck und Durchführung.",
          modelAnswer: "Mit diesem Test suchen wir nach Blut im Stuhl, das man mit bloßem Auge nicht sieht. Solches Blut kann von Darmpolypen oder einem Darmkrebs stammen – deshalb ist der Test Teil der Darmkrebsvorsorge. Sie müssen vorher keine Diät einhalten. Bitte beschriften Sie das Röhrchen mit Ihrem Namen, Geburtsdatum und dem Datum. Fangen Sie den Stuhl mit dem beiliegenden Papier oder einer Unterlage auf, damit er nicht ins Toilettenwasser fällt und nicht mit Urin in Berührung kommt. Stechen Sie mit dem Stäbchen an mehreren Stellen in den Stuhl, stecken Sie es zurück ins Röhrchen und verschließen Sie es fest. Bitte bringen Sie die Probe möglichst rasch, am besten am selben oder nächsten Tag, in die Praxis und lagern Sie sie bis dahin kühl. Während der Periode oder bei blutenden Hämorrhoiden sollten Sie keine Probe nehmen. Ist der Test positiv, folgt zur Abklärung eine Darmspiegelung.",
          criteria: ["Zweck: verborgenes Blut, Darmkrebsvorsorge.", "Keine Diät.", "Beschriften.", "Stuhl auffangen, nicht aus dem Wasser.", "Mehrere Stellen, Röhrchen fest verschließen.", "Schnell zurückbringen / kühl lagern.", "Positiv → Koloskopie."]
        },
        {
          type: "writing",
          id: "dig-l9-sono",
          title: "Patientengespräch: Vorbereitung auf eine Oberbauchsonografie",
          prompt: "Informiere eine Patientin über die Sonografie und bereite sie vor.",
          modelAnswer: "Bei der Sonografie wird Ihr Bauch mit Ultraschallwellen untersucht. Die Untersuchung ist schmerzfrei und ohne Röntgenstrahlen. Bitte kommen Sie nüchtern: ab etwa 6 bis 8 Stunden vorher nichts mehr essen, keinen Kaffee, keine kohlensäurehaltigen Getränke, nicht rauchen und keinen Kaugummi kauen, denn Luft im Darm stört das Bild und die Gallenblase ist nur nüchtern gut gefüllt. Ihre Medikamente nehmen Sie nach Absprache mit etwas stillem Wasser. Bei der Untersuchung liegen Sie auf dem Rücken mit freiem Bauch; es wird ein kühles Gel aufgetragen, und der Arzt bittet Sie zwischendurch, tief einzuatmen und die Luft anzuhalten. Das dauert etwa 10 bis 20 Minuten, danach können Sie gleich wieder essen.",
          criteria: ["Ultraschall, schmerzfrei, keine Strahlung.", "Nüchtern 6–8 h.", "Keine Kohlensäure, nicht rauchen, kein Kaugummi (Begründung: Luft).", "Medikamente nach Absprache.", "Ablauf: Rückenlage, Gel, Atemkommandos, Dauer."]
        }
      ],
      extraTest: [
        { id: "dig-l9-q4", prompt: "Wer hat seit April 2025 Anspruch auf den iFOBT im Rahmen der gesetzlichen Darmkrebsvorsorge?", options: ["Frauen und Männer ab 50 Jahren alle 2 Jahre", "Nur Männer ab 55 Jahren jährlich", "Alle ab 18 Jahren jährlich"], answer: 0, explanation: "Seit 01.04.2025 gilt für beide Geschlechter: ab 50 iFOBT alle 2 Jahre oder alternativ 2 Koloskopien im Abstand von 10 Jahren." },
        { id: "dig-l9-q5", prompt: "Was bedeutet „Resistenz“ bei der Bauchuntersuchung?", options: ["Ein tastbarer Widerstand bzw. eine tastbare Verhärtung", "Ein abgehörtes Darmgeräusch", "Die Unempfindlichkeit von Bakterien gegen Antibiotika"], answer: 0, explanation: "Im Zusammenhang mit der Palpation bedeutet Resistenz eine tastbare Verhärtung (in der Mikrobiologie hat das Wort eine andere Bedeutung)." }
      ]
    }
  ]
};

export const studyTips = [
  { title: "Aktives Abrufen", text: "Erst selbst antworten, dann nachsehen. Abrufen festigt Wissen stärker als erneutes Lesen.", where: "Vorab-Fragen, Karteikarten, Training" },
  { title: "Verteiltes Wiederholen", text: "Lieber 5 × 20 Minuten über eine Woche als 100 Minuten am Stück. Die Karteikarten planen Wiederholungen automatisch.", where: "Karteikarten (Leitner-System)" },
  { title: "Gemischt üben", text: "Themen mischen (Interleaving) zwingt dich, die passende Lösung selbst zu erkennen – genau wie in der Prüfung.", where: "Gemischtes Training" },
  { title: "Erklären statt auswendig lernen", text: "Erkläre einen Begriff so, dass ihn jemand ohne Vorwissen versteht (Feynman-Methode). Lücken fallen dann sofort auf.", where: "„Erkläre es selbst“-Aufgaben" },
  { title: "Bild + Wort", text: "Grafiken, Videos und Text zusammen erzeugen mehrere Erinnerungsspuren (Dual Coding).", where: "Schritt „Verstehen“" },
  { title: "Fehler nutzen", text: "Jeder Fehler landet in deiner Wiederholungsliste. Wer seine Fehler gezielt nacharbeitet, lernt am effizientesten.", where: "Wiederholen" }
];

export const operators = [
  { op: "Nennen", level: "I", expect: "Begriffe, Fakten ohne Erklärung aufzählen.", example: "Nenne die fünf Wahlgrundsätze." },
  { op: "Beschreiben", level: "I–II", expect: "Sachverhalt mit eigenen Worten strukturiert darstellen.", example: "Beschreibe den Ablauf einer ARP-Anfrage." },
  { op: "Erklären", level: "II", expect: "Zusammenhänge und Ursachen verständlich machen (warum/wie).", example: "Erkläre, warum WLAN CSMA/CA verwendet." },
  { op: "Zuordnen", level: "II", expect: "Elemente begründet einer Kategorie zuweisen.", example: "Ordne Switch und Router den OSI-Schichten zu." },
  { op: "Berechnen", level: "II", expect: "Rechenweg nachvollziehbar aufschreiben, Ergebnis mit Einheit.", example: "Berechne die Anzahl nutzbarer Hosts in /26." },
  { op: "Vergleichen", level: "II–III", expect: "Gemeinsamkeiten UND Unterschiede kriteriengeleitet gegenüberstellen.", example: "Vergleiche TCP und UDP." },
  { op: "Beschriften", level: "I", expect: "Nummerierte Teile einer Abbildung mit Fachbegriff (und ggf. deutschem Begriff) benennen.", example: "Beschrifte die Abschnitte des Dickdarms." },
  { op: "Erläutern", level: "II", expect: "Sachverhalt erklären UND mit Beispielen oder Belegen veranschaulichen.", example: "Erläutere den Gestationsdiabetes." },
  { op: "Begründen", level: "III", expect: "Aussage mit Argumenten und Fachbegriffen stützen.", example: "Begründe, warum die Zweitstimme wichtiger ist." },
  { op: "Beurteilen / Bewerten", level: "III", expect: "Eigenes, begründetes Urteil anhand von Kriterien formulieren.", example: "Beurteile die Fünf-Prozent-Hürde." }
];

// Geprüfte YouTube-Videos (oEmbed 200, Einbettung erlaubt; Stand 09.11.2026)
export const videos = {
  politics: [
    [{ id: "E9kXaSeqCv4", title: "Einfach erklärt: Was ist das Grundgesetz?", channel: "Deutscher Bundestag", duration: "5:57" }, { id: "tYWQs7I7NCQ", title: "Grundrechte im Grundgesetz – Menschenrechte, Menschenwürde, Bürgerrechte", channel: "Die Merkhilfe", duration: "6:08" }],
    [{ id: "ZHj10P8X7OA", title: "Gewaltenteilung einfach erklärt", channel: "explainity", duration: "2:14" }, { id: "bpHAXzjWsvI", title: "Das Bundesverfassungsgericht – einfach erklärt!", channel: "Politik – simpleclub", duration: "5:57" }],
    [{ id: "bdmPp_oWu08", title: "Verfassungsorgane einfach erklärt", channel: "EinfachSchule", duration: "3:47" }, { id: "gtz-YckZJNk", title: "Verfassungsorgane im Überblick – Bundestag, Bundesrat, Regierung, Gericht", channel: "Die Merkhilfe", duration: "5:13" }],
    [{ id: "7RMKwP_854M", title: "Erst- und Zweitstimme", channel: "Bundeszentrale für politische Bildung", duration: "3:20" }, { id: "db7L8AEVQHw", title: "Das geltende Wahlrecht nach der Reform 2023", channel: "Deutscher Bundestag", duration: "2:54" }, { id: "LuV5EwFGLvc", title: "Zweitstimmendeckung", channel: "Bundeszentrale für politische Bildung", duration: "5:14" }]
  ],
  network: [
    [{ id: "_kDogzR0-4Q", title: "OSI-Schichtenmodell einfach erklärt", channel: "IT & Medien einfach erklärt", duration: "3:41" }, { id: "9F_AwkOmXZk", title: "Das OSI-Modell – 7 Schichten in unter 5 Minuten", channel: "Patrick Boekhoven", duration: "4:45" }],
    [{ id: "D_VW0yi5bPo", title: "MAC- und IP-Adressen – Unterschiede und Einsatzorte", channel: "IT-LearnBase", duration: "2:48" }, { id: "NC8yBbbmbjo", title: "OSI-Kapselung erklärt", channel: "Bitjunkie", duration: "5:01" }],
    [{ id: "WOcpjbEcOy0", title: "Wie funktioniert das Address Resolution Protocol (ARP)?", channel: "Patrick Boekhoven", duration: "4:27" }, { id: "ipDhLgJxwXA", title: "Netzwerktechnik Tutorial #38 – ARP", channel: "The Morpheus Tutorials", duration: "7:51" }],
    [{ id: "LnIw2Rr2oiA", title: "Netzwerktechnik Tutorial #21 – CSMA/CD vs. CSMA/CA", channel: "The Morpheus Tutorials", duration: "5:34" }, { id: "lr6GWTbm5Fk", title: "CSMA/CD-Verfahren einfach erklärt", channel: "IT & Medien einfach erklärt", duration: "2:39" }],
    [{ id: "whZ2o8WtS8A", title: "Erklär mir: TCP- und UDP-Verbindung | TCP Handshake", channel: "GamesNotOver", duration: "4:52" }, { id: "y-LPVpam5wg", title: "TCP vs. UDP – die Unterschiede", channel: "Sebastian Philippi", duration: "11:01" }],
    [{ id: "3jLTvJDbc2Q", title: "Subnetting in 4 Minuten erklärt", channel: "Noel Lang", duration: "4:19" }, { id: "95xu8f_1hYo", title: "So funktioniert Subnetting (IPv4)!", channel: "Patrick Boekhoven", duration: "11:31" }],
    [{ id: "V1PAscOc0sQ", title: "Wireshark-Tutorial für Anfänger #1", channel: "Luis Huber", duration: "5:06" }, { id: "mNzjcccqvHU", title: "Wie funktioniert Traceroute?", channel: "DE-CIX", duration: "13:42" }]
  ],
  digestion: [
    [{ id: "gcP0AiMDjes", title: "Die Verdauung des Menschen", channel: "Biologie – simpleclub", duration: "5:56" }, { id: "ZOAaEX0xoTw", title: "Wie funktioniert das Verdauungssystem?", channel: "Stiftung Gesundheitswissen", duration: "2:26" }, { id: "r0mCc-b6Slg", title: "Wie unser Verdauungssystem funktioniert – Emma Bryce", channel: "Bleib neugierig – TED-Ed", duration: "4:53" }],
    [{ id: "0-Gh3QZwuxE", title: "Schlucken leicht gemacht: präoral, oral, pharyngeal und ösophageal erklärt", channel: "Dr. med. Claudia Bignion", duration: "4:23" }, { id: "IzPrcPdgbC0", title: "Die Mundhöhle: Speicheldrüsen, Zunge und Zähne", channel: "Lecturio Medizin", duration: "5:13" }],
    [{ id: "E0TajLljV6k", title: "Wie funktioniert der Magen?", channel: "Bayer Deutschland", duration: "1:34" }, { id: "DGaB7VL-lB8", title: "Magen – Aufbau und Funktion erklärt", channel: "Einfach Medizin", duration: "13:31" }],
    [{ id: "VP1XTQWp_9s", title: "Der Dünndarm – Meister der Oberflächenvergrößerung", channel: "Dr. Willmar Schwabe", duration: "1:54" }, { id: "BqbPgtxoOyE", title: "Dünndarmwand: So kommen Nährstoffe in den Körper!", channel: "planet schule", duration: "3:14" }],
    [{ id: "6XLklS4n5dw", title: "Der Dickdarm – Endstation für die Nahrungsverwertung", channel: "Dr. Willmar Schwabe", duration: "1:34" }, { id: "cskEB6td8FU", title: "Dickdarm Anatomie", channel: "Erstens:Medizin", duration: "4:13" }, { id: "7F15x065_9M", title: "Obstipation", channel: "GPGE e.V.", duration: "3:45" }],
    [{ id: "xQHJVi0qtV8", title: "Wie funktioniert die Leber?", channel: "Stiftung Gesundheitswissen", duration: "2:04" }, { id: "08i_YGZEsb0", title: "Leber – Aufbau und Funktion einfach erklärt", channel: "Einfach Medizin", duration: "8:39" }, { id: "_xJccVRHR8E", title: "Gallenblase und Galle", channel: "Know it Anatomie & Training", duration: "4:29" }],
    [{ id: "31foEfE7HyY", title: "So funktioniert die Bauchspeicheldrüse", channel: "Trivial Genial – DAK-Gesundheit", duration: "1:26" }, { id: "dbP0KzPqFDg", title: "Die Bauchspeicheldrüse", channel: "diabinfo", duration: "2:31" }, { id: "t2BxEsz4mDA", title: "Pankreas – Aufbau und Funktion einfach erklärt", channel: "Einfach Medizin", duration: "11:10" }],
    [{ id: "L3DkuIa63Bo", title: "Unterschied Diabetes Typ 1 / Typ 2", channel: "NeoDoc", duration: "4:12" }, { id: "YLtuDou_dVk", title: "Schwangerschaftsdiabetes – das solltest du wissen", channel: "Trivial Genial – DAK-Gesundheit", duration: "1:26" }, { id: "hgaHa0vCPQA", title: "Diabetes – Neuropathie und Diabetischer Fuß", channel: "Deutsches Diabetes-Zentrum (DDZ)", duration: "1:34" }],
    [{ id: "S_ynCnL-uHA", title: "Wie funktioniert ein Stuhltest zur Darmkrebsvorsorge?", channel: "Felix Burda Stiftung", duration: "1:30" }, { id: "3K84an52fuU", title: "Die Stuhlentnahme mit dem SENTiFIT pierceTube für die Darmkrebsvorsorge", channel: "Sysmex Europe", duration: "1:18" }, { id: "KxFsvhAR3o4", title: "Wie funktioniert eine Ultraschall-Untersuchung? (für Kinder erklärt)", channel: "Universitätsklinikum Freiburg", duration: "3:59" }]
  ]
};
