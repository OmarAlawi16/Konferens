const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'assets', 'images');

// Helper to wrap SVG in standard attributes
function createSvg(width, height, content) {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.35" />
      </filter>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    ${content}
  </svg>`;
}

// 1. Dr. Astrid Lindholm (Head of AI Research - Blonde, glasses, navy/cyan AI network motif)
function getAstridSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="astridBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#091428" />
        <stop offset="50%" stop-color="#0f2347" />
        <stop offset="100%" stop-color="#1e3a8a" />
      </linearGradient>
      <radialGradient id="astridGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#091428" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="astridJacket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
      <linearGradient id="astridHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef08a" />
        <stop offset="60%" stop-color="#facc15" />
        <stop offset="100%" stop-color="#ca8a04" />
      </linearGradient>
      <linearGradient id="astridSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffedd5" />
        <stop offset="100%" stop-color="#fed7aa" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="600" height="600" fill="url(#astridBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#astridGlow)" />

    <!-- AI Neural Network Lattice in Background -->
    <g stroke="#38bdf8" stroke-width="1.5" opacity="0.25">
      <line x1="80" y1="120" x2="180" y2="90" />
      <line x1="180" y1="90" x2="260" y2="150" />
      <line x1="180" y1="90" x2="120" y2="230" />
      <line x1="420" y1="110" x2="520" y2="140" />
      <line x1="420" y1="110" x2="350" y2="70" />
      <line x1="520" y1="140" x2="480" y2="240" />
      <line x1="100" y1="360" x2="160" y2="440" />
      <line x1="500" y1="380" x2="440" y2="460" />
    </g>
    <g fill="#38bdf8" opacity="0.6">
      <circle cx="80" cy="120" r="4" />
      <circle cx="180" cy="90" r="5" />
      <circle cx="260" cy="150" r="3.5" />
      <circle cx="120" cy="230" r="4" />
      <circle cx="420" cy="110" r="4.5" />
      <circle cx="520" cy="140" r="5" />
      <circle cx="350" cy="70" r="3" />
      <circle cx="480" cy="240" r="4" />
    </g>

    <!-- Torso & Blazer -->
    <path d="M120 600 C130 480 180 430 230 410 L270 470 L330 470 L370 410 C420 430 470 480 480 600 Z" fill="url(#astridJacket)" filter="url(#shadow)" />
    <!-- Blouse/Knit -->
    <path d="M250 410 Q300 450 350 410 L330 520 L270 520 Z" fill="#f8fafc" />
    <!-- Lapels -->
    <path d="M230 410 L285 530 L260 540 L210 440 Z" fill="#334155" />
    <path d="M370 410 L315 530 L340 540 L390 440 Z" fill="#1e293b" />
    <!-- Lanyard -->
    <path d="M275 480 L295 590 L305 590 L325 480" stroke="#0ea5e9" stroke-width="6" fill="none" />
    <rect x="275" y="560" width="50" height="40" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="300" y="582" font-family="-apple-system, sans-serif" font-size="7" font-weight="bold" fill="#38bdf8" text-anchor="middle">SPEAKER</text>

    <!-- Neck -->
    <path d="M270 340 L330 340 L335 420 L265 420 Z" fill="url(#astridSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="270" rx="72" ry="92" fill="url(#astridSkin)" filter="url(#shadow)" />

    <!-- Hair Back/Base -->
    <path d="M210 270 C210 170 240 140 300 140 C360 140 390 170 390 270 C390 350 380 370 365 375 C360 330 350 260 350 240 C330 230 270 230 250 240 C250 260 240 330 235 375 C220 370 210 350 210 270 Z" fill="url(#astridHair)" />

    <!-- Facial Features -->
    <!-- Eyebrows -->
    <path d="M250 240 Q270 234 285 242" stroke="#b45309" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M315 242 Q330 234 350 240" stroke="#b45309" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Eyes -->
    <g>
      <ellipse cx="268" cy="254" rx="9" ry="6" fill="#ffffff" />
      <circle cx="269" cy="254" r="4.5" fill="#0284c7" />
      <circle cx="270" cy="253" r="1.5" fill="#0f172a" />
      <circle cx="268" cy="252" r="1.2" fill="#ffffff" />

      <ellipse cx="332" cy="254" rx="9" ry="6" fill="#ffffff" />
      <circle cx="331" cy="254" r="4.5" fill="#0284c7" />
      <circle cx="330" cy="253" r="1.5" fill="#0f172a" />
      <circle cx="332" cy="252" r="1.2" fill="#ffffff" />
    </g>

    <!-- Glasses (Titanium round-hex frames) -->
    <g stroke="#38bdf8" stroke-width="2.5" fill="none" opacity="0.9">
      <rect x="250" y="240" width="36" height="28" rx="8" />
      <rect x="314" y="240" width="36" height="28" rx="8" />
      <line x1="286" y1="252" x2="314" y2="252" />
      <line x1="250" y1="248" x2="235" y2="245" />
      <line x1="350" y1="248" x2="365" y2="245" />
    </g>

    <!-- Nose -->
    <path d="M298 262 Q302 284 296 288 Q300 291 306 288" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.6" />

    <!-- Mouth -->
    <path d="M285 315 Q300 326 315 315" stroke="#e11d48" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Front Hair Fringe / Side Bob Styling -->
    <path d="M220 250 C230 180 260 145 300 145 C350 145 385 180 380 250 C370 200 340 170 300 170 C260 170 230 200 220 250 Z" fill="#fde047" />
    <path d="M225 240 Q240 330 250 360 C240 330 235 290 230 250 Z" fill="#eab308" />
    <path d="M375 240 Q360 330 350 360 C360 330 365 290 370 250 Z" fill="#ca8a04" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#091428" opacity="0.85" stroke="#38bdf8" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Dr. Astrid Lindholm · AI Research
    </text>
  `
  );
}

