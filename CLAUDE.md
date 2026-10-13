# CLAUDE.md – Portfolio von Adrian

Persönliche Portfolio-Website (Wirtschaftsinformatik, Ziel: ERP/Odoo, Automatisierung). Sprache aller sichtbaren Texte: Deutsch. Entwickelt wird in VS Code.

## Stack und Befehle
- React 19, TypeScript, Vite, `lucide-react` für Icons, Linter: oxlint
- `npm run dev` – lokaler Entwicklungsserver
- `npm run build` – Typprüfung und Build (muss ohne Fehler laufen)
- `npm run lint` – Linter

## Aktuelle Struktur (Ist-Zustand)
- `src/App.tsx` setzt die Seite aus Komponenten zusammen: Navbar, Hero, TechMarquee, About, Services, Projects, Timeline, EducationSkills, Contact, Footer, FloatingDock. Dark/Light-Theme per `data-theme`.
- Alle Texte, Projekte und Links stehen fest im Komponentencode (z. B. `projectData` in `src/components/Projects.tsx`).
- Styles: Design-Variablen in `src/index.css`, Komponenten-Styles in `src/App.css` (ca. 2200 Zeilen).
- Bilder: `public/` (`avatar.jpg`, `public/projects/`).
- Ausführliche Design-Beschreibung (Referenzvideo): `docs/design-referenz.md`, nur bei Bedarf lesen.

## Hauptaufgabe: Struktur verbessern
Adrian will Inhalte später ohne Codeänderung pflegen (kein WordPress, kein CMS-Server). Umgesetzt wird **Option A: Inhalte in eigene Dateien auslagern**.

Zielstruktur:
```
src/content/
  profile.ts     Name, Kurzbeschreibung, Foto-Pfad, Social-Links, E-Mail
  projects.ts    Liste der Projekte
  timeline.ts    Laufbahn / Lebenslauf
  skills.ts      Skills und Bildung
  services.ts    Leistungen
```
Regeln dafür:
1. Komponenten lesen ihre Inhalte nur noch aus `src/content/`. Typen (z. B. `Project`) liegen neben den Daten.
2. `projects.ts` startet **leer**. Die Platzhalter-Projekte (Kanban, AI Document Assistant, Automations-Pipeline, Process Hub) werden entfernt, weil es sie nicht gibt. Bei leerer Liste zeigt der Bereich einen Hinweis wie „Projekte folgen bald", keine leeren Karten.
3. Ein neues Projekt = ein neuer Eintrag in `projects.ts` (Titel, Beschreibung, Bild, Tags, optional GitHub-/Live-Link). Es erscheint automatisch.
4. Foto wechseln = Datei `public/avatar.jpg` ersetzen. Der Pfad kommt aus `profile.ts`.
5. Platzhalter-Links (`https://github.com`, `https://linkedin.com`) und Texte wie „Adri" werden in `profile.ts` zentral gepflegt und mit Adrian geklärt, nicht erfunden.
6. Layout passt sich dem Inhalt an: Keine festen Höhen (`height`) bei Karten und Timeline-Einträgen, stattdessen `min-height`/Auto-Höhe. Weniger Text = kleineres Feld. Bei 0, 1 und vielen Einträgen muss die Seite gut aussehen.
7. `package.json`-Name `temp-app` in einen sinnvollen Namen ändern, README durch eine kurze Anleitung „Inhalte ändern" ersetzen.
8. `AGENTS.md` nach `docs/design-referenz.md` verschieben (`git mv`), nicht löschen.

## Arbeitsweise (verbindlich)
1. **Zuerst Branch anlegen**, bevor etwas geändert wird: `git checkout -b inhalte-auslagern`. Nie direkt auf `main` arbeiten.
2. Kleine Schritte, je Schritt ein Commit (z. B. erst `profile.ts`, dann `projects.ts`, dann Timeline).
3. Nach jedem Schritt `npm run build` und `npm run lint` ausführen und das Ergebnis im Browser prüfen.
4. Nichts mit `git reset --hard`, `git clean` oder Force-Push verwerfen, ohne vorher zu fragen.
5. Jede Änderung kurz auf Deutsch erklären, damit Adrian sie selbst nachvollziehen kann. Er lernt dabei.

## Was nicht verändert wird
Der Grundstil bleibt: helle, großzügige Oberfläche, violett-blaue Akzente, Punktraster im Hero, hängender Profil-Ausweis (`InteractiveBadge`), Dark/Light-Theme. Design-Verbesserungen nur auf ausdrücklichen Wunsch und in eigenen Commits.

## Später (nicht jetzt)
Optional ein Git-basiertes CMS (z. B. Decap CMS oder TinaCMS) obendrauf, das in dieselben Dateien in `src/content/` schreibt. Dafür darf der Umbau jetzt keine Sonderlösungen einführen.

## Design-Agents
Die Agents in `.claude/agents/` (UI Designer, UX Architect, UX Researcher u. a.) werden nur auf Anfrage genutzt. Reihenfolge: erst analysieren, dann umsetzen.
