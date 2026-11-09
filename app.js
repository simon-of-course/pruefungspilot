const subjects = {
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

const STORAGE_KEY = "lernpfade-progress-v1";
const root = document.querySelector("#app");
const navButtons = [...document.querySelectorAll(".main-nav [data-action]")];
const freshProgress = () => ({
  politics: { unlocked: 0, completed: [], examPassed: false, bestExam: 0, againCards: [] },
  network: { unlocked: 0, completed: [], examPassed: false, bestExam: 0, againCards: [], curriculumVersion: 2 },
  missed: {}
});

let progress = freshProgress();
let activeSubject = null;
let currentLevel = 0;
let view = "home";
let cardIndex = 0;
let cardRevealed = false;
let cardDeck = [];
let storageNotice = "";

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.politics && parsed.network && parsed.missed) {
      progress = { ...freshProgress(), ...parsed };
      for (const id of ["politics", "network"]) {
        progress[id] = { ...freshProgress()[id], ...parsed[id] };
      }
      if (parsed.network.curriculumVersion !== 2) {
        progress.network = freshProgress().network;
        for (const [id, question] of Object.entries(progress.missed)) {
          if (question.subjectId === "network") delete progress.missed[id];
        }
        storageNotice = "Der Netzwerk-Lernpfad wurde erweitert. Sein alter Fortschritt wurde zurückgesetzt, damit die neuen Levels und Tests fair bearbeitet werden können.";
      }
    } else {
      throw new Error("Gespeicherter Lernstand hat ein unerwartetes Format.");
    }
  }
} catch (error) {
  console.error("Der gespeicherte Lernstand konnte nicht gelesen werden.", error);
  storageNotice = "Der gespeicherte Lernstand konnte nicht gelesen werden. Neue Ergebnisse bleiben zunächst nur bis zum Schließen dieser Seite erhalten.";
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    storageNotice = "";
  } catch (error) {
    console.error("Der Lernstand konnte nicht gespeichert werden.", error);
    storageNotice = "Der Browser konnte den Lernstand nicht speichern. Deine aktuelle Sitzung läuft weiter, aber der Fortschritt kann beim Schließen verloren gehen.";
  }
  updateStorageNotice();
}

function updateStorageNotice() {
  const existing = root.querySelector(".storage-warning");
  if (storageNotice) {
    if (existing) existing.textContent = storageNotice;
    else if (root.firstChild) root.insertAdjacentHTML("afterbegin", showStorageNotice());
  } else if (existing) {
    existing.remove();
  }
}

function completedCount(subjectId) {
  return progress[subjectId].completed.length;
}

function completionPercent(subjectId) {
  return Math.round(completedCount(subjectId) / subjects[subjectId].levels.length * 100);
}

function renderLevelLinks(subjectId) {
  const subject = subjects[subjectId];
  const state = progress[subjectId];
  return subject.levels.map((item, index) => {
    const isOpen = index <= state.unlocked;
    const isDone = state.completed.includes(index);
    return `<button type="button" class="level-link ${isDone ? "complete" : ""}" data-action="level" data-level="${index}" ${isOpen ? "" : "disabled"} ${index === currentLevel ? 'aria-current="step"' : ""} aria-label="Level ${index + 1}: ${item.title}${isDone ? ", abgeschlossen" : isOpen ? ", offen" : ", gesperrt"}">
      <span class="level-number">${isDone ? "✓" : index + 1}</span><span class="level-name">${item.title}</span><span class="level-status">${isDone ? "Fertig" : isOpen ? "Offen" : "Gesperrt"}</span>
    </button>`;
  }).join("");
}