// 2. Johan Bergström (Principal Web Architect - Beard, edge network, teal/emerald motif)
function getJohanSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="johanBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22" />
        <stop offset="50%" stop-color="#064e3b" />
        <stop offset="100%" stop-color="#0f766e" />
      </linearGradient>
      <radialGradient id="johanGlow" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#022c22" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="johanHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
      <linearGradient id="johanSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fed7aa" />
        <stop offset="100%" stop-color="#fdba74" />
      </linearGradient>
    </defs>

    <rect width="600" height="600" fill="url(#johanBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#johanGlow)" />

    <!-- Cloud & Edge Architecture Grid Background -->
    <g stroke="#2dd4bf" stroke-width="1.2" opacity="0.2">
      <circle cx="120" cy="140" r="45" fill="none" stroke-dasharray="3,3" />
      <circle cx="480" cy="160" r="55" fill="none" stroke-dasharray="3,3" />
      <line x1="165" y1="140" x2="230" y2="170" />
      <line x1="425" y1="160" x2="360" y2="180" />
      <line x1="120" y1="185" x2="150" y2="280" />
      <line x1="480" y1="215" x2="450" y2="300" />
      <rect x="70" y="320" width="30" height="20" rx="3" fill="none" />
      <rect x="500" y="320" width="30" height="20" rx="3" fill="none" />
    </g>

    <!-- Torso / Jacket & Tee -->
    <path d="M120 600 C130 470 180 420 240 400 L270 460 L330 460 L360 400 C420 420 470 470 480 600 Z" fill="#1e293b" filter="url(#shadow)" />
    <!-- Teal T-shirt -->
    <path d="M260 400 Q300 440 340 400 L325 530 L275 530 Z" fill="#0f766e" />
    <path d="M240 400 L275 530 L245 540 L210 430 Z" fill="#0f172a" />
    <path d="M360 400 L325 530 L355 540 L390 430 Z" fill="#0f172a" />

    <!-- Neck -->
    <path d="M268 340 L332 340 L335 415 L265 415 Z" fill="url(#johanSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="265" rx="74" ry="94" fill="url(#johanSkin)" filter="url(#shadow)" />

    <!-- Short Textured Hair -->
    <path d="M225 240 C220 160 250 130 300 130 C350 130 380 160 375 240 C370 180 345 150 300 150 C255 150 230 180 225 240 Z" fill="url(#johanHair)" />
    <path d="M230 170 C250 135 280 125 310 130 C340 135 365 145 370 165 C350 145 320 140 290 140 C260 140 240 155 230 170 Z" fill="#475569" />

    <!-- Beard & Stubble -->
    <path d="M235 280 C240 360 270 385 300 385 C330 385 360 360 365 280 C365 310 350 360 300 360 C250 360 235 310 235 280 Z" fill="#334155" opacity="0.9" />
    <path d="M275 325 Q300 335 325 325 Q300 338 275 325 Z" fill="#1e293b" />

    <!-- Eyebrows -->
    <path d="M250 235 Q270 230 286 238" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M314 238 Q330 230 350 235" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" />

    <!-- Eyes -->
    <g>
      <ellipse cx="268" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="269" cy="250" r="4.2" fill="#047857" />
      <circle cx="270" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="268" cy="248" r="1" fill="#ffffff" />

      <ellipse cx="332" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="331" cy="250" r="4.2" fill="#047857" />
      <circle cx="330" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="332" cy="248" r="1" fill="#ffffff" />
    </g>

    <!-- Nose -->
    <path d="M298 258 L304 282 L294 286" stroke="#ea580c" stroke-width="1.8" fill="none" opacity="0.6" stroke-linejoin="round" />

    <!-- Mouth -->
    <path d="M284 316 Q300 326 316 316" stroke="#991b1b" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#022c22" opacity="0.9" stroke="#2dd4bf" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Johan Bergström · Web Architecture
    </text>
  `
  );
}

// 3. Elena Rostova (Lead UX & Accessibility - Brunette chignon, purple/coral accessible waves)
function getElenaSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="elenaBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2e1065" />
        <stop offset="50%" stop-color="#4c1d95" />
        <stop offset="100%" stop-color="#831843" />
      </linearGradient>
      <radialGradient id="elenaGlow" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#2e1065" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="elenaHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b1d11" />
        <stop offset="60%" stop-color="#241007" />
        <stop offset="100%" stop-color="#120702" />
      </linearGradient>
      <linearGradient id="elenaSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffedd5" />
        <stop offset="100%" stop-color="#fed7aa" />
      </linearGradient>
    </defs>

    <rect width="600" height="600" fill="url(#elenaBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#elenaGlow)" />

    <!-- Accessible Design Waves & Concentric Curves -->
    <g stroke="#c084fc" stroke-width="1.5" opacity="0.25" fill="none">
      <circle cx="300" cy="260" r="180" stroke-dasharray="6,6" />
      <circle cx="300" cy="260" r="220" />
      <path d="M50 180 Q150 120 250 160 T450 140 T550 200" />
      <path d="M50 420 Q150 480 300 450 T550 420" />
    </g>

    <!-- Hair Back Chignon/Updo -->
    <circle cx="300" cy="180" r="95" fill="url(#elenaHair)" />
    <ellipse cx="380" cy="240" rx="35" ry="45" fill="url(#elenaHair)" />

    <!-- Torso / Aubergine High-Neck Sweater -->
    <path d="M130 600 C140 480 185 430 240 410 L260 380 L340 380 L360 410 C415 430 460 480 470 600 Z" fill="#581c87" filter="url(#shadow)" />
    <path d="M260 380 L340 380 L345 440 L255 440 Z" fill="#6b21a8" />

    <!-- Drop Earrings -->
    <g fill="#fb7185">
      <circle cx="225" cy="285" r="4" />
      <line x1="225" y1="285" x2="225" y2="305" stroke="#fb7185" stroke-width="2" />
      <circle cx="225" cy="305" r="6" />

      <circle cx="375" cy="285" r="4" />
      <line x1="375" y1="285" x2="375" y2="305" stroke="#fb7185" stroke-width="2" />
      <circle cx="375" cy="305" r="6" />
    </g>

    <!-- Neck -->
    <path d="M272 320 L328 320 L332 390 L268 390 Z" fill="url(#elenaSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="265" rx="70" ry="90" fill="url(#elenaSkin)" filter="url(#shadow)" />

    <!-- Hair Front/Sides Styled -->
    <path d="M225 250 C220 180 250 145 300 145 C350 145 380 180 375 250 C365 190 340 170 300 170 C250 170 230 200 225 250 Z" fill="url(#elenaHair)" />
    <path d="M230 210 Q260 175 300 185 C270 200 245 230 240 260 Z" fill="#451a03" />

    <!-- Eyebrows -->
    <path d="M252 236 Q270 228 286 235" stroke="#3b1d11" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M314 235 Q330 228 348 236" stroke="#3b1d11" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Eyes -->
    <g>
      <ellipse cx="268" cy="248" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="269" cy="248" r="4.2" fill="#7c2d12" />
      <circle cx="270" cy="247" r="1.5" fill="#0f172a" />
      <circle cx="268" cy="246" r="1.2" fill="#ffffff" />

      <ellipse cx="332" cy="248" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="331" cy="248" r="4.2" fill="#7c2d12" />
      <circle cx="330" cy="247" r="1.5" fill="#0f172a" />
      <circle cx="332" cy="246" r="1.2" fill="#ffffff" />
    </g>

    <!-- Nose -->
    <path d="M299 256 Q302 278 296 282 Q300 285 305 282" stroke="#ea580c" stroke-width="1.5" fill="none" opacity="0.6" />

    <!-- Mouth -->
    <path d="M285 312 Q300 324 315 312" stroke="#be123c" stroke-width="3" fill="none" stroke-linecap="round" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#2e1065" opacity="0.9" stroke="#c084fc" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Elena Rostova · UX &amp; Accessibility
    </text>
  `
  );
}

