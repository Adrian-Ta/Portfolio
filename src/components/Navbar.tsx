import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../content/profile';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobilmenü: Fokus beim Öffnen auf den ersten Link, Esc schließt und gibt den Fokus
  // an den Menü-Knopf zurück. Wird das Fenster breit genug für das Desktop-Menü, schließt es.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    drawerRef.current?.querySelector('a')?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1080px)');
    const handleBreakpoint = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', handleBreakpoint);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', handleBreakpoint);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projekte', href: '#projects' },
    { label: 'Über mich', href: '#about' },
    { label: 'Laufbahn', href: '#experience' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand / Logo */}
        <a href="#hero" className="brand-logo" aria-label="Zur Startseite">
          <div className="logo-badge">{profile.initials}</div>
          <div className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Zu ${theme === 'light' ? 'dunklem' : 'hellem'} Design wechseln`}
            title={`Zu ${theme === 'light' ? 'dunklem' : 'hellem'} Design wechseln`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#contact" className="header-cta-btn">
            <span>Kontakt</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav id="mobile-menu" ref={drawerRef} className="mobile-nav" aria-label="Mobilmenü">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mobile-nav-link cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt aufnehmen
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
