// Persönliche Angaben: hier einmal ändern, die ganze Seite übernimmt es.

export interface SocialLink {
  label: string;
  url: string;
}

export interface FocusArea {
  // Name des Icons, siehe `focusIcons` in src/components/About.tsx
  icon: 'workflow' | 'layers' | 'terminal' | 'network';
  title: string;
  desc: string;
}

export interface Profile {
  /** Anzeigename in Navbar, Hero, Footer und Ausweis */
  name: string;
  /** Vollständiger Name (Copyright im Footer) */
  fullName: string;
  /** Initialen für Logo und Ausweis-Ersatz, falls das Foto fehlt */
  initials: string;
  /** Rolle / Ausrichtung (unter dem Namen im Ausweis) */
  role: string;
  /** Kurztext im Hero */
  heroText: string;
  /** Kurztext im Footer */
  footerText: string;
  /** Pfad zum Foto relativ zu `public/` – Datei dort ersetzen = Foto wechseln */
  photo: string;
  email: string;
  /**
   * Access Key von web3forms.com: Nachrichten aus dem Kontaktformular gehen an die dort
   * hinterlegte E-Mail-Adresse. Der Key ist nicht geheim, er kann nur Mails an dich senden.
   */
  formAccessKey: string;
  location: string;
  /** Text zur Verfügbarkeit (Hero-Pill und Kontaktbereich) */
  availability: string;
  availabilityNote: string;
  /** Social-Links. Eintrag mit leerer `url` wird nicht angezeigt. */
  github: SocialLink;
  linkedin: SocialLink;
  /** Inhalt des Bereichs „Über mich" */
  about: {
    lead: string;
    body: string[];
    principles: string[];
    focusAreas: FocusArea[];
  };
}

export const profile: Profile = {
  name: 'Adrian Tajik',
  fullName: 'Adrian Tajik',
  initials: 'AT',
  role: 'Student der Wirtschaftsinformatik',
  heroText:
    'Wirtschaftsinformatikstudent mit praktischer Erfahrung im IT-Support. Ich beschäftige mich mit Netzwerken, Prozessmodellierung und der Automatisierung digitaler Abläufe.',
  footerText:
    'Wirtschaftsinformatikstudium, praktische IT-Erfahrung und kontinuierliches Lernen.',
  photo: '/avatar.jpg',
  email: 'kontakt@adriantajik.dev',
  formAccessKey: '701022ce-b31d-4738-8dfb-2b734ac20ff1',
  location: 'Deutschland',
  availability: 'Offen für Praktika und Werkstudententätigkeiten',
  availabilityNote: 'Ich freue mich über passende Praktikums- und Werkstudentenangebote sowie fachlichen Austausch.',
  github: { label: 'GitHub', url: 'https://github.com/Adrian-Ta' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/adrian-tajik-5339b238a' },
  about: {
    lead: 'Mein beruflicher Weg begann bei KFC. Dort entwickelte ich mich vom Mitarbeiter über den Assistant Manager bis zum Restaurantleiter weiter und übernahm zunehmend Verantwortung. Mein langjähriges Interesse an IT und der Wunsch nach einem akademischen Weg führten mich dazu, das Fachabitur nachzuholen und ein Studium der Wirtschaftsinformatik aufzunehmen.',
    body: [
      'Schon vor der Fachoberschule beschäftigte ich mich eigenständig mit Netzwerktechnik und Lerninhalten rund um CompTIA Network+. Dabei sammelte ich praktische Erfahrung mit Windows Server, Active Directory, DNS, DHCP und Virtualisierung mit VMware Workstation.',
      'Von August 2023 bis Juni 2025 arbeitete ich in der IT-Abteilung von BüchnerBarrella. Zu meinen Aufgaben gehörten First- und Second-Level-Support, Benutzer- und Rechteverwaltung in MS Active Directory, die Einrichtung von Endgeräten, Softwareupdates und Troubleshooting vor Ort und per Fernwartung.',
      'Während des Fachabiturs entwickelte ich im Team eine Java-Desktopanwendung für eine Bibliothek. Im Studium vertiefe ich Java und Python, arbeite mit Datenbanken und beschäftige mich mit Prozessmodellierung in SAP Signavio und Camunda. Eigene Lernprojekte und Themen wie n8n, KI-Agenten, Git/GitHub, Docker-Grundlagen und Power BI ergänzen meinen Studienalltag.',
    ],
    principles: [
      'Schnelle Auffassungsgabe & systematische Fehlersuche',
      'Sorgfältige, selbstständige und zuverlässige Arbeitsweise',
      'Freundliche und lösungsorientierte Unterstützung von Anwenderinnen und Anwendern',
    ],
    focusAreas: [
      {
        icon: 'network',
        title: 'IT-Support & Windows',
        desc: 'Berufliche Erfahrung mit First- und Second-Level-Support, Active Directory, Benutzerrechten, Endgeräten und Troubleshooting.',
      },
      {
        icon: 'workflow',
        title: 'Netzwerke & Server',
        desc: 'Eigenständige Lernpraxis mit Netzwerktechnik, Windows Server, DNS, DHCP und VMware Workstation.',
      },
      {
        icon: 'layers',
        title: 'Studium & Entwicklung',
        desc: 'Grundlagen und Projektpraxis in Java und Python, Datenbanken sowie eine Java-Desktopanwendung im Fachabitur.',
      },
      {
        icon: 'terminal',
        title: 'Prozesse & Automatisierung',
        desc: 'Studieninhalte zu SAP Signavio und Camunda sowie eigene Lernpraxis mit n8n, KI-Agenten und Power BI.',
      },
    ],
  },
};
