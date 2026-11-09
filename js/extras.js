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
  ]
};
