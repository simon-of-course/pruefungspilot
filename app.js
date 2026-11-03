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
        title: "Adressen: MAC, IP & Port",
        goal: "Du kannst MAC-, IP- und Portadressen unterscheiden und das Standardgateway im lokalen Netz erklären.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 1–3.",
        explanation: [
          "Eine MAC-Adresse adressiert eine Netzwerkschnittstelle auf dem lokalen Übertragungsabschnitt. Eine IP-Adresse adressiert ein Gerät bzw. eine IP-Schnittstelle für die Weiterleitung zwischen Netzen.",
          "Eine Portnummer ordnet Daten einer Anwendung bzw. einem Dienst auf einem Endgerät zu. TCP oder UDP transportiert die Portnummern; die IP-Schicht transportiert IP-Adressen.",
          "Wenn ein Rechner ein Ziel außerhalb des eigenen lokalen Netzes erreichen will, schickt er den Ethernet-Rahmen zunächst an die MAC-Adresse des Standardgateways (meist des Routers). Die IP-Zieladresse bleibt die Adresse des entfernten Ziels."
        ],
        example: "Für einen Brief ins Ausland: Die IP-Adresse ähnelt der Zieladresse auf dem Brief. Die MAC-Adresse ist wie die Adresse der nächsten örtlichen Sortierstelle – dem Gateway – auf dem ersten Teilstück.",
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
          { id: "net-l2-q3", prompt: "Welche Ziel-MAC verwendet der PC zunächst für einen Server außerhalb des LANs?", options: ["Die des Standardgateways", "Die des Servers", "Es gibt keine MAC-Adresse"], answer: 0, explanation: "Im lokalen Netz wird der Rahmen an das Standardgateway adressiert." }
        ],
        recap: ["MAC = lokaler Ethernet-Abschnitt.", "IP = Weiterleitung zwischen Netzen.", "Port = Anwendung/Dienst auf dem Endgerät.", "Für ein entferntes Ziel geht der erste Ethernet-Rahmen an die Gateway-MAC."]
      },
      {
        title: "ARP, NDP & Gateway",
        goal: "Du kannst erklären, wie ARP eine IPv4-Adresse einer lokalen MAC-Adresse zuordnet und wozu IPv6 NDP dient.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 2.",
        explanation: [
          "Kennt ein IPv4-Rechner die Ziel-IP im lokalen Netz, aber nicht die zugehörige MAC-Adresse, fragt er per ARP-Request im lokalen Netz nach. Die Anfrage wird lokal verbreitet; das Gerät mit der gesuchten IPv4-Adresse antwortet mit seiner MAC-Adresse.",
          "Der Rechner kann die Zuordnung vorübergehend im ARP-Cache speichern. ARP löst keine beliebige Internet-IP direkt in eine MAC auf: Für ein entferntes Ziel wird die MAC des nächsten Routers/Gateways gebraucht.",
          "IPv6 nutzt Neighbor Discovery (NDP), um Nachbarn und deren Link-Layer-Adressen zu finden und Router zu entdecken. NDP verwendet ICMPv6-Nachrichten; es ist nicht einfach ARP unter neuem Namen."
        ],
        example: "Zum Nachbargerät im selben LAN fragt der Rechner nach dessen MAC. Zum Server im Internet fragt er nach der MAC des Routers, der das Paket als Nächstes weiterleitet.",
        supplement: "Vertiefung anhand der Standards: ARP ist in RFC 826 beschrieben; IPv6 Neighbor Discovery in RFC 4861. Die Protokolldokumente sind in den Quellen am Seitenende verlinkt.",
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
          { id: "net-l3-q3", prompt: "Welches Verfahren erfüllt für IPv6 die Nachbarerkennung?", options: ["NDP / Neighbor Discovery", "ARP direkt über IPv6", "FTP"], answer: 0, explanation: "IPv6 verwendet Neighbor Discovery (NDP), unter anderem zur Ermittlung von Nachbarn und Link-Layer-Adressen." }
        ],
        recap: ["ARP: IPv4-Adresse → lokale MAC-Adresse.", "Request fragt im lokalen Netz; Reply liefert die Zuordnung.", "IPv6 nutzt NDP über ICMPv6; entfernte Ziele werden zunächst an das Gateway übergeben."]
      },
      {
        title: "TCP, UDP & Ethernet",
        goal: "Du kannst TCP und UDP unterscheiden und typische Dienste sowie CSMA/CA einordnen.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 2 und S. 4.",
        explanation: [
          "TCP ist verbindungsorientiert und bietet unter anderem geordnete Übertragung sowie Wiederholungen bei fehlenden Daten. UDP ist verbindungslos und garantiert selbst weder Reihenfolge noch Zustellung.",
          "TCP nutzt Sequenznummern, Flusskontrolle und Wiederholungen. UDP hat diese eingebauten Zustell- und Reihenfolgegarantien nicht. Klassische Zuordnungen aus der Prüfungsseite: HTTP, FTP und SSH zu TCP; VoIP, DHCP und viele Online-Spiele zu UDP. Das sind typische Unterrichtsbeispiele, keine Aussage, dass ein Dienst in jeder Implementierung ausschließlich dieses Transportprotokoll nutzt.",
          "Für Echtzeitanwendungen kann UDP nützlich sein, weil nicht erst auf Wiederholungen gewartet werden muss. Die Anwendung muss passende Zuverlässigkeit selbst berücksichtigen.",
          "CSMA/CA bedeutet „Carrier Sense Multiple Access with Collision Avoidance“. Es ist ein Zugriffsverfahren in WLANs: Stationen hören den Funkkanal ab und versuchen, Kollisionen durch Warten und Koordination zu vermeiden. RTS/CTS kann optional helfen, etwa bei versteckten Stationen.",
          "Ethernet im üblichen lokalen Netz arbeitet asynchron; es gibt nicht einen gemeinsamen Takt, an dem alle Datenbits ausgerichtet werden."
        ],
        example: "Eine Dateiübertragung profitiert von TCPs Reihenfolge und Wiederholung. Bei einem Echtzeit-Audiostrom kann eine verspätete Wiederholung weniger sinnvoll sein als das Weiterlaufen mit dem nächsten Datenpaket.",
        supplement: "Die Prüfungsseite enthält bei der Frage „synchron oder asynchron“ eine falsche Schülerantwort, die mit 0 Punkten bewertet wurde. Für die Wiederholung gilt: Ethernet ist asynchron. Die handschriftliche Antwort zu CSMA/CA beschreibt RTS/CTS ungenau; maßgeblich ist die Erklärung oben.",
        practice: {
          id: "net-l4-practice",
          prompt: "Bei einer Dateiübertragung soll die Reihenfolge stimmen und fehlende Daten sollen erneut gesendet werden. Was passt besser?",
          options: ["TCP", "UDP", "ARP"],
          answer: 0,
          explanation: "TCP bietet geordnete, zuverlässige Datenübertragung mit Wiederholungen. UDP stellt diese Garantien selbst nicht bereit."
        },
        test: [
          { id: "net-l4-q1", prompt: "Welche Aussage zu UDP stimmt?", options: ["UDP garantiert die geordnete Zustellung.", "UDP ist verbindungslos und garantiert die Zustellung selbst nicht.", "UDP ersetzt IP-Adressen."], answer: 1, explanation: "UDP bietet einen verbindungslosen Datagrammtransport ohne eigene Zustell- oder Reihenfolgegarantie." },
          { id: "net-l4-q2", prompt: "Wofür steht das „CA“ in CSMA/CA?", options: ["Collision Avoidance", "Connection Address", "Carrier Assignment"], answer: 0, explanation: "CA steht für Collision Avoidance – Kollisionsvermeidung." },
          { id: "net-l4-q3", prompt: "Ethernet wird in der Prüfungsfrage als … eingeordnet.", options: ["asynchron", "synchron", "zeitgesteuert durch einen gemeinsamen Bus-Takt"], answer: 0, explanation: "Das übliche Ethernet hat keinen gemeinsamen Taktgeber für alle Stationen und gilt hier als asynchron." },
          { id: "net-l4-q4", prompt: "Welche Zuordnung passt zu den klassischen Beispielen aus der Prüfungsseite?", options: ["HTTP, FTP und SSH zu TCP", "ARP zu UDP", "VoIP und Online-Spiele zu TCP in jedem Fall"], answer: 0, explanation: "Die Prüfungsseite ordnet HTTP, FTP und SSH TCP zu; VoIP und Online-Spiele sind typische UDP-Beispiele. Das sind verbreitete Zuordnungen, keine Aussage über ausnahmslose Implementierungen." }
        ],
        recap: ["TCP: verbindungsorientiert, geordnet, Wiederholungen.", "UDP: verbindungslos, keine eigene Zustellgarantie.", "CSMA/CA: WLAN-Zugriff mit Kollisionsvermeidung.", "Ethernet ist asynchron."]
      },
      {
        title: "Pakete lesen & Fehler finden",
        goal: "Du kannst eine einfache Subnetzfrage lösen, einen Paketmitschnitt schichtenweise lesen und Dämpfung richtig deuten.",
        source: "Netzwerktechnik & OSI 7 Schichten_6231.pdf, S. 3–4.",
        explanation: [
          "Eine Subnetzmaske 255.255.255.192 entspricht /26. Damit bleiben 6 Bits für Hostadressen: 2⁶ = 64 Adressen insgesamt. Bei einem gewöhnlichen IPv4-Subnetz sind Netzwerk- und Broadcastadresse nicht an einzelne Hosts vergebbar, also bleiben 62 nutzbare Hostadressen.",
          "Lies einen Paketmitschnitt von außen nach innen: Im Ethernet-Header stehen Ziel- und Quell-MAC sowie der Typ des Inhalts. Im IP-Header stehen IP-Adressen und das Transportprotokoll. TCP oder UDP enthält anschließend Quell- und Zielport.",
          "Ein traceroute zeigt die Router-Hops auf dem Weg zum Ziel und Antwortzeiten. Bei Spannungspegeln gilt für gleiche Impedanz: 20 dB Spannungsdämpfung bedeutet ein Spannungsverhältnis von 10:1; am Empfang kommen 10 % der ursprünglichen Spannung an, also 90 % weniger."
        ],
        example: "Im Aufgaben-Mitschnitt ist 0x0800 der Ethernet-Typ für IPv4; das IP-Feld 0x11 bedeutet UDP; der Zielport 0x0035 ist dezimal 53 (DNS). Das ist eine Leseübung nach den Headern, kein allgemeines Versprechen, dass jeder Port nur einem Dienst dient.",
        practice: {
          id: "net-l5-practice",
          prompt: "Ein Netz nutzt die Maske 255.255.255.192 (/26). Wie viele übliche IPv4-Hostadressen sind nutzbar?",
          options: ["62", "64", "126"],
          answer: 0,
          explanation: "/26 lässt 6 Hostbits: 64 Gesamtadressen. Netzwerk- und Broadcastadresse bleiben reserviert, also 62 nutzbare Hostadressen."
        },
        supplement: "Bei der 20 dB-Rechenfrage setzt die handschriftliche Schülerantwort „10 %“ an eine unklare Stelle. Die sichere Aussage lautet: Empfangsspannung = 10 % der eingespeisten Spannung; die Spannungsamplitude wurde somit um 90 % reduziert. Das ist nicht dasselbe wie die Dämpfung der Leistung in Prozent.",
        test: [
          { id: "net-l5-q1", prompt: "Wie viele nutzbare Hostadressen hat ein übliches /26-IPv4-Subnetz?", options: ["62", "64", "32"], answer: 0, explanation: "2⁶ = 64 Gesamtadressen; Netzwerk- und Broadcastadresse sind nicht für Hosts nutzbar, also 62." },
          { id: "net-l5-q2", prompt: "Ein Ethernet-Header enthält Ziel-MAC, Quell-MAC und Typ. Was folgt im Beispiel mit IPv4?", options: ["Der IP-Header", "Der TCP-Header direkt vor Ethernet", "Die Anwendung ohne weitere Header"], answer: 0, explanation: "Auf Ethernet folgt hier der IP-Header; darin steht, welches Transportprotokoll folgt." },
          { id: "net-l5-q3", prompt: "Bei 20 dB Spannungsdämpfung: Welcher Anteil der Eingangsspannung kommt an (gleiche Impedanz)?", options: ["10 %", "20 %", "90 %"], answer: 0, explanation: "20·log10(U1/U2)=20 dB ergibt U2/U1=0,1. Es kommen 10 % an; die Spannung ist um 90 % reduziert." },
          { id: "net-l5-q4", prompt: "Was zeigt traceroute typischerweise?", options: ["Zwischenstationen (Hops) und Antwortzeiten auf dem Weg zum Ziel", "Die MAC-Adresse aller Endgeräte", "Die Zahl der im Zielnetz verfügbaren TCP-Ports"], answer: 0, explanation: "traceroute zeigt die erreichbaren Hops auf dem Pfad und die gemessenen Antwortzeiten." }
        ],
        recap: ["/26: 64 Gesamtadressen, typischerweise 62 nutzbare Hosts.", "Paket lesen: Ethernet → IP → TCP/UDP → Anwendungsdaten.", "20 dB Spannungsdämpfung: 10 % kommen an, 90 % Spannungsreduktion.", "traceroute zeigt Hops und Antwortzeiten."]
      }
    ],
    cards: [
      { front: "Nenne die OSI-Schichten von unten nach oben.", back: "Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung." },
      { front: "Welche Adresse steht im Ethernet-Rahmen für ein entferntes Ziel?", back: "Die MAC-Adresse des lokalen Standardgateways; die IP-Zieladresse bleibt die des entfernten Servers." },
      { front: "Was löst ARP auf?", back: "Eine IPv4-Adresse in eine MAC-Adresse auf dem lokalen Netzabschnitt." },
      { front: "Worin unterscheiden sich TCP und UDP kurz?", back: "TCP bietet verbindungsorientierte, geordnete und zuverlässige Übertragung; UDP ist verbindungslos und garantiert selbst keine Zustellung." },
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
      { id: "net-exam-8", prompt: "20 dB Spannungsdämpfung bedeutet, dass …", options: ["10 % der Spannung ankommen", "90 % der Spannung ankommen", "20 % der Spannung ankommen"], answer: 0, explanation: "Das Spannungsverhältnis beträgt 1:10; damit kommen 10 % an (gleiche Impedanz)." }
    ]
  }
};

