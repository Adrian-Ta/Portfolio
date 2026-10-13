> **Veraltet:** Dieses Dokument beschreibt den ursprünglichen Bauauftrag nach dem Referenzvideo. Der hängende Profil-Ausweis und der Violett-Blau-Verlauf wurden bewusst entfernt (jetzt: Teal-Akzent, großes Profilfoto). Nur als Hintergrund lesen, nicht nachbauen. Maßgeblich ist die CLAUDE.md.

# Portfolio: Oberfläche nach der Video-Referenz

## Auftrag und Prioritäten

Baue beziehungsweise überarbeite Adris Portfolio so, dass Komposition, Gestaltung und Interaktionen der Website im Referenzvideo möglichst nahekommen. Ziel ist eine helle, großzügige Portfolio-Oberfläche mit violett-blauen Akzenten und einem interaktiven, an einem Band hängenden Profil-Ausweis im Hero.

Diese Datei beschreibt das Design und den Arbeitsablauf. Sie installiert keine Skills, MCP-Server oder Bibliotheken. Verwende bereits verfügbare Werkzeuge, wenn sie die Aufgabe erfüllen.

Priorität: 1. Referenztreue und Proportionen, 2. Ausweis-Interaktion, 3. Lesbarkeit und mobile Nutzbarkeit, 4. ergänzende Effekte.

## Referenz richtig lesen

- Quelle: `ScreenRecording_10-03-2026 12-25-53_1.mp4`, ungefähr 36 Sekunden lang.
- Erwarteter Ort im Projekt: `references/ScreenRecording_10-03-2026 12-25-53_1.mp4`. Falls das Video anderswo vorhanden ist, nutze den tatsächlichen Pfad.
- Die Aufnahme zeigt eine Desktop-Website innerhalb eines Instagram-Reels auf einem Smartphone. Sie ist **keine Vorlage für die mobile Anordnung der Website**.
- Baue ausschließlich die Website nach. Instagram-Herz, Kommentar-Icons, Untertitel, blauer Reel-Hintergrund, Telefonstatusleiste und Browserrahmen gehören nicht zum Design.
- Das Video enthält Wiederholungen, Ausschnittwechsel und Zooms. Übernimm daraus keine künstlichen Website-Übergänge.
- Die nachfolgenden Größen, Farben und Zeiten sind Startwerte, keine aus dem Quellcode ermittelten Originalwerte. Gleiche sie anhand der sichtbaren Referenz an.
- Exakte Schriftart, Originalgrafiken und verwendete Animationsbibliothek sind aus dem Video nicht sicher bestimmbar. Behaupte keine exakte Rekonstruktion, wenn diese Assets fehlen.
- Falls du das Video nicht öffnen kannst, arbeite nach dieser Beschreibung und kennzeichne beim Abschluss, dass kein unmittelbarer Videovergleich möglich war.

## Sichtbare Gestaltung

| Element | Umsetzung |
| --- | --- |
| Grundfläche | Weiß bis sehr helles Grau; viel freier Raum |
| Hero-Hintergrund | Regelmäßiges, sehr dezentes graues Punktraster |
| Überschriften | Große, kräftige, moderne Sans-Serif; ausgewählte Wörter mit Violett-Blau-Cyan-Verlauf |
| Navigation oben | Breite schwebende, abgerundete Leiste; kleines Markenfeld links, Links mittig, Theme-Toggle rechts |
| Hero | Einleitung und Name links; hängender Profil-Ausweis rechts |
| Hauptbutton | Schwarze, abgerundete Pill mit weißer Beschriftung und Pfeil |
| Zweitbutton | Helle Pill mit feiner Kontur und Download-Icon |
| Profil-Ausweis | Weißer Ausweis mit Verlauf im Kopf, rundem Foto, Namensfeld, kleinen Informationsfeldern, grünem Status und Barcode-Optik |
| Technologieband | Horizontale Reihe kleiner Logo-Pills am unteren Rand des Hero |
| Inhaltskarten | Feine graue Kontur, moderate Rundung, zurückhaltender Schatten |
| Projekte | Große Bildkarten in einem Raster; Titel im unteren Bildbereich |
| Laufbahn | Mittige vertikale Zeitlinie mit violetter Linie und leuchtenden Knoten; Karten abwechselnd links und rechts |
| Cursor | Im Video auffälliger dunkler, pfeilförmiger Cursor mit leichter violetter Schattenwirkung |
| Zusätzliche Navigation | Kleine schwebende Icon-Pill im unteren Bereich der Ansicht |
| Dunkler Modus | Im Video sichtbar; sehr dunkle Flächen und helle Schrift, Akzentverlauf bleibt erhalten |

