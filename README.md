# PrüfungsPilot

Lernplattform zur Prüfungsvorbereitung – als statische Seite ohne Build-Schritt (ES-Module), gehostet über GitHub Pages (`main`-Branch).

## Ausbildungsberufe & Fächer

| Beruf | Fächer |
|---|---|
| ⚡ Elektroniker/in für Informations- und Systemtechnik | Politik (`politics`), Netzwerk/OSI (`network`) |
| 🩺 Medizinische/r Fachangestellte/r (MFA) | Verdauungsapparat, LF 9 (`digestion`) |

Über das Auswahlfeld im Menü bzw. die Chips auf der Startseite lässt sich ein Beruf wählen. Fächer, Training, Glossar, Werkzeuge, Lernplan und Fortschritt werden dann auf diesen Beruf gefiltert („Alle Berufe“ zeigt alles).

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Grundgerüst, Quellen & Hinweise im Footer |
| `css/style.css` | Design, Fach-Farbthemen (`body[data-subject=…]`), Diagramm-Klassen (`.dg-*`) |
| `js/content.js` | `subjects` (Level, Lernkarten, Prüfungsfragen) und `professions` (Berufe → Fächer) |
| `js/extras.js` | Pro Level: Diagramm, Merkhilfen, Fachbegriffe, typische Fehler, Aufgaben, Zusatztest, Werkzeug; außerdem Operatoren und Videos |
| `js/diagrams.js` | SVG-Grafiken (`renderDiagram(id)`), u. a. Organkarten mit Nummern (`ORGAN_MAPS`, `-blank`-Varianten zum Beschriften) |
| `js/app.js` | Router, Ansichten, Lernlogik, Werkzeuge (inkl. Sortierspiele `SORT_GAMES`) |
| `js/cloud.js` | Optionale Google-Anmeldung und Firestore-Sync |

## Neuen Beruf / neues Fach hinzufügen

1. **Fach** in `js/content.js` unter `subjects` anlegen (`title`, `icon`, `color`, `levels`, `exam` …). Jede `id` muss eindeutig sein.
2. **Beruf** in `professions` eintragen bzw. die Fach-ID bei einem bestehenden Beruf ergänzen.
3. **Extras** in `js/extras.js`: `levelExtras.<fach>` mit genau einem Eintrag pro Level und `videos.<fach>` (ein Array pro Level).
4. **Farbthema** in `css/style.css` für `theme-<fach>` (hell + dunkel) ergänzen.
5. **Grafiken** in `js/diagrams.js` hinzufügen und im Level per `diagram: "<id>"` referenzieren; Aufgaben können mit `diagram` eine Grafik (z. B. eine `-blank`-Version) anzeigen.
6. Optional ein **Sortierspiel** in `SORT_GAMES` (`js/app.js`) anlegen und im Level per `tool` verknüpfen.
7. Nach Änderungen die `?v=`-Versionen der Imports in `index.html`/`js/app.js` erhöhen, damit Browser keine alten Dateien aus dem Cache laden.

## Lokal starten

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Der Lernstand liegt im `localStorage` (Schlüssel `pruefungspilot-v2`); neue Fächer und Einstellungen werden beim Laden automatisch ergänzt.
