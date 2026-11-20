# Konferens 2026

En modern one-pager webbplats för en konferens, byggd med ren HTML5 och Sass (SCSS).

---

## 📌 Project Overview

<!-- Översikt över projektet, syfte och målgrupp -->

Detta projekt är en responsiv one-pager för Konferens 2026. Webbplatsen presenterar information om konferensen, talare, schema, biljetter och kontaktuppgifter.

### Kom igång & Utveckling

Installera beroenden:

```bash
npm install
```

Starta Sass i watch-läge under utveckling:

```bash
npm run watch:sass
```

Bygg minifierad CSS för produktion:

```bash
npm run build:sass
# eller
npm run build
```

Formatera källkoden med Prettier:

```bash
npm run format
```

---

## 🎨 CSS Methodology (BEM)

<!-- Beskrivning av hur Block, Element, Modifier (BEM) tillämpas i projektet -->

Projektet följer **BEM** (Block Element Modifier) för modulär, förutsägbar och underhållbar CSS.

- **Block**: Fristående enhet som har en meningsfull innebörd i sig själv (t.ex. `.header`, `.hero`, `.speaker-card`).
- **Element**: Del av ett block som inte har någon fristående innebörd och är semantiskt bundet till blocket (t.ex. `.header__title`, `.hero__headline`).
- **Modifier**: En flagga på ett block eller element för att ändra utseende eller beteende (t.ex. `.btn--primary`, `.header--fixed`).

---

## ⚡ Lighthouse Score

<!-- Mätvärden för prestanda, tillgänglighet, best practices och SEO -->

| Kategori                          | Mål | Nuvarande resultat |
| :-------------------------------- | :-: | :----------------: |
| 🚀 Prestanda (Performance)        | 90+ |  _Ej testad ännu_  |
| ♿ Tillgänglighet (Accessibility) | 90+ |  _Ej testad ännu_  |
| 🛡️ Bästa praxis (Best Practices)  | 90+ |  _Ej testad ännu_  |
| 🔍 Sökmotoroptimering (SEO)       | 90+ |  _Ej testad ännu_  |

---

## 🤖 AI Process Log

<!-- Loggbok över prompts, AI-genererade ändringar och iterativa förbättringar -->

### Initial Setup

- **Prompt:** Initiera projektstrukturen med vanilla HTML, Sass (Dart Sass), Prettier, npm scripts och BEM-arkitektur.
- **Åtgärder:**
  - Skapade `package.json` med devDependencies (`sass`, `prettier`) och byggskript.
  - Skapade `.prettierrc` och `.gitignore`.
  - Skapade grundläggande SCSS-arkitektur (`_variables.scss`, `_base.scss`, `main.scss`).
  - Lade till semantisk HTML5-mall på svenska (`index.html`).

### Semantisk HTML5-struktur (Nordic AI & Future Web 2026)

- **Prompt:** Bygg den kompletta semantiska HTML5-strukturen i `index.html` för den fiktiva tech-konferensen "Nordic AI & Future Web 2026" i Stockholm med strikta krav för VG-nivå.
- **Åtgärder:**
  - Implementerade korrekta landmärken: `<header>`, `<nav>`, `<main>` och `<footer>`.
  - Lade till skip-link längst upp (`<a href="#main-content" class="skip-link">`).
  - Etablerade en strikt rubrikhierarki: exakt ett `<h1>` (hero-titel), `<h2>` för sektioner och `<h3>` för artiklar och kort, utan nivåhopp.
  - Skapade 4 innehållssektioner med semantiska element och BEM-struktur:
    - **Program (`#program`):** Kronologiskt schema med `<ol>`, `<time>`, talare och sessionsbeskrivningar.
    - **Talare (`#talare`):** 6 talarkort (`<article class="speaker-card">`) med bilder, bio, ämne och kontaktlänkar förberedda för hover och `:focus-within`.
    - **Biljetter (`#biljetter`):** 3 nivåer (Student, Standard med `.ticket-card--featured`, VIP & After Work) med priser i SEK och förmånslistor.
    - **Praktisk info (`#praktisk-info`):** Adressinformation med `<address>`, öppettider med `<time>`, tillgänglighetsinformation samt statisk karta (`assets/images/map-venue.webp`) i `<figure>` med `<figcaption>`.
  - Formaterade hela projektet med Prettier.

### Bildgenerering och optimering (.webp)

- **Prompt:** Skapa optimerade lokala WebP-bilder i `assets/images/` för samtliga bildreferenser i `index.html` med strikta storleks- och tillgänglighetskrav.
- **Åtgärder:**
  - Genererade 6 professionella vektorporträtt för talarna (`speaker-1.webp` till `speaker-6.webp`) i 600x600px som komprimerade WebP-filer (alla mellan 8.9 och 13.1 KB, långt under 100 KB-kravet).
  - Skapade en arkitektonisk områdeskarta (`map-venue.webp`) i 1000x560px för Münchenbryggeriet vid Söder Mälarstrand med utmärkta tunnelbanestationer (Mariatorget, Slussen), gångvägar och bussförbindelser (33.6 KB, långt under 150 KB-kravet).
  - Verifierade och uppdaterade `index.html` med exakta dimensioner (`width`/`height`), deskriptiva `alt`-texter på svenska och `loading="lazy"`.
  - Tog bort `assets/images/.gitkeep` och formaterade med Prettier.