## Layout und Design-Tokens

Lege Farben, Abstände, Radien und Schatten zentral als CSS-Variablen oder im vorhandenen Design-System ab. Vermeide verteilte, widersprüchliche Einzelwerte.

Startwerte für den hellen Modus:

```css
:root {
  --portfolio-bg: #fcfcfd;
  --portfolio-surface: #ffffff;
  --portfolio-text: #111114;
  --portfolio-muted: #666670;
  --portfolio-border: #e8e8ee;
  --portfolio-dot: #d7d7df;
  --portfolio-purple: #9029ff;
  --portfolio-blue: #4555ff;
  --portfolio-cyan: #08b8e8;
  --portfolio-success: #22c781;
  --portfolio-accent: linear-gradient(100deg, #9029ff, #4555ff 58%, #08b8e8);
  --portfolio-card-radius: 18px;
  --portfolio-pill-radius: 999px;
  --portfolio-shadow: 0 8px 28px rgb(20 20 40 / 7%);
  --portfolio-badge-shadow: 0 20px 42px rgb(20 20 40 / 18%);
}
```

- Desktop-Inhaltsbreite zunächst 1120–1240 px, horizontal zentriert.
- Seitenabstand 24–40 px auf Desktop, 16–24 px auf Smartphone.
- Abschnittsabstände ungefähr 88–128 px auf Desktop und 56–80 px auf Smartphone.
- Hero als Zweispaltenlayout, ungefähr 52 % Text und 48 % Ausweis-Fläche.
- Hero-Inhalt ungefähr 520–640 px hoch; an tatsächliche Headerhöhe und Referenz anpassen. Die Technologie-Pills sollen beim ersten Desktop-Blick möglichst sichtbar sein.
- Hero-Titel etwa `clamp(44px, 5.5vw, 80px)`, Gewicht 700–800, Zeilenhöhe 1.05–1.12, leicht negatives Letter-Spacing.
- Abschnittstitel ungefähr 30–44 px, Text ungefähr 15–18 px mit ruhiger Zeilenhöhe.
- Nutze zuerst die vorhandene passende Sans-Serif. Falls keine vorhanden ist, wähle eine schlichte, Inter-ähnliche Schrift. Die genaue Referenzschrift ist unbekannt.
- Hero-Punktraster als CSS-`radial-gradient`, anfänglich 16–20 px Rasterabstand und Punkte von ungefähr 1 px. Es muss im Hintergrund bleiben.
- Der Text ist überwiegend linksbündig. Verwende zentrierte Überschriften dort, wo sie die Referenz zeigt, etwa bei Leistungen und Testimonials.

## Aufbau der Seite

### 1. Header

- Links kleines abgerundetes Initialen-Symbol, daneben Name und kleine Portfolio-Beschriftung.
- Desktop-Links mittig: Start, Über mich, Ausbildung, Erfahrung, Projekte. Sprache an die bestehende Website anpassen.
- Rechts kleiner Theme-Toggle mit Sonne/Mond.
- Helle, leicht transparente Fläche, feine Kontur, weicher Schatten. Header bleibt beim Scrollen erreichbar, ohne Inhalte zu verdecken.
- Mobil kompakter Header mit zugänglichem Menü; keine gequetschte Desktop-Linkreihe.

### 2. Hero

Linke Seite in dieser Reihenfolge:

