export const subjects = {
  politics: {
    title: "Politisches System",
    shortTitle: "Politik",
    icon: "§",
    color: "green",
    description: "Vom Grundgesetz über Gewaltenteilung bis zur Bundestagswahl: Verstehe die Institutionen und übe typische Prüfungsfragen.",
    levels: [
      {
        title: "Demokratie & Grundrechte",
        goal: "Du kannst das demokratische System einordnen, Artikel 1 wiedergeben und Menschen- von Bürgerrechten unterscheiden.",
        source: "Politisches System_9445.pdf, S. 1 und S. 3 (Prüfungsfrage und handschriftliche Antwort).",
        explanation: [
          "Das Arbeitsblatt fragt nach dem politischen System Deutschlands und erwartet als Kernantwort: ein demokratisches System. Deutschland ist außerdem ein Bundesstaat: Die staatlichen Aufgaben sind zwischen Bund und Ländern verteilt.",
          "Artikel 1 Absatz 1 Grundgesetz lautet: „Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.“ Das bindet den Staat und schützt jeden Menschen.",
          "Menschenrechte stehen grundsätzlich allen Menschen zu. Bürgerrechte knüpfen an die deutsche Staatsangehörigkeit an. Das Wahlrecht zum Bundestag ist ein typisches Bürgerrecht; Menschenwürde und Menschenrechte gelten nicht nur für deutsche Staatsangehörige."
        ],
        example: "Denk an ein Konzert: Menschenwürde schützt jede Person in der Menge. Das aktive Wahlrecht bei einer Bundestagswahl steht dagegen grundsätzlich wahlberechtigten deutschen Staatsangehörigen zu.",
        practice: {
          id: "pol-l1-practice",
          prompt: "Eine Person ohne deutsche Staatsangehörigkeit wird staatlich behandelt. Gilt Artikel 1 Grundgesetz auch für sie?",
          options: ["Ja. Die Menschenwürde gilt jedem Menschen.", "Nein. Grundrechte gelten nur deutschen Staatsangehörigen.", "Nur, wenn die Person schon lange in Deutschland lebt."],
          answer: 0,
          explanation: "Artikel 1 spricht von der Würde des Menschen. Das ist kein Recht, das erst durch die deutsche Staatsangehörigkeit entsteht."
        },
        test: [
          { id: "pol-l1-q1", prompt: "Welche Aussage gibt Artikel 1 Absatz 1 GG richtig wieder?", options: ["Die Würde des Menschen ist unantastbar.", "Alle Bürger müssen dieselbe Meinung haben.", "Die Würde gilt nur im öffentlichen Raum."], answer: 0, explanation: "Artikel 1 schützt die Würde jedes Menschen und verpflichtet alle staatliche Gewalt, sie zu achten und zu schützen." },
          { id: "pol-l1-q2", prompt: "Was ist ein typisches Bürgerrecht?", options: ["Das Recht auf Menschenwürde.", "Das Wahlrecht zum Deutschen Bundestag.", "Der Schutz vor Folter."], answer: 1, explanation: "Das Bundestagswahlrecht knüpft an die deutsche Staatsangehörigkeit und weitere Wahlvoraussetzungen an. Menschenwürde und Folterverbot gelten für alle Menschen." },
          { id: "pol-l1-q3", prompt: "Welche Kurzantwort passt zur Prüfungsfrage nach Deutschlands politischem System?", options: ["Demokratie.", "Absolute Monarchie.", "Militärdiktatur."], answer: 0, explanation: "Die Prüfungsseite nennt das demokratische System als erwartete Kernantwort." }
        ],
        recap: ["Demokratie ist die Kernantwort der Prüfungsseite.", "Artikel 1 schützt die Würde jedes Menschen.", "Menschenrechte gelten allen Menschen; Bürgerrechte knüpfen an die Staatsangehörigkeit an."]
      },
      {
        title: "Gewaltenteilung & Verfassungsgericht",
        goal: "Du kannst die drei Gewalten, ihre Aufgaben und Beispiele für zuständige Institutionen zuordnen.",
        source: "Politisches System_9445.pdf, S. 1–2.",
        explanation: [
          "Die Staatsgewalt wird auf drei Bereiche verteilt: Die Legislative beschließt Gesetze, die Exekutive führt Gesetze aus, und die Judikative spricht Recht.",
          "Beispiele aus der Klassenarbeit: Bundestag und Bundesrat wirken an der Gesetzgebung mit; Regierung, Verwaltung und Polizei gehören zur ausführenden Gewalt; Gerichte sprechen Recht.",
          "Das Bundesverfassungsgericht sitzt in Karlsruhe und prüft, ob staatliches Handeln mit dem Grundgesetz vereinbar ist. Die Prüfungsseite nennt 16 Richterinnen und Richter in zwei Senaten. Je acht werden durch Bundestag und Bundesrat gewählt; für die Wahl ist eine Zweidrittelmehrheit erforderlich."
        ],
        example: "Ein neues Gesetz wird im Bundestag beraten (Legislative). Eine Behörde wendet es auf einen Antrag an (Exekutive). Ein Gericht entscheidet später über einen Rechtsstreit (Judikative).",
        practice: {
          id: "pol-l2-practice",
          prompt: "Eine Behörde setzt ein beschlossenes Gesetz um. Welche Gewalt handelt?",
          options: ["Legislative", "Exekutive", "Judikative"],
          answer: 1,
          explanation: "Die Exekutive führt Gesetze aus. Das Beschließen ist Legislative; das Rechtsprechen ist Judikative."
        },
        test: [
          { id: "pol-l2-q1", prompt: "Welche Gewalt beschließt Gesetze?", options: ["Legislative", "Exekutive", "Judikative"], answer: 0, explanation: "Die Legislative ist die gesetzgebende Gewalt." },
          { id: "pol-l2-q2", prompt: "Welche Zuordnung stimmt?", options: ["Gericht – Exekutive", "Polizei – Judikative", "Gericht – Judikative"], answer: 2, explanation: "Gerichte gehören zur rechtsprechenden Gewalt, der Judikative." },
          { id: "pol-l2-q3", prompt: "Wie viele Richterinnen und Richter nennt die Prüfungsseite für das Bundesverfassungsgericht?", options: ["16 in zwei Senaten", "12 in drei Senaten", "24 in einem Senat"], answer: 0, explanation: "Die Klassenarbeit nennt 16 Richterinnen und Richter und zwei Senate; je acht werden von Bundestag und Bundesrat gewählt." }
        ],
        recap: ["Legislative = Gesetze beschließen.", "Exekutive = Gesetze ausführen.", "Judikative = Recht sprechen.", "Das Bundesverfassungsgericht sitzt in Karlsruhe."]
      },
      {
        title: "Bundesorgane & Aufgaben",
        goal: "Du kannst Bundestag, Bundesrat, Bundesregierung, Bundeskanzler und Bundespräsident auseinanderhalten.",
        source: "Politisches System_9445.pdf, S. 1–2. Die Fragen nach den aktuellen Amtsinhabern beziehen sich auf 2024.",
        explanation: [
          "Der Bundestag ist das vom Volk gewählte Parlament auf Bundesebene. Der Bundesrat vertritt die Länder und wirkt an Bundesgesetzen mit.",
          "Die Bundesregierung besteht aus Bundeskanzler oder Bundeskanzlerin und Bundesministerinnen und Bundesministern. Der Kanzler bestimmt die politischen Richtlinien und leitet die Bundesregierung.",
          "Der Bundespräsident ist das Staatsoberhaupt. Er wird von der Bundesversammlung für fünf Jahre gewählt und kann einmal wiedergewählt werden."
        ],
        example: "Beim Gesetzgebungsprozess berät der Bundestag einen Gesetzentwurf; je nach Gesetz wirkt der Bundesrat mit. Die Bundesregierung führt ihre politischen Vorhaben aus.",
        supplement: "Zum Zeitpunkt der Klassenarbeit im Mai 2024 bestand die Bundesregierung aus SPD, Bündnis 90/Die Grünen und FDP unter Bundeskanzler Olaf Scholz. Aktueller Stand (3. November 2026): Bundeskanzler ist Friedrich Merz; die Bundesregierung besteht aus CDU/CSU und SPD. Bundespräsident ist Frank-Walter Steinmeier. Die Fragen nach den Amtsinhabern sind zeitgebunden; aktuelle Ämter können sich ändern.",
        practice: {
          id: "pol-l3-practice",
          prompt: "Welche Beschreibung passt zum Bundesrat?",
          options: ["Er vertritt die Länder auf Bundesebene.", "Er ist das oberste Gericht Deutschlands.", "Er wählt direkt den Bundespräsidenten."],
          answer: 0,
          explanation: "Im Bundesrat wirken die Länder durch Mitglieder ihrer Landesregierungen an Bundesangelegenheiten mit."
        },
        test: [
          { id: "pol-l3-q1", prompt: "Aus welchen Personen besteht die Bundesregierung?", options: ["Aus Bundeskanzler und Bundesministerinnen und Bundesministern.", "Aus Bundespräsident und Bundesverfassungsgericht.", "Aus allen Mitgliedern des Bundestages."], answer: 0, explanation: "Die Bundesregierung besteht aus Kanzler bzw. Kanzlerin und den Bundesministerinnen und Bundesministern." },
          { id: "pol-l3-q2", prompt: "Wer vertritt die Länder auf Bundesebene?", options: ["Der Bundesrat", "Der Bundespräsident", "Das Bundesverfassungsgericht"], answer: 0, explanation: "Der Bundesrat ist das Verfassungsorgan der Länder auf Bundesebene." },
          { id: "pol-l3-q3", prompt: "Wer ist laut aktuellem, auf der Website verlinktem Stand Bundeskanzler?", options: ["Friedrich Merz", "Olaf Scholz", "Frank-Walter Steinmeier"], answer: 0, explanation: "Die aktuelle Regierungsseite nennt Friedrich Merz als Bundeskanzler. Olaf Scholz ist eine historische Antwort aus der 2024er Prüfungsunterlage." },
          { id: "pol-l3-q4", prompt: "Welche Parteien bilden laut aktuellem Stand die Bundesregierung?", options: ["CDU/CSU und SPD", "SPD und FDP", "CDU/CSU und Bündnis 90/Die Grünen"], answer: 0, explanation: "Die amtierende Bundesregierung wird von CDU/CSU und SPD getragen; aktuelle Koalitionen können sich ändern." },
          { id: "pol-l3-q5", prompt: "Wer ist laut aktuellem Stand Bundespräsident?", options: ["Frank-Walter Steinmeier", "Friedrich Merz", "Olaf Scholz"], answer: 0, explanation: "Frank-Walter Steinmeier ist Bundespräsident. Der Bundespräsident ist das Staatsoberhaupt und wird von der Bundesversammlung gewählt." }
        ],
        recap: ["Bundestag: gewähltes Parlament.", "Bundesrat: Vertretung der Länder.", "Bundesregierung: Kanzler/in und Bundesminister/innen.", "Bundespräsident: Staatsoberhaupt; Wahl durch die Bundesversammlung."]
      },
      {
        title: "Bundestagswahl verstehen",
        goal: "Du kannst Erst- und Zweitstimme, die fünf Wahlgrundsätze, Verhältniswahl und die Fünf-Prozent-Hürde erklären.",
        source: "Politisches System_9445.pdf, S. 1–3; Wahlgrundsätze zusätzlich mit der Bundeswahlleiterin abgeglichen.",
        explanation: [
          "Die Erststimme gilt einer Person im Wahlkreis. Mit der Zweitstimme wird eine Partei gewählt; sie ist für die proportionale Verteilung der Sitze besonders wichtig.",
          "Die fünf Wahlgrundsätze sind allgemein, unmittelbar, frei, gleich und geheim. Merkhilfe: Alle wählen direkt und ohne Zwang; jede Stimme zählt gleich und die Entscheidung bleibt geheim.",
          "Das Arbeitsblatt bezeichnet das System als personalisierte Verhältniswahl und fragt nach der Fünf-Prozent-Hürde. Für die vereinfachte Prüfungsfrage: Eine Partei muss grundsätzlich fünf Prozent der Zweitstimmen erreichen, damit sie bei der Sitzverteilung berücksichtigt wird."
        ],
        example: "Beim Ankreuzen der Erststimme entscheidest du dich für eine Wahlkreiskandidatin. Mit der Zweitstimme entscheidest du dich für eine Partei.",
        supplement: "Das PDF ist eine Klassenarbeit aus 2024. Das Wahlrecht wurde vor der Bundestagswahl 2025 geändert: Ein Erststimmen-Sieg führt nicht mehr automatisch zu einem Sitz; die Sitzzuteilung ist durch Zweitstimmen gedeckelt. Behandle die Formulierungen der PDF als Unterrichts-/Prüfungsstoff; für aktuelle Einzelheiten gelten die Bundeswahlleiterin und das Bundeswahlgesetz. Die fünf Wahlgrundsätze sind unverändert.",
        practice: {
          id: "pol-l4-practice",
          prompt: "Eine Wählerin möchte vor allem die Stärke einer Partei im Bundestag beeinflussen. Welche Stimme ist dafür entscheidend?",
          options: ["Die Zweitstimme", "Die Erststimme", "Keine von beiden"],
          answer: 0,
          explanation: "Die Zweitstimme ist für die proportionale Sitzverteilung nach Parteien maßgeblich."
        },
        test: [
          { id: "pol-l4-q1", prompt: "Was wählst du mit der Erststimme?", options: ["Eine Person im Wahlkreis", "Eine Partei auf der Landesliste", "Den Bundespräsidenten"], answer: 0, explanation: "Die Erststimme gilt einer Wahlkreiskandidatin oder einem Wahlkreiskandidaten." },
          { id: "pol-l4-q2", prompt: "Welcher Begriff gehört nicht zu den fünf Wahlgrundsätzen?", options: ["Geheim", "Gleich", "Öffentlich"], answer: 2, explanation: "Die fünf Grundsätze sind allgemein, unmittelbar, frei, gleich und geheim." },
          { id: "pol-l4-q3", prompt: "Welche Stimme ist für die proportionale Verteilung der Bundestagssitze besonders wichtig?", options: ["Zweitstimme", "Erststimme", "Beide sind bedeutungslos"], answer: 0, explanation: "Die Zweitstimme bestimmt maßgeblich die proportionale Sitzverteilung zwischen den Parteien." }
        ],
        recap: ["Erststimme = Person im Wahlkreis.", "Zweitstimme = Partei und proportionale Sitzverteilung.", "Wahlgrundsätze: allgemein, unmittelbar, frei, gleich, geheim.", "Die PDF stammt aus 2024; aktuelle Wahlrechtsdetails bitte anhand der Bundeswahlleiterin prüfen."]
      }
    ],
    cards: [
      { front: "Was sind die drei Gewalten?", back: "Legislative (Gesetze beschließen), Exekutive (Gesetze ausführen), Judikative (Recht sprechen)." },
      { front: "Was schützt Artikel 1 Absatz 1 GG?", back: "Die unantastbare Würde jedes Menschen; alle staatliche Gewalt muss sie achten und schützen." },
      { front: "Wofür stehen Erst- und Zweitstimme?", back: "Erststimme: Wahlkreisperson. Zweitstimme: Partei und proportionale Sitzverteilung." },
      { front: "Nenne die fünf Wahlgrundsätze.", back: "Allgemein, unmittelbar, frei, gleich und geheim." }
    ],
    exam: [
      { id: "pol-exam-1", prompt: "Welche Gewalt führt Gesetze aus?", options: ["Legislative", "Exekutive", "Judikative"], answer: 1, explanation: "Die Exekutive setzt Gesetze um." },
      { id: "pol-exam-2", prompt: "Gilt die Menschenwürde nur für deutsche Staatsangehörige?", options: ["Ja", "Nein, sie gilt jedem Menschen", "Nur bei einer Bundestagswahl"], answer: 1, explanation: "Menschenwürde und Menschenrechte gelten jedem Menschen." },
      { id: "pol-exam-3", prompt: "Wer vertritt die Länder im Bund?", options: ["Bundesrat", "Bundespräsident", "Bundesverfassungsgericht"], answer: 0, explanation: "Der Bundesrat vertritt die Länder auf Bundesebene." },
      { id: "pol-exam-4", prompt: "Was wählst du mit der Erststimme?", options: ["Eine Person im Wahlkreis", "Eine Partei", "Den Bundesrat"], answer: 0, explanation: "Die Erststimme gilt einer Person im Wahlkreis." },
      { id: "pol-exam-5", prompt: "Welche Stimme ist für die proportionale Sitzverteilung besonders wichtig?", options: ["Erststimme", "Zweitstimme", "Keine"], answer: 1, explanation: "Die Zweitstimme bestimmt die proportionale Verteilung der Sitze zwischen den Parteien." },
      { id: "pol-exam-6", prompt: "Welche Reihe enthält nur Wahlgrundsätze?", options: ["Allgemein, unmittelbar, frei, gleich, geheim", "Öffentlich, mittelbar, frei, gleich, geheim", "Allgemein, direkt, freiwillig, offen, gleich"], answer: 0, explanation: "So lauten die fünf Wahlgrundsätze." },
      { id: "pol-exam-7", prompt: "Wo sitzt das Bundesverfassungsgericht?", options: ["Karlsruhe", "Berlin", "Bonn"], answer: 0, explanation: "Die Prüfungsunterlage nennt Karlsruhe." },
      { id: "pol-exam-8", prompt: "Wer ist laut aktueller Ergänzung Bundeskanzler?", options: ["Friedrich Merz", "Olaf Scholz", "Frank-Walter Steinmeier"], answer: 0, explanation: "Die verlinkte Bundesregierung nennt Friedrich Merz als Bundeskanzler." }
    ]
  },
  network: {
    title: "Netzwerktechnik & OSI-Modell",
    shortTitle: "Netzwerk",
    icon: "↗",
    color: "blue",
    description: "Verfolge Daten vom Ethernet-Rahmen bis zum Dienst und lerne, typische Netzwerkklausur-Aufgaben Schritt für Schritt zu lösen.",
    levels: [
      {
        title: "Die sieben OSI-Schichten",
        goal: "Du kannst die sieben Schichten von unten nach oben benennen und die Aufgaben grob einordnen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 1.",
        explanation: [
          "Das OSI-Modell ordnet Netzwerkkommunikation in sieben Funktionsbereiche. Von unten nach oben: 1 Bitübertragung, 2 Sicherung, 3 Vermittlung, 4 Transport, 5 Sitzung, 6 Darstellung, 7 Anwendung.",
          "Beim Senden wird eine Nachricht schrittweise verpackt: Ein Dienst erzeugt Daten, darunterliegende Schichten ergänzen ihre Informationen. Beim Empfänger werden die Hüllen wieder gelesen.",
          "Typische Gerätezuordnungen aus der Prüfungsseite: Repeater auf Schicht 1, Switch auf 2, Router auf 3. Eine Firewall kann – je nachdem, was sie prüft – auf Schicht 3 und/oder 4 arbeiten."
        ],
        example: "Merksatz von unten nach oben: „Bitte Suche Vernünftige Transporte Seit Dem Abend“ – Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung.",
        tasks: [
          {
            type: "table",
            id: "net-l1-osi-table",
            title: "Arbeitsblatt: Schichten ordnen",
            prompt: "Trage zu jeder Nummer den Namen der OSI-Schicht ein.",
            rows: [
              { label: "Schicht 1", accepted: ["Bitübertragung", "Bitübertragungsschicht"], expected: "Bitübertragung" },
              { label: "Schicht 2", accepted: ["Sicherung", "Sicherungsschicht"], expected: "Sicherung" },
              { label: "Schicht 3", accepted: ["Vermittlung", "Vermittlungsschicht"], expected: "Vermittlung" },
              { label: "Schicht 4", accepted: ["Transport", "Transportschicht"], expected: "Transport" },
              { label: "Schicht 5", accepted: ["Sitzung", "Sitzungsschicht"], expected: "Sitzung" },
              { label: "Schicht 6", accepted: ["Darstellung", "Darstellungsschicht"], expected: "Darstellung" },
              { label: "Schicht 7", accepted: ["Anwendung", "Anwendungsschicht"], expected: "Anwendung" }
            ]
          },
          {
            type: "writing",
            id: "net-l1-osi-writing",
            title: "Erkläre es selbst: Daten einkapseln",
            prompt: "Beschreibe in zwei bis vier Sätzen, was beim Senden mit den Daten auf dem Weg durch die Schichten geschieht.",
            modelAnswer: "Die Anwendungsdaten werden beim Senden schrittweise an die darunterliegenden Schichten übergeben. Jede Schicht ergänzt die für ihre Aufgabe benötigten Steuerinformationen, zum Beispiel Transport-, IP- und Ethernet-Informationen. Beim Empfänger werden diese Informationen schichtweise ausgewertet und entfernt.",
            criteria: ["Daten gehen beim Senden durch mehrere Schichten.", "Schichten ergänzen passende Steuerinformationen.", "Beim Empfänger werden die Informationen wieder ausgewertet."]
          }
        ],
        practice: {
          id: "net-l1-practice",
          prompt: "Ein Router leitet Pakete anhand ihrer IP-Zieladresse weiter. Auf welcher OSI-Schicht arbeitet diese Vermittlungsaufgabe?",
          options: ["Schicht 2 – Sicherung", "Schicht 3 – Vermittlung", "Schicht 4 – Transport"],
          answer: 1,
          explanation: "IP-Adressen und Weiterleitung zwischen Netzen gehören zur Vermittlungsschicht 3."
        },
        test: [
          { id: "net-l1-q1", prompt: "Welche Schicht ist direkt über der Sicherungsschicht?", options: ["Vermittlung (3)", "Bitübertragung (1)", "Transport (4)"], answer: 0, explanation: "Auf Schicht 2 folgt die Vermittlungsschicht 3." },
          { id: "net-l1-q2", prompt: "Ordne den Switch typischerweise zu.", options: ["Schicht 1", "Schicht 2", "Schicht 7"], answer: 1, explanation: "Ein Switch leitet Ethernet-Rahmen anhand von MAC-Adressen auf Schicht 2 weiter." },
          { id: "net-l1-q3", prompt: "Eine Firewall filtert nach IP-Adresse und Portnummer. Welche Schichten sind beteiligt?", options: ["Schicht 1 und 2", "Schicht 3 und 4", "Schicht 6 und 7"], answer: 1, explanation: "IP-Adressen gehören zu Schicht 3; TCP-/UDP-Portnummern zu Schicht 4." }
        ],
        recap: ["Die OSI-Schichten laufen von 1 (Bitübertragung) bis 7 (Anwendung).", "Switch: typisch Schicht 2; Router/IP: typisch Schicht 3.", "Ports sind Schicht 4; Geräte können Funktionen mehrerer Schichten verbinden."]
      },
      {
        title: "Ethernet- und Internetprotokoll",
        goal: "Du kannst Ethernet-Rahmen und IPv4-Paket unterscheiden, wichtige Felder zuordnen und den Weg zu einem Internetziel erklären.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 1–4.",
        explanation: [
          "Ethernet beschreibt die Übertragung auf dem lokalen Netzabschnitt. Ein Ethernet-Rahmen enthält unter anderem Ziel-MAC-Adresse, Quell-MAC-Adresse und ein Typfeld. Bei IPv4 steht im Typfeld 0x0800; der Rahmen transportiert dann das IPv4-Paket.",
          "Das Internetprotokoll (IP) vermittelt Pakete zwischen Netzen. Im IPv4-Header stehen unter anderem Quell- und Ziel-IP-Adresse sowie das Feld „Protocol“, das das nächste Protokoll wie TCP (6) oder UDP (17) kennzeichnet.",
          "Die Adressen erfüllen unterschiedliche Aufgaben: MAC-Adressen bringen einen Rahmen zum nächsten Gerät auf dem lokalen Abschnitt; IP-Adressen identifizieren Quelle und Ziel für die Weiterleitung über Netze hinweg. TCP- oder UDP-Portnummern ordnen den Verkehr einem Dienst auf dem Zielgerät zu.",
          "Bei einem entfernten Ziel bleibt die IP-Zieladresse die des Servers. Der erste Ethernet-Rahmen wird dagegen an die MAC-Adresse des lokalen Standardgateways geschickt. An jedem Router wird der Link-Layer-Rahmen für den nächsten Abschnitt neu erstellt.",
          "Die Prüfungsseite ordnet Ethernet als asynchron ein: Die Übertragung richtet sich nicht nach einem gemeinsamen zentralen Takt, den alle Stationen teilen."
        ],
        example: "Ethernet-Rahmen [Ziel-/Quell-MAC, Typ 0x0800] → IPv4-Paket [Quell-/Ziel-IP, Protocol 6] → TCP-Segment [Quell-/Zielport] → Anwendungsdaten. Das ist eine vereinfachte Kapselung; auf dem Rückweg werden die Header ausgewertet.",
        supplement: "Die Zuordnung Ethernet-Typ 0x0800 zu IPv4 und die Kapselung des IP-Datagramms in Ethernet sind in RFC 894 beschrieben. Die genaue Feldstruktur des IPv4-Headers wird im Vertiefungslevel behandelt.",
        tasks: [
          {
            type: "table",
            id: "net-l2-headers",
            title: "Arbeitsblatt: Header zuordnen",
            prompt: "Ergänze die Tabelle. Achte darauf, welche Adressen auf dem lokalen Abschnitt und welche Ende-zu-Ende verwendet werden.",
            rows: [
              { label: "Ethernet-Zieladresse", accepted: ["MAC-Adresse", "MAC"], expected: "MAC-Adresse des nächsten Geräts auf diesem LAN-Abschnitt" },
              { label: "Ethernet-Typ für IPv4", accepted: ["0x0800", "0800", "2048"], expected: "0x0800 (IPv4)" },
              { label: "IPv4-Zieladresse bei einem Internetserver", accepted: ["IP-Adresse des servers", "IP-Adresse des entfernten servers", "server-ip", "ip-zieladresse des servers", "ziel-ip des servers"], expected: "IP-Adresse des entfernten Servers" },
              { label: "IP-Feld Protocol für TCP", accepted: ["6", "tcp"], expected: "6 (TCP)" },
              { label: "TCP/UDP-Port", accepted: ["portnummer", "port"], expected: "Portnummer des Dienstes auf dem Zielgerät" }
            ]
          },
          {
            type: "writing",
            id: "net-l2-hop-writing",
            title: "Erkläre es selbst: erster Hop zum Internet",
            prompt: "Ein PC ruft einen Server außerhalb seines LANs auf. Erkläre, welche Ziel-IP und welche Ziel-MAC im ersten Paket/Rahmen verwendet werden – und warum sie verschieden sind.",
            modelAnswer: "Die Ziel-IP im IPv4-Paket ist die IP-Adresse des entfernten Servers und bleibt für dieses Ziel bestehen. Die Ziel-MAC im ersten Ethernet-Rahmen ist die MAC-Adresse des lokalen Standardgateways, weil Ethernet nur bis zum nächsten Gerät auf dem lokalen Abschnitt zustellt. Der Router leitet das IP-Paket weiter und verpackt es für den nächsten Abschnitt neu.",
            criteria: ["IP-Ziel bleibt der entfernte Server.", "Erster Ethernet-Rahmen geht an die Gateway-MAC.", "Router verpackt für den nächsten Netzabschnitt neu."]
          }
        ],
        practice: {
          id: "net-l2-practice",
          prompt: "Ein PC sendet an einen Internetserver außerhalb des privaten LANs. Welche Ziel-MAC-Adresse steht im ersten Ethernet-Rahmen?",
          options: ["Die MAC-Adresse des Routers/Standardgateways", "Die MAC-Adresse des Internetservers", "Die IP-Adresse des Servers"],
          answer: 0,
          explanation: "MAC-Adressen gelten für den lokalen Ethernet-Abschnitt. Das erste Ziel ist das lokale Gateway; die IP-Zieladresse bleibt die des Servers."
        },
        test: [
          { id: "net-l2-q1", prompt: "Welche Adresse gehört zur Ethernet-Sicherungsschicht?", options: ["MAC-Adresse", "IP-Adresse", "TCP-Port"], answer: 0, explanation: "Ethernet verwendet Quell- und Ziel-MAC-Adressen im Rahmen." },
          { id: "net-l2-q2", prompt: "Welche Information leitet ein Router zwischen IP-Netzen weiter?", options: ["IP-Zieladresse", "Ethernet-Quell-MAC als Endziel", "TCP-Sequenznummer als Netzadresse"], answer: 0, explanation: "Router treffen ihre Weiterleitungsentscheidung anhand der IP-Adresse." },
          { id: "net-l2-q3", prompt: "Welche Ziel-MAC verwendet der PC zunächst für einen Server außerhalb des LANs?", options: ["Die des Standardgateways", "Die des Servers", "Es gibt keine MAC-Adresse"], answer: 0, explanation: "Im lokalen Netz wird der Rahmen an das Standardgateway adressiert." },
          { id: "net-l2-q4", type: "short", prompt: "Welcher EtherType-Wert kennzeichnet IPv4 in Ethernet?", accepted: ["0x0800", "0800", "2048"], expected: "0x0800", explanation: "RFC 894 verwendet den Ethernet-Typwert 0x0800 für IPv4." },
          { id: "net-l2-q5", prompt: "Wie ordnet die Prüfungsseite Ethernet ein?", options: ["Asynchron", "Synchron mit gemeinsamem Bustakt", "Nur zeitgesteuert durch TCP"], answer: 0, explanation: "Die Prüfungsseite erwartet „asynchron“: Ethernet-Stationen teilen keinen gemeinsamen zentralen Bustakt." }
        ],
        recap: ["MAC = lokaler Ethernet-Abschnitt.", "IP = Weiterleitung zwischen Netzen.", "Port = Anwendung/Dienst auf dem Endgerät.", "Für ein entferntes Ziel geht der erste Ethernet-Rahmen an die Gateway-MAC.", "Die Prüfungsseite ordnet Ethernet als asynchron ein."]
      },
      {
        title: "ARP-Protokoll & Gateway",
        goal: "Du kannst ARP-Request und Reply erklären und begründen, warum für ein entferntes Ziel zuerst die Gateway-MAC gebraucht wird.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 2.",
        explanation: [
          "Kennt ein IPv4-Rechner die Ziel-IP im lokalen Netz, aber nicht die zugehörige MAC-Adresse, fragt er per ARP-Request im lokalen Netz nach. Die Anfrage wird lokal verbreitet; das Gerät mit der gesuchten IPv4-Adresse antwortet mit seiner MAC-Adresse.",
          "Der Rechner kann die Zuordnung vorübergehend im ARP-Cache speichern. ARP löst keine beliebige Internet-IP direkt in eine MAC auf: Für ein entferntes Ziel wird die MAC des nächsten Routers/Gateways gebraucht.",
          "IPv6 nutzt Neighbor Discovery (NDP), um Nachbarn und deren Link-Layer-Adressen zu finden und Router zu entdecken. NDP verwendet ICMPv6-Nachrichten; es ist nicht einfach ARP unter neuem Namen."
        ],
        example: "Zum Nachbargerät im selben LAN fragt der Rechner nach dessen MAC. Zum Server im Internet fragt er nach der MAC des Routers, der das Paket als Nächstes weiterleitet.",
        supplement: "Vertiefung anhand der Standards: ARP ist in RFC 826 beschrieben; IPv6 Neighbor Discovery in RFC 4861. Die Protokolldokumente sind in den Quellen am Seitenende verlinkt.",
        tasks: [
          {
            type: "table",
            id: "net-l3-arp-table",
            title: "Arbeitsblatt: ARP-Ablauf",
            prompt: "Ein PC will 192.168.1.20 im selben LAN erreichen und kennt die MAC-Adresse noch nicht. Ergänze die Tabelle.",
            rows: [
              { label: "Anfrage: gesuchte Protokolladresse", accepted: ["192.168.1.20"], expected: "192.168.1.20 (IPv4-Adresse des Ziels)" },
              { label: "Anfrage: Ziel-MAC im Ethernet-Rahmen", accepted: ["ff:ff:ff:ff:ff:ff", "ff-ff-ff-ff-ff-ff", "broadcast", "broadcast-mac"], expected: "Broadcast-MAC FF:FF:FF:FF:FF:FF" },
              { label: "Antwort: wer antwortet?", accepted: ["192.168.1.20", "ziel", "der rechner mit 192.168.1.20", "zielrechner"], expected: "Der Rechner, dem 192.168.1.20 gehört" },
              { label: "Antwort: welche Zuordnung wird gelernt?", accepted: ["ip zu mac", "ipv4 zu mac", "ipv4-adresse zu mac-adresse", "192.168.1.20 zu mac", "ip-adresse zu mac-adresse"], expected: "IPv4-Adresse → MAC-Adresse" },
              { label: "Entferntes Internetziel: wessen MAC wird gesucht?", accepted: ["gateway", "router", "standardgateway", "gateway-mac", "router-mac", "mac des standardgateways", "mac-adresse des routers", "mac-adresse des gateways"], expected: "MAC-Adresse des nächsten Routers/Standardgateways" }
            ]
          },
          {
            type: "writing",
            id: "net-l3-arp-writing",
            title: "Erkläre es selbst: ARP-Request und Reply",
            prompt: "Beschreibe den Ablauf vom unbekannten Nachbarn bis zum Versand des Ethernet-Rahmens. Erkläre auch, warum ARP nicht den Internetserver direkt auflöst.",
            modelAnswer: "Der Rechner sendet im lokalen Netz einen ARP-Request als Broadcast und fragt nach der MAC-Adresse zur IPv4-Adresse des Nachbarn. Der Rechner mit dieser IPv4-Adresse antwortet mit seiner MAC-Adresse; der Absender kann die Zuordnung im ARP-Cache speichern. Für ein entferntes Ziel wird anhand der IP-Route die MAC-Adresse des nächsten Routers benötigt, nicht die MAC des entfernten Servers.",
            criteria: ["ARP-Request wird lokal als Broadcast gesendet.", "Zielrechner antwortet mit seiner MAC-Adresse.", "Für entfernte Ziele wird die Gateway-MAC aufgelöst."]
          }
        ],
        practice: {
          id: "net-l3-practice",
          prompt: "Der Rechner kennt die IPv4-Adresse eines Nachbarn im selben LAN, aber nicht dessen MAC. Was geschieht?",
          options: ["Er sendet einen ARP-Request; das Ziel kann mit einem ARP-Reply antworten.", "Er sendet einen TCP-Request an alle Geräte.", "Er fragt den DNS-Server nach der MAC-Adresse."],
          answer: 0,
          explanation: "ARP ermittelt die Link-Layer-Adresse zu einer IPv4-Adresse auf dem lokalen Netzabschnitt."
        },
        test: [
          { id: "net-l3-q1", prompt: "Wofür wird ARP in einem IPv4-LAN verwendet?", options: ["IPv4-Adresse zu lokaler MAC-Adresse auflösen", "Portnummer in IP-Adresse umwandeln", "DNS-Namen verschlüsseln"], answer: 0, explanation: "ARP ordnet einer Protokolladresse (zum Beispiel IPv4) eine lokale Ethernet-Adresse zu." },
          { id: "net-l3-q2", prompt: "Was kann nach einer ARP-Anfrage im ARP-Cache stehen?", options: ["Die Zuordnung von IPv4-Adresse zu MAC-Adresse", "Die Liste aller Webseiten", "Das Passwort des Routers"], answer: 0, explanation: "Der Cache hält ermittelte Nachbarzuordnungen zeitlich begrenzt fest." },
          { id: "net-l3-q3", prompt: "Welches Verfahren erfüllt für IPv6 die Nachbarerkennung?", options: ["NDP / Neighbor Discovery", "ARP direkt über IPv6", "FTP"], answer: 0, explanation: "IPv6 verwendet Neighbor Discovery (NDP), unter anderem zur Ermittlung von Nachbarn und Link-Layer-Adressen." },
          { id: "net-l3-q4", type: "short", prompt: "Wie heißt die ARP-Nachricht, mit der ein Gerät die MAC-Adresse zu einer IPv4-Adresse erfragt?", accepted: ["arp request", "request", "arp-anfrage", "anfrage"], expected: "ARP-Request", explanation: "Der Absender sendet einen ARP-Request; das gesuchte Gerät antwortet üblicherweise mit einem ARP-Reply." }
        ],
        recap: ["ARP: IPv4-Adresse → lokale MAC-Adresse.", "Request fragt im lokalen Netz; Reply liefert die Zuordnung.", "IPv6 nutzt NDP über ICMPv6; entfernte Ziele werden zunächst an das Gateway übergeben."]
      },
      {
        title: "CSMA/CD und CSMA/CA",
        goal: "Du kannst die Zugriffsverfahren von klassischem gemeinsamem Ethernet und WLAN vergleichen und TCP/UDP-Anwendungen passend einordnen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 2 und S. 4.",
        explanation: [
          "CSMA bedeutet „Carrier Sense Multiple Access“: Geräte prüfen das Medium, bevor sie senden. CD („Collision Detection“) gehört zum klassischen gemeinsam genutzten, halbduplexen Ethernet: Während des Sendens wird eine Kollision erkannt; die Stationen stoppen und versuchen es nach einer zufälligen Wartezeit erneut.",
          "CA („Collision Avoidance“) wird im WLAN verwendet. Weil ein Funkgerät während des eigenen Sendens Kollisionen nicht zuverlässig wie bei einem Kabel erkennen kann, versucht WLAN sie durch Abhören, Warten und zufällige Backoff-Zeiten zu vermeiden. Bestätigungen und optionale RTS/CTS-Reservierungen helfen in passenden Situationen.",
          "Wichtig für die Einordnung: CSMA/CD ist kein Verfahren, das moderne, geschaltete Vollduplex-Ethernet-Verbindungen normalerweise für Kollisionen brauchen. CSMA/CA und CSMA/CD regeln den Zugriff auf das Übertragungsmedium; sie sind nicht die Transportprotokolle TCP und UDP.",
          "Eine TCP- oder UDP-Verbindung nutzt darunter IP und für den lokalen Abschnitt Ethernet oder WLAN. Die Zugriffsmethode des Mediums und die Zuverlässigkeit des Transports sind daher zwei verschiedene Fragestellungen."
        ],
        example: "Geteiltes halbduplexes Ethernet: Gerät sendet, erkennt eine Kollision und versucht es nach Backoff erneut (CSMA/CD). WLAN: Station hört den Kanal ab, wartet bei Belegung und nutzt Backoff (CSMA/CA).",
        supplement: "Die PDF behandelt CSMA/CA und Ethernet. Die genaue Abgrenzung von klassischem CSMA/CD zu heutigem geschaltetem Vollduplex-Ethernet ist eine fachliche Vertiefung. Die Zuordnung von HTTP/FTP/SSH zu TCP und VoIP/DHCP zu UDP sind typische Beispiele, keine ausnahmslose Regel für jede Implementierung.",
        tasks: [
          {
            type: "table",
            id: "net-l4-csma-table",
            title: "Arbeitsblatt: CSMA/CD und CSMA/CA vergleichen",
            prompt: "Ergänze für jedes Verfahren, wo es typischerweise vorkommt und wie es mit Kollisionen umgeht.",
            rows: [
              { label: "CSMA/CD: typischer Einsatz", accepted: ["klassisches ethernet", "gemeinsam genutztes halbduplex ethernet", "halbduplex ethernet"], expected: "Klassisches gemeinsam genutztes, halbduplexes Ethernet" },
              { label: "CSMA/CD: Umgang mit Kollisionen", accepted: ["erkennen und erneut senden", "kollision erkennen, abbrechen und nach zufallszeit erneut senden", "kollision erkennen und nach backoff erneut versuchen", "erkennen"], expected: "Kollision während des Sendens erkennen, abbrechen und nach Backoff erneut versuchen" },
              { label: "CSMA/CA: typischer Einsatz", accepted: ["wlan", "wifi", "wireless lan"], expected: "WLAN" },
              { label: "CSMA/CA: Grundidee", accepted: ["kollisionen vermeiden", "vorher lauschen und warten", "warten und zufallszeit", "collision avoidance"], expected: "Kollisionen durch Abhören, Warten und Backoff möglichst vermeiden" },
              { label: "Modernes geschaltetes Vollduplex-Ethernet: CSMA/CD nötig?", accepted: ["nein", "nein, normalerweise nicht", "nicht nötig"], expected: "Nein, normalerweise nicht" }
            ]
          },
          {
            type: "writing",
            id: "net-l4-csma-writing",
            title: "Erkläre es selbst: Warum CD oder CA?",
            prompt: "Erkläre in eigenen Worten, warum WLAN Kollisionen eher vermeiden muss, während klassisches CSMA/CD sie während des Sendens erkennen kann.",
            modelAnswer: "Bei einem Funkgerät überlagert das eigene Sendesignal den Empfang, deshalb kann es eine Kollision während des Sendens nicht zuverlässig wie ein Kabel-Ethernet erkennen. WLAN hört vor dem Senden ab und verwendet Wartezeiten/Backoff, um Kollisionen zu vermeiden. Klassisches gemeinsames halbduplexes Ethernet kann eine Kollision während des Sendens erkennen und danach den Sendeversuch wiederholen.",
            criteria: ["Eigenes Funksignal erschwert das gleichzeitige Erkennen einer Kollision.", "WLAN verwendet Kollisionsvermeidung (CA).", "Klassisches Ethernet kann Kollisionen erkennen (CD)."]
          }
        ],
        practice: {
          id: "net-l4-practice",
          prompt: "Zwei WLAN-Geräte wollen gleichzeitig senden. Welches Verfahren versucht Kollisionen zu vermeiden?",
          options: ["CSMA/CD", "CSMA/CA", "ARP"],
          answer: 1,
          explanation: "WLAN nutzt CSMA/CA: Die Stationen hören den Kanal ab und verwenden Warte- und Backoff-Zeiten, um Kollisionen möglichst zu vermeiden."
        },
        test: [
          { id: "net-l4-q1", prompt: "Wofür steht CD in CSMA/CD?", options: ["Collision Detection", "Connection Delivery", "Carrier Datagram"], answer: 0, explanation: "CD steht für Collision Detection: Kollisionserkennung beim klassischen gemeinsam genutzten Ethernet." },
          { id: "net-l4-q2", prompt: "Was ist die Grundidee von CSMA/CA?", options: ["Kollisionen möglichst vermeiden", "Kollisionen erst nach TCP erkennen", "IP-Adressen im WLAN verschlüsseln"], answer: 0, explanation: "CA steht für Collision Avoidance. WLAN versucht Kollisionen durch Abhören und Backoff zu vermeiden." },
          { id: "net-l4-q3", prompt: "Wird CSMA/CD für eine moderne geschaltete Vollduplex-Ethernet-Verbindung normalerweise benötigt?", options: ["Nein", "Ja, für jede Verbindung", "Nur wenn IPv4 verwendet wird"], answer: 0, explanation: "Bei geschaltetem Vollduplex-Ethernet gibt es keinen gemeinsamen Kollisionsbereich wie bei klassischem halbduplexem Ethernet." },
          { id: "net-l4-q4", type: "short", prompt: "Welches Verfahren wird typischerweise im WLAN eingesetzt? (Abkürzung)", accepted: ["CSMA/CA", "CA"], expected: "CSMA/CA", explanation: "WLAN nutzt CSMA/CA (Collision Avoidance)." }
        ],
        recap: ["CSMA/CD: Kollisionserkennung beim klassischen geteilten Halbduplex-Ethernet.", "CSMA/CA: Kollisionsvermeidung im WLAN.", "Mediumzugriff (CSMA) ist nicht dasselbe wie zuverlässiger Transport (TCP)."]
      },
      {
        title: "TCP und UDP",
        goal: "Du kannst TCP und UDP anhand von Verbindungsaufbau, Zuverlässigkeit und typischen Einsatzfällen vergleichen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 2 und S. 4.",
        explanation: [
          "TCP ist verbindungsorientiert. Vor dem Datenaustausch wird eine Verbindung aufgebaut; Sequenznummern, Bestätigungen und Wiederholungen helfen, Daten geordnet und zuverlässig an die Anwendung zu übergeben. Flusskontrolle stimmt die Senderate auf den Empfänger ab.",
          "UDP ist verbindungslos und transportiert einzelne Datagramme. Es garantiert selbst weder Zustellung noch Reihenfolge und wiederholt verlorene Daten nicht automatisch. Die Anwendung kann dadurch selbst entscheiden, wie sie mit Verlust oder Verspätung umgeht.",
          "Beide Protokolle nutzen Portnummern, um Daten einem Dienst auf einem Endgerät zuzuordnen. Typische Beispiele aus dem Unterricht: HTTP/FTP/SSH über TCP sowie DHCP/VoIP über UDP. Das sind typische Zuordnungen, nicht zwingend für jede Variante eines Dienstes."
        ],
        example: "Bei einer Datei ist es wichtig, dass fehlende Daten erneut übertragen und korrekt geordnet werden – TCP passt gut. Bei einem Echtzeitgespräch kann es besser sein, aktuelle Sprachdaten weiterzusenden, statt verspätete Daten nachzuliefern – UDP kann passen.",
        supplement: "Die PDF nennt typische Protokoll- und Dienstzuordnungen. TCP (RFC 9293) und UDP (RFC 768) sind in den Quellen am Seitenende verlinkt.",
        tasks: [
          {
            type: "table",
            id: "net-l5-transport-table",
            title: "Arbeitsblatt: TCP oder UDP?",
            prompt: "Ordne den typischen Fall zu und nenne jeweils den entscheidenden Grund.",
            rows: [
              { label: "Datei vollständig und geordnet übertragen", accepted: ["tcp", "tcp wegen zuverlässigkeit", "tcp, zuverlässige und geordnete übertragung", "tcp wegen wiederholungen", "tcp geordnete übertragung und wiederholungen"], expected: "TCP – geordnete Übertragung und Wiederholungen" },
              { label: "Echtzeit-Audio: alte verspätete Daten sind wenig nützlich", accepted: ["udp", "udp, keine wiederholungen", "udp wegen geringerem overhead", "udp, anwendung entscheidet", "udp keine automatische wiederholung die anwendung entscheidet"], expected: "UDP – keine automatische Wiederholung; die Anwendung entscheidet" },
              { label: "Portnummern gehören zu welcher Schicht?", accepted: ["transport", "transportschicht", "schicht 4", "4"], expected: "Transportschicht (OSI-Schicht 4)" },
              { label: "Garantiert UDP selbst die Zustellung?", accepted: ["nein", "nein, keine zustellgarantie", "nein, keine garantie"], expected: "Nein" }
            ]
          },
          {
            type: "writing",
            id: "net-l5-transport-writing",
            title: "Erkläre es selbst: Transport passend wählen",
            prompt: "Eine App überträgt erst eine Datei und danach einen Live-Audiostream. Begründe, welches Transportprotokoll jeweils typischerweise passt und worin der Zielkonflikt liegt.",
            modelAnswer: "Für die Datei passt typischerweise TCP, weil Reihenfolge und zuverlässige Zustellung wichtig sind und verlorene Daten erneut gesendet werden können. Für Live-Audio kann UDP passen, weil eine verspätete Wiederholung oft weniger nützlich ist als aktuelle Daten. UDP garantiert die Zustellung nicht; falls nötig muss die Anwendung selbst reagieren.",
            criteria: ["Datei: TCP wegen Reihenfolge/Zuverlässigkeit.", "Live-Audio: UDP kann wegen Zeitnähe sinnvoll sein.", "UDP hat selbst keine Zustellgarantie."]
          }
        ],
        practice: {
          id: "net-l5-practice",
          prompt: "Welche Transportwahl passt typischerweise besser, wenn fehlende Daten einer Datei erneut übertragen werden sollen?",
          options: ["TCP", "UDP", "ARP"],
          answer: 0,
          explanation: "TCP bietet Zuverlässigkeitsmechanismen wie Bestätigungen und Wiederholungen; UDP stellt diese selbst nicht bereit."
        },
        test: [
          { id: "net-l5-q1", prompt: "Welche Eigenschaft bietet TCP, die UDP selbst nicht garantiert?", options: ["Geordnete zuverlässige Zustellung mit Wiederholungen", "IPv4-Adressierung", "Ethernet-MAC-Adressen"], answer: 0, explanation: "TCP bietet geordnete, zuverlässige Datenübertragung; UDP garantiert die Zustellung und Reihenfolge selbst nicht." },
          { id: "net-l5-q2", prompt: "Wozu dienen TCP- und UDP-Portnummern?", options: ["Daten einem Dienst/Prozess zuordnen", "MAC-Adressen ersetzen", "Router im Internet nummerieren"], answer: 0, explanation: "Ports identifizieren den Kommunikationsendpunkt bzw. Dienst auf einem Gerät." },
          { id: "net-l5-q3", type: "short", prompt: "Welches Protokoll ist verbindungslos und garantiert selbst keine Zustellung?", accepted: ["udp"], expected: "UDP", explanation: "UDP ist verbindungslos und bietet selbst keine Zustell- oder Reihenfolgegarantie." }
        ],
        recap: ["TCP: verbindungsorientiert, geordnet, zuverlässige Zustellung mit Wiederholungen.", "UDP: verbindungslos, keine eigene Zustell- oder Reihenfolgegarantie.", "Ports ordnen den Verkehr einem Dienst auf dem Zielgerät zu."]
      },
      {
        title: "IPv4-Protokoll & Adressierung",
        goal: "Du kannst IPv4-Adressen und wichtige Felder eines IPv4-Headers erklären sowie eine einfache /26-Subnetzaufgabe lösen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 1–4.",
        explanation: [
          "IPv4-Adressen sind 32 Bit lang und werden meist als vier Dezimalzahlen von 0 bis 255 geschrieben, zum Beispiel 192.168.1.20. Eine Subnetzmaske trennt Netz- und Hostanteil. Präfix /26 bedeutet: 26 Netzbits und 6 Hostbits.",
          "Wichtige IPv4-Headerfelder: Version (4), Headerlänge (IHL), Gesamtlänge, TTL (wird auf dem Weg durch Router vermindert), Protocol (z. B. 6 für TCP, 17 für UDP), Header-Prüfsumme sowie Quell- und Ziel-IP-Adresse. Die Prüfsumme schützt den IPv4-Header; sie ist keine zuverlässige Ende-zu-Ende-Prüfung der Anwendungsdaten.",
          "Bei einem üblichen /26-Netz gibt es 2⁶ = 64 Adressen. In einem gewöhnlichen Subnetz sind die erste Adresse (Netzwerkadresse) und letzte Adresse (gerichtete Broadcastadresse) reserviert, also 62 übliche Hostadressen. Sonderfälle wie /31-Punkt-zu-Punkt-Verbindungen sind hier nicht gemeint."
        ],
        example: "192.168.1.70/26 gehört zum Netz 192.168.1.64/26. Der Bereich reicht von .64 bis .127; .64 ist die Netzwerkadresse, .127 die Broadcastadresse und .65–.126 sind 62 übliche Hostadressen.",
        supplement: "Die 32-Bit-Adresse und Headerfelder sind im Internet Protocol (RFC 791) spezifiziert. RFC 791 beschreibt IPv4; für heutige Netzwerke können zusätzliche Standards und Verfahren gelten.",
        tasks: [
          {
            type: "table",
            id: "net-l6-ipv4-table",
            title: "Arbeitsblatt: IPv4-Header ausfüllen",
            prompt: "Trage zu jedem Feld seine Bedeutung bzw. den passenden Wert ein.",
            rows: [
              { label: "IPv4: Version-Feld", accepted: ["4", "ipv4", "4 = ipv4"], expected: "4 (IPv4)" },
              { label: "IPv4 Protocol-Wert für TCP", accepted: ["6", "6 = tcp", "tcp"], expected: "6 = TCP" },
              { label: "IPv4 Protocol-Wert für UDP", accepted: ["17", "17 = udp", "udp"], expected: "17 = UDP" },
              { label: "TTL: Was geschieht an jedem Router?", accepted: ["wird um 1 verringert", "wird pro router um 1 verringert", "um 1 verringert", "router verringert ttl", "wird reduziert"], expected: "Wird pro Router mindestens um 1 verringert" },
              { label: "IPv4-Adressen: Länge", accepted: ["32 bit", "32"], expected: "32 Bit" },
              { label: "Welche Felder enthalten Sender und Ziel?", accepted: ["quell- und ziel-ip-adresse", "quell-ip und ziel-ip", "quell-ip-adresse und ziel-ip-adresse", "source und destination ip", "quelladresse und zieladresse"], expected: "Quell-IP-Adresse und Ziel-IP-Adresse" }
            ]
          },
          {
            type: "table",
            id: "net-l6-subnet-table",
            title: "Arbeitsblatt: /26 berechnen",
            prompt: "Vervollständige die Tabelle für 192.168.1.70/26.",
            rows: [
              { label: "Hostbits", accepted: ["6", "6 bit", "6 bits"], expected: "6 (32 − 26)" },
              { label: "Adressen insgesamt", accepted: ["64", "64 adressen"], expected: "64 (2⁶)" },
              { label: "Netzwerkadresse", accepted: ["192.168.1.64", "192.168.1.64/26"], expected: "192.168.1.64" },
              { label: "Broadcastadresse", accepted: ["192.168.1.127"], expected: "192.168.1.127" },
              { label: "Übliche nutzbare Hostadressen", accepted: ["62", "62 hosts", "62 hostadressen"], expected: "62" }
            ]
          },
          {
            type: "writing",
            id: "net-l6-ipv4-writing",
            title: "Erkläre es selbst: TTL und Schleifen",
            prompt: "Erkläre, warum ein Router die TTL verringert und was passiert, wenn sie null erreicht.",
            modelAnswer: "Jeder Router verringert die TTL, damit ein IPv4-Paket nicht unbegrenzt in einer Routing-Schleife weitergeleitet wird. Erreicht die TTL null, wird das Paket verworfen; typischerweise erhält der Absender eine ICMP-Zeitüberschreitungsmeldung.",
            criteria: ["TTL wird pro Router verringert.", "Sie verhindert unbegrenzte Weiterleitung in Schleifen.", "Bei TTL null wird das Paket verworfen."]
          }
        ],
        practice: {
          id: "net-l6-practice",
          prompt: "Ein Netz nutzt die Maske 255.255.255.192 (/26). Wie viele übliche IPv4-Hostadressen sind nutzbar?",
          options: ["62", "64", "126"],
          answer: 0,
          explanation: "/26 lässt 6 Hostbits: 64 Gesamtadressen. Netzwerk- und Broadcastadresse bleiben reserviert, also 62 nutzbare Hostadressen."
        },
        test: [
          { id: "net-l6-q1", prompt: "Wie viele Bit hat eine IPv4-Adresse?", options: ["32", "48", "128"], answer: 0, explanation: "IPv4-Adressen sind 32 Bit lang." },
          { id: "net-l6-q2", prompt: "Was bedeutet TTL = 0 beim Weiterleiten eines IPv4-Pakets?", options: ["Das Paket wird verworfen.", "Die MAC-Adresse wird gelöscht.", "Das Paket wird automatisch zu TCP."], answer: 0, explanation: "Router verringern die TTL; bei null wird das Paket verworfen, um endlose Weiterleitung zu vermeiden." },
          { id: "net-l6-q3", type: "short", prompt: "Wie viele übliche Hostadressen sind in einem /26-Subnetz nutzbar?", accepted: ["62", "62 hosts", "62 hostadressen"], expected: "62", explanation: "Sechs Hostbits ergeben 64 Adressen insgesamt; Netzwerk- und Broadcastadresse bleiben reserviert, also 62." },
          { id: "net-l6-q4", type: "table", prompt: "Ergänze die IPv4-Protokollnummern.", rows: [
            { label: "TCP", accepted: ["6"], expected: "6" },
            { label: "UDP", accepted: ["17"], expected: "17" }
          ], explanation: "Im IPv4-Protocol-Feld steht 6 für TCP und 17 für UDP." }
        ],
        recap: ["IPv4-Adressen haben 32 Bit.", "Protocol 6 = TCP; Protocol 17 = UDP.", "TTL wird an Routern verringert.", "/26: 64 Adressen insgesamt, typischerweise 62 nutzbare Hosts."]
      },
      {
        title: "Paketmitschnitt & Klausuraufgaben",
        goal: "Du kannst Ethernet-, IPv4- und TCP/UDP-Felder in einem einfachen Mitschnitt zuordnen und längere Antworten strukturiert begründen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 1–6.",
        explanation: [
          "Lies einen Mitschnitt von außen nach innen: Ethernet-Ziel-/Quell-MAC und Typ; danach IPv4-Quell-/Zieladresse und Protocol; anschließend TCP- oder UDP-Quell-/Zielport; dann die Anwendungsdaten.",
          "Beispiel: Ethernet-Typ 0x0800 bedeutet IPv4. Im IPv4-Header steht Protocol 0x11 (dezimal 17), also UDP. Der Zielport 0x0035 (dezimal 53) ist der DNS-Port. Ein Port ist ein Hinweis auf den Dienst, aber kein alleiniger Beweis für den Inhalt.",
          "Ein traceroute zeigt Zwischenstationen (Hops) und Antwortzeiten auf dem Weg zum Ziel. Für gleiche Impedanz bedeutet 20 dB Spannungsdämpfung: Es kommen 10 % der Eingangsspannung an; die Spannung ist um 90 % reduziert. Das ist nicht dasselbe wie 10 % Dämpfung."
        ],
        example: "Klausurantwort mit Begründung: „Der Ethernet-Typ ist 0x0800, daher folgt IPv4. Das Protocol-Feld ist 17, also UDP. Der Zielport 53 passt zum DNS-Dienst. Der Ethernet-Rahmen ist für den lokalen Abschnitt; die IP-Zieladresse bezeichnet das IP-Ziel.“",
        supplement: "Bei der 20-dB-Aufgabe ist die handschriftliche Schülerantwort auf dem Scan an einer Stelle unklar. Die sichere Aussage bei gleicher Impedanz lautet: 10 % der Eingangsspannung kommen an, also 90 % Spannungsreduktion.",
        tasks: [
          {
            type: "table",
            id: "net-l7-capture-table",
            title: "Klausuraufgabe: Paketmitschnitt auswerten",
            prompt: "Gegeben: Ethernet-Typ 0x0800; IPv4 Protocol 0x11; Ziel-IP 203.0.113.8; UDP-Zielport 0x0035. Fülle die Auswertungstabelle.",
            rows: [
              { label: "Ethernet-Nutzlast", accepted: ["ipv4", "ip", "ipv4-paket", "ip-paket"], expected: "IPv4-Paket" },
              { label: "IPv4 Protocol 0x11 (dezimal)", accepted: ["17", "17 = udp", "udp"], expected: "17 = UDP" },
              { label: "Transportprotokoll", accepted: ["udp"], expected: "UDP" },
              { label: "UDP-Zielport 0x0035 (dezimal)", accepted: ["53"], expected: "53" },
              { label: "Typischer Dienst auf Zielport 53", accepted: ["dns", "domain name system"], expected: "DNS" },
              { label: "Zweck der Ethernet-Ziel-MAC", accepted: ["nächster hop", "naechster hop", "gerät im lokalen netz", "lokaler abschnitt", "gateway im lokalen netz"], expected: "Nächstes Gerät auf dem lokalen Netzabschnitt (z. B. Gateway)" }
            ]
          },
          {
            type: "writing",
            id: "net-l7-capture-writing",
            title: "Ausführliche Antwort: Datenweg erklären",
            prompt: "Erkläre in fünf bis sieben Sätzen, wie ein PC ein UDP-Datagramm an einen Server außerhalb des eigenen LANs sendet. Verwende die Begriffe Ethernet, Gateway, ARP, IPv4, UDP, MAC-Adresse und IP-Zieladresse.",
            modelAnswer: "Die Anwendung übergibt ihre Daten an UDP, das Quell- und Zielport ergänzt. IPv4 ergänzt Quell- und Ziel-IP-Adresse; die IP-Zieladresse ist die des entfernten Servers. Weil der Server außerhalb des LANs liegt, wird das Paket an das Standardgateway gesendet. Ist dessen MAC-Adresse unbekannt, ermittelt der PC sie mit ARP. Der PC kapselt das IPv4-Paket in einen Ethernet-Rahmen mit der Gateway-MAC als Ziel-MAC. Der Router nimmt den Rahmen an und leitet das IP-Paket über den nächsten Netzabschnitt weiter; dort wird ein neuer Link-Layer-Rahmen verwendet.",
            criteria: ["UDP-Port und IPv4-Adressen korrekt zugeordnet.", "IP-Ziel bleibt der entfernte Server.", "ARP ermittelt bei Bedarf die Gateway-MAC.", "Ethernet-Ziel-MAC gilt für den lokalen Abschnitt.", "Router leitet das IP-Paket weiter und verpackt für den nächsten Abschnitt neu."]
          },
          {
            type: "table",
            id: "net-l7-damping-table",
            title: "Rechenaufgabe: 20 dB Spannungsdämpfung",
            prompt: "Gegeben: gleiche Impedanz, Spannungsdämpfung 20 dB. Ergänze die Ergebnisse.",
            rows: [
              { label: "Verhältnis U_Eingang : U_Ausgang", accepted: ["10:1", "10 zu 1"], expected: "10 : 1" },
              { label: "Anteil der Eingangsspannung am Ausgang", accepted: ["10%", "10 prozent", "0.1", "0,1"], expected: "10 %" },
              { label: "Spannungsreduktion", accepted: ["90%", "90 prozent", "90"], expected: "90 %" }
            ]
          }
        ],
        practice: {
          id: "net-l7-practice",
          prompt: "Ein Mitschnitt zeigt Ethernet-Typ 0x0800. Welches Protokoll folgt im Ethernet-Nutzdatenfeld?",
          options: ["IPv4", "ARP", "TCP direkt im Ethernet-Header"],
          answer: 0,
          explanation: "Der EtherType 0x0800 kennzeichnet IPv4; das IPv4-Paket liegt in der Ethernet-Nutzlast."
        },
        test: [
          { id: "net-l7-q1", prompt: "In welcher Reihenfolge liest man die Header von außen nach innen?", options: ["Ethernet → IP → TCP/UDP", "TCP/UDP → Ethernet → IP", "IP → Anwendung → Ethernet"], answer: 0, explanation: "Der lokale Ethernet-Rahmen umschließt das IP-Paket, das wiederum TCP- oder UDP-Daten enthält." },
          { id: "net-l7-q2", type: "table", prompt: "Ordne die Werte zu.", rows: [
            { label: "EtherType 0x0800", accepted: ["ipv4"], expected: "IPv4" },
            { label: "IPv4 Protocol 17", accepted: ["udp"], expected: "UDP" },
            { label: "UDP-Port 53", accepted: ["dns"], expected: "DNS (typischer Dienst)" }
          ], explanation: "0x0800 kennzeichnet IPv4, Protocol 17 ist UDP und Port 53 ist der übliche DNS-Port." },
          { id: "net-l7-q3", type: "short", prompt: "Was zeigt traceroute typischerweise entlang eines Netzwerkpfads?", accepted: ["hops", "zwischenstationen", "router hops", "hops und antwortzeiten"], expected: "Zwischenstationen (Hops) und Antwortzeiten", explanation: "traceroute versucht Router-Zwischenstationen und Antwortzeiten auf dem Weg zum Ziel sichtbar zu machen." }
        ],
        recap: ["Von außen nach innen: Ethernet → IPv4 → TCP/UDP → Anwendungsdaten.", "Ethernet-MAC gilt für den lokalen Abschnitt; IP-Adressen dienen der Weiterleitung zwischen Netzen.", "Begründe Antworten mit Feldwert und Funktion, nicht nur mit einem Namen."]
      }
    ],
    cards: [
      { front: "Nenne die OSI-Schichten von unten nach oben.", back: "Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung." },
      { front: "Was bedeutet Ethernet-Typ 0x0800?", back: "Die Ethernet-Nutzlast enthält ein IPv4-Paket (RFC 894)." },
      { front: "Welche Ziel-MAC hat der erste Rahmen zu einem Internetserver?", back: "Die MAC-Adresse des Standardgateways; die IP-Zieladresse bleibt die des entfernten Servers." },
      { front: "Welche Adresse steht im Ethernet-Rahmen für ein entferntes Ziel?", back: "Die MAC-Adresse des lokalen Standardgateways; die IP-Zieladresse bleibt die des entfernten Servers." },
      { front: "Was löst ARP auf?", back: "Eine IPv4-Adresse in eine MAC-Adresse auf dem lokalen Netzabschnitt." },
      { front: "Worin unterscheiden sich CSMA/CD und CSMA/CA?", back: "CSMA/CD erkennt Kollisionen beim klassischen geteilten Halbduplex-Ethernet; CSMA/CA versucht Kollisionen im WLAN zu vermeiden." },
      { front: "Worin unterscheiden sich TCP und UDP kurz?", back: "TCP bietet verbindungsorientierte, geordnete und zuverlässige Übertragung; UDP ist verbindungslos und garantiert selbst keine Zustellung." },
      { front: "Welche IPv4-Protocol-Werte bezeichnen TCP und UDP?", back: "TCP = 6; UDP = 17." },
      { front: "Wie viele nutzbare Hosts hat /26 üblicherweise?", back: "62: 64 Gesamtadressen minus Netzwerk- und Broadcastadresse." }
    ],
    exam: [
      { id: "net-exam-1", prompt: "Auf welcher Schicht arbeitet IP?", options: ["Schicht 2", "Schicht 3", "Schicht 4"], answer: 1, explanation: "IP gehört zur Vermittlungsschicht 3." },
      { id: "net-exam-2", prompt: "Was ist eine MAC-Adresse?", options: ["Eine lokale Ethernet-Adresse", "Eine Transport-Portnummer", "Ein DNS-Name"], answer: 0, explanation: "Die MAC-Adresse adressiert eine Schnittstelle auf dem lokalen Ethernet-Abschnitt." },
      { id: "net-exam-3", prompt: "Welche MAC-Adresse nutzt ein Rechner für den ersten Hop zu einem Internetziel?", options: ["Die des Standardgateways", "Die des entfernten Servers", "Die DNS-Adresse"], answer: 0, explanation: "Der erste Ethernet-Rahmen geht an die lokale Gateway-MAC." },
      { id: "net-exam-4", prompt: "Welches Protokoll löst IPv4-Adresse zu lokaler MAC-Adresse auf?", options: ["ARP", "TCP", "HTTP"], answer: 0, explanation: "ARP ermittelt diese lokale Zuordnung." },
      { id: "net-exam-5", prompt: "Welche Aussage zu TCP passt?", options: ["Geordnete zuverlässige Übertragung mit Wiederholungen", "Verbindungslos ohne Zustellgarantie", "Löst IP-Adressen in MAC-Adressen auf"], answer: 0, explanation: "TCP bietet unter anderem geordnete Übertragung und Wiederholungen." },
      { id: "net-exam-6", prompt: "Was bedeutet CSMA/CA?", options: ["Kollisionsvermeidung beim Mehrfachzugriff", "IP-Adressierung ohne Router", "Fehlerkorrektur durch TCP"], answer: 0, explanation: "CA steht für Collision Avoidance." },
      { id: "net-exam-7", prompt: "Wie viele nutzbare IPv4-Hosts hat ein /26-Netz üblicherweise?", options: ["62", "64", "128"], answer: 0, explanation: "64 Gesamtadressen minus Netzwerk- und Broadcastadresse ergeben 62 nutzbare Hostadressen." },
      { id: "net-exam-8", prompt: "20 dB Spannungsdämpfung bedeutet, dass …", options: ["10 % der Spannung ankommen", "90 % der Spannung ankommen", "20 % der Spannung ankommen"], answer: 0, explanation: "Das Spannungsverhältnis beträgt 1:10; damit kommen 10 % an (gleiche Impedanz)." },
      { id: "net-exam-9", type: "table", prompt: "Ergänze die Protokoll-Zuordnung.", rows: [
        { label: "EtherType 0x0800", accepted: ["ipv4"], expected: "IPv4" },
        { label: "IPv4 Protocol 6", accepted: ["tcp"], expected: "TCP" },
        { label: "IPv4 Protocol 17", accepted: ["udp"], expected: "UDP" }
      ], explanation: "EtherType 0x0800 kennzeichnet IPv4; Protocol 6 ist TCP und Protocol 17 ist UDP." },
      { id: "net-exam-10", type: "short", prompt: "Welches Protokoll fragt im lokalen IPv4-Netz nach einer MAC-Adresse?", accepted: ["arp"], expected: "ARP", explanation: "ARP ordnet einer IPv4-Adresse die MAC-Adresse auf dem lokalen Netzabschnitt zu." },
      { id: "net-exam-11", type: "table", prompt: "Fülle den Vergleich der Zugriffsverfahren.", rows: [
        { label: "WLAN", accepted: ["csma/ca", "ca"], expected: "CSMA/CA" },
        { label: "Klassisches geteiltes Halbduplex-Ethernet", accepted: ["csma/cd", "cd"], expected: "CSMA/CD" }
      ], explanation: "WLAN verwendet Kollisionsvermeidung (CA); klassisches geteiltes Halbduplex-Ethernet kann Kollisionen erkennen (CD)." },
      { id: "net-exam-12", type: "short", prompt: "Welches Transportprotokoll bietet selbst geordnete, zuverlässige Zustellung?", accepted: ["tcp"], expected: "TCP", explanation: "TCP bietet Zuverlässigkeits- und Reihenfolgemechanismen; UDP selbst nicht." }
    ]
  }
};

