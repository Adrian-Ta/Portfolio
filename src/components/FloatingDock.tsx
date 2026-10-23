import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, Calendar, Mail } from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const dockItems: DockItem[] = [
  { id: 'hero', label: 'Start', href: '#hero', icon: <Home size={18} /> },
  { id: 'projects', label: 'Projekte', href: '#projects', icon: <FolderGit2 size={18} /> },
  { id: 'about', label: 'Über mich', href: '#about', icon: <User size={18} /> },
  { id: 'experience', label: 'Laufbahn', href: '#experience', icon: <Calendar size={18} /> },
  { id: 'contact', label: 'Kontakt', href: '#contact', icon: <Mail size={18} /> },
];

export const FloatingDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down slightly
      setIsVisible(window.scrollY > 150);

      const sectionIds = dockItems.map((item) => item.id);
      const scrollPos = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="floating-dock-wrapper" aria-label="Schnellnavigation">
      <div className="floating-dock-pill">
        {dockItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`dock-item-btn ${isActive ? 'active' : ''}`}
              aria-label={item.label}
              title={item.label}
            >
              <span className="dock-icon">{item.icon}</span>
              <span className="dock-tooltip">{item.label}</span>
              {isActive && <span className="dock-active-dot" aria-hidden="true" />}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