1. Kleine Status-Pill mit grünem Punkt, sofern die Verfügbarkeit inhaltlich stimmt.
2. Kurze Begrüßung als schwarze Titelzeile, zum Beispiel „Hi, ich bin“.
3. „Adri“ beziehungsweise der vorhandene bestätigte Name als dominante Verlauf-Zeile.
4. Zwei bis drei kurze Textzeilen zur tatsächlichen Ausrichtung: Wirtschaftsinformatik, IT und Automatisierung; keine erfundene Senior-Rolle.
5. Primärbutton „Projekte ansehen“ und sekundär „Lebenslauf“ nur bei vorhandener Datei.
6. Kleine Social-Icons für tatsächlich vorhandene Profile.

Rechte Seite: interaktiver Profil-Ausweis. Er ist das zentrale visuelle Objekt der Website und muss deutlich größer wirken als normale Inhaltskarten.

### 3. Profil-Ausweis und Band

**Aussehen:**

- Hochkant, ungefähr 240–290 px breit und 330–400 px hoch auf Desktop; nach Referenzproportionen anpassen.
- Weißer Körper mit abgerundeten Ecken, feiner Kontur und räumlichem Schatten.
- Oberes Viertel bis Drittel: Violett-Weiß-Dunkel-Verlauf mit schräger Lichtfläche, ähnlich einer glänzenden Kunststoffkarte.
- Rundes Profilfoto mittig im oberen Bereich. Vorhandenes Foto verwenden; fehlt es, neutrale Initialen als klar erkennbaren Ersatz nutzen.
- Darunter Name, tatsächliche Rolle und eine feine Trennlinie.
- Kompakte Informationsfelder in zwei Spalten, zum Beispiel Schwerpunkt, Standort und Status. Nur bestätigte Angaben einsetzen.
- Unten Barcode-ähnliche Striche als dekoratives Element, ohne persönliche Identifikationsnummern zu erfinden. Für Screenreader dekorativ ausblenden.
- Schwarzes schmales Band mit sichtbarem Verbindungsstück oben; feste Aufhängung oberhalb der Karte innerhalb des Hero.
- Kleiner Hinweis in der Nähe: „Zieh die Karte“ beziehungsweise ein Hinweis auf die wirklich implementierte Interaktion.

**Verhalten:**

- Das Video zeigt eine Karte, die beim Ziehen stark kippt, räumlich rotiert und um die Aufhängung schwingt. Eine gewöhnliche Hover-Karte allein erfüllt diese Referenz nicht.
- Pointer-Drag mit Pointer-Capture: Die Karte folgt der Bewegung, das Band bleibt an einem festen Anker befestigt.
- Beim Loslassen schwingt die Karte gedämpft zurück und kommt zur Ruhe. Kein endloses hektisches Wackeln.
- Ausweis, Verbindungsstück und Band müssen zusammenhängend reagieren; kein scheinbar abgerissener oder unverbundener Ausweis.
- Begrenze die Bewegung auf die Hero-Fläche. Die Karte darf den Text und die Navigation im Ruhezustand nicht verdecken.
- Räumliche Umsetzung je nach Projekt: vorhandene 3D-Infrastruktur nutzen; bei Bedarf sind ein Canvas mit React Three Fiber und eine Physiklösung wie Rapier ein möglicher Ansatz. Das ist eine Implementierungsoption, keine Feststellung über die Originalwebsite.
- Für eine erste Vorschau ist eine CSS-/Motion-Näherung mit Perspektive, Federbewegung und synchronisiertem Band zulässig. Bezeichne sie als Näherung, wenn sie das echte Pendelverhalten nicht erreicht.
- Ohne WebGL und bei reduzierter Bewegung bleibt eine gestaltete statische Karte sichtbar.
- Auf Touch-Geräten darf vertikales Scrollen außerhalb der bewusst begrenzten Drag-Fläche ungestört funktionieren. Karte nicht zur Voraussetzung für Navigation oder Inhalte machen.

### 4. Technologieband

