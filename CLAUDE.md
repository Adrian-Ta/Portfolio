# CLAUDE.md – Portfolio von Adrian

Persönliche Portfolio-Website (Wirtschaftsinformatik, Ziel: ERP/Odoo, Automatisierung). Sprache aller sichtbaren Texte: Deutsch. Entwickelt wird in VS Code.

## Stack und Befehle
- React 19, TypeScript, Vite, `lucide-react` für Icons, Linter: oxlint
- `npm run dev` – lokaler Entwicklungsserver
- `npm run build` – Typprüfung und Build (muss ohne Fehler laufen)
- `npm run lint` – Linter

## Aktuelle Struktur (Ist-Zustand)
- `src/App.tsx` setzt die Seite aus Komponenten zusammen, in dieser Reihenfolge: Navbar, Hero, Projects, About, Timeline, Contact, Footer. Dark/Light-Theme per `data-theme`.
- Alle sichtbaren Inhalte stehen in `src/content/` (siehe unten), nicht im Komponentencode.
- Styles: Design-Variablen in `src/index.css`, Komponenten-Styles in `src/App.css` (ca. 1400 Zeilen).
- Bilder: `public/` (Profilfoto `adrian-portfolio-portrait-cutout.png` plus kleinere `.avif`-Version, Projektbilder/-diagramme in `public/projects/`).
- Ausführliche Design-Beschreibung (Referenzvideo): `docs/design-referenz.md`, nur bei Bedarf lesen.

## Inhalte ohne Codeänderung pflegen
Adrian pflegt Inhalte in eigenen Dateien (kein WordPress, kein CMS-Server). Die Anleitung für ihn steht in `README.md`.

```
src/content/
  profile.ts     Name, Rolle, Hero-Text, Foto-Pfade, Social-Links, E-Mail, Über-mich-Geschichte
  projects.ts    Projekte (Ausgangslage → Umsetzung → Ergebnis), Überschrift, Text bei leerer Liste
  timeline.ts    Laufbahn inkl. Studium und Fachabitur
  skills.ts      Kenntnisse nach Bereich mit Werkzeugen (Logos), Lernfokus
  techLogos.ts   Logos der Werkzeuge (Simple Icons CC0, Devicon MIT)
```
Regeln dafür:
1. Komponenten lesen ihre Inhalte nur aus `src/content/`. Typen (z. B. `Project`) liegen neben den Daten.
2. Ein neues Projekt = ein neuer Eintrag in `projects.ts`. Es erscheint automatisch. Bei leerer Liste zeigt der Bereich „Projekte folgen bald“, keine leeren Felder.
3. Foto wechseln = Bild nach `public/` legen, Pfad in `profile.ts` (`photo`) eintragen, die AVIF-Version (`photoAvif`) neu erzeugen oder die Zeile entfernen.
4. Nichts erfinden: Links, Daten, Projektergebnisse und Erfahrungen nur nach Angaben von Adrian. Demo-Texte im Code mit `// DEMO-TEXT` markieren (betrifft aktuell „Jackie“ und die Bibliotheks-App).
5. Layout passt sich dem Inhalt an: keine festen Höhen, bei 0, 1 und vielen Einträgen muss die Seite gut aussehen.

## Arbeitsweise (verbindlich)
1. **Zuerst Branch anlegen**, bevor etwas geändert wird (`git checkout -b <thema>`). Nie direkt auf `main` arbeiten.
2. Kleine Schritte, je Schritt ein Commit.
3. Nach jedem Schritt `npm run build` und `npm run lint` ausführen und das Ergebnis im Browser prüfen.
4. Nichts mit `git reset --hard`, `git clean` oder Force-Push verwerfen, ohne vorher zu fragen.
5. Jede Änderung kurz auf Deutsch erklären, damit Adrian sie selbst nachvollziehen kann. Er lernt dabei.

## Was nicht verändert wird
Der Grundstil bleibt: helle, großzügige Oberfläche, ein ruhiger Teal-Akzent (kein Violett-Blau-Verlauf), Punktraster im Hero, großes, freigestelltes Profilfoto rechts im Hero (`ProfilePhoto`, Pfade aus `profile.ts`), Dark/Light-Theme. Der frühere hängende Profil-Ausweis wurde bewusst entfernt und darf nicht wieder eingebaut werden. Design-Verbesserungen nur auf ausdrücklichen Wunsch und in eigenen Commits.

Designrichtung „Prozess statt Kacheln“ (Redesign Oktober 2026):
- Projekte stehen direkt nach dem Hero und werden als Ablauf Ausgangslage → Umsetzung → Ergebnis gezeigt.
- Abschnittsköpfe einheitlich links: nur Überschrift und ein Satz, keine Pille/Kicker darüber, keine zweifarbige Überschrift.
- Gliederung durch Typografie, Abstand und feine Linien. Karten mit Rahmen und Schatten nur, wo etwas anklickbar ist; nicht klickbare Elemente heben sich beim Hover nicht an.
- Keine Monospace-Schrift als „Technik-Look“, keine dekorativen Glow- oder Endlos-Animationen.

Navigation: Das Desktop-Menü (`.desktop-nav`) erscheint erst ab 1080 px Breite, darunter gilt das Hamburger-Menü. Menü-Links und Logo-Text dürfen nicht umbrechen (`white-space: nowrap`). Diese Breakpoints nicht ohne Rücksprache ändern.

## Später (nicht jetzt)
Optional ein Git-basiertes CMS (z. B. Decap CMS oder TinaCMS) obendrauf, das in dieselben Dateien in `src/content/` schreibt. Dafür keine Sonderlösungen einführen.

## Design-Agents und Skills
Die Agents in `.claude/agents/` (UI Designer, UX Architect, UX Researcher u. a.) werden nur auf Anfrage genutzt. Reihenfolge: erst analysieren, dann umsetzen.

Der Impeccable-Skill (`.claude/skills/impeccable/`, Aufruf `/impeccable <befehl>`) wird ebenfalls nur auf Anfrage genutzt. Analyseberichte legt er in `.impeccable/` ab. `.claude/` ist vom Linter ausgenommen.
