# Portfolio von Adrian

React 19, TypeScript und Vite. Alle Texte der Seite stehen in `src/content/`, nicht im Komponentencode.

## Starten

```bash
npm install
npm run dev      # lokaler Entwicklungsserver
npm run build    # Typprüfung und Build
npm run lint     # Linter
```

## Inhalte ändern

| Was | Wo |
| --- | --- |
| Name, Rolle, Kurztexte, E-Mail, Standort, GitHub-/LinkedIn-Link, Über-mich-Geschichte | `src/content/profile.ts` |
| Projekte (inkl. Überschrift und Text bei leerer Liste) | `src/content/projects.ts` |
| Laufbahn mit Ausbildung | `src/content/timeline.ts` |
| Kenntnisse nach Bereich mit Werkzeugen, Lernfokus | `src/content/skills.ts` |
| Logos der Werkzeuge | `src/content/techLogos.ts` |
| Impressum und Datenschutz (Seite `/rechtliches/`) | `src/content/legal.ts`: Name und Anschrift eintragen, erst dann erscheinen die Links in der Fußzeile. Der Text ist ein Entwurf, bitte prüfen. |
| Seitentitel, Beschreibung für Google, Vorschau für LinkedIn | `index.html` (Vorschaubild: `public/og-image.jpg`, 1200 × 630 px) |
| Profilfoto | Bild nach `public/` legen, Pfad in `profile.ts` (`photo`) eintragen. Die kleinere AVIF-Version (`photoAvif`) neu erzeugen oder die Zeile entfernen. |

### Neues Projekt hinzufügen

1. Bild nach `public/projects/` legen, z. B. `mein-projekt.png` (Screenshot oder Diagramm, Format 16:9, z. B. 960 × 540).
2. In `src/content/projects.ts` einen Eintrag in die Liste `projects` setzen:

```ts
{
  id: 'mein-projekt',
  title: 'Mein Projekt',
  description: 'Ein bis zwei Sätze: Was ist das Projekt?',
  status: 'Konzept',                            // optional: 'Konzept' oder 'In Arbeit', bei fertigen Projekten weglassen
  image: '/projects/mein-projekt.png',          // optional
  imageDark: '/projects/mein-projekt-dark.png', // optional, Version für den Dunkelmodus
  imageAlt: 'Was ist auf dem Bild zu sehen?',
  tags: ['n8n', 'Automatisierung'],             // höchstens drei bis vier
  githubUrl: 'https://github.com/…',            // optional
  liveUrl: 'https://…',                         // optional
}
```

Das Projekt erscheint automatisch als Karte, in der Reihenfolge der Liste (Handy: eine Spalte, sonst zwei). Hat es einen `status`, steht dieser sichtbar neben dem Titel. Ist ein Konzept fertig, die Zeile `status` löschen und die Konzept-Skizze durch einen echten Screenshot ersetzen. Ist die Liste leer, zeigt die Seite „Projekte folgen bald.“

Die optionalen Felder `ausgangslage`, `umsetzung` und `ergebnis` sind für spätere Detailseiten gedacht und erscheinen aktuell nicht auf der Karte.

In einem Kenntnisbereich in `skills.ts` verweist `projectId` auf ein Projekt (dessen `id`).

### Weitere Hinweise

- Ein Eintrag in der Laufbahn oder in einem Kenntnisbereich ist jeweils ein Objekt in der Liste. Reihenfolge in der Datei = Reihenfolge auf der Seite.
- Ein Social-Link mit leerer `url` in `profile.ts` wird nicht angezeigt.
- Die Datei `docs/design-referenz.md` beschreibt das Design nach dem Referenzvideo.
