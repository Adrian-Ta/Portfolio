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
| Name, Rolle, Kurztexte, E-Mail, Standort, GitHub-/LinkedIn-Link, Über-mich-Text | `src/content/profile.ts` |
| Projekte | `src/content/projects.ts` |
| Laufbahn / Lebenslauf | `src/content/timeline.ts` |
| Skills, Ausbildung, Lernfokus, Technologieband | `src/content/skills.ts` |
| Leistungen | `src/content/services.ts` |
| Profilfoto | Datei `public/avatar.jpg` ersetzen |

### Neues Projekt hinzufügen

1. Bild nach `public/projects/` legen, z. B. `mein-projekt.jpg`.
2. In `src/content/projects.ts` einen Eintrag in die Liste `projects` setzen:

```ts
{
  id: 'mein-projekt',
  title: 'Mein Projekt',
  subtitle: 'Kurzer Untertitel',
  category: 'Frontend',
  description: 'Was macht das Projekt?',
  image: '/projects/mein-projekt.jpg',
  tags: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/…', // optional
  liveUrl: 'https://…',              // optional
}
```

Die Karte erscheint automatisch. Ist die Liste leer, zeigt die Seite „Projekte folgen bald.“

### Weitere Hinweise

- Ein Eintrag in der Laufbahn, den Skills oder den Leistungen ist jeweils ein Objekt in der Liste. Reihenfolge in der Datei = Reihenfolge auf der Seite.
- Ein Social-Link mit leerer `url` in `profile.ts` wird nicht angezeigt.
- Die Datei `docs/design-referenz.md` beschreibt das Design nach dem Referenzvideo.
