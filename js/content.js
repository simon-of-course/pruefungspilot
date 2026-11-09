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
  },
  digestion: {
    title: "Verdauungsapparat (LF 9)",
    shortTitle: "Verdauung",
    icon: "🩺",
    color: "rose",
    description: "MFA Lernfeld 9: Vom Mund bis zum After, Leber, Galle und Pankreas, Diabetes mellitus sowie Diagnostik, Laborwerte, iFOBT und Sonografie – genau entlang deiner Kompetenzliste.",
    levels: [
      {
        title: "Der Verdauungstrakt im Überblick",
        goal: "Du kannst den Verdauungstrakt vom Mund bis zum After mit deutschen Bezeichnungen und Fachbegriffen beschriften und die Aufgaben der einzelnen Bestandteile nennen.",
        source: "Kompetenzliste Klassenarbeit LF 9 (Verdauungsapparat), Punkte 1 und 4.",
        explanation: [
          "Der Verdauungstrakt (Tractus gastrointestinalis) ist ein etwa 6–8 m langer Muskelschlauch. Die Nahrung durchläuft ihn in fester Reihenfolge: Mundhöhle (Cavum oris) → Rachen (Pharynx) → Speiseröhre (Ösophagus) → Magen (Gaster bzw. Ventriculus) → Dünndarm (Intestinum tenue) mit Zwölffingerdarm (Duodenum), Leerdarm (Jejunum) und Krummdarm (Ileum) → Dickdarm (Intestinum crassum) mit Blinddarm (Caecum) und Wurmfortsatz (Appendix vermiformis), Grimmdarm (Colon) und Mastdarm (Rektum) → After (Anus).",
          "Dazu kommen die Anhangsdrüsen, durch die die Nahrung nicht hindurchläuft, die aber Verdauungssäfte liefern: Speicheldrüsen (Mund), Leber (Hepar) mit Gallenblase (Vesica biliaris) und Bauchspeicheldrüse (Pankreas). Galle und Pankreassaft münden gemeinsam an der Papilla duodeni major (Papilla Vateri) ins Duodenum.",
          "Aufgaben in Kurzform: Mund = zerkleinern, einspeicheln, Stärkeverdauung beginnt. Rachen = Kreuzung von Luft- und Speiseweg, Schlucken. Speiseröhre = Transport durch Peristaltik. Magen = Speicher, Durchmischung, Eiweißverdauung beginnt, Desinfektion durch Salzsäure. Dünndarm = Hauptort der Verdauung und Resorption (Aufnahme) der Nährstoffe. Dickdarm = Rückresorption von Wasser und Elektrolyten, Eindickung, Darmflora. Rektum/Anus = Speicherung und kontrollierte Ausscheidung (Defäkation).",
          "Richtungsbegriffe brauchst du ständig: oral = zum Mund hin, aboral = vom Mund weg; kranial = kopfwärts, kaudal = steißwärts. Die Wellenbewegung der Muskulatur, die den Inhalt aboral schiebt, heißt Peristaltik."
        ],
        example: "Ein Bissen Brot: Im Mund wird er gekaut und beginnt durch die Speichel-Amylase süß zu schmecken, im Magen wird er mit Säure vermischt, im Dünndarm werden die Bausteine aufgenommen, im Dickdarm wird dem Rest Wasser entzogen – nach etwa 1–3 Tagen wird er ausgeschieden.",
        practice: {
          id: "dig-l1-practice",
          prompt: "Welcher Abschnitt folgt direkt auf den Magen?",
          options: ["Zwölffingerdarm (Duodenum)", "Leerdarm (Jejunum)", "Blinddarm (Caecum)"],
          answer: 0,
          explanation: "Hinter dem Magenpförtner (Pylorus) beginnt der Dünndarm mit dem Duodenum, danach folgen Jejunum und Ileum."
        },
        test: [
          { id: "dig-l1-q1", prompt: "Welche Reihenfolge ist richtig?", options: ["Pharynx → Ösophagus → Gaster → Duodenum → Jejunum → Ileum → Colon → Rektum", "Ösophagus → Pharynx → Gaster → Ileum → Jejunum → Duodenum → Colon → Rektum", "Pharynx → Gaster → Ösophagus → Duodenum → Colon → Ileum → Rektum"], answer: 0, explanation: "Rachen, Speiseröhre, Magen, dann Dünndarm (Duodenum, Jejunum, Ileum), danach Dickdarm (Caecum, Colon, Rektum)." },
          { id: "dig-l1-q2", prompt: "Wo findet der größte Teil der Nährstoffaufnahme (Resorption) statt?", options: ["Im Dünndarm", "Im Magen", "Im Dickdarm"], answer: 0, explanation: "Der Dünndarm mit seiner riesigen Oberfläche ist der Hauptort von Verdauung und Resorption." },
          { id: "dig-l1-q3", type: "short", prompt: "Wie lautet der Fachbegriff für die Speiseröhre?", accepted: ["ösophagus", "oesophagus", "osophagus", "esophagus"], expected: "Ösophagus", explanation: "Speiseröhre = Ösophagus (Oesophagus)." }
        ],
        recap: ["Mund → Rachen → Speiseröhre → Magen → Dünndarm (Duodenum, Jejunum, Ileum) → Dickdarm (Caecum, Colon, Rektum) → After.", "Anhangsdrüsen: Speicheldrüsen, Leber mit Gallenblase, Pankreas.", "Dünndarm = Hauptort der Verdauung und Resorption; Dickdarm = Wasserrückgewinnung.", "Peristaltik schiebt den Inhalt aboral (vom Mund weg)."]
      },
      {
        title: "Mund, Speicheldrüsen & Schluckakt",
        goal: "Du kannst die drei großen Speicheldrüsen deutsch und mit Fachbegriff benennen, die Funktion des Speichels angeben und den Schluckakt erläutern.",
        source: "Kompetenzliste LF 9, Punkte 2 und 3.",
        explanation: [
          "Es gibt drei große, paarig angelegte Speicheldrüsen: die Ohrspeicheldrüse (Glandula parotidea, kurz Parotis) vor dem Ohr, die Unterkieferspeicheldrüse (Glandula submandibularis) und die Unterzungenspeicheldrüse (Glandula sublingualis). Dazu kommen viele kleine Speicheldrüsen in der Mundschleimhaut. Pro Tag entstehen etwa 1–1,5 Liter Speichel.",
          "Funktionen des Speichels: Er macht den Bissen gleitfähig (Schleim/Muzine), beginnt mit dem Enzym α-Amylase (Ptyalin) die Stärkeverdauung, löst Geschmacksstoffe, reinigt Zähne und Mundhöhle, wirkt durch Lysozym und Antikörper (IgA) gegen Keime und puffert Säuren.",
          "Der Schluckakt läuft in drei Phasen ab: 1. Orale Phase (willkürlich): Die Zunge formt einen Bissen (Bolus) und schiebt ihn nach hinten in den Rachen. 2. Pharyngeale Phase (reflektorisch, nicht mehr steuerbar): Das Gaumensegel (weicher Gaumen) hebt sich und verschließt den Nasenrachen, der Kehlkopf wird angehoben und der Kehldeckel (Epiglottis) verschließt die Luftröhre; die Atmung setzt kurz aus. 3. Ösophageale Phase (reflektorisch): Der obere Ösophagussphinkter öffnet sich, Peristaltikwellen transportieren den Bissen in einigen Sekunden zum Magen, der untere Ösophagussphinkter öffnet sich kurz.",
          "Klinischer Bezug: Schluckstörungen heißen Dysphagie. Gelangt Nahrung in die Luftröhre (Aspiration), droht eine Aspirationspneumonie – deshalb Patienten z. B. nach Schlaganfall nur nach Schluckprüfung essen lassen."
        ],
        example: "Wenn du beim Essen lachst und dich „verschluckst“, war der Kehldeckel nicht rechtzeitig geschlossen – reflektorisches Husten befördert das Essen aus der Luftröhre wieder heraus.",
        practice: {
          id: "dig-l2-practice",
          prompt: "Welche Struktur verhindert beim Schlucken, dass Nahrung in die Luftröhre gelangt?",
          options: ["Der Kehldeckel (Epiglottis)", "Der Pylorus", "Die Ohrspeicheldrüse"],
          answer: 0,
          explanation: "Der Kehldeckel legt sich über den Kehlkopfeingang; das Gaumensegel verschließt gleichzeitig den Nasenraum."
        },
        test: [
          { id: "dig-l2-q1", prompt: "Wie heißt die Ohrspeicheldrüse mit Fachbegriff?", options: ["Glandula parotidea (Parotis)", "Glandula sublingualis", "Glandula submandibularis"], answer: 0, explanation: "Parotis = Ohrspeicheldrüse; sublingualis = unter der Zunge; submandibularis = unter dem Unterkiefer." },
          { id: "dig-l2-q2", prompt: "Welches Enzym im Speichel beginnt die Stärkeverdauung?", options: ["α-Amylase (Ptyalin)", "Pepsin", "Lipase aus dem Pankreas"], answer: 0, explanation: "Die Speichel-Amylase spaltet Stärke in kleinere Zuckerbausteine (z. B. Maltose)." },
          { id: "dig-l2-q3", prompt: "Welche Phase des Schluckakts ist willkürlich steuerbar?", options: ["Die orale Phase", "Die pharyngeale Phase", "Die ösophageale Phase"], answer: 0, explanation: "Nur die orale Phase steuerst du bewusst; ab dem Rachen läuft der Schluckreflex automatisch ab." }
        ],
        recap: ["Parotis (Ohr-), Glandula submandibularis (Unterkiefer-), Glandula sublingualis (Unterzungenspeicheldrüse).", "Speichel: gleitfähig machen, Stärkeverdauung (Amylase), Abwehr (Lysozym, IgA), Reinigung.", "Schluckakt: oral (willkürlich) → pharyngeal (Gaumensegel + Kehldeckel schließen, Atemstopp) → ösophageal (Peristaltik)."]
      },
      {
        title: "Magen: Abschnitte, Drüsen & Magensaft",
        goal: "Du kannst die Magenabschnitte deutsch und mit Fachbegriff beschriften, die Drüsenzellen der Magenschleimhaut mit ihren Produkten nennen und die Funktion von Pepsin, Intrinsic-Faktor und Gastrin angeben.",
        source: "Kompetenzliste LF 9, Punkte 5, 6 und 7.",
        explanation: [
          "Abschnitte des Magens (Gaster, Ventriculus) in Nahrungsrichtung: Mageneingang (Kardia, Pars cardiaca) – Magengrund bzw. Magenkuppel (Fundus) – Magenkörper (Korpus, Corpus) – Pförtnervorraum (Antrum pyloricum, Pars pylorica) – Magenpförtner (Pylorus), ein Ringmuskel, der den Übertritt in das Duodenum steuert. Die kurze, innere Krümmung heißt kleine Kurvatur (Curvatura minor), die lange, äußere große Kurvatur (Curvatura major).",
          "In der Magenschleimhaut liegen Drüsen mit verschiedenen Zellen: Hauptzellen bilden Pepsinogen (Vorstufe von Pepsin). Belegzellen (Parietalzellen) bilden Salzsäure (HCl) und den Intrinsic-Faktor. Nebenzellen bilden Schleim (Muzin), der zusammen mit Bikarbonat die Schleimhaut vor Selbstverdauung schützt. G-Zellen im Antrum bilden das Hormon Gastrin. Pro Tag entstehen etwa 2–3 Liter Magensaft (pH ca. 1–2).",
          "Pepsin: Die Salzsäure aktiviert Pepsinogen zu Pepsin. Pepsin spaltet Eiweiße (Proteine) in kleinere Bruchstücke (Polypeptide) – die Eiweißverdauung beginnt also im Magen. Salzsäure tötet außerdem Keime ab und lässt Eiweiße aufquellen (denaturieren).",
          "Intrinsic-Faktor: Er bindet Vitamin B12 und ermöglicht dessen Aufnahme im letzten Abschnitt des Ileums. Fehlt er (z. B. bei chronisch-atrophischer Gastritis oder nach Magenentfernung), entsteht ein Vitamin-B12-Mangel mit perniziöser Anämie. Gastrin: Das Hormon wird bei Dehnung des Magens und durch Eiweiß freigesetzt und regt die Bildung von Salzsäure und Pepsinogen sowie die Magenbewegung (Motilität) an."
        ],
        example: "Nach einer Magenentfernung (Gastrektomie) brauchen Patienten lebenslang Vitamin-B12-Spritzen – weil die Belegzellen und damit der Intrinsic-Faktor fehlen. Solche Injektionen gibst du als MFA häufig.",
        practice: {
          id: "dig-l3-practice",
          prompt: "Welche Zellen bilden Salzsäure und Intrinsic-Faktor?",
          options: ["Belegzellen (Parietalzellen)", "Hauptzellen", "G-Zellen"],
          answer: 0,
          explanation: "Belegzellen = HCl + Intrinsic-Faktor. Hauptzellen = Pepsinogen. G-Zellen = Gastrin. Nebenzellen = Schleim."
        },
        test: [
          { id: "dig-l3-q1", prompt: "Wie heißt der Magenpförtner mit Fachbegriff?", options: ["Pylorus", "Kardia", "Fundus"], answer: 0, explanation: "Der Pylorus ist der Ringmuskel am Magenausgang zum Duodenum." },
          { id: "dig-l3-q2", type: "table", prompt: "Welche Zellen bilden …?", rows: [
            { label: "Pepsinogen", accepted: ["hauptzellen", "hauptzelle"], expected: "Hauptzellen" },
            { label: "Salzsäure (HCl)", accepted: ["belegzellen", "belegzelle", "parietalzellen", "parietalzelle"], expected: "Belegzellen (Parietalzellen)" },
            { label: "Schleim (Muzin)", accepted: ["nebenzellen", "nebenzelle"], expected: "Nebenzellen" },
            { label: "Gastrin", accepted: ["gzellen", "gzelle", "g-zellen", "g-zelle"], expected: "G-Zellen" }
          ], explanation: "Hauptzellen → Pepsinogen, Belegzellen → HCl + Intrinsic-Faktor, Nebenzellen → Schleim, G-Zellen → Gastrin." },
          { id: "dig-l3-q3", prompt: "Wofür wird der Intrinsic-Faktor benötigt?", options: ["Für die Aufnahme von Vitamin B12 im Ileum", "Für die Fettverdauung im Duodenum", "Für die Aktivierung von Trypsin"], answer: 0, explanation: "Ohne Intrinsic-Faktor kann Vitamin B12 nicht resorbiert werden → perniziöse Anämie." }
        ],
        recap: ["Kardia → Fundus → Korpus → Antrum → Pylorus; kleine (minor) und große (major) Kurvatur.", "Hauptzellen: Pepsinogen · Belegzellen: HCl + Intrinsic-Faktor · Nebenzellen: Schleim · G-Zellen: Gastrin.", "Pepsin spaltet Eiweiße; Intrinsic-Faktor → Vitamin-B12-Aufnahme; Gastrin → mehr Säure, Pepsinogen und Magenbewegung."]
      },
      {
        title: "Dünndarm & Oberflächenvergrößerung",
        goal: "Du kannst die Abschnitte des Dünndarms nennen und das Prinzip der Oberflächenvergrößerung erklären.",
        source: "Kompetenzliste LF 9, Punkte 4 und 8.",
        explanation: [
          "Der Dünndarm (Intestinum tenue) ist etwa 3–5 m lang und besteht aus Zwölffingerdarm (Duodenum, ca. 25–30 cm, C-förmig um den Pankreaskopf), Leerdarm (Jejunum, ca. 2/5) und Krummdarm (Ileum, ca. 3/5). Im Duodenum münden Gallen- und Pankreasgang an der Papilla Vateri; hier wird der saure Speisebrei (Chymus) durch Bikarbonat neutralisiert.",
          "Prinzip der Oberflächenvergrößerung: Je größer die Oberfläche, desto mehr Nährstoffe können gleichzeitig aufgenommen werden. Der Dünndarm vergrößert seine Innenfläche in drei Stufen: 1. Ringfalten (Kerckring-Falten, Plicae circulares) – Schleimhaut und Unterschleimhaut bilden quer verlaufende Falten (ca. ×3). 2. Darmzotten (Villi intestinales) – fingerförmige Ausstülpungen der Schleimhaut (ca. ×10). 3. Mikrovilli (Bürstensaum) – winzige Ausstülpungen der Zellmembran jeder Darmzelle (ca. ×20).",
          "Zusammen wird die Oberfläche etwa 600-fach vergrößert – Lehrbücher nennen meist rund 180–200 m² (neuere Messungen kommen auf ca. 30 m², was immer noch einer Einzimmerwohnung entspricht). In jeder Zotte liegen Blutkapillaren (Abtransport von Zuckern und Aminosäuren zur Leber über die Pfortader) und ein Lymphgefäß (Chylusgefäß, Abtransport der Fette).",
          "Im Bürstensaum sitzen außerdem eigene Enzyme, z. B. Maltase (spaltet Maltose in zwei Glukose) sowie Peptidasen. Im terminalen Ileum werden Vitamin B12 (mit Intrinsic-Faktor) und Gallensäuren zurückgewonnen."
        ],
        example: "Vergleich: Ein glattes Handtuch nimmt weniger Wasser auf als ein Frotteehandtuch mit vielen Schlaufen. Der Dünndarm ist das ultimative Frotteehandtuch.",
        practice: {
          id: "dig-l4-practice",
          prompt: "Welche Struktur ist die kleinste Stufe der Oberflächenvergrößerung?",
          options: ["Mikrovilli (Bürstensaum)", "Darmzotten", "Kerckring-Falten"],
          answer: 0,
          explanation: "Falten → Zotten → Mikrovilli: von grob nach fein. Mikrovilli sind Ausstülpungen der einzelnen Zellmembran."
        },
        test: [
          { id: "dig-l4-q1", prompt: "In welcher Reihenfolge (grob → fein) vergrößert der Dünndarm seine Oberfläche?", options: ["Kerckring-Falten → Zotten → Mikrovilli", "Mikrovilli → Zotten → Kerckring-Falten", "Zotten → Haustren → Mikrovilli"], answer: 0, explanation: "Ringfalten (×3), Zotten (×10), Mikrovilli (×20)." },
          { id: "dig-l4-q2", prompt: "Warum ist eine große Oberfläche im Dünndarm wichtig?", options: ["Damit möglichst viele Nährstoffe resorbiert werden können", "Damit der Stuhl schneller eingedickt wird", "Damit mehr Salzsäure gebildet wird"], answer: 0, explanation: "Mehr Kontaktfläche = mehr Resorption in kurzer Zeit." },
          { id: "dig-l4-q3", type: "short", prompt: "Wie heißt der mittlere Dünndarmabschnitt (deutsch oder Fachbegriff)?", accepted: ["jejunum", "leerdarm"], expected: "Jejunum (Leerdarm)", explanation: "Duodenum → Jejunum → Ileum." }
        ],
        recap: ["Dünndarm: Duodenum → Jejunum → Ileum (ca. 3–5 m).", "Oberflächenvergrößerung: Kerckring-Falten (×3) → Zotten (×10) → Mikrovilli (×20).", "Ziel: maximale Resorption; Zotten enthalten Kapillaren und Lymphgefäß.", "Maltase sitzt im Bürstensaum der Dünndarmschleimhaut."]
      },
      {
        title: "Dickdarm & Obstipation",
        goal: "Du kannst die Aufgaben des Dickdarms beschreiben, seine Abschnitte von kranial und von kaudal aus benennen und erklären, was Obstipation ist und wie man ihr vorbeugt.",
        source: "Kompetenzliste LF 9, Punkte 9, 10 und 11.",
        explanation: [
          "Aufgaben des Dickdarms (Intestinum crassum, ca. 1,5 m): Rückresorption von Wasser und Elektrolyten (Natrium) – der flüssige Darminhalt wird zu Stuhl eingedickt; Schleimbildung als Gleitmittel; Darmflora (Mikrobiom): Bakterien bauen Ballaststoffe ab, bilden Vitamin K und schützen vor Krankheitserregern; Speicherung des Stuhls und kontrollierte Ausscheidung (Defäkation). Verdauungsenzyme bildet der Dickdarm nicht.",
          "Abschnitte – von kranial (vom Dünndarm her, in Richtung des Nahrungstransports): Blinddarm (Caecum) mit Wurmfortsatz (Appendix vermiformis) → aufsteigender Grimmdarm (Colon ascendens) → rechte Kolonflexur (Flexura coli dextra) → querverlaufender Grimmdarm (Colon transversum) → linke Kolonflexur (Flexura coli sinistra) → absteigender Grimmdarm (Colon descendens) → S-förmiger Grimmdarm (Colon sigmoideum, Sigma) → Mastdarm (Rektum) → Analkanal/After (Anus). Am Übergang vom Ileum zum Caecum liegt die Bauhin-Klappe (Ileozäkalklappe), die einen Rückfluss verhindert.",
          "Von kaudal (vom After aus, so wie das Endoskop bei der Darmspiegelung vorgeschoben wird) ist es genau umgekehrt: Anus → Rektum → Sigma → Colon descendens → linke Flexur → Colon transversum → rechte Flexur → Colon ascendens → Caecum mit Appendix.",
          "Obstipation (Verstopfung) bedeutet: seltener, harter, schwer absetzbarer Stuhl – als Richtwert weniger als drei Stuhlentleerungen pro Woche, oft mit starkem Pressen und dem Gefühl unvollständiger Entleerung. Ursachen: ballaststoffarme Kost, zu wenig Flüssigkeit, Bewegungsmangel, Unterdrücken des Stuhldrangs, Medikamente (z. B. Opioide, Eisen), Erkrankungen. Vorbeugung: ballaststoffreich essen (Vollkorn, Gemüse, Obst, Hülsenfrüchte; ca. 30 g Ballaststoffe/Tag), ausreichend trinken (ca. 1,5–2 l/Tag, sofern ärztlich nichts dagegen spricht), regelmäßig bewegen, Stuhldrang nicht unterdrücken, feste Toilettenzeiten, Abführmittel (Laxanzien) nicht dauerhaft ohne ärztlichen Rat."
        ],
        example: "Eine ältere Patientin klagt über Verstopfung, trinkt aber nur zwei Tassen Kaffee am Tag und bewegt sich kaum. Ein guter Tipp: über den Tag verteilt Wasser oder Tee trinken, Vollkornbrot statt Weißbrot, täglicher Spaziergang.",
        practice: {
          id: "dig-l5-practice",
          prompt: "Was ist die Hauptaufgabe des Dickdarms?",
          options: ["Wasser und Elektrolyte zurückgewinnen und den Stuhl eindicken", "Eiweiße mit Pepsin verdauen", "Insulin produzieren"],
          answer: 0,
          explanation: "Der Dickdarm resorbiert Wasser und Salze; die Nährstoffe wurden bereits im Dünndarm aufgenommen."
        },
        test: [
          { id: "dig-l5-q1", prompt: "Welcher Abschnitt folgt von kranial aus direkt auf das Colon descendens?", options: ["Colon sigmoideum (Sigma)", "Colon transversum", "Caecum"], answer: 0, explanation: "… Colon transversum → linke Flexur → Colon descendens → Sigma → Rektum." },
          { id: "dig-l5-q2", prompt: "Welcher Tipp beugt einer Obstipation vor?", options: ["Ballaststoffreiche Kost, viel trinken und Bewegung", "Stuhldrang möglichst lange unterdrücken", "Täglich Abführmittel ohne ärztlichen Rat"], answer: 0, explanation: "Ballaststoffe binden Wasser und vergrößern das Stuhlvolumen; Bewegung regt die Darmtätigkeit an." },
          { id: "dig-l5-q3", type: "short", prompt: "Wie heißt der Wurmfortsatz mit Fachbegriff?", accepted: ["appendix vermiformis", "appendix"], expected: "Appendix vermiformis", explanation: "Entzündet er sich, spricht man (umgangssprachlich falsch: Blinddarmentzündung) von Appendizitis." }
        ],
        recap: ["Dickdarm: Wasser/Elektrolyte zurückgewinnen, Stuhl eindicken, Darmflora, Speicherung und Ausscheidung.", "Von kranial: Caecum (+ Appendix) → Colon ascendens → rechte Flexur → Colon transversum → linke Flexur → Colon descendens → Sigma → Rektum → Anus.", "Von kaudal: genau umgekehrt (Weg des Koloskops).", "Obstipation vorbeugen: Ballaststoffe, trinken, Bewegung, Stuhldrang nicht unterdrücken."]
      },
      {
        title: "Leber & Gallenblase",
        goal: "Du kannst die Hauptaufgaben der Leber in ganzen Sätzen erläutern, die Gallenblase mit Fachbegriff benennen und beschriften und die Funktion der Gallenflüssigkeit erklären.",
        source: "Kompetenzliste LF 9, Punkte 12 und 13.",
        explanation: [
          "Die Leber (Hepar) ist mit ca. 1,5 kg die größte Drüse des Körpers und liegt im rechten Oberbauch unter dem Zwerchfell. Über die Pfortader (Vena portae) erhält sie das nährstoffreiche Blut aus dem Darm, über die Leberarterie sauerstoffreiches Blut.",
          "Hauptaufgaben in ganzen Sätzen: 1. Die Leber steuert den Stoffwechsel: Sie speichert Glukose als Glykogen und gibt sie bei Bedarf wieder ins Blut ab; sie baut Fette und Eiweiße um. 2. Die Leber bildet lebenswichtige Eiweiße wie Albumin und Gerinnungsfaktoren. 3. Die Leber entgiftet das Blut: Sie baut Alkohol, Medikamente und Ammoniak (zu Harnstoff) ab. 4. Die Leber bildet täglich etwa 0,5–1 Liter Galle. 5. Die Leber speichert Glykogen, Eisen und Vitamine (z. B. A, D und B12). 6. Die Leber baut den roten Blutfarbstoff zu Bilirubin ab, das mit der Galle ausgeschieden wird.",
          "Die Gallenblase (Vesica biliaris, auch Vesica fellea) ist ein birnenförmiges Hohlorgan an der Unterseite der Leber. Sie speichert die Galle und dickt sie ein. Der Gallenweg: Lebergang (Ductus hepaticus communis) + Gallenblasengang (Ductus cysticus) → Hauptgallengang (Ductus choledochus) → gemeinsam mit dem Pankreasgang an der Papilla Vateri ins Duodenum. Nach einer fettreichen Mahlzeit zieht sich die Gallenblase zusammen (Hormon Cholezystokinin).",
          "Funktion der Galle: Die Gallensäuren emulgieren Fette – sie zerteilen große Fetttropfen in winzige Tröpfchen, so dass die Lipase eine viel größere Angriffsfläche hat. Außerdem hilft Galle bei der Aufnahme fettlöslicher Vitamine (A, D, E, K) und dient der Ausscheidung von Bilirubin, Cholesterin und Giftstoffen. Bilirubin färbt den Stuhl braun. Galle enthält selbst keine Verdauungsenzyme."
        ],
        example: "Spülmittel wirkt wie Galle: Ein Tropfen auf fettiges Wasser zerteilt das Fett in kleine Tröpfchen – genau das macht die Galle im Duodenum, bevor die Lipase das Fett spaltet.",
        practice: {
          id: "dig-l6-practice",
          prompt: "Was macht die Galle mit den Fetten im Darm?",
          options: ["Sie emulgiert die Fette (zerteilt sie in kleine Tröpfchen)", "Sie spaltet Fette mit eigenen Enzymen in Fettsäuren", "Sie wandelt Fette in Glukose um"],
          answer: 0,
          explanation: "Galle emulgiert nur – die eigentliche Spaltung übernimmt die Pankreas-Lipase."
        },
        test: [
          { id: "dig-l6-q1", type: "short", prompt: "Nenne den Fachbegriff für die Gallenblase.", accepted: ["vesica biliaris", "vesica fellea", "vesicabiliaris", "vesicafellea"], expected: "Vesica biliaris (Vesica fellea)", explanation: "Gallenblase = Vesica biliaris bzw. Vesica fellea." },
          { id: "dig-l6-q2", prompt: "Welche Aussage über die Leber ist richtig?", options: ["Sie bildet Gerinnungsfaktoren und Albumin.", "Sie bildet Insulin.", "Sie speichert die Galle bis zur Mahlzeit."], answer: 0, explanation: "Insulin bildet das Pankreas, die Galle speichert die Gallenblase. Die Leber bildet viele Plasmaproteine." },
          { id: "dig-l6-q3", prompt: "Wie heißt der Hauptgallengang, der ins Duodenum mündet?", options: ["Ductus choledochus", "Ductus cysticus", "Vena portae"], answer: 0, explanation: "Ductus cysticus = Gallenblasengang; Ductus choledochus = Hauptgallengang; Vena portae = Pfortader." }
        ],
        recap: ["Leber: Stoffwechsel/Speicher (Glykogen), Eiweißbildung (Albumin, Gerinnung), Entgiftung, Gallebildung, Bilirubinabbau.", "Gallenblase = Vesica biliaris (fellea): speichert und dickt Galle ein.", "Galle emulgiert Fette, hilft bei fettlöslichen Vitaminen, scheidet Bilirubin aus – enthält keine Enzyme.", "Gallenweg: Ductus hepaticus + Ductus cysticus → Ductus choledochus → Papilla Vateri."]
      },
      {
        title: "Pankreas & Verdauungsenzyme",
        goal: "Du kannst das Pankreas als exokrine und endokrine Drüse erklären, je zwei Stoffe nennen und Bildungsort und Funktion von Amylase, Lipase, Trypsin, Chymotrypsin und Maltase angeben.",
        source: "Kompetenzliste LF 9, Punkte 14 und 15.",
        explanation: [
          "Die Bauchspeicheldrüse (Pankreas) liegt quer hinter dem Magen; der Kopf liegt in der C-Schlinge des Duodenums, der Schwanz reicht bis zur Milz. Sie ist eine gemischte Drüse.",
          "Exokrin (Abgabe über einen Ausführungsgang nach außen – hier in den Darm): Das Pankreas bildet täglich ca. 1,5 Liter Pankreassaft, der über den Pankreasgang ins Duodenum fließt. Er enthält Verdauungsenzyme (z. B. α-Amylase, Lipase, Trypsinogen, Chymotrypsinogen) und Bikarbonat, das den sauren Magenbrei neutralisiert.",
          "Endokrin (Abgabe von Hormonen direkt ins Blut): In den Langerhans-Inseln bilden B-Zellen (β-Zellen) Insulin, das den Blutzucker senkt, und A-Zellen (α-Zellen) Glukagon, das den Blutzucker erhöht. (D-Zellen bilden Somatostatin.)",
          "Enzyme – Bildungsort und Funktion: α-Amylase (Speicheldrüsen und Pankreas) spaltet Stärke in Maltose/Mehrfachzucker. Lipase (Pankreas) spaltet Fette (Triglyceride) in Glycerin bzw. Monoglyceride und Fettsäuren. Trypsin (Pankreas, als inaktives Trypsinogen abgegeben und erst im Duodenum aktiviert) spaltet Eiweiße/Polypeptide in kleinere Peptide. Chymotrypsin (Pankreas, als Chymotrypsinogen, durch Trypsin aktiviert) spaltet ebenfalls Eiweiße in Peptide. Maltase (Dünndarmschleimhaut, Bürstensaum) spaltet Maltose in zwei Glukosemoleküle. Dass Trypsin und Chymotrypsin inaktiv abgegeben werden, schützt das Pankreas vor Selbstverdauung – geschieht das trotzdem, entsteht eine Pankreatitis."
        ],
        example: "Der Name verrät oft den Job: Amyl- (lat. amylum = Stärke), Lip- (gr. lipos = Fett), Malt- (Malz/Maltose). Die Endung -ase bedeutet: Das ist ein Enzym.",
        practice: {
          id: "dig-l7-practice",
          prompt: "Welcher Stoff wird vom endokrinen Pankreas gebildet?",
          options: ["Insulin", "Lipase", "Bikarbonat"],
          answer: 0,
          explanation: "Endokrin = Hormone ins Blut (Insulin, Glukagon). Lipase und Bikarbonat sind Bestandteile des exokrinen Pankreassafts."
        },
        test: [
          { id: "dig-l7-q1", prompt: "Was bedeutet „exokrin“?", options: ["Die Drüse gibt ihr Sekret über einen Ausführungsgang nach außen bzw. in ein Hohlorgan ab.", "Die Drüse gibt Hormone direkt ins Blut ab.", "Die Drüse bildet keine Sekrete."], answer: 0, explanation: "Exokrin = Ausführungsgang (z. B. ins Duodenum); endokrin = Hormone direkt ins Blut." },
          { id: "dig-l7-q2", type: "table", prompt: "Was spaltet das Enzym?", rows: [
            { label: "Amylase", accepted: ["stärke", "starke", "kohlenhydrate", "polysaccharide"], expected: "Stärke (Kohlenhydrate)" },
            { label: "Lipase", accepted: ["fette", "fett", "triglyceride", "lipide"], expected: "Fette" },
            { label: "Trypsin", accepted: ["eiweiße", "eiweisse", "eiweiß", "eiweiss", "proteine", "polypeptide", "peptide"], expected: "Eiweiße (Proteine/Polypeptide)" },
            { label: "Maltase", accepted: ["maltose", "malzzucker"], expected: "Maltose" }
          ], explanation: "Amylase → Stärke, Lipase → Fette, Trypsin/Chymotrypsin → Eiweiße, Maltase → Maltose (in 2 × Glukose)." },
          { id: "dig-l7-q3", prompt: "Wo wird Maltase gebildet?", options: ["In der Dünndarmschleimhaut (Bürstensaum)", "In der Gallenblase", "In den Belegzellen des Magens"], answer: 0, explanation: "Maltase ist ein Bürstensaumenzym der Dünndarmzellen." }
        ],
        recap: ["Exokrines Pankreas: Pankreassaft ins Duodenum – Enzyme (Amylase, Lipase, Trypsin, Chymotrypsin) + Bikarbonat.", "Endokrines Pankreas (Langerhans-Inseln): Insulin (B-Zellen, senkt BZ) und Glukagon (A-Zellen, hebt BZ).", "Amylase: Speicheldrüsen + Pankreas → Stärke. Lipase: Pankreas → Fette. Trypsin/Chymotrypsin: Pankreas → Eiweiße. Maltase: Dünndarm → Maltose."]
      },
      {
        title: "Diabetes mellitus",
        goal: "Du kannst Diabetes mellitus vollständig definieren, vier Diagnosekriterien aufzählen, Typ 1 und Typ 2 vergleichen, Gestationsdiabetes erläutern und die Spätschäden mit Fachbegriffen beschreiben.",
        source: "Kompetenzliste LF 9, Punkte 16 bis 20. Grenzwerte nach der Praxisempfehlung der Deutschen Diabetes Gesellschaft (DDG).",
        explanation: [
          "Definition: Diabetes mellitus („honigsüßer Durchfluss“) ist eine chronische Stoffwechselerkrankung, die durch einen dauerhaft erhöhten Blutzuckerspiegel (chronische Hyperglykämie) gekennzeichnet ist. Ursache ist ein absoluter oder relativer Insulinmangel und/oder eine verminderte Insulinwirkung (Insulinresistenz). Typische Symptome sind großer Durst (Polydipsie), häufiges Wasserlassen (Polyurie), Müdigkeit, Gewichtsabnahme und Infektanfälligkeit; Zucker im Urin heißt Glukosurie.",
          "Vier Diagnosekriterien (eines reicht, bei fehlenden Symptomen bestätigen): 1. HbA1c ≥ 6,5 % (≥ 48 mmol/mol). 2. Nüchtern-Plasmaglukose ≥ 126 mg/dl (≥ 7,0 mmol/l). 3. Gelegenheits-Plasmaglukose ≥ 200 mg/dl (≥ 11,1 mmol/l) – zu einer beliebigen Tageszeit. 4. oraler Glukosetoleranztest (oGTT): 2-Stunden-Wert ≥ 200 mg/dl (≥ 11,1 mmol/l). Nüchtern bedeutet: mindestens 8 Stunden keine Kalorienzufuhr.",
          "Typ 1 vs. Typ 2: Typ 1 (ca. 5 %) ist eine Autoimmunerkrankung – das Immunsystem zerstört die B-Zellen, es entsteht ein absoluter Insulinmangel. Er beginnt meist in Kindheit/Jugend, oft plötzlich, die Betroffenen sind meist normal- oder untergewichtig; es droht eine Ketoazidose; Therapie: lebenslang Insulin. Typ 2 (ca. 90–95 %) entsteht durch Insulinresistenz und einen relativen Insulinmangel, begünstigt durch Übergewicht, Bewegungsmangel, Ernährung und Vererbung. Er beginnt meist schleichend im Erwachsenenalter (zunehmend auch Jüngere); Therapie: Lebensstiländerung (Ernährung, Bewegung, Gewichtsabnahme), Tabletten (orale Antidiabetika, z. B. Metformin), später evtl. Insulin. Gemeinsam: erhöhter Blutzucker, gleiche Spätschäden, Schulung und Kontrollen nötig.",
          "Gestationsdiabetes ist eine Glukosetoleranzstörung, die erstmals in der Schwangerschaft auftritt bzw. erkannt wird. Alle Schwangeren erhalten zwischen der 24. und 28. SSW ein Screening (50-g-Suchtest, bei Auffälligkeit 75-g-oGTT). Mögliche Folgen für das Neugeborene: übermäßiges Geburtsgewicht (Makrosomie, > 4000–4500 g) mit Geburtskomplikationen wie Schulterdystokie, Unterzuckerung (Hypoglykämie) direkt nach der Geburt, Atemnotsyndrom durch verzögerte Lungenreife, Neugeborenengelbsucht und später ein erhöhtes Risiko für Übergewicht und Diabetes. Die Mutter hat nach der Geburt ein deutlich erhöhtes Risiko für Typ-2-Diabetes.",
          "Spätschäden entstehen durch jahrelang erhöhten Blutzucker, der die Gefäße schädigt: Makroangiopathie = Schädigung der großen Blutgefäße (Arteriosklerose → Herzinfarkt, Schlaganfall, pAVK). Mikroangiopathie = Schädigung der kleinen Gefäße, daraus folgen: diabetische Retinopathie (Netzhaut der Augen → Sehverschlechterung bis Erblindung), diabetische Nephropathie (Nieren → Niereninsuffizienz bis Dialyse) und diabetische Neuropathie (Nerven → Kribbeln, Taubheit, Schmerzunempfindlichkeit). Neuropathie und Durchblutungsstörung zusammen führen zum diabetischen Fußsyndrom."
        ],
        example: "Ein 58-jähriger, übergewichtiger Patient kommt wegen ständigem Durst. Gelegenheitsblutzucker: 240 mg/dl, HbA1c 7,8 % – zwei Kriterien erfüllt, typisch Typ 2. Du vereinbarst Termine für Augenarzt, Fußkontrolle und Urin auf Albumin.",
        practice: {
          id: "dig-l8-practice",
          prompt: "Welcher Diabetes-Typ beruht auf einer Autoimmunzerstörung der B-Zellen?",
          options: ["Typ 1", "Typ 2", "Gestationsdiabetes"],
          answer: 0,
          explanation: "Typ 1 = absoluter Insulinmangel durch Autoimmunprozess; Typ 2 = Insulinresistenz + relativer Insulinmangel."
        },
        test: [
          { id: "dig-l8-q1", prompt: "Ab welchem Nüchtern-Plasmaglukosewert spricht man von Diabetes?", options: ["≥ 126 mg/dl (7,0 mmol/l)", "≥ 100 mg/dl (5,6 mmol/l)", "≥ 200 mg/dl (11,1 mmol/l)"], answer: 0, explanation: "Nüchtern ≥ 126 mg/dl; Gelegenheits- und oGTT-2-h-Wert ≥ 200 mg/dl; HbA1c ≥ 6,5 %." },
          { id: "dig-l8-q2", type: "table", prompt: "Nenne den Fachbegriff für den Spätschaden an …", rows: [
            { label: "den Augen (Netzhaut)", accepted: ["retinopathie", "diabetische retinopathie"], expected: "Retinopathie" },
            { label: "den Nieren", accepted: ["nephropathie", "diabetische nephropathie"], expected: "Nephropathie" },
            { label: "den Nerven", accepted: ["neuropathie", "polyneuropathie", "diabetische neuropathie", "diabetische polyneuropathie"], expected: "Neuropathie" },
            { label: "den großen Blutgefäßen", accepted: ["makroangiopathie"], expected: "Makroangiopathie" }
          ], explanation: "Retinopathie, Nephropathie, Neuropathie (Folgen der Mikroangiopathie) und Makroangiopathie." },
          { id: "dig-l8-q3", prompt: "Welche Folge kann ein Gestationsdiabetes für das Neugeborene haben?", options: ["Makrosomie und Unterzuckerung nach der Geburt", "Typ-1-Diabetes ab Geburt", "Untergewicht durch zu wenig Glukose"], answer: 0, explanation: "Das Kind bekommt über die Plazenta zu viel Zucker, bildet selbst viel Insulin → großes Kind; nach der Geburt fällt die Zuckerzufuhr weg → Hypoglykämie." }
        ],
        recap: ["Definition: chronische Hyperglykämie durch absoluten/relativen Insulinmangel und/oder Insulinresistenz.", "Diagnose: HbA1c ≥ 6,5 % · nüchtern ≥ 126 mg/dl · Gelegenheit ≥ 200 mg/dl · oGTT 2 h ≥ 200 mg/dl.", "Typ 1: autoimmun, absoluter Mangel, jung, Insulin. Typ 2: Insulinresistenz, Übergewicht, schleichend, Lebensstil + Tabletten.", "Gestationsdiabetes: Screening 24.–28. SSW; Kind: Makrosomie, Hypoglykämie, Atemnot.", "Spätschäden: Makroangiopathie, Mikroangiopathie → Retino-, Nephro-, Neuropathie, diabetischer Fuß."]
      },
      {
        title: "Diagnostik, Laborwerte, iFOBT & Sonografie",
        goal: "Du kannst die Diagnostik-Begriffe erklären, Laborwerte Leber bzw. Pankreas zuordnen, einem Patienten den iFOB-Test erläutern und ihn auf eine Sonografie vorbereiten.",
        source: "Kompetenzliste LF 9, Punkte 22 bis 25. Vorsorgeregeln nach G-BA (gültig seit 01.04.2025).",
        explanation: [
          "Diagnostik-Begriffe: Anamnese = Erhebung der Krankengeschichte im Gespräch (Eigenanamnese vom Patienten selbst, Fremdanamnese durch Angehörige) – z. B. Beschwerden, Stuhlgewohnheiten, Medikamente, Vorerkrankungen. Inspektion = Betrachtung, z. B. Bauchform, Narben, Gelbfärbung der Haut (Ikterus). Palpation = Untersuchung durch Abtasten, z. B. Druckschmerz, Abwehrspannung, Lebergröße. Resistenz = bei der Palpation tastbarer Widerstand bzw. tastbare Verhärtung (z. B. vergrößertes Organ, Tumor, Kotballen). Auskultation = Abhören mit dem Stethoskop, am Bauch vor allem der Darmgeräusche (fehlend, normal, „klingend“ bei Ileus). Zur Vollständigkeit: Perkussion = Abklopfen.",
          "Laborwerte im Serum – Leber: GOT (AST) und GPT (ALT) – Leberzellenzyme, steigen bei Leberzellschaden; γ-GT – empfindlicher Wert bei Gallenstau und Alkohol; AP (alkalische Phosphatase) – Gallenstau (auch Knochen); Bilirubin – Gelbsucht; außerdem Syntheseleistung: Albumin, Quick/INR, Cholinesterase (CHE). Pankreas: Lipase (spezifischster Wert bei akuter Pankreatitis), α-Amylase bzw. Pankreas-Amylase; endokrin: Blutzucker und HbA1c. (Elastase wird im Stuhl gemessen und zeigt die exokrine Funktion.)",
          "iFOB-Test (immunologischer fäkaler okkulter Bluttest) dem Patienten erklären: Der Test sucht mit Antikörpern nach verborgenem (okkultem) menschlichem Blut im Stuhl, das z. B. von Polypen oder Darmkrebs stammen kann. Keine Diät nötig. Ablauf: Röhrchen beschriften (Name, Geburtsdatum, Datum der Probe), Stuhl auf Auffangpapier o. Ä. auffangen – nicht aus dem Toilettenwasser und nicht mit Urin vermischen, mit dem Stäbchen an mehreren Stellen in den Stuhl stechen, Stäbchen ins Röhrchen stecken und fest verschließen, Probe möglichst schnell (innerhalb weniger Tage, kühl gelagert) in die Praxis zurückbringen. Nicht während der Periode oder bei blutenden Hämorrhoiden. Ein positiver Befund muss immer durch eine Darmspiegelung (Koloskopie) abgeklärt werden. Gesetzlich Versicherte ab 50 Jahren: iFOBT alle 2 Jahre oder alternativ 2 Vorsorge-Koloskopien im Abstand von 10 Jahren.",
          "Sonografie (Ultraschall) erklären und vorbereiten: Die Untersuchung arbeitet mit Schallwellen, ist schmerzfrei und ohne Röntgenstrahlung, deshalb auch in der Schwangerschaft möglich. Vorbereitung für eine Oberbauchsonografie (Leber, Galle, Pankreas): nüchtern kommen (ca. 6–8 Stunden nichts essen), kein Kaffee, keine kohlensäurehaltigen Getränke, nicht rauchen, kein Kaugummi – Luft im Darm stört das Bild und die Gallenblase ist nur nüchtern gut gefüllt; Medikamente mit etwas stillem Wasser nach ärztlicher Absprache. Für Blase/Unterbauch: volle Harnblase (ca. 1 l trinken, nicht zur Toilette). Ablauf: Patient liegt auf dem Rücken, Bauch frei, kaltes Kontaktgel wird aufgetragen, der Schallkopf wird aufgesetzt, Atemkommandos („tief einatmen und Luft anhalten“), Dauer ca. 10–20 Minuten, danach Gel abwischen – der Patient kann sofort wieder essen."
        ],
        example: "Patient am Telefon: „Ich habe morgen um 8 Uhr Ultraschall vom Bauch.“ – Du sagst: „Bitte ab heute 22 Uhr nichts mehr essen, morgen früh keinen Kaffee, nicht rauchen, kein Kaugummi. Ihre Tabletten dürfen Sie nach Absprache mit einem Schluck stillem Wasser nehmen. Ein Handtuch können Sie gern mitbringen.“",
        practice: {
          id: "dig-l9-practice",
          prompt: "Was bedeutet „Palpation“?",
          options: ["Untersuchung durch Abtasten", "Abhören mit dem Stethoskop", "Betrachten des Patienten"],
          answer: 0,
          explanation: "Palpation = Abtasten. Auskultation = Abhören. Inspektion = Betrachten."
        },
        test: [
          { id: "dig-l9-q1", type: "table", prompt: "Ordne den Begriff zu.", rows: [
            { label: "Abhören mit dem Stethoskop", accepted: ["auskultation"], expected: "Auskultation" },
            { label: "Betrachten", accepted: ["inspektion"], expected: "Inspektion" },
            { label: "Erheben der Krankengeschichte", accepted: ["anamnese"], expected: "Anamnese" },
            { label: "Tastbarer Widerstand bei der Palpation", accepted: ["resistenz"], expected: "Resistenz" }
          ], explanation: "Anamnese, Inspektion, Palpation (mit Resistenz), Auskultation." },
          { id: "dig-l9-q2", prompt: "Welcher Laborwert gehört zum Pankreas?", options: ["Lipase", "GPT (ALT)", "γ-GT"], answer: 0, explanation: "Lipase (und Amylase) = Pankreas. GOT, GPT, γ-GT, AP, Bilirubin = Leber/Galle." },
          { id: "dig-l9-q3", prompt: "Was sagst du einem Patienten zur Vorbereitung einer Oberbauchsonografie?", options: ["Bitte nüchtern kommen, nicht rauchen, keine kohlensäurehaltigen Getränke.", "Bitte vorher eine große Mahlzeit essen, damit die Gallenblase leer ist.", "Bitte am Vortag Abführmittel nehmen und 3 Tage fleischfrei essen."], answer: 0, explanation: "Nüchtern: weniger Darmgas, gefüllte Gallenblase – beides verbessert das Ultraschallbild." }
        ],
        recap: ["Anamnese (Gespräch), Inspektion (Betrachten), Palpation (Abtasten; Resistenz = tastbarer Widerstand), Auskultation (Abhören).", "Leber: GOT, GPT, γ-GT, AP, Bilirubin (+ Albumin, Quick). Pankreas: Lipase, Amylase (+ BZ, HbA1c).", "iFOBT: Antikörper-Test auf okkultes Blut, keine Diät, Stuhl nicht aus dem Toilettenwasser, Probe schnell zurück, positiv → Koloskopie; ab 50 alle 2 Jahre.", "Oberbauch-Sono: nüchtern (6–8 h), nicht rauchen, keine Kohlensäure/kein Kaugummi; schmerzfrei, ohne Strahlung, Gel, Atemkommandos."]
      }
    ],
    cards: [
      { front: "Fachbegriff: Mundhöhle", back: "Cavum oris" },
      { front: "Fachbegriff: Rachen", back: "Pharynx" },
      { front: "Fachbegriff: Speiseröhre", back: "Ösophagus (Oesophagus)" },
      { front: "Fachbegriff: Magen", back: "Gaster (gr.) bzw. Ventriculus (lat.) – daher „gastro-“" },
      { front: "Fachbegriff: Zwölffingerdarm", back: "Duodenum" },
      { front: "Fachbegriff: Leerdarm / Krummdarm", back: "Jejunum / Ileum" },
      { front: "Fachbegriff: Dünndarm / Dickdarm", back: "Intestinum tenue / Intestinum crassum (Darm allgemein: Enteron, „entero-“)" },
      { front: "Fachbegriff: Blinddarm und Wurmfortsatz", back: "Caecum und Appendix vermiformis" },
      { front: "Fachbegriff: Mastdarm / After", back: "Rektum (Rectum) / Anus (Proktos, „prokto-“)" },
      { front: "Fachbegriff: Leber", back: "Hepar („hepato-“)" },
      { front: "Fachbegriff: Gallenblase / Galle", back: "Vesica biliaris (fellea) / Bilis, Chole („chole-“)" },
      { front: "Fachbegriff: Bauchspeicheldrüse", back: "Pankreas" },
      { front: "Gastritis", back: "Entzündung der Magenschleimhaut" },
      { front: "Ulcus ventriculi / Ulcus duodeni", back: "Magengeschwür / Zwölffingerdarmgeschwür" },
      { front: "Refluxösophagitis", back: "Entzündung der Speiseröhre durch zurückfließenden Magensaft (Leitsymptom Sodbrennen = Pyrosis)" },
      { front: "Hepatitis / Leberzirrhose", back: "Leberentzündung / bindegewebiger Umbau und Schrumpfung der Leber mit Funktionsverlust" },
      { front: "Steatosis hepatis", back: "Fettleber" },
      { front: "Cholezystitis / Cholelithiasis", back: "Gallenblasenentzündung / Gallensteinleiden" },
      { front: "Pankreatitis", back: "Entzündung der Bauchspeicheldrüse (Leitwert: Lipase ↑)" },
      { front: "Appendizitis", back: "Entzündung des Wurmfortsatzes (umgangssprachlich „Blinddarmentzündung“)" },
      { front: "Divertikel / Divertikulitis", back: "Ausstülpung der Darmwand / deren Entzündung (meist im Sigma)" },
      { front: "Ileus", back: "Darmverschluss bzw. Darmlähmung – Notfall" },
      { front: "Ikterus", back: "Gelbsucht: Gelbfärbung von Haut und Skleren durch erhöhtes Bilirubin" },
      { front: "Aszites", back: "Bauchwassersucht: Flüssigkeit in der freien Bauchhöhle" },
      { front: "Nausea / Emesis / Hämatemesis", back: "Übelkeit / Erbrechen / Bluterbrechen" },
      { front: "Diarrhö / Obstipation", back: "Durchfall / Verstopfung" },
      { front: "Meteorismus / Flatulenz", back: "Blähbauch (Gasansammlung) / Abgang von Darmgasen" },
      { front: "Meläna / Hämatochezie", back: "Teerstuhl (schwarz, Blutung oben im Verdauungstrakt) / frisches Blut im Stuhl" },
      { front: "Dysphagie", back: "Schluckstörung" },
      { front: "Gastroskopie / Koloskopie / Rektoskopie", back: "Magenspiegelung / Dickdarmspiegelung / Mastdarmspiegelung (Oberbegriff: Endoskopie)" },
      { front: "Sonografie", back: "Ultraschalluntersuchung" },
      { front: "Hepatomegalie / Splenomegalie", back: "Lebervergrößerung / Milzvergrößerung" },
      { front: "Kolorektales Karzinom", back: "Darmkrebs (Dickdarm/Rektum); Vorstufe meist Polypen (Adenome)" },
      { front: "Polydipsie / Polyurie / Glukosurie", back: "Großer Durst / vermehrtes Wasserlassen / Zucker im Urin" },
      { front: "Hyperglykämie / Hypoglykämie", back: "Überzuckerung / Unterzuckerung" },
      { front: "Resorption", back: "Aufnahme von Stoffen aus dem Darm in Blut oder Lymphe" },
      { front: "Peristaltik", back: "Wellenförmige Muskelbewegung, die den Inhalt aboral transportiert" },
      { front: "Chymus / Bolus", back: "Speisebrei (Magen/Darm) / geschluckter Bissen" },
      { front: "oral / aboral", back: "zum Mund hin / vom Mund weg" },
      { front: "kranial / kaudal", back: "kopfwärts / steißwärts" },
      { front: "exokrin / endokrin", back: "Abgabe über Ausführungsgang nach außen bzw. in Hohlorgan / Abgabe von Hormonen direkt ins Blut" }
    ],
    exam: [
      { id: "dig-exam-1", prompt: "Welche Speicheldrüse liegt unter der Zunge?", options: ["Glandula sublingualis", "Glandula parotidea", "Glandula submandibularis"], answer: 0, explanation: "sub = unter, lingua = Zunge." },
      { id: "dig-exam-2", prompt: "Was verschließt in der pharyngealen Phase den Nasenrachen?", options: ["Das Gaumensegel (weicher Gaumen)", "Der Kehldeckel", "Der untere Ösophagussphinkter"], answer: 0, explanation: "Gaumensegel → Nasenraum; Kehldeckel → Kehlkopf/Luftröhre." },
      { id: "dig-exam-3", prompt: "Wie heißt der Magengrund bzw. die Magenkuppel?", options: ["Fundus", "Antrum", "Kardia"], answer: 0, explanation: "Fundus = Magengrund/-kuppel; Antrum = Pförtnervorraum; Kardia = Mageneingang." },
      { id: "dig-exam-4", prompt: "Welche Funktion hat Gastrin?", options: ["Es regt die Bildung von Salzsäure und Pepsinogen sowie die Magenbewegung an.", "Es spaltet Eiweiße.", "Es senkt den Blutzucker."], answer: 0, explanation: "Gastrin ist ein Hormon der G-Zellen im Antrum." },
      { id: "dig-exam-5", prompt: "Was spaltet Pepsin?", options: ["Eiweiße", "Fette", "Stärke"], answer: 0, explanation: "Pepsin beginnt im Magen die Eiweißverdauung." },
      { id: "dig-exam-6", prompt: "Welche Strukturen vergrößern die Dünndarmoberfläche?", options: ["Kerckring-Falten, Zotten, Mikrovilli", "Haustren, Tänien, Kurvaturen", "Kardia, Fundus, Pylorus"], answer: 0, explanation: "Haustren und Tänien gehören zum Dickdarm; Kardia/Fundus/Pylorus zum Magen." },
      { id: "dig-exam-7", type: "short", prompt: "Wie heißt der S-förmige Abschnitt des Dickdarms vor dem Rektum (Fachbegriff)?", accepted: ["colon sigmoideum", "sigma", "sigmoid", "kolon sigmoideum"], expected: "Colon sigmoideum (Sigma)", explanation: "… Colon descendens → Colon sigmoideum → Rektum." },
      { id: "dig-exam-8", prompt: "Welcher Abschnitt wird bei einer Koloskopie (von kaudal) zuletzt erreicht?", options: ["Caecum", "Rektum", "Sigma"], answer: 0, explanation: "Von kaudal: Anus → Rektum → Sigma → … → Caecum." },
      { id: "dig-exam-9", prompt: "Was ist KEINE Aufgabe der Leber?", options: ["Insulin bilden", "Gerinnungsfaktoren bilden", "Alkohol und Medikamente abbauen"], answer: 0, explanation: "Insulin bilden die B-Zellen des Pankreas." },
      { id: "dig-exam-10", prompt: "Wo wird Trypsin gebildet?", options: ["Im Pankreas (als Trypsinogen)", "In den Hauptzellen des Magens", "In der Leber"], answer: 0, explanation: "Trypsinogen wird erst im Duodenum zu Trypsin aktiviert." },
      { id: "dig-exam-11", prompt: "Welcher Wert erfüllt ein Diagnosekriterium für Diabetes mellitus?", options: ["HbA1c 6,8 %", "Nüchternglukose 105 mg/dl", "oGTT-2-h-Wert 150 mg/dl"], answer: 0, explanation: "HbA1c ≥ 6,5 % ist ein Diagnosekriterium; 105 mg/dl nüchtern und 150 mg/dl im oGTT liegen darunter." },
      { id: "dig-exam-12", type: "table", prompt: "Typ 1 oder Typ 2?", rows: [
        { label: "Autoimmunerkrankung, absoluter Insulinmangel", accepted: ["typ 1", "typ1", "1"], expected: "Typ 1" },
        { label: "Insulinresistenz, oft Übergewicht", accepted: ["typ 2", "typ2", "2"], expected: "Typ 2" },
        { label: "Häufigste Form (ca. 90 %)", accepted: ["typ 2", "typ2", "2"], expected: "Typ 2" }
      ], explanation: "Typ 1 = autoimmun, absoluter Mangel; Typ 2 = Insulinresistenz, häufigste Form." },
      { id: "dig-exam-13", prompt: "Welche Aussage zum iFOBT ist richtig?", options: ["Er erkennt menschliches Blut im Stuhl; eine Diät ist nicht nötig.", "Vor dem Test muss 3 Tage auf rotes Fleisch verzichtet werden.", "Die Probe wird am besten aus dem Toilettenwasser entnommen."], answer: 0, explanation: "Der immunologische Test reagiert nur auf menschliches Hämoglobin – keine Diät. Die Probe nicht aus dem Wasser entnehmen." },
      { id: "dig-exam-14", prompt: "Was bedeutet Auskultation?", options: ["Abhören", "Abtasten", "Abklopfen"], answer: 0, explanation: "Auskultation = Abhören; Palpation = Abtasten; Perkussion = Abklopfen." },
      { id: "dig-exam-15", prompt: "Welche Laborwerte ordnest du der Leber zu?", options: ["GOT, GPT, γ-GT, Bilirubin", "Lipase und Amylase", "Kreatinin und Harnstoff"], answer: 0, explanation: "Lipase/Amylase = Pankreas; Kreatinin/Harnstoff = Niere." }
    ]
  }
};

// Ausbildungsberufe: gruppieren die Fächer. Neue Berufe/Fächer hier eintragen.
export const professions = [
  { id: "elektro", title: "Elektroniker/in für Informations- und Systemtechnik", shortTitle: "Elektroniker/in", icon: "⚡", subjects: ["politics", "network"] },
  { id: "mfa", title: "Medizinische/r Fachangestellte/r (MFA)", shortTitle: "MFA", icon: "🩺", subjects: ["digestion"] }
];