### Grundläggande Sass-arkitektur & Tillgänglig styling

- **Prompt:** Implementera den grundläggande Sass-stylingen i `src/scss/` med responsiv flytande typografi, WCAG AA/AAA-kontrast, automatiskt stöd för ljust/mörkt tema (`prefers-color-scheme`) och anpassade tangentbordsfokus-stilar.
- **Åtgärder:**
  - Uppdaterade `_variables.scss` med breakpoints (`$bp-tablet: 768px`, `$bp-desktop: 1024px`, `$bp-wide: 1440px`), design-tokens och CSS-variabler för både ljust och mörkt läge (`prefers-color-scheme: dark`).
  - Verifierade matematiskt att alla text/bakgrund- och UI-border-färgkombinationer uppfyller eller överträffar WCAG AA (> 4.5:1 för text, > 3:1 för UI-komponenter).
  - Uppdaterade `_base.scss` med `html { scroll-behavior: smooth; }` omslutet i `@media (prefers-reduced-motion: no-preference)`, `overflow-x: clip` för att eliminera horisontell scrollning vid 320–1440px och upp till 300% zoom, samt flytande typografi med `clamp()`.
  - Stylade tillgänglig skip-link (`.skip-link`) som syns vid `:focus-visible` samt anpassad högkontrast-fokusram (`outline: 3px solid var(--color-accent); outline-offset: 3px;`) för interaktiva element.
  - Kompilerade CSS med `npm run build:sass` och formaterade källkoden med Prettier.

### Modulär Sass-layout och Sektionsstilar

- **Prompt:** Skapa modulära Sass-partialer för layout och sektioner (`_layout.scss`, `_components.scss`, `_sections.scss`) med BEM, Flexbox och CSS Grid.
- **Åtgärder:**
  - `_layout.scss`: Klistrad `<nav>` med `backdrop-filter: blur(12px)` och flex-wrap för 320px/300% zoom-säkerhet. Modern redaktionell hero-sektion med datum/plats-brickor och primär CTA.
  - `_components.scss`: Återanvändbara knappstilar (`.btn`, `.btn--primary`, `.btn--outline`) med mjuka hovringseffekter samt dekorativa accentlinjer på sektionsrubriker (`.section-header::after`).
  - `_sections.scss`:
    - **Program (`#program`):** CSS Grid för tidsstämpel och innehåll med strukturella pseudoklasser (`:nth-child(even)` och `:not(:last-child)`).
    - **Talare (`#talare`):** Responsivt rutnät med talarkort och en detaljpanel (`.speaker-card__overlay`) som aktiveras vid både hover och `:focus-within`.
    - **Biljetter (`#biljetter`):** Responsivt `auto-fit` CSS Grid (`minmax(min(100%, 17rem), 1fr)`) och Flexbox-kolumninriktning med `margin-top: auto` på knappen. Framhävd styling på mellannivån (`.ticket-card--featured`).
    - **Praktisk info (`#praktisk-info`):** 2-kolumners Grid på desktop med sticky kartfigur samt attributselektorer (`a[href^="mailto:"]`).
    - **Footer (`<footer>`):** Responsiv Grid/Flexbox-layout.
  - Importerade samtliga partialer i `main.scss`, kompilerade minifierad CSS (19.2 KB) och formaterade med Prettier.

### Avancerad talargalleri-styling & `@keyframes`-animationer

- **Prompt:** Skapa `_speakers.scss` och `_animations.scss` med tillgängliga mus-/tangentbordsinteraktioner, avancerade CSS-selektorer och animationer med strikt stöd för `prefers-reduced-motion`.
- **Åtgärder:**
  - `_speakers.scss`:
    - Responsivt CSS Grid med `repeat(auto-fit, minmax(min(100%, 17.5rem), 1fr))`.
    - Tangentbordstillgänglighet via `tabindex="0"` och fokuserbara länkar med dubbel aktivering (`:hover` och `:focus-within`).
    - Avancerade selektorer för enkel kodinspektion:
      - Barnkombinatorer (`>`), t.ex. `.speaker-card > .speaker-card__figure`, `.speaker-card > .speaker-card__overlay`.
      - Intilliggande syskonkombinatorer (`+`), t.ex. `.speaker-card__name + .speaker-card__role`, `.speaker-card__bio + .speaker-card__topic`.
      - Allmänna syskonkombinatorer (`~`), t.ex. `.speaker-card__topic ~ a[href^="https://"]`.
      - Pseudoelement (`::before` / `::after`), för dekorativa färgindikatorer på spår och externa länkpilar.
      - Attributselektorer, t.ex. `[data-track="ai-research"]` och `a[href^="https://"]`.
    - Bildövergång från 25% gråskala till färg (`filter: grayscale(...)`) samt mjuk skalning (`scale(1.06)`).
  - `_animations.scss`:
    - Skapade `@keyframes fadeSlideUp` för stegvis herointräde och `@keyframes pulseGlow` för pulserande live-statuspunkt på registreringsbrickan.
    - Omslöt alla aktiva animationer i `@media (prefers-reduced-motion: no-preference)`.
    - Implementerade en global `@media (prefers-reduced-motion: reduce)`-regel som sätter animation- och transition-duration till `0.01ms !important`.
  - Importerade båda modulerna i `main.scss`, kompilerade produktions-CSS (22.9 KB) och formaterade med Prettier.
