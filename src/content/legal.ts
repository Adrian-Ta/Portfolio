// Impressum und Datenschutzerklärung (Seite /rechtliches/).
//
// ENTWURF – keine Rechtsberatung. Bitte vor dem Veröffentlichen prüfen (lassen).
//
// Solange `name`, `street` oder `postalCodeCity` leer sind, zeigt die Fußzeile keine Links
// zu Impressum und Datenschutz, und die Seite /rechtliches/ meldet, dass die Angaben fehlen.
import { profile } from './profile';

export interface LegalInfo {
  /** Vor- und Nachname, wie im Impressum anzugeben */
  name: string;
  /** Straße und Hausnummer (ladungsfähige Anschrift, kein Postfach) */
  street: string;
  /** Postleitzahl und Ort */
  postalCodeCity: string;
  email: string;
  /** Optional, z. B. '+49 …' */
  phone: string;
  /** Stand der Datenschutzerklärung */
  lastUpdated: string;
}

export const legal: LegalInfo = {
  name: 'Adrian Tajik',
  street: 'Musterstraße 90',
  postalCodeCity: '47051 Duisburg',
  email: profile.email,
  phone: '+49 176 363 93906',
  lastUpdated: 'Oktober 2026',
};

/** true, sobald alle Pflichtangaben ausgefüllt sind */
export const legalComplete = Boolean(legal.name && legal.street && legal.postalCodeCity);

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

/** Datenschutzerklärung: beschreibt, was diese Seite tatsächlich tut (Stand des Codes). */
export const privacySections: LegalSection[] = [
  {
    title: 'Verantwortlicher',
    paragraphs: [
      'Verantwortlich für die Datenverarbeitung auf dieser Website ist die im Impressum genannte Person.',
    ],
  },
  {
    title: 'Hosting über GitHub Pages',
    paragraphs: [
      'Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Seite verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, um die Seite auszuliefern und die Sicherheit des Dienstes zu gewährleisten.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung). Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von Standardvertragsklauseln. Weitere Informationen: GitHub Privacy Statement (docs.github.com/site-policy).',
    ],
  },
  {
    title: 'Kontaktformular',
    paragraphs: [
      'Wenn Sie das Kontaktformular nutzen, werden Ihr Name, Ihre E-Mail-Adresse, der Betreff und Ihre Nachricht über den Dienst Web3Forms (web3forms.com) an mich per E-Mail weitergeleitet. Dabei kann eine Verarbeitung außerhalb der EU stattfinden.',
      'Die Daten verwende ich ausschließlich, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf ein Beschäftigungsverhältnis oder eine Zusammenarbeit zielt, sonst Art. 6 Abs. 1 lit. f DSGVO. Ich lösche die Daten, sobald die Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten bestehen.',
    ],
  },
  {
    title: 'Kontakt per E-Mail',
    paragraphs: [
      'Schreiben Sie mir direkt per E-Mail, verarbeite ich Ihre Angaben ebenfalls nur zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO).',
    ],
  },
  {
    title: 'Schriftarten',
    paragraphs: [
      'Die Schriftart dieser Website ist auf dem eigenen Server gespeichert. Beim Aufruf wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern hergestellt.',
    ],
  },
  {
    title: 'Speicherung im Browser',
    paragraphs: [
      'Diese Website setzt keine Cookies und nutzt keine Analyse- oder Tracking-Dienste. Wählen Sie das helle oder dunkle Design, wird diese Einstellung im lokalen Speicher Ihres Browsers abgelegt (Eintrag „portfolio-theme“). Das ist für die von Ihnen gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG); die Einstellung verlässt Ihr Gerät nicht.',
    ],
  },
  {
    title: 'Links zu anderen Websites',
    paragraphs: [
      'Diese Website enthält Links zu LinkedIn und GitHub. Erst wenn Sie einen solchen Link anklicken, werden Daten an den jeweiligen Anbieter übertragen; dann gelten dessen Datenschutzbestimmungen.',
    ],
  },
  {
    title: 'Ihre Rechte',
    paragraphs: [
      'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21). Eine formlose Nachricht an die im Impressum genannte E-Mail-Adresse genügt.',
      'Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).',
    ],
  },
];