// 4. Marcus Ekström (Chief Security Officer - Hexagonal security shield grid, emerald/cyber dark)
function getMarcusSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="marcusBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#022c22" />
        <stop offset="50%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#064e3b" />
      </linearGradient>
      <radialGradient id="marcusGlow" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="marcusHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#292524" />
        <stop offset="100%" stop-color="#1c1917" />
      </linearGradient>
      <linearGradient id="marcusSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffedd5" />
        <stop offset="100%" stop-color="#fed7aa" />
      </linearGradient>
    </defs>

    <rect width="600" height="600" fill="url(#marcusBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#marcusGlow)" />

    <!-- Security Hexagons & Shield Vector Pattern -->
    <g stroke="#10b981" stroke-width="1.4" opacity="0.25" fill="none">
      <polygon points="100,120 120,85 160,85 180,120 160,155 120,155" />
      <polygon points="440,130 460,95 500,95 520,130 500,165 460,165" />
      <polygon points="70,300 90,265 130,265 150,300 130,335 90,335" />
      <polygon points="470,320 490,285 530,285 550,320 530,355 490,355" />
      <!-- Big central security shield outline -->
      <path d="M300 60 L380 90 L380 180 C380 230 300 270 300 270 C300 270 220 230 220 180 L220 90 Z" opacity="0.1" stroke-width="2" />
    </g>

    <!-- Torso / Charcoal Suit & Black Shirt -->
    <path d="M120 600 C130 470 180 420 235 405 L270 465 L330 465 L365 405 C420 420 470 470 480 600 Z" fill="#1e293b" filter="url(#shadow)" />
    <!-- Shirt -->
    <path d="M260 405 L300 450 L340 405 L330 520 L270 520 Z" fill="#090d16" />
    <!-- Lapels -->
    <path d="M235 405 L285 530 L255 540 L210 440 Z" fill="#334155" />
    <path d="M365 405 L315 530 L345 540 L390 440 Z" fill="#0f172a" />

    <!-- Neck -->
    <path d="M270 340 L330 340 L335 415 L265 415 Z" fill="url(#marcusSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="265" rx="73" ry="93" fill="url(#marcusSkin)" filter="url(#shadow)" />

    <!-- Short Structured Hair -->
    <path d="M225 240 C220 155 250 125 300 125 C350 125 380 155 375 240 C368 175 340 145 300 145 C260 145 232 175 225 240 Z" fill="url(#marcusHair)" />

    <!-- Eyebrows -->
    <path d="M250 234 Q270 228 286 235" stroke="#1c1917" stroke-width="3" fill="none" stroke-linecap="round" />
    <path d="M314 235 Q330 228 350 234" stroke="#1c1917" stroke-width="3" fill="none" stroke-linecap="round" />

    <!-- Eyes (Focused, alert) -->
    <g>
      <ellipse cx="268" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="269" cy="250" r="4.2" fill="#334155" />
      <circle cx="270" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="268" cy="248" r="1" fill="#ffffff" />

      <ellipse cx="332" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="331" cy="250" r="4.2" fill="#334155" />
      <circle cx="330" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="332" cy="248" r="1" fill="#ffffff" />
    </g>

    <!-- Nose -->
    <path d="M298 258 L303 282 L293 286" stroke="#ea580c" stroke-width="1.8" fill="none" opacity="0.6" stroke-linejoin="round" />

    <!-- Mouth -->
    <path d="M285 315 Q300 322 315 315" stroke="#991b1b" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Subtle jaw shadow -->
    <path d="M250 330 Q300 365 350 330" stroke="#fed7aa" stroke-width="1" fill="none" opacity="0.5" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#022c22" opacity="0.9" stroke="#10b981" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Marcus Ekström · Cyber Security
    </text>
  `
  );
}

// 5. Sofia Chen (Staff ML Engineer - Realtime AI, amber/orange/indigo streaming vector motif)
function getSofiaSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="sofiaBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e1b4b" />
        <stop offset="50%" stop-color="#312e81" />
        <stop offset="100%" stop-color="#7c2d12" />
      </linearGradient>
      <radialGradient id="sofiaGlow" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="sofiaHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181b" />
        <stop offset="100%" stop-color="#09090b" />
      </linearGradient>
      <linearGradient id="sofiaSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffedd5" />
        <stop offset="100%" stop-color="#fde68a" />
      </linearGradient>
    </defs>

    <rect width="600" height="600" fill="url(#sofiaBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#sofiaGlow)" />

    <!-- Real-time Streaming Pulse Waves & Particles -->
    <g stroke="#f59e0b" stroke-width="1.5" opacity="0.3" fill="none">
      <path d="M40 160 Q120 100 200 160 T360 160 T520 160 T600 160" />
      <path d="M40 220 Q160 280 280 220 T520 220 T600 220" stroke="#f43f5e" />
      <path d="M40 380 Q140 320 240 380 T440 380 T600 380" stroke="#38bdf8" />
    </g>
    <g fill="#f59e0b" opacity="0.6">
      <circle cx="120" cy="130" r="4" />
      <circle cx="200" cy="160" r="5" />
      <circle cx="480" cy="140" r="3.5" />
      <circle cx="520" cy="220" r="4.5" />
    </g>

    <!-- Torso / Terracotta & Ochre Minimalist Jacket -->
    <path d="M125 600 C135 475 180 425 235 405 L270 460 L330 460 L365 405 C420 425 465 475 475 600 Z" fill="#9a3412" filter="url(#shadow)" />
    <!-- Inner top -->
    <path d="M260 405 Q300 445 340 405 L325 520 L275 520 Z" fill="#1e1b4b" />
    <!-- Lapels -->
    <path d="M235 405 L285 530 L255 540 L210 440 Z" fill="#c2410c" />
    <path d="M365 405 L315 530 L345 540 L390 440 Z" fill="#7c2d12" />

    <!-- Geometric Earring -->
    <polygon points="226,280 232,292 220,292" fill="#fbbf24" />
    <polygon points="374,280 380,292 368,292" fill="#fbbf24" />

    <!-- Neck -->
    <path d="M272 330 L328 330 L332 410 L268 410 Z" fill="url(#sofiaSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="265" rx="70" ry="88" fill="url(#sofiaSkin)" filter="url(#shadow)" />

    <!-- Sleek Black Bob with Blunt Cut Fringe -->
    <path d="M220 260 C215 160 250 130 300 130 C350 130 385 160 380 260 C380 340 375 360 365 370 C365 320 355 250 355 230 C320 220 280 220 245 230 C245 250 235 320 235 370 C225 360 220 340 220 260 Z" fill="url(#sofiaHair)" />
    <!-- Blunt Bangs -->
    <path d="M235 220 C250 200 280 195 300 195 C320 195 350 200 365 220 C350 235 325 235 300 235 C275 235 250 235 235 220 Z" fill="#27272a" />

    <!-- Eyebrows -->
    <path d="M252 238 Q270 232 286 238" stroke="#09090b" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M314 238 Q330 232 348 238" stroke="#09090b" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Eyes (Almond shaped) -->
    <g>
      <ellipse cx="268" cy="250" rx="8.5" ry="5" fill="#ffffff" />
      <circle cx="269" cy="250" r="4" fill="#18181b" />
      <circle cx="270" cy="249" r="1.3" fill="#ffffff" />

      <ellipse cx="332" cy="250" rx="8.5" ry="5" fill="#ffffff" />
      <circle cx="331" cy="250" r="4" fill="#18181b" />
      <circle cx="332" cy="249" r="1.3" fill="#ffffff" />
    </g>

    <!-- Nose -->
    <path d="M299 258 Q302 278 296 282 Q300 285 304 282" stroke="#ea580c" stroke-width="1.5" fill="none" opacity="0.6" />

    <!-- Mouth -->
    <path d="M285 312 Q300 324 315 312" stroke="#dc2626" stroke-width="2.8" fill="none" stroke-linecap="round" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#1e1b4b" opacity="0.9" stroke="#f59e0b" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Sofia Chen · Machine Learning
    </text>
  `
  );
}