const STORAGE_KEY = "lernpfade-progress-v1";
const root = document.querySelector("#app");
const navButtons = [...document.querySelectorAll(".main-nav [data-action]")];
const freshProgress = () => ({
  politics: { unlocked: 0, completed: [], examPassed: false, bestExam: 0, againCards: [] },
  network: { unlocked: 0, completed: [], examPassed: false, bestExam: 0, againCards: [] },
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
    <section class="exercise" aria-labelledby="practice-title">
      <p class="eyebrow">Aktiv üben</p><h3 id="practice-title">Denk kurz nach und wähle eine Antwort</h3><p class="question-prompt">${practice.prompt}</p>
      <div class="choice-list">${practice.options.map((option, index) => `<button class="choice-button" type="button" data-action="practice-answer" data-question="${practice.id}" data-answer="${index}">${option}</button>`).join("")}</div>
      <div id="feedback-${practice.id}" class="feedback" aria-live="polite"></div>
    </section>
    <section class="exercise" aria-labelledby="test-title">
      <p class="eyebrow">Level-Check</p><h3 id="test-title">Kurztest – ${level.test.length} Fragen</h3><p>Wähle jeweils eine Antwort. Ab ${Math.ceil(level.test.length * 2 / 3)} richtigen Antworten ist das Level bestanden.</p>
      ${renderTestForm(level.test, `level-${subjectId}-${currentLevel}`)}
    </section>
    <div class="recap"><h3>Das solltest du mitnehmen</h3><ul>${level.recap.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    <div class="level-navigation">${currentLevel > 0 ? `<button type="button" class="button secondary" data-action="level" data-level="${currentLevel - 1}">← Vorheriges Level</button>` : "<span></span>"}${currentLevel < subject.levels.length - 1 ? `<button type="button" class="button ${network ? "blue" : ""}" data-action="level" data-level="${currentLevel + 1}" ${currentLevel + 1 <= progress[subjectId].unlocked ? "" : "disabled"}>${levelDone ? "Nächstes Level →" : "Nächstes Level gesperrt"}</button>` : ""}</div>
  </article>`;
}

function renderTestForm(questions, formId) {
  return `<form class="test-form" data-form="${formId}">
    ${questions.map((question, index) => `<fieldset class="test-question"><legend>${index + 1}. ${question.prompt}</legend><div class="test-options">${question.options.map((option, choice) => `<label class="test-option"><input type="radio" name="${question.id}" value="${choice}"><span>${option}</span></label>`).join("")}</div><div class="test-answer-note" id="answer-${question.id}" hidden></div></fieldset>`).join("")}
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
    <h2>Prüfe deinen Lernstand</h2><p class="goal">Acht gemischte Fragen. Ab 6 richtigen Antworten (75 %) ist der Test bestanden. Dein bisher bester Wert: ${progress[subjectId].bestExam}/${subject.exam.length}.</p>
    ${renderTestForm(subject.exam, `exam-${subjectId}`)}
  </article>`;
}

function renderReview() {
  view = "review";
  const items = Object.values(progress.missed);
  if (!items.length) return `<article class="lesson-card"><div class="lesson-topline"><span class="badge">Wiederholung</span><button class="button secondary small" data-action="back-subject" type="button">Zurück</button></div><div class="empty-state"><h2>Alles aufgeholt</h2><p>Im Moment gibt es keine falsch beantworteten Fragen zum Wiederholen.</p></div></article>`;
  return `<article class="lesson-card"><div class="lesson-topline"><span class="badge">Wiederholung</span><button class="button secondary small" data-action="back-subject" type="button">Zurück</button></div><h2>Fragen noch einmal abrufen</h2><p class="goal">Die Antwort wird sofort erklärt. Bei einer richtigen Antwort verschwindet die Frage aus deiner Wiederholungsliste.</p>
    <div class="review-list">${items.map((question) => `<section class="review-item" data-review="${question.id}"><h3>${question.prompt}</h3><div class="choice-list">${question.options.map((option, index) => `<button type="button" class="choice-button" data-action="review-answer" data-question="${question.id}" data-answer="${index}">${option}</button>`).join("")}</div><div class="feedback" id="review-feedback-${question.id}" aria-live="polite"></div></section>`).join("")}</div>
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
    const value = submitted.get(question.id);
    const note = document.querySelector(`#answer-${question.id}`);
    if (value === null) unanswered = true;
    const correct = value !== null && Number(value) === question.answer;
    if (correct) score++;
    saveMiss(question, subjectId, correct ? question.answer : (value === null ? -1 : Number(value)));
    note.hidden = false;
    note.textContent = `${correct ? "Richtig. " : `Richtige Antwort: ${question.options[question.answer]}. `}${question.explanation}`;
    note.setAttribute("role", correct ? "status" : "alert");
  }
  const result = document.querySelector(`#result-${formId}`);
  if (isExam) {
    const passed = score >= 6;
    progress[subjectId].bestExam = Math.max(progress[subjectId].bestExam, score);
    if (passed) progress[subjectId].examPassed = true;
    persist();
    result.textContent = `${unanswered ? "Nicht beantwortete Fragen zählen als falsch. " : ""}${score}/${questions.length} richtig. ${passed ? "Abschlusstest bestanden!" : "Noch nicht bestanden – wiederhole die Levels und versuche es erneut."}`;
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