function refreshProgressDisplay(subjectId) {
  const count = Object.keys(progress.missed).length;
  root.querySelectorAll('[data-action="review"]').forEach((button) => {
    button.textContent = button.closest(".subject-tools")
      ? `Wiederholen (${count})`
      : `Falsch beantwortete Fragen wiederholen (${count})`;
  });
  const pathPanel = root.querySelector(".path-panel");
  if (!pathPanel) return;
  const state = progress[subjectId];
  const subject = subjects[subjectId];
  const percent = completionPercent(subjectId);
  pathPanel.querySelector(".level-list").innerHTML = renderLevelLinks(subjectId);
  const progressHead = pathPanel.querySelector(".progress-head");
  progressHead.querySelector("strong").textContent = `${percent}% abgeschlossen`;
  progressHead.querySelector("span").textContent = `${state.completed.length}/${subject.levels.length}`;
  const bar = pathPanel.querySelector('[role="progressbar"]');
  bar.setAttribute("aria-valuenow", String(percent));
  bar.querySelector("span").style.width = `${percent}%`;
  pathPanel.querySelector(".path-foot").textContent = state.examPassed
    ? "Abschlusstest bestanden – stark gemacht!"
    : "Bestehe den Kurztest, um das nächste Level freizuschalten.";
  if (state.completed.length === subject.levels.length) {
    const tools = root.querySelector(".subject-tools");
    if (tools && !tools.querySelector('[data-action="exam"]')) {
      const examButton = document.createElement("button");
      examButton.type = "button";
      examButton.className = `button ${subject.color === "blue" ? "blue" : ""}`;
      examButton.dataset.action = "exam";
      examButton.textContent = "Abschlusstest";
      tools.append(examButton);
    }
  }
}

function showStorageNotice() {
  return storageNotice ? `<p class="storage-warning" role="status">${storageNotice}</p>` : "";
}

function renderHome() {
  view = "home";
  activeSubject = null;
  updateNav();
  const cards = Object.entries(subjects).map(([id, subject]) => {
    const count = completedCount(id);
    const percent = completionPercent(id);
    const network = id === "network" ? "network" : "";
    return `<article class="subject-card ${network}">
      <div class="subject-top"><span class="subject-icon" aria-hidden="true">${subject.icon}</span><span class="badge ${id === "network" ? "blue" : ""}">${subject.levels.length} Levels</span></div>
      <h3>${subject.title}</h3>
      <p>${subject.description}</p>
      <div class="card-footer">
        <div class="card-footer-top">
          <span class="card-meta">${count} von ${subject.levels.length} Levels abgeschlossen · ${percent}%</span>
          <button class="button ${id === "network" ? "blue" : ""}" type="button" data-action="subject" data-subject="${id}">Lernpfad öffnen <span aria-hidden="true">→</span></button>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Fortschritt ${subject.title}" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><span style="width:${percent}%"></span></div>
      </div>
    </article>`;
  }).join("");
  const reviewCount = Object.keys(progress.missed).length;
  root.innerHTML = `${showStorageNotice()}
    <section class="hero">
      <div><p class="eyebrow">Dein Lernraum</p><h1>Gut vorbereitet – Schritt für Schritt.</h1><p class="lede">Zwei Prüfungen, zwei Lernpfade. Verstehe die Grundlagen, übe typische Aufgaben und prüfe deinen Fortschritt in deinem eigenen Tempo.</p></div>
      <aside class="hero-note"><strong>So lernst du hier</strong>Kleine Einheiten · direktes Feedback · kurze Tests · Fortschritt nur auf diesem Gerät</aside>
    </section>
    <div class="section-heading"><h2>Wähle deinen Lernpfad</h2><p>Jedes Level lässt sich wiederholen. Der nächste Abschnitt wird nach einem bestandenen Kurztest freigeschaltet.</p></div>
    <section class="subject-grid" aria-label="Lernpfade">${cards}</section>
    <section class="progress-summary" aria-label="Dein Lernstand">
      ${Object.entries(subjects).map(([id, subject]) => `<div class="progress-card ${id === "network" ? "network" : ""}"><div class="progress-head"><strong>${subject.shortTitle}</strong><span>${completedCount(id)}/${subject.levels.length} Levels</span></div><div class="progress-track" role="progressbar" aria-label="${subject.shortTitle} Lernfortschritt" aria-valuenow="${completionPercent(id)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${completionPercent(id)}%"></span></div><span>${progress[id].examPassed ? "Abschlusstest bestanden" : "Noch im Lernpfad"}</span></div>`).join("")}
    </section>
    <div class="test-actions"><button type="button" class="button secondary" data-action="review">Falsch beantwortete Fragen wiederholen (${reviewCount})</button>${reviewCount ? "" : '<span class="card-meta">Aktuell keine offenen Wiederholungsfragen.</span>'}<button type="button" class="button secondary" data-action="reset">Fortschritt zurücksetzen</button></div>`;
}