// 6. Henrik Dahl (Creative Technologist - WebAssembly, spatial prisms, fuchsia/cyan creative coding motif)
function getHenrikSvg() {
  return createSvg(
    600,
    600,
    `
    <defs>
      <linearGradient id="henrikBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18181b" />
        <stop offset="50%" stop-color="#3b0764" />
        <stop offset="100%" stop-color="#083344" />
      </linearGradient>
      <radialGradient id="henrikGlow" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#d946ef" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#18181b" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="henrikHair" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78350f" />
        <stop offset="50%" stop-color="#92400e" />
        <stop offset="100%" stop-color="#451a03" />
      </linearGradient>
      <linearGradient id="henrikSkin" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffedd5" />
        <stop offset="100%" stop-color="#fed7aa" />
      </linearGradient>
    </defs>

    <rect width="600" height="600" fill="url(#henrikBg)" />
    <circle cx="300" cy="240" r="260" fill="url(#henrikGlow)" />

    <!-- WebAssembly Hexagons & 3D Wireframe Prisms -->
    <g stroke="#06b6d4" stroke-width="1.5" opacity="0.3" fill="none">
      <!-- Polyhedron left -->
      <polygon points="90,140 140,110 160,160 110,190" />
      <line x1="90" y1="140" x2="160" y2="160" />
      <line x1="140" y1="110" x2="110" y2="190" />
      <!-- Hexagon right -->
      <polygon points="480,120 520,100 560,120 560,160 520,180 480,160" stroke="#d946ef" />
      <circle cx="520" cy="140" r="16" stroke="#d946ef" stroke-dasharray="2,2" />
      <!-- Lower creative lines -->
      <path d="M80 340 L160 300 L180 380 Z" stroke="#d946ef" />
      <path d="M460 340 L540 380 L520 300 Z" stroke="#06b6d4" />
    </g>

    <!-- Torso / Creative Tech Designer Overshirt -->
    <path d="M120 600 C130 470 180 420 240 400 L270 460 L330 460 L360 400 C420 420 470 470 480 600 Z" fill="#27272a" filter="url(#shadow)" />
    <!-- Graphic black tee -->
    <path d="M260 400 Q300 440 340 400 L325 530 L275 530 Z" fill="#09090b" />
    <circle cx="300" cy="460" r="12" fill="#d946ef" opacity="0.8" />
    <!-- Overshirt Panels -->
    <path d="M240 400 L275 530 L245 540 L210 430 Z" fill="#3f3f46" />
    <path d="M360 400 L325 530 L355 540 L390 430 Z" fill="#18181b" />

    <!-- Neck -->
    <path d="M270 340 L330 340 L335 415 L265 415 Z" fill="url(#henrikSkin)" />

    <!-- Head / Face -->
    <ellipse cx="300" cy="265" rx="73" ry="92" fill="url(#henrikSkin)" filter="url(#shadow)" />

    <!-- Wavy Textured Hair -->
    <path d="M220 240 C215 155 245 125 300 125 C355 125 385 155 380 240 C370 170 345 140 300 140 C255 140 230 170 220 240 Z" fill="url(#henrikHair)" />
    <path d="M240 140 C270 115 330 115 360 140 C340 130 320 125 290 130 C265 135 250 145 240 140 Z" fill="#b45309" />

    <!-- Eyebrows -->
    <path d="M250 236 Q270 230 286 237" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <path d="M314 237 Q330 230 350 236" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Eyes -->
    <g>
      <ellipse cx="268" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="269" cy="250" r="4.2" fill="#0284c7" />
      <circle cx="270" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="268" cy="248" r="1" fill="#ffffff" />

      <ellipse cx="332" cy="250" rx="8.5" ry="5.5" fill="#ffffff" />
      <circle cx="331" cy="250" r="4.2" fill="#0284c7" />
      <circle cx="330" cy="249" r="1.5" fill="#0f172a" />
      <circle cx="332" cy="248" r="1" fill="#ffffff" />
    </g>

    <!-- Contemporary Round Glasses (Designer Acetate) -->
    <g stroke="#d946ef" stroke-width="2.5" fill="none" opacity="0.9">
      <circle cx="268" cy="251" r="18" />
      <circle cx="332" cy="251" r="18" />
      <line x1="286" y1="251" x2="314" y2="251" stroke-width="2.5" />
      <line x1="250" y1="248" x2="235" y2="244" />
      <line x1="350" y1="248" x2="365" y2="244" />
    </g>

    <!-- Nose -->
    <path d="M298 260 L303 282 L294 286" stroke="#ea580c" stroke-width="1.8" fill="none" opacity="0.6" stroke-linejoin="round" />

    <!-- Mouth -->
    <path d="M284 316 Q300 326 316 316" stroke="#b91c1c" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Bottom Badge Overlay -->
    <rect x="180" y="535" width="240" height="34" rx="17" fill="#18181b" opacity="0.9" stroke="#d946ef" stroke-width="1" />
    <text x="300" y="556" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="600" fill="#f8fafc" text-anchor="middle">
      Henrik Dahl · Creative Technology
    </text>
  `
  );
}

