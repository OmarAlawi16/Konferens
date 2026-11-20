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
