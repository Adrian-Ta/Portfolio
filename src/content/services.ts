// Praxisfelder: Berufserfahrung, Studieninhalte und eigene Lernpraxis.

export interface Service {
  /** Icon-Name, siehe `serviceIcons` in src/components/Services.tsx */
  icon: 'support' | 'network' | 'code' | 'workflow';
  title: string;
  desc: string;
  tags: string[];
  context: string;
}

export const services: Service[] = [
  {
    icon: 'workflow',
    title: 'Prozesse, ERP & Automatisierung',
    desc: 'Prozessmodellierung mit SAP Signavio und Camunda im Studium, ERP-Grundlagen in Odoo (Einkauf, Lager, Verkauf, Rechnungswesen) und eigene Lernpraxis mit n8n, KI-Agenten und RAG.',
    tags: ['Odoo', 'SAP Signavio', 'n8n'],
    context: 'Studium & Lernpraxis',
  },
  {
    icon: 'code',
    title: 'Programmierung & Projekte',
    desc: 'Grundlagen und Studienpraxis in Java und Python. Im Fachabitur entwickelte ich im Team eine Java-Desktopanwendung für eine Bibliothek.',
    tags: ['Java', 'Python', 'Datenbanken'],
    context: 'Studium & Projekte',
  },
  {
    icon: 'support',
    title: 'IT-Support & Windows',
    desc: 'Berufliche Erfahrung im First- und Second-Level-Support, mit Benutzer- und Rechteverwaltung in MS Active Directory, Endgeräteeinrichtung, Updates und Troubleshooting.',
    tags: ['IT-Support', 'Active Directory', 'Windows'],
    context: 'Berufserfahrung',
  },
  {
    icon: 'network',
    title: 'Netzwerke & Server',
    desc: 'Eigenständige Lernpraxis mit Netzwerktechnik, Windows Server, DNS, DHCP und Virtualisierung mit VMware Workstation.',
    tags: ['Netzwerke', 'DNS / DHCP', 'VMware'],
    context: 'Lernpraxis',
  },
];
