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
| Seitentitel, Beschreibung für Google, Vorschau für LinkedIn | `index.html` (Vorschaubild: `public/og-image.jpg`, 1200 × 630 px) |
| Profilfoto | Bild nach `public/` legen, Pfad in `profile.ts` (`photo`) eintragen. Die kleinere AVIF-Version (`photoAvif`) neu erzeugen oder die Zeile entfernen. |

### Neues Projekt hinzufügen

1. Bild nach `public/projects/` legen, z. B. `mein-projekt.png` (Screenshot oder Diagramm).
2. In `src/content/projects.ts` einen Eintrag in die Liste `projects` setzen:

```ts
{
  id: 'mein-projekt',
  title: 'Mein Projekt',
  subtitle: 'Kurzer Untertitel',
  category: 'Lernprojekt',
  description: 'Ein Satz: Was ist das Projekt?',
  ausgangslage: 'Welches Problem gab es?',      // optional
  umsetzung: 'Wie bin ich vorgegangen?',        // optional
  ergebnis: 'Was ist herausgekommen?',          // optional
  image: '/projects/mein-projekt.png',          // optional
  imageAlt: 'Was ist auf dem Bild zu sehen?',
  tags: ['n8n', 'Automatisierung'],
  githubUrl: 'https://github.com/…',            // optional
  liveUrl: 'https://…',                         // optional
}
```

Das Projekt erscheint automatisch, in der Reihenfolge der Liste. Ausgangslage, Umsetzung und Ergebnis werden als Ablauf gezeigt. Ist die Liste leer, zeigt die Seite „Projekte folgen bald.“

In einem Kenntnisbereich in `skills.ts` verweist `projectId` auf ein Projekt (dessen `id`).

### Weitere Hinweise

- Ein Eintrag in der Laufbahn oder in einem Kenntnisbereich ist jeweils ein Objekt in der Liste. Reihenfolge in der Datei = Reihenfolge auf der Seite.
- Ein Social-Link mit leerer `url` in `profile.ts` wird nicht angezeigt.
- Die Datei `docs/design-referenz.md` beschreibt das Design nach dem Referenzvideo.
