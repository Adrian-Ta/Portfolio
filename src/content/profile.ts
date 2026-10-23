// Persönliche Angaben: hier einmal ändern, die ganze Seite übernimmt es.

export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  /** Anzeigename in Navbar, Hero und Footer */
  name: string;
  /** Vollständiger Name (Copyright im Footer) */
  fullName: string;
  /** Initialen für das Logo und als Ersatz, falls das Foto fehlt */
  initials: string;
  /** Rolle / Ausrichtung (unter dem Namen im Hero) */
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
  /** Inhalt des Bereichs „Über mich“: Überschrift und kurze Geschichte in Absätzen */
  about: {
    title: string;
    story: string[];
  };
}

export const profile: Profile = {
  name: 'Adrian Tajik',
  fullName: 'Adrian Tajik',
  initials: 'AT',
  role: 'Wirtschaftsinformatik-Student mit Fokus auf ERP, Prozesse und KI-Automatisierung',
  heroText:
    'Ich lerne ERP-Prozesse an Odoo, von Einkauf bis Rechnungswesen, baue Workflows mit n8n und beschäftige mich mit KI-Agenten und RAG. Das Fundament dafür: knapp zwei Jahre praktische Erfahrung im IT-Support.',
  footerText:
    'Wirtschaftsinformatikstudium, praktische IT-Erfahrung und kontinuierliches Lernen.',
  photo: '/adrian-portfolio-portrait-cutout.png',
  email: 'kontakt@adriantajik.dev',
  formAccessKey: '701022ce-b31d-4738-8dfb-2b734ac20ff1',
  location: 'Deutschland',
  availability: 'Offen für Werkstudentenstellen in ERP und Prozessmanagement',
  availabilityNote: 'Ich suche eine Werkstudentenstelle im Umfeld ERP, Prozessmanagement oder KI-Automatisierung und freue mich auch über fachlichen Austausch.',
  github: { label: 'GitHub', url: 'https://github.com/Adrian-Ta' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/adrian-tajik-5339b238a' },
  about: {
    title: 'Über mich',
    story: [
      'Mein beruflicher Weg begann bei KFC. Dort habe ich mich vom Mitarbeiter über den Assistant Manager bis zum Restaurantleiter entwickelt und mit jedem Schritt mehr Verantwortung für Team und Abläufe übernommen.',
      'Mein Interesse an IT hat mich zum Fachabitur und in die IT-Abteilung von BüchnerBarrella geführt. Dort habe ich von August 2023 bis Juni 2025 im First- und Second-Level-Support gearbeitet, Benutzer und Rechte in MS Active Directory verwaltet, Endgeräte eingerichtet und Probleme vor Ort und per Fernwartung gelöst.',
      'Heute studiere ich Wirtschaftsinformatik und verbinde beide Seiten: Ich will verstehen, wie Unternehmen ihre Prozesse in ERP-Systemen abbilden und wo sich Abläufe mit KI sinnvoll automatisieren lassen.',
      'Was ich mitbringe: schnelle Auffassungsgabe, systematische Fehlersuche und eine ruhige, lösungsorientierte Art im Umgang mit Anwenderinnen und Anwendern. Ich arbeite sorgfältig, selbstständig und zuverlässig.',
    ],
  },
};