- Kleine, helle Pills mit Logo und Name in einer waagerechten Reihe, jeweils feine Kontur und viel Abstand.
- Nur Technologien aus Adris bestätigtem Profil beziehungsweise vorhandenen Projektinhalten zeigen. Nicht die Skill-Liste der Person aus dem Video übernehmen.
- Bei Laufband-Animation langsam und nahtlos bewegen, bei Hover/Fokus pausieren, bei reduzierter Bewegung statisch anzeigen.
- Logos weder verzerren noch durch wahllos bunte Emoji ersetzen.

### 5. Über mich und Leistungen

- Zweispaltiger Abschnitt: links kurze Vorstellung mit teilweise farbigem Titel, rechts vier kleine Kennzahlen-Karten in einem 2×2-Raster, **nur falls belegbare Kennzahlen vorhanden sind**.
- Fehlen echte Zahlen, dort vier sachliche Fokus-Karten verwenden, etwa Wirtschaftsinformatik, Prozesse, Entwicklung und Automatisierung. Keine erfundenen Erfahrungsjahre oder Kundenanzahlen.
- Danach mehrere schlichte Leistungskarten mit kleinem Icon, Titel und knappem Text; im Video unter einer zentrierten Überschrift sichtbar.

### 6. Projekte

- Überschrift links, einzelne Wörter im Akzentverlauf; darunter kurzer Einführungssatz.
- Desktop: zwei Spalten großer Karten; unterschiedlich hohe Karten nur einsetzen, wenn das den Referenzproportionen hilft. Mobil eine Spalte.
- Ein echtes Projektbild dominiert die Karte. Unten ein leichter dunkler Verlauf zur Lesbarkeit, darauf Titel und knappe Beschreibung.
- Kleine klare Link-/Pfeilaktion. Hover mit minimalem Bildzoom und leichter Kartenanhebung.
- Projektbilder laden ohne Layoutsprung. Keine erfundenen Referenzkunden, Ergebnisse oder Projekt-Screenshots als echte Arbeit ausgeben.

### 7. Erfahrung / Laufbahn

- Zentrierter Abschnittstitel und knapper Einleitungstext.
- Auf Desktop mittige vertikale violette Linie mit dezenten leuchtenden Punkten. Helle Karten links und rechts versetzt.
- Karten enthalten Zeitraum, echte Rolle beziehungsweise Tätigkeit und wenige Stichpunkte.
- Mobil Linie links und Karten rechts, ohne winzige Schrift oder Überlagerung.
- Wenn berufliche Stationen fehlen, reale Lern- und Projektstationen darstellen und entsprechend benennen.

### 8. Ausbildung und Kompetenzen

- Ausbildung: zwei helle Karten nebeneinander, sofern entsprechende echte Inhalte vorliegen; kleine Icons und Status-Pill, knappe Stichpunkte.
- Kompetenzen: klare Gruppen. Das Video zeigt links Fortschrittsbalken und rechts farbige Soft-Skill-Pills sowie eine kleine Lernkarte.
- Für Adri keine frei erfundenen Kompetenz-Prozente setzen. Wenn es keine bestätigten Werte gibt, verbale Stufen wie „Grundlagen“ oder „Projektpraxis“ verwenden.
- Fortschrittsbalken, falls mit echten Werten genutzt, mit zurückhaltendem Violett-Cyan-Verlauf.
- Soft-Skill-Pills in dezenten Pastelltönen; keine dominanten bunten Flächen.

### 9. Testimonials, Kontakt und Footer

- Im Video folgen helle Testimonial-Karten und ein ruhiger Kontaktbereich.
- Testimonials nur bei echten, freigegebenen Aussagen darstellen; sonst den Abschnitt auslassen.
- Kontakt mit klarer Überschrift, kurzem Text und funktionierendem Link beziehungsweise bestehendem Formular.
- Footer mit Name, kompakten Links und Social-Icons; kein überladener Abschluss.
- Die kleine schwebende Icon-Navigation aus dem Video kann als Abschnitts-Dock umgesetzt werden: helle Pill, Kontur, weicher Schatten, aktive Position sichtbar. Icons mit zugänglichen Namen versehen; mobil Safe-Area und Platz darunter berücksichtigen.