function updateNav() {
  navButtons.forEach((button) => {
    const current = (view === "home" && button.dataset.action === "home")
      || (view !== "home" && button.dataset.action === "subject" && button.dataset.subject === activeSubject);
    if (current) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function renderSubject(subjectId, options = {}) {
  activeSubject = subjectId;
  if (!options.keepLevel) currentLevel = 0;
  const requestedView = options.mode || view;
  view = ["cards", "exam", "review"].includes(requestedView) ? requestedView : "subject";
  const subject = subjects[subjectId];
  updateNav();
  const p = progress[subjectId];
  const level = subject.levels[currentLevel];
  const percent = completionPercent(subjectId);
  let content = "";
  if (view === "cards") content = renderCards(subjectId);
  else if (view === "exam") content = renderExam(subjectId);
  else if (view === "review") content = renderReview();
  else content = renderLesson(subjectId, level);

  root.innerHTML = `${showStorageNotice()}
    <section class="subject-header ${subject.color}">
      <div><p class="eyebrow">${subject.shortTitle} · Lernpfad</p><h1>${subject.title}</h1><p class="lede">${subject.description}</p></div>
      <div class="subject-tools"><button type="button" class="button secondary small" data-action="cards">Karteikarten</button><button type="button" class="button secondary small" data-action="review">Wiederholen (${Object.keys(progress.missed).length})</button>${p.completed.length === subject.levels.length ? `<button type="button" class="button ${subject.color}" data-action="exam">Abschlusstest</button>` : ""}</div>
    </section>
    <div class="subject-layout ${subject.color}">
      <aside class="panel path-panel" aria-label="Levelübersicht">
        <h2>Deine Levels</h2><div class="level-list">${renderLevelLinks(subjectId)}</div>
        <div class="path-progress"><div class="progress-head"><strong>${percent}% abgeschlossen</strong><span>${p.completed.length}/${subject.levels.length}</span></div><div class="progress-track" role="progressbar" aria-label="Fortschritt" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><span style="width:${percent}%"></span></div></div>
        <p class="path-foot">${p.examPassed ? "Abschlusstest bestanden – stark gemacht!" : "Bestehe den Kurztest, um das nächste Level freizuschalten."}</p>
      </aside>
      <section>${content}</section>
    </div>`;
}

function renderLesson(subjectId, level) {
  const subject = subjects[subjectId];
  const network = subjectId === "network";
  const practice = level.practice;
  const levelDone = progress[subjectId].completed.includes(currentLevel);
  return `<article class="lesson-card ${network ? "network" : ""}">
    <div class="lesson-topline"><span class="badge ${network ? "blue" : ""}">Level ${currentLevel + 1} von ${subject.levels.length}</span><span class="badge gold">Lernziel</span></div>
    <h2>${level.title}</h2><p class="goal">${level.goal}</p>
    <div class="lesson-section"><h3>Verstehen</h3>${level.explanation.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
    <div class="example-box"><strong>Beispiel</strong><p>${level.example}</p></div>
    ${level.supplement ? `<aside class="supplement"><h3>Ergänzung / wichtiger Hinweis</h3><p>${level.supplement}</p></aside>` : ""}
    <div class="source-callout"><span class="source-tag">PDF-Grundlage</span> <strong>Quelle:</strong> ${level.source}</div>
    ${level.tasks ? renderLearningTasks(level.tasks) : ""}
    <section class="exercise" aria-labelledby="practice-title">
      <p class="eyebrow">Aktiv üben</p><h3 id="practice-title">Denk kurz nach und wähle eine Antwort</h3><p class="question-prompt">${practice.prompt}</p>
      <div class="choice-list">${practice.options.map((option, index) => `<button class="choice-button" type="button" data-action="practice-answer" data-question="${practice.id}" data-answer="${index}">${option}</button>`).join("")}</div>
      <div id="feedback-${practice.id}" class="feedback" aria-live="polite"></div>
    </section>
    <section class="exercise" aria-labelledby="test-title">
      <p class="eyebrow">Level-Check</p><h3 id="test-title">Kurztest – ${level.test.length} Aufgaben</h3><p>Bearbeite die Auswahl-, Kurzantwort- und Tabellenaufgaben. Ab ${Math.ceil(level.test.length * 2 / 3)} richtigen Aufgaben ist das Level bestanden.</p>
      ${renderTestForm(level.test, `level-${subjectId}-${currentLevel}`)}
    </section>
    <div class="recap"><h3>Das solltest du mitnehmen</h3><ul>${level.recap.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    <div class="level-navigation">${currentLevel > 0 ? `<button type="button" class="button secondary" data-action="level" data-level="${currentLevel - 1}">← Vorheriges Level</button>` : "<span></span>"}${currentLevel < subject.levels.length - 1 ? `<button type="button" class="button ${network ? "blue" : ""}" data-action="level" data-level="${currentLevel + 1}" ${currentLevel + 1 <= progress[subjectId].unlocked ? "" : "disabled"}>${levelDone ? "Nächstes Level →" : "Nächstes Level gesperrt"}</button>` : ""}</div>
  </article>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderLearningTasks(tasks) {
  return tasks.map((task) => {
    if (task.type === "writing") {
      return `<section class="exercise writing-task" data-task="${task.id}">
        <p class="eyebrow">Ausführliche Aufgabe</p><h3>${task.title}</h3><p class="question-prompt">${task.prompt}</p>
        <label class="sr-only" for="response-${task.id}">Deine Antwort</label><textarea id="response-${task.id}" rows="5" placeholder="Formuliere deine Antwort in eigenen Worten."></textarea>
        <div class="test-actions"><button type="button" class="button secondary" data-action="reveal-writing" data-task="${task.id}" aria-expanded="false">Musterlösung und Prüfpunkte anzeigen</button><span class="card-meta">Selbstcheck – deine Formulierung wird nicht automatisch bewertet.</span></div>
        <div class="model-answer" id="model-${task.id}" hidden><h4>Beispiel für eine gute Antwort</h4><p>${task.modelAnswer}</p><strong>Prüfe, ob deine Antwort diese Punkte enthält:</strong><ul>${task.criteria.map((criterion) => `<li>${criterion}</li>`).join("")}</ul></div>
      </section>`;
    }
    return `<section class="exercise worksheet" data-task="${task.id}">
      <p class="eyebrow">Tabelle zum Ergänzen</p><h3>${task.title}</h3><p class="question-prompt">${task.prompt}</p>
      <div class="worksheet-table-wrap" role="region" aria-label="${task.title}: Tabelle" tabindex="0"><table class="worksheet-table"><thead><tr><th scope="col">Angabe</th><th scope="col">Deine Antwort</th><th scope="col">Rückmeldung</th></tr></thead><tbody>
      ${task.rows.map((row, index) => `<tr><th scope="row">${row.label}</th><td><label class="sr-only" for="cell-${task.id}-${index}">${row.label}</label><input id="cell-${task.id}-${index}" type="text" autocomplete="off" data-answers="${escapeHtml(JSON.stringify(row.accepted))}" data-expected="${escapeHtml(row.expected)}"><span class="task-cell-feedback" aria-live="polite"></span></td><td><span class="task-state">Noch offen</span></td></tr>`).join("")}
      </tbody></table></div>
      <div class="test-actions"><button type="button" class="button blue" data-action="check-table" data-task="${task.id}">Tabelle prüfen</button><span class="feedback" aria-live="polite"></span></div>
    </section>`;
  }).join("");
}

function normalizeAnswer(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("de-DE").replace(/[^a-z0-9]/g, "");
}

function answerMatches(value, accepted) {
  const normalized = normalizeAnswer(value);
  return normalized.length > 0 && accepted.some((answer) => normalizeAnswer(answer) === normalized);
}

function renderAssessmentQuestion(question, index) {
  if (question.type === "short") {
    return `<fieldset class="test-question"><legend>${index + 1}. ${question.prompt}</legend><label class="test-short"><span>Deine Antwort</span><input type="text" name="${question.id}" autocomplete="off"></label><div class="test-answer-note" id="answer-${question.id}" hidden></div></fieldset>`;
  }
  if (question.type === "table") {
    return `<fieldset class="test-question"><legend>${index + 1}. ${question.prompt}</legend><div class="worksheet-table-wrap" role="region" aria-label="${question.prompt}: Tabelle" tabindex="0"><table class="worksheet-table assessment-table"><thead><tr><th scope="col">Feld</th><th scope="col">Deine Antwort</th></tr></thead><tbody>${question.rows.map((row, rowIndex) => `<tr><th scope="row">${row.label}</th><td><label class="sr-only" for="answer-${question.id}-${rowIndex}">${row.label}</label><input id="answer-${question.id}-${rowIndex}" type="text" name="${question.id}-${rowIndex}" autocomplete="off"></td></tr>`).join("")}</tbody></table></div><div class="test-answer-note" id="answer-${question.id}" hidden></div></fieldset>`;
  }
  return `<fieldset class="test-question"><legend>${index + 1}. ${question.prompt}</legend><div class="test-options">${question.options.map((option, choice) => `<label class="test-option"><input type="radio" name="${question.id}" value="${choice}"><span>${option}</span></label>`).join("")}</div><div class="test-answer-note" id="answer-${question.id}" hidden></div></fieldset>`;
}

function renderTestForm(questions, formId) {
  return `<form class="test-form" data-form="${formId}">
    ${questions.map(renderAssessmentQuestion).join("")}
    <div class="test-actions"><button class="button" type="submit">Antworten prüfen</button><span class="card-meta" id="result-${formId}" aria-live="polite"></span></div>
  </form>`;
}

function renderCards(subjectId) {
  const subject = subjects[subjectId];
  const storedAgain = progress[subjectId].againCards;
  cardDeck = cardDeck.length ? cardDeck : subject.cards.map((_, index) => index);
  if (cardIndex >= cardDeck.length) {
    const againCount = storedAgain.length;
    return `<article class="lesson-card"><div class="lesson-topline"><span class="badge">Karteikarten</span><button class="button secondary small" data-action="back-subject" type="button">Zurück zum Lernpfad</button></div><h2>Runde abgeschlossen</h2><p class="lede">Du hast ${cardDeck.length} ${cardDeck.length === 1 ? "Karte" : "Karten"} abgerufen. ${againCount ? `${againCount} Karte(n) sind für die Wiederholung markiert.` : "Keine Karte ist für die Wiederholung markiert."}</p><div class="test-actions">${againCount ? '<button class="button" type="button" data-action="repeat-cards">Schwierige Karten wiederholen</button>' : ""}<button class="button secondary" type="button" data-action="restart-cards">Alle Karten noch einmal</button></div></article>`;
  }
  const index = cardDeck[cardIndex];
  const card = subject.cards[index];
  const isAgain = storedAgain.includes(index);
  return `<article class="lesson-card">
    <div class="lesson-topline"><span class="badge">Karteikarten · aktives Abrufen</span><button class="button secondary small" data-action="back-subject" type="button">Zurück zum Lernpfad</button></div>
    <div class="flashcard-progress">Karte ${cardIndex + 1} von ${cardDeck.length}${isAgain ? " · zur Wiederholung markiert" : ""}</div>
    <div class="flashcard"><p class="eyebrow">${subject.shortTitle}</p><h2>${card.front}</h2>${cardRevealed ? `<p>${card.back}</p>` : '<p>Rufe die Antwort erst selbst ab. Sie erscheint, wenn du sie aufdeckst.</p>'}</div>
    <div class="flashcard-controls">${cardRevealed ? `<button type="button" class="button secondary" data-action="card-mark" data-mark="again">${isAgain ? "Für Wiederholung vorgemerkt ✓" : "Nochmal üben"}</button><button type="button" class="button ${subject.color}" data-action="card-mark" data-mark="known">Kann ich abrufen →</button>` : '<button type="button" class="button" data-action="reveal-card">Antwort aufdecken</button>'}</div>
  </article>`;
}

function renderExam(subjectId) {
  const subject = subjects[subjectId];
  if (progress[subjectId].completed.length < subject.levels.length) {
    return `<article class="lesson-card"><div class="locked-note">Der Abschlusstest wird freigeschaltet, wenn du alle ${subject.levels.length} Levels bestanden hast. Du kannst offene und abgeschlossene Levels jederzeit wiederholen.</div></article>`;
  }
  return `<article class="lesson-card">
    <div class="lesson-topline"><span class="badge ${subjectId === "network" ? "blue" : ""}">Abschlusstest</span><button class="button secondary small" type="button" data-action="back-subject">Zurück zum Lernpfad</button></div>
    <h2>Prüfe deinen Lernstand</h2><p class="goal">Gemischte Auswahl-, Kurzantwort- und Tabellenaufgaben. Ab ${Math.ceil(subject.exam.length * 0.75)} von ${subject.exam.length} richtigen Aufgaben (mindestens 75 %) ist der Test bestanden. Dein bisher bester Wert: ${progress[subjectId].bestExam}/${subject.exam.length}.</p>
    ${renderTestForm(subject.exam, `exam-${subjectId}`)}
  </article>`;
}

function renderReview() {
  view = "review";
  const items = Object.values(progress.missed);
  if (!items.length) return `<article class="lesson-card"><div class="lesson-topline"><span class="badge">Wiederholung</span><button class="button secondary small" data-action="back-subject" type="button">Zurück</button></div><div class="empty-state"><h2>Alles aufgeholt</h2><p>Im Moment gibt es keine falsch beantworteten Fragen zum Wiederholen.</p></div></article>`;
  return `<article class="lesson-card"><div class="lesson-topline"><span class="badge">Wiederholung</span><button class="button secondary small" data-action="back-subject" type="button">Zurück</button></div><h2>Fragen noch einmal abrufen</h2><p class="goal">Die Antwort wird sofort erklärt. Bei einer richtigen Antwort verschwindet die Frage aus deiner Wiederholungsliste.</p>
    <div class="review-list">${items.map((question) => `<section class="review-item" data-review="${question.id}"><h3>${question.prompt}</h3>${question.options
      ? `<div class="choice-list">${question.options.map((option, index) => `<button type="button" class="choice-button" data-action="review-answer" data-question="${question.id}" data-answer="${index}">${option}</button>`).join("")}</div><div class="feedback" id="review-feedback-${question.id}" aria-live="polite"></div>`
      : `<div class="review-answer"><strong>Musterlösung:</strong>${question.rows
        ? `<ul>${question.rows.map((row) => `<li>${row.label}: ${row.expected}</li>`).join("")}</ul>`
        : `<p>${question.expected}</p>`}<p>${question.explanation}</p></div><button type="button" class="button secondary small" data-action="review-clear" data-question="${question.id}">Musterlösung wiederholt</button>`}</section>`).join("")}</div>
  </article>`;
}

function saveMiss(question, subjectId, answer) {
  if (answer === question.answer) {
    delete progress.missed[question.id];
  } else {
    progress.missed[question.id] = { ...question, subjectId };
  }
  persist();
}

function saveAssessmentMiss(question, subjectId, correct, levelIndex) {
  if (correct) {
    delete progress.missed[question.id];
  } else {
    progress.missed[question.id] = { ...question, subjectId, levelIndex };
  }
  persist();
}

function checkTable(button) {
  const task = button.closest(".worksheet");
  const inputs = [...task.querySelectorAll("input")];
  let correctCount = 0;
  for (const input of inputs) {
    const correct = answerMatches(input.value, JSON.parse(input.dataset.answers));
    const state = input.closest("tr").querySelector(".task-state");
    const note = input.closest("td").querySelector(".task-cell-feedback");
    input.setAttribute("aria-invalid", String(!correct));
    input.classList.toggle("task-input-correct", correct);
    input.classList.toggle("task-input-incorrect", !correct);
    state.textContent = correct ? "Richtig" : `Lösung: ${input.dataset.expected}`;
    note.textContent = correct ? "✓" : "✗";
    correctCount += Number(correct);
  }
  const result = task.querySelector(".feedback");
  const allCorrect = correctCount === inputs.length;
  result.textContent = `${correctCount}/${inputs.length} Tabellenfelder richtig. ${allCorrect ? "Sehr gut – die Tabelle stimmt." : "Vergleiche die markierten Felder mit den Lösungen und versuche es noch einmal."}`;
  result.className = `feedback ${allCorrect ? "good" : "bad"}`;
}

function handlePractice(button) {
  const questionId = button.dataset.question;
  const answer = Number(button.dataset.answer);
  const level = subjects[activeSubject].levels[currentLevel];
  const question = level.practice;
  const feedback = document.querySelector(`#feedback-${questionId}`);
  const correct = answer === question.answer;
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.textContent = `${correct ? "Richtig. " : "Noch nicht. "}${question.explanation}`;
  saveMiss(question, activeSubject, answer);
  refreshProgressDisplay(activeSubject);
  button.parentElement.querySelectorAll("button").forEach((choice, index) => {
    choice.disabled = true;
    if (index === question.answer) choice.classList.add("is-correct");
    if (index === answer && !correct) choice.classList.add("is-incorrect");
  });
}

function gradeForm(form) {
  const formId = form.dataset.form;
  const isExam = formId.startsWith("exam-");
  const subjectId = isExam ? formId.slice("exam-".length) : activeSubject;
  const questions = isExam ? subjects[subjectId].exam : subjects[subjectId].levels[currentLevel].test;
  const submitted = new FormData(form);
  let score = 0;
  let unanswered = false;
  for (const question of questions) {
    const values = question.type === "table"
      ? question.rows.map((_, index) => submitted.get(`${question.id}-${index}`))
      : [submitted.get(question.id)];
    const note = document.querySelector(`#answer-${question.id}`);
    const blank = values.some((value) => value === null || !String(value).trim());
    if (blank) unanswered = true;
    let correct = false;
    if (question.type === "short") {
      correct = !blank && answerMatches(values[0], question.accepted);
    } else if (question.type === "table") {
      correct = !blank && question.rows.every((row, index) => answerMatches(values[index], row.accepted));
    } else {
      correct = values[0] !== null && Number(values[0]) === question.answer;
    }
    if (correct) score++;
    if (question.type === "short" || question.type === "table") {
      saveAssessmentMiss(question, subjectId, correct, isExam ? -1 : currentLevel);
    } else {
      saveMiss(question, subjectId, correct ? question.answer : (values[0] === null ? -1 : Number(values[0])));
    }
    note.hidden = false;
    const expected = question.type === "short"
      ? `Erwartete Antwort: ${question.expected}. `
      : question.type === "table"
        ? `Lösungen: ${question.rows.map((row) => `${row.label}: ${row.expected}`).join("; ")}. `
        : `Richtige Antwort: ${question.options[question.answer]}. `;
    note.textContent = `${correct ? "Richtig. " : expected}${question.explanation}`;
    note.setAttribute("role", correct ? "status" : "alert");
  }
  const result = document.querySelector(`#result-${formId}`);
  if (isExam) {
    const passed = score >= Math.ceil(questions.length * 0.75);
    progress[subjectId].bestExam = Math.max(progress[subjectId].bestExam, score);
    if (passed) progress[subjectId].examPassed = true;
    persist();
    result.textContent = `${unanswered ? "Nicht beantwortete Fragen zählen als falsch. " : ""}${score}/${questions.length} Aufgaben richtig. ${passed ? "Abschlusstest bestanden!" : "Noch nicht bestanden – wiederhole die Levels und versuche es erneut."}`;
    result.className = passed ? "feedback good" : "feedback bad";
  } else {
    const passed = score >= Math.ceil(questions.length * 2 / 3);
    result.textContent = `${unanswered ? "Nicht beantwortete Fragen zählen als falsch. " : ""}${score}/${questions.length} richtig. ${passed ? "Level bestanden – das nächste Level ist freigeschaltet." : "Noch nicht bestanden. Lies die Rückmeldungen und versuche es erneut."}`;
    result.className = passed ? "feedback good" : "feedback bad";
    if (passed) {
      const state = progress[subjectId];
      if (!state.completed.includes(currentLevel)) state.completed.push(currentLevel);
      state.completed.sort((a, b) => a - b);
      state.unlocked = Math.max(state.unlocked, Math.min(currentLevel + 1, subjects[subjectId].levels.length - 1));
      persist();
      const next = document.createElement("button");
      next.type = "button";
      next.className = `button ${subjects[subjectId].color === "blue" ? "blue" : ""}`;
      next.dataset.action = "level";
      next.dataset.level = String(Math.min(currentLevel + 1, subjects[subjectId].levels.length - 1));
      next.textContent = currentLevel < subjects[subjectId].levels.length - 1 ? "Weiter zum nächsten Level →" : "Letztes Level geschafft ✓";
      const actions = form.querySelector(".test-actions");
      if (!actions.querySelector("[data-action='level']")) actions.append(next);
    }
  }
  form.querySelectorAll("input").forEach((input) => { input.disabled = true; });
  form.querySelector("button[type='submit']").disabled = true;
  refreshProgressDisplay(subjectId);
  if (!isExam && score >= Math.ceil(questions.length * 2 / 3)) {
    const nextLevel = root.querySelector(`.level-list [data-level="${currentLevel + 1}"]`);
    const finalExam = root.querySelector('.subject-tools [data-action="exam"]');
    const destination = nextLevel || finalExam;
    const scrollTarget = nextLevel ? root.querySelector(".path-panel") : root.querySelector(".subject-header");
    if (destination && scrollTarget) {
      scrollTarget.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
      destination.focus({ preventScroll: true });
    }
  }
}

root.addEventListener("submit", (event) => {
  if (event.target.matches(".test-form")) {
    event.preventDefault();
    gradeForm(event.target);
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  const homeLink = event.target.closest("a[data-action='home']");
  if (!button && !homeLink) return;
  if (homeLink) event.preventDefault();
  const control = button || homeLink;
  const action = control.dataset.action;

  if (action === "subject") {
    activeSubject = control.dataset.subject;
    currentLevel = 0;
    view = "subject";
    cardDeck = [];
    cardIndex = 0;
    renderSubject(activeSubject);
  } else if (action === "home") {
    renderHome();
  } else if (action === "level") {
    const levelIndex = Number(control.dataset.level);
    if (levelIndex <= progress[activeSubject].unlocked) {
      currentLevel = levelIndex;
      view = "subject";
      renderSubject(activeSubject, { keepLevel: true });
    }
  } else if (action === "practice-answer") {
    handlePractice(control);
  } else if (action === "check-table") {
    checkTable(control);
  } else if (action === "reveal-writing") {
    const model = root.querySelector(`#model-${control.dataset.task}`);
    model.hidden = !model.hidden;
    control.setAttribute("aria-expanded", String(!model.hidden));
    control.textContent = model.hidden ? "Musterlösung und Prüfpunkte anzeigen" : "Musterlösung ausblenden";
  } else if (action === "review-clear") {
    delete progress.missed[control.dataset.question];
    persist();
    renderSubject(activeSubject, { keepLevel: true, mode: "review" });
  } else if (action === "cards") {
    view = "cards";
    cardDeck = subjects[activeSubject].cards.map((_, index) => index);
    cardIndex = 0;
    cardRevealed = false;
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "exam") {
    view = "exam";
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "review") {
    view = "review";
    if (!activeSubject) activeSubject = "politics";
    renderSubject(activeSubject, { keepLevel: true, mode: "review" });
  } else if (action === "back-subject") {
    view = "subject";
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "reveal-card") {
    cardRevealed = true;
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "card-mark") {
    const current = cardDeck[cardIndex];
    const state = progress[activeSubject];
    if (control.dataset.mark === "again" && !state.againCards.includes(current)) state.againCards.push(current);
    if (control.dataset.mark === "known") state.againCards = state.againCards.filter((id) => id !== current);
    persist();
    cardIndex++;
    cardRevealed = false;
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "repeat-cards") {
    cardDeck = [...progress[activeSubject].againCards];
    cardIndex = 0;
    cardRevealed = false;
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "restart-cards") {
    cardDeck = subjects[activeSubject].cards.map((_, index) => index);
    cardIndex = 0;
    cardRevealed = false;
    renderSubject(activeSubject, { keepLevel: true });
  } else if (action === "review-answer") {
    const question = progress.missed[control.dataset.question];
    if (!question) return;
    const picked = Number(control.dataset.answer);
    const correct = picked === question.answer;
    const feedback = document.querySelector(`#review-feedback-${question.id}`);
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.textContent = `${correct ? "Richtig. " : `Die richtige Antwort ist: ${question.options[question.answer]}. `}${question.explanation}`;
    if (correct) {
      delete progress.missed[question.id];
      persist();
      refreshProgressDisplay(activeSubject);
      control.closest(".review-item").remove();
      if (!root.querySelector(".review-item")) renderSubject(activeSubject, { keepLevel: true });
    }
    control.parentElement.querySelectorAll("button").forEach((choice, index) => {
      choice.disabled = true;
      if (index === question.answer) choice.classList.add("is-correct");
      if (index === picked && !correct) choice.classList.add("is-incorrect");
    });
  } else if (action === "reset") {
    if (window.confirm("Möchtest du den gesamten Lernfortschritt und die Wiederholungsfragen auf diesem Gerät löschen?")) {
      progress = freshProgress();
      persist();
      renderHome();
    }
  }
});

function renderInitialView() {
  renderHome();
}

renderInitialView();
