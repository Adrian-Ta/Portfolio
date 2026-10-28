import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Startwert setzt schon das kleine Skript in index.html (vor dem ersten Zeichnen)
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="portfolio-app">
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects theme={theme} />
        <About />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