// 7. Architectural Map: Münchenbryggeriet & Södermalm (1000x560px)
function getMapSvg() {
  return createSvg(
    1000,
    560,
    `
    <defs>
      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" />
        <stop offset="100%" stop-color="#0369a1" />
      </linearGradient>
      <linearGradient id="landGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc" />
        <stop offset="100%" stop-color="#f1f5f9" />
      </linearGradient>
      <linearGradient id="venueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e11d48" />
        <stop offset="100%" stop-color="#be123c" />
      </linearGradient>
      <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.25" />
      </filter>
    </defs>

    <!-- Land Base (Södermalm) -->
    <rect width="1000" height="560" fill="url(#landGrad)" />

    <!-- Water Area: Riddarfjärden (North) -->
    <path d="M0 0 L1000 0 L1000 150 Q750 160 500 150 Q250 140 0 155 Z" fill="url(#waterGrad)" />

    <!-- Water Ripples / Detail Lines -->
    <g stroke="#ffffff" stroke-width="1.2" opacity="0.3" fill="none">
      <path d="M40 40 Q100 35 160 40 T280 40 T400 40" />
      <path d="M600 50 Q660 45 720 50 T840 50 T960 50" />
      <path d="M120 90 Q180 85 240 90 T360 90 T480 90" />
      <path d="M520 100 Q580 95 640 100 T760 100 T880 100" />
      <path d="M200 130 Q260 125 320 130 T440 130" />
    </g>

    <!-- Water Label -->
    <text x="320" y="75" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="700" letter-spacing="6" fill="#ffffff" opacity="0.8">
      RIDDARFJÄRDEN
    </text>
    <text x="320" y="98" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="500" letter-spacing="2" fill="#bae6fd" opacity="0.8">
      Mälaren · Inloppet till Stockholm
    </text>

    <!-- Waterfront Quay / Söder Mälarstrand promenade -->
    <path d="M0 155 Q250 140 500 150 Q750 160 1000 150 L1000 178 Q750 188 500 178 Q250 168 0 183 Z" fill="#cbd5e1" />
    <!-- Boulevard trees along Söder Mälarstrand -->
    <g fill="#10b981" opacity="0.8">
      <circle cx="80" cy="168" r="5" />
      <circle cx="140" cy="164" r="5" />
      <circle cx="200" cy="160" r="5" />
      <circle cx="260" cy="158" r="5" />
      <circle cx="320" cy="158" r="5" />
      <circle cx="580" cy="164" r="5" />
      <circle cx="640" cy="168" r="5" />
      <circle cx="700" cy="170" r="5" />
      <circle cx="760" cy="172" r="5" />
      <circle cx="820" cy="172" r="5" />
      <circle cx="880" cy="170" r="5" />
      <circle cx="940" cy="168" r="5" />
    </g>
    <text x="650" y="196" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600" fill="#475569" letter-spacing="1">
      SÖDER MÄLARSTRAND
    </text>

    <!-- City Blocks (Grey Building footprints) -->
    <g fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5">
      <!-- Blocks West -->
      <rect x="40" y="210" width="120" height="90" rx="4" />
      <rect x="40" y="325" width="120" height="85" rx="4" />
      <rect x="40" y="435" width="120" height="90" rx="4" />

      <!-- Blocks Mid-West -->
      <rect x="190" y="210" width="140" height="90" rx="4" />
      <rect x="190" y="325" width="140" height="85" rx="4" />
      <rect x="190" y="435" width="140" height="90" rx="4" />

      <!-- Blocks East -->
      <rect x="580" y="210" width="180" height="90" rx="4" />
      <rect x="580" y="325" width="180" height="85" rx="4" />
      <rect x="580" y="435" width="180" height="90" rx="4" />

      <!-- Blocks Far East -->
      <rect x="790" y="210" width="170" height="90" rx="4" />
      <rect x="790" y="325" width="170" height="85" rx="4" />
      <rect x="790" y="435" width="170" height="90" rx="4" />
    </g>

    <!-- Main Streets Network -->
    <!-- Hornsgatan (Major horizontal avenue) -->
    <rect x="0" y="415" width="1000" height="24" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
    <text x="210" y="431" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#334155" letter-spacing="1.5">
      HORNSGATAN
    </text>
    <text x="680" y="431" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#334155" letter-spacing="1.5">
      HORNSGATAN
    </text>

    <!-- Tavastgatan / Brännkyrkagatan -->
    <line x1="0" y1="310" x2="1000" y2="310" stroke="#ffffff" stroke-width="16" />
    <line x1="0" y1="310" x2="1000" y2="310" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="8,6" />
    <text x="650" y="314" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#64748b">
      BRÄNNKYRKAGATAN
    </text>

    <!-- Torkel Knutssonsgatan (Direct artery to Münchenbryggeriet) -->
    <rect x="360" y="165" width="34" height="395" fill="#ffffff" stroke="#0ea5e9" stroke-width="2" />
    <text x="382" y="380" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="700" fill="#0284c7" letter-spacing="1" transform="rotate(-90 382 380)">
      TORKEL KNUTSSONSGATAN
    </text>

    <!-- Bellmansgatan (East vertical street) -->
    <rect x="765" y="170" width="22" height="390" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
    <text x="780" y="380" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#64748b" transform="rotate(-90 780 380)">
      BELLMANSGATAN
    </text>

    <!-- Lundagatan (West vertical street) -->
    <rect x="165" y="170" width="22" height="390" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />

    <!-- MÜNCHENBRYGGERIET VENUE COMPLEX (Distinctive Red Brick Footprint) -->
    <g filter="url(#mapShadow)">
      <!-- Main Brewery Building -->
      <path d="M400 160 L545 160 L545 270 L465 270 L465 240 L400 240 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="2" />
      <!-- Inner Courtyard & Wings -->
      <rect x="415" y="175" width="40" height="50" fill="#b91c1c" />
      <rect x="475" y="175" width="55" height="75" fill="#b91c1c" />
      <!-- Windows / Architectural Grid Details -->
      <g fill="#ffffff" opacity="0.6">
        <rect x="420" y="180" width="6" height="8" />
        <rect x="430" y="180" width="6" height="8" />
        <rect x="440" y="180" width="6" height="8" />
        <rect x="420" y="195" width="6" height="8" />
        <rect x="430" y="195" width="6" height="8" />
        <rect x="440" y="195" width="6" height="8" />
        <rect x="485" y="180" width="8" height="10" />
        <rect x="500" y="180" width="8" height="10" />
        <rect x="515" y="180" width="8" height="10" />
        <rect x="485" y="200" width="8" height="10" />
        <rect x="500" y="200" width="8" height="10" />
        <rect x="515" y="200" width="8" height="10" />
        <rect x="485" y="220" width="8" height="10" />
        <rect x="500" y="220" width="8" height="10" />
        <rect x="515" y="220" width="8" height="10" />
      </g>
    </g>

    <!-- Walking Route from Mariatorget (Dotted Line with steps) -->
    <path d="M480 470 L480 430 L380 430 L380 260" stroke="#e11d48" stroke-width="4" stroke-dasharray="6,6" fill="none" />

    <!-- VENUE PIN & CALLOUT CARD -->
    <g filter="url(#mapShadow)">
      <!-- Beacon Ring Pulse -->
      <circle cx="470" cy="210" r="24" fill="#f43f5e" opacity="0.25" />
      <!-- Marker Pin -->
      <path d="M470 180 C455 180 445 192 445 206 C445 224 470 248 470 248 C470 248 495 224 495 206 C495 192 485 180 470 180 Z" fill="url(#venueGrad)" stroke="#ffffff" stroke-width="2" />
      <circle cx="470" cy="204" r="7" fill="#ffffff" />
      <circle cx="470" cy="204" r="3.5" fill="#e11d48" />

      <!-- Callout Badge -->
      <rect x="485" y="115" width="280" height="66" rx="8" fill="#0f172a" stroke="#e11d48" stroke-width="2" />
      <text x="500" y="137" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="700" fill="#ffffff">
        Münchenbryggeriet
      </text>
      <text x="500" y="155" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="500" fill="#cbd5e1">
        Torkel Knutssonsgatan 2, Södermalm
      </text>
      <text x="500" y="171" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="700" fill="#fb7185">
        ★ KONFERENSLOKAL · ENTRÉ VID MÄLAREN
      </text>
    </g>

    <!-- METRO STATION 1: MARIATORGET (South-East) -->
    <g filter="url(#mapShadow)">
      <rect x="420" y="455" width="220" height="58" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
      <!-- Blue SL T-Logo -->
      <circle cx="445" cy="484" r="16" fill="#0284c7" />
      <text x="445" y="490" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">T</text>
      <!-- Station info -->
      <text x="470" y="478" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" font-weight="700" fill="#0f172a">
        T-bana Mariatorget
      </text>
      <text x="470" y="494" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" font-weight="600" fill="#0284c7">
        Röd linje · Uppgång Torkel Knutssonsg.
      </text>
      <text x="470" y="506" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" fill="#16a34a">
        🚶 Ca 5 min promenad (400 m)
      </text>
    </g>

    <!-- METRO STATION 2: SLUSSEN (East indicator) -->
    <g filter="url(#mapShadow)">
      <rect x="830" y="455" width="155" height="58" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="1.5" />
      <circle cx="855" cy="484" r="14" fill="#0284c7" />
      <text x="855" y="489" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">T</text>
      <text x="875" y="478" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#0f172a">
        Slussen
      </text>
      <text x="875" y="494" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="500" fill="#64748b">
        Röd/Grön linje &amp; buss
      </text>
      <text x="875" y="506" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9.5" font-weight="600" fill="#64748b">
        Ca 12 min promenad →
      </text>
    </g>

    <!-- BUS STOP: Rosenlund -->
    <g>
      <rect x="300" y="455" width="105" height="28" rx="4" fill="#f8fafc" stroke="#dc2626" stroke-width="1.2" />
      <text x="310" y="473" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#dc2626">🚏 Buss 55, 66</text>
    </g>

    <!-- MAP EMBELLISHMENTS -->
    <!-- North Arrow / Compass Rose (Top Right) -->
    <g transform="translate(930, 60)" filter="url(#mapShadow)">
      <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
      <!-- North pointer -->
      <polygon points="0,-16 5,0 0,-3" fill="#e11d48" />
      <!-- South pointer -->
      <polygon points="0,16 5,0 0,3" fill="#94a3b8" />
      <polygon points="0,-16 -5,0 0,-3" fill="#be123c" />
      <polygon points="0,16 -5,0 0,3" fill="#64748b" />
      <text x="0" y="-19" font-family="-apple-system, sans-serif" font-size="9" font-weight="900" fill="#e11d48" text-anchor="middle">N</text>
    </g>

    <!-- Map Title & Legend Card (Bottom Left) -->
    <g filter="url(#mapShadow)">
      <rect x="25" y="465" width="250" height="75" rx="6" fill="#0f172a" opacity="0.95" />
      <text x="38" y="488" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="700" fill="#ffffff">
        Nordic AI &amp; Future Web 2026
      </text>
      <text x="38" y="504" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">
        Münchenbryggeriet · Hitta hit
      </text>
      <!-- Scale indicator bar -->
      <line x1="38" y1="524" x2="138" y2="524" stroke="#ffffff" stroke-width="3" />
      <line x1="38" y1="520" x2="38" y2="528" stroke="#ffffff" stroke-width="2" />
      <line x1="138" y1="520" x2="138" y2="528" stroke="#ffffff" stroke-width="2" />
      <text x="148" y="527" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#f8fafc">
        250 meter
      </text>
    </g>
  `
  );
}