## Animationen und Interaktionen

| Interaktion | Ausgangswert und Verhalten |
| --- | --- |
| Abschnitt erscheint | Opacity 0 → 1, vertikale Bewegung 16–24 px, Dauer 400–650 ms; einmal pro Abschnitt |
| Kartenfolge | Kleiner zeitlicher Versatz von etwa 60–100 ms |
| Buttons | 150–220 ms, dezente Verschiebung oder Schattenänderung; sichtbarer Fokus |
| Projektkarte | 3–6 px anheben; Bildzoom ungefähr 1.02–1.04 |
| Ausweis | Drag, Rotation, gedämpftes Nachschwingen als wichtigste Interaktion |
| Themenwechsel | Farben sanft wechseln; beide Modi lesbar halten |
| Technologieband | Langsame gleichmäßige Bewegung, ohne Sprung beim Wiederholen |
| Cursor-Effekt | Optional, nur bei Maus; kleiner dunkler Pfeil mit violettem Schatten, Interaktion nicht behindern |

- Bevorzuge `transform` und `opacity` für DOM-Animationen.
- Berücksichtige `prefers-reduced-motion`: Reveals sofort anzeigen, Laufband anhalten, Ausweis statisch oder stark beruhigt darstellen.
- Kein Scroll-Hijacking. Navigation erfolgt über normale Abschnittslinks; Sticky-Header mit Scroll-Offset berücksichtigen.
- Cursor-Animation ist nachrangig. Native Pointer-Bedienung, Textauswahl und Klickposition müssen zuverlässig bleiben.
- Der helle Modus ist die primäre Referenz. Dunkler Modus folgt derselben Hierarchie; keine separate gestalterische Richtung erfinden.

## Arbeitsablauf für den Agenten

1. **Projekt prüfen:** Lies vorhandene Projektanweisungen, `package.json`, Seitenstruktur, CSS, Assets und vorhandene Portfolio-Inhalte. Bei mehreren Anweisungsdateien deren Geltungsbereich beachten. Vorhandene Funktionalität erhalten.
2. **Referenz analysieren:** Extrahiere bei verfügbarem Video Standbilder für Hero, Ausweis, Projekte, Laufbahn und Ausbildung. Betrachte die Ausweisbewegung in mehreren aufeinanderfolgenden Bildern. Trenne Website-Elemente von Reel-Overlays.
3. **Design festlegen:** Notiere knapp Farben, Schriftgrößen, Containerbreite, Hero-Verhältnis und Kartenproportionen. Fehlende Assets und unbekannte Originalwerte benennen, ohne den gesamten Fortschritt zu blockieren.
4. **Statischen Hero zuerst umsetzen:** Header, Punktraster, Text, Buttons, Ausweis und Technologieband. Öffne die Seite im Browser und korrigiere Größe, Position und Weißraum vor zusätzlichen Effekten.
5. **Ausweis-Interaktion umsetzen:** Aufhängung, Band, Drag und Rückschwingen. Funktion auf Maus und Touch prüfen. Erst dann ergänzende Animationen hinzufügen.
6. **Weitere Abschnitte aufbauen:** Über mich, Leistungen, Projekte, Stationen, Ausbildung, Kompetenzen und Kontakt. Inhalte aus dem vorhandenen Projekt übernehmen und nur belegbare Angaben ergänzen.
7. **Responsive und Dark Mode umsetzen:** Beispielsweise bei 390 px, 768 px und 1440 px Breite prüfen. Mobil Hero untereinander anordnen; Ausweis verkleinern und Text zuerst zeigen.
8. **Visuell iterieren:** Desktop-Screenshots mit vergleichbaren Videoansichten vergleichen. Zuerst Komposition, Titelgröße, Ausweisproportion, Abstände und Projektbilder korrigieren. Nicht nur Komponenten austauschen.
9. **Funktion prüfen:** Menüs, Anker, Projektlinks, Theme-Toggle, Social-Links, Lebenslauf, Kontakt und Drag testen. Browserkonsole sowie vorhandene Build-/Lint-Prüfungen kontrollieren; relevante Fehler beheben.
10. **Abschluss:** Nenne knapp die umgesetzten Bereiche, geprüften Bildschirmgrößen und verbleibenden Abweichungen. Fehlende Originalassets und vereinfachte Physik offen benennen.

