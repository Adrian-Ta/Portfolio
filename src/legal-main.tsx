import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { LegalPage } from './components/LegalPage.tsx'

// Einstieg der Seite /rechtliches/ (Impressum und Datenschutz)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalPage />
  </StrictMode>,
)