async function run() {
  console.log('Generating images with sharp...');

  const tasks = [
    { name: 'speaker-1.webp', svg: getAstridSvg(), width: 600, height: 600, quality: 85 },
    { name: 'speaker-2.webp', svg: getJohanSvg(), width: 600, height: 600, quality: 85 },
    { name: 'speaker-3.webp', svg: getElenaSvg(), width: 600, height: 600, quality: 85 },
    { name: 'speaker-4.webp', svg: getMarcusSvg(), width: 600, height: 600, quality: 85 },
    { name: 'speaker-5.webp', svg: getSofiaSvg(), width: 600, height: 600, quality: 85 },
    { name: 'speaker-6.webp', svg: getHenrikSvg(), width: 600, height: 600, quality: 85 },
    { name: 'map-venue.webp', svg: getMapSvg(), width: 1000, height: 560, quality: 85 },
  ];

  for (const task of tasks) {
    const filePath = path.join(outDir, task.name);
    const buf = await sharp(Buffer.from(task.svg))
      .resize(task.width, task.height)
      .webp({ quality: task.quality, effort: 6 })
      .toBuffer();

    fs.writeFileSync(filePath, buf);
    console.log(
      `Generated ${task.name}: ${task.width}x${task.height}px, ${buf.length} bytes (${(buf.length / 1024).toFixed(1)} KB)`
    );
  }

  // Remove .gitkeep if present
  const gitkeepPath = path.join(outDir, '.gitkeep');
  if (fs.existsSync(gitkeepPath)) {
    fs.unlinkSync(gitkeepPath);
    console.log('Removed assets/images/.gitkeep');
  }

  console.log('All images generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
