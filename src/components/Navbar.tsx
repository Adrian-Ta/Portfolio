import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../content/profile';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Start', href: '#hero' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Über mich', href: '#about' },
    { label: 'Praxisfelder', href: '#services' },
    { label: 'Laufbahn', href: '#experience' },
    { label: 'Ausbildung', href: '#skills' },
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
            title={`Wechseln zu ${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#contact" className="header-cta-btn">
            <span>Kontakt</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobilmenü">
          <nav className="mobile-nav">
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
                  Projekt anfragen ➔
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
