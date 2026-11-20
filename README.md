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