## Werkzeuge gezielt einsetzen

- Bestehenden React-/Next.js-/TypeScript-/Tailwind-Stack weiterverwenden, falls vorhanden. Ein bestehendes Projekt nicht allein für dieses Design neu aufsetzen.
- Vorhandene Design-, Motion- und Komponenten-Skills nur verwenden, wenn sie diese Referenz unterstützen.
- Dokumentationswerkzeuge wie Context7 nur bei konkreten API-Fragen einsetzen; installierte Bibliotheksversion berücksichtigen.
- Browserprüfung über vorhandenes Playwright oder ein vergleichbares Werkzeug. Wenn kein Browserwerkzeug verfügbar ist, Prüfgrenze beim Abschluss benennen.
- shadcn kann für zugängliche Menüs, Tooltips und Buttons dienen; die sichtbare Gestaltung muss der Referenz folgen.
- Kein Sammelsurium von Aceternity-, Magic-UI- und React-Bits-Effekten. Zusätzliche Komponenten nur einsetzen, wenn sie ein konkretes sichtbares Element erfüllen.
- Figma, Supabase, GitHub-MCP und Deployment sind für diese Gestaltungsaufgabe keine Voraussetzung. Keine Accounts, Datenbank oder Veröffentlichung als Teil des reinen Redesigns einrichten.

## Abnahmekriterien

- [ ] Der erste Desktop-Blick zeigt links die große Begrüßung mit Verlauf-Namen und rechts den hängenden Ausweis.
- [ ] Hintergrund, Navigation, Buttons und Technologieband entsprechen der hellen Referenz.
- [ ] Ausweis besitzt Band, Verbindungsstück, Foto/Initialen, Namensfeld, Informationsfelder und dekorative Barcode-Optik.
- [ ] Ziehen und Loslassen reagieren nachvollziehbar; Band bleibt verbunden; Bewegung beruhigt sich.
- [ ] Karten, Projektbilder und Zeitlinie folgen dem beschriebenen Aufbau und verwenden echte Inhalte.
- [ ] Mobil gibt es keinen horizontalen Seitenüberlauf, keine verdeckten Buttons und keine durch Drag blockierte normale Navigation.
- [ ] Tastaturbedienung, Fokuszustände, Kontrast und reduzierte Bewegung funktionieren.
- [ ] Heller und dunkler Modus sind lesbar; Theme-Toggle funktioniert.
- [ ] Vorhandene passende Prüfungen bestehen; Browserkonsole enthält keine durch das Redesign verursachten Fehler.
- [ ] Das Ergebnis wurde tatsächlich angesehen und nachgebessert; nicht allein nach erfolgreichem Build als visuell fertig erklärt.

## Vermeiden

- Dunkle Neon-/Cyberpunk-Gestaltung als Standard; die Referenz ist überwiegend hell.
- Eine normale Profilkarte ohne Band als angeblich gleichwertigen Ersatz für den interaktiven Ausweis.
- Riesige Glow-Flächen, viele Glassmorphism-Container, beliebige 3D-Objekte oder dauernd bewegte Hintergründe.
- Gleiche kleine Cards für jeden Abschnitt; die Projektbilder brauchen deutlich mehr visuelles Gewicht.
- Kopieren des Namens „Scarlett Rose“, ihres Fotos, ihrer Berufsbezeichnung oder ihrer Leistungszahlen aus dem Video.
- Erfundenes Kundenfeedback, erfundene Seniorität und unbestätigte Skill-Prozente.
- Ersetzen der echten Website durch ein einziges Screenshot-Bild: Das Ergebnis muss eine bedienbare, responsive Website sein.
- Behaupten, Farben, Schrift oder Physik entsprächen exakt dem Original, solange dafür nur diese komprimierte Aufnahme vorliegt.
