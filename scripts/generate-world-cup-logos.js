import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outDir = path.join(__dirname, '../public/logos/world-cup-2026')
fs.mkdirSync(outDir, { recursive: true })

const teamLogos = {
  argentina: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M10,10 L90,10 L90,65 C90,95 50,115 50,115 C50,115 10,95 10,65 Z" fill="#75AADB" stroke="#E3B136" stroke-width="4"/>
    <path d="M30,10 L43,10 L43,111 C37,107 31,102 26,96 L26,10 C26,10 30,10 30,10 Z" fill="#FFFFFF"/>
    <path d="M57,10 L70,10 L74,96 C69,102 63,107 57,111 Z" fill="#FFFFFF"/>
    <circle cx="50" cy="45" r="14" fill="#F8B434"/>
    <circle cx="50" cy="45" r="10" fill="#75AADB"/>
    <text x="50" y="50" font-size="12" font-weight="bold" fill="#F8B434" text-anchor="middle" font-family="sans-serif">AFA</text>
    <polygon points="35,2 38,7 43,7 39,10 41,15 35,12 29,15 31,10 27,7 32,7" fill="#F8B434"/>
    <polygon points="50,2 53,7 58,7 54,10 56,15 50,12 44,15 46,10 42,7 47,7" fill="#F8B434"/>
    <polygon points="65,2 68,7 73,7 69,10 71,15 65,12 59,15 61,10 57,7 62,7" fill="#F8B434"/>
  </svg>`,

  brazil: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#009C3B" stroke="#FFDF00" stroke-width="4"/>
    <polygon points="50,20 80,55 50,90 20,55" fill="#FFDF00"/>
    <circle cx="50" cy="55" r="18" fill="#002776"/>
    <path d="M33,52 Q50,62 67,52" stroke="#FFFFFF" stroke-width="3" fill="none"/>
    <text x="50" y="80" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">CBF</text>
    <polygon points="20,2 23,6 27,6 24,9 25,13 20,10 15,13 16,9 13,6 17,6" fill="#FFDF00"/>
    <polygon points="35,2 38,6 42,6 39,9 40,13 35,10 30,13 31,9 28,6 32,6" fill="#FFDF00"/>
    <polygon points="50,2 53,6 57,6 54,9 55,13 50,10 45,13 46,9 43,6 47,6" fill="#FFDF00"/>
    <polygon points="65,2 68,6 72,6 69,9 70,13 65,10 60,13 61,9 58,6 62,6" fill="#FFDF00"/>
    <polygon points="80,2 83,6 87,6 84,9 85,13 80,10 75,13 76,9 73,6 77,6" fill="#FFDF00"/>
  </svg>`,

  france: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,12 L85,12 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#002395" stroke="#ED2939" stroke-width="4"/>
    <polygon points="40,2 43,6 47,6 44,9 45,13 40,10 35,13 36,9 33,6 37,6" fill="#E3B136"/>
    <polygon points="60,2 63,6 67,6 64,9 65,13 60,10 55,13 56,9 53,6 57,6" fill="#E3B136"/>
    <path d="M50,30 Q58,32 60,40 Q55,42 50,38 Q45,45 52,55 Q56,65 50,75 Q42,65 46,50 Z" fill="#E3B136"/>
    <text x="50" y="95" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">FFF</text>
  </svg>`,

  spain: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,12 L85,12 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#AA1529" stroke="#F1BF00" stroke-width="4"/>
    <rect x="35" y="30" width="30" height="50" fill="#F1BF00"/>
    <rect x="35" y="42" width="30" height="8" fill="#AA1529"/>
    <rect x="35" y="58" width="30" height="8" fill="#AA1529"/>
    <polygon points="50,2 53,6 57,6 54,9 55,13 50,10 45,13 46,9 43,6 47,6" fill="#F1BF00"/>
    <text x="50" y="98" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">RFEF</text>
  </svg>`,

  england: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#FFFFFF" stroke="#00247D" stroke-width="4"/>
    <path d="M30,30 C40,25 60,25 70,30 C65,40 65,45 70,50 C60,55 40,55 30,50 C35,45 35,40 30,30 Z" fill="#00247D"/>
    <path d="M32,55 C42,50 58,50 68,55 C63,63 63,67 68,72 C58,76 42,76 32,72 C37,67 37,63 32,55 Z" fill="#00247D"/>
    <path d="M35,78 C43,74 57,74 65,78 C61,84 61,87 65,91 C57,95 43,95 35,91 C39,87 39,84 35,78 Z" fill="#00247D"/>
    <polygon points="50,0 52,3 55,3 53,5 54,8 50,6 46,8 47,5 45,3 48,3" fill="#00247D"/>
    <circle cx="25" cy="40" r="3" fill="#CF142B"/>
    <circle cx="75" cy="40" r="3" fill="#CF142B"/>
    <circle cx="25" cy="65" r="3" fill="#CF142B"/>
    <circle cx="75" cy="65" r="3" fill="#CF142B"/>
    <circle cx="25" cy="85" r="3" fill="#CF142B"/>
    <circle cx="75" cy="85" r="3" fill="#CF142B"/>
  </svg>`,

  germany: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <circle cx="50" cy="60" r="42" fill="#FFFFFF" stroke="#000000" stroke-width="4"/>
    <path d="M50,25 L58,45 L78,45 L62,56 L68,75 L50,63 L32,75 L38,56 L22,45 L42,45 Z" fill="#000000"/>
    <text x="50" y="93" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle" font-family="sans-serif">DFB</text>
    <polygon points="20,5 23,9 27,9 24,12 25,16 20,13 15,16 16,12 13,9 17,9" fill="#FFCC00"/>
    <polygon points="40,5 43,9 47,9 44,12 45,16 40,13 35,16 36,12 33,9 37,9" fill="#FFCC00"/>
    <polygon points="60,5 63,9 67,9 64,12 65,16 60,13 55,16 56,12 53,9 57,9" fill="#FFCC00"/>
    <polygon points="80,5 83,9 87,9 84,12 85,16 80,13 75,16 76,12 73,9 77,9" fill="#FFCC00"/>
  </svg>`,

  uruguay: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,12 L85,12 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#5B92E5" stroke="#F1BF00" stroke-width="4"/>
    <rect x="15" y="30" width="70" height="7" fill="#FFFFFF"/>
    <rect x="15" y="44" width="70" height="7" fill="#FFFFFF"/>
    <rect x="15" y="58" width="70" height="7" fill="#FFFFFF"/>
    <rect x="15" y="72" width="60" height="7" fill="#FFFFFF"/>
    <text x="50" y="100" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">AUF</text>
    <polygon points="25,2 28,6 32,6 29,9 30,13 25,10 20,13 21,9 18,6 22,6" fill="#F1BF00"/>
    <polygon points="42,2 45,6 49,6 46,9 47,13 42,10 37,13 38,9 35,6 39,6" fill="#F1BF00"/>
    <polygon points="58,2 61,6 65,6 62,9 63,13 58,10 53,13 54,9 51,6 55,6" fill="#F1BF00"/>
    <polygon points="75,2 78,6 82,6 79,9 80,13 75,10 70,13 71,9 68,6 72,6" fill="#F1BF00"/>
  </svg>`,

  colombia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#FCD116" stroke="#003893" stroke-width="4"/>
    <path d="M15,50 L85,50 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#003893"/>
    <path d="M15,75 L85,75 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#CE1126"/>
    <circle cx="50" cy="45" r="14" fill="#FFFFFF" stroke="#003893" stroke-width="2"/>
    <text x="50" y="50" font-size="10" font-weight="bold" fill="#003893" text-anchor="middle" font-family="sans-serif">FCF</text>
  </svg>`,

  mexico: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#006847" stroke="#C8102E" stroke-width="4"/>
    <circle cx="50" cy="55" r="22" fill="#FFFFFF"/>
    <path d="M50,38 Q58,40 55,50 Q60,52 56,62 Q44,62 40,52 Q42,40 50,38 Z" fill="#006847"/>
    <text x="50" y="98" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">FMF</text>
  </svg>`,

  usa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="#FFFFFF" stroke="#002868" stroke-width="4"/>
    <rect x="15" y="10" width="70" height="30" fill="#002868"/>
    <text x="50" y="32" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">USA</text>
    <rect x="23" y="40" width="8" height="60" fill="#BF0A30"/>
    <rect x="39" y="40" width="8" height="65" fill="#BF0A30"/>
    <rect x="55" y="40" width="8" height="65" fill="#BF0A30"/>
    <rect x="71" y="40" width="8" height="60" fill="#BF0A30"/>
  </svg>`
}

// Generate rest of standard national team badges
const countryCodes = [
  ['japan', 'JFA', '🇯🇵', '#000555', '#E60012'],
  ['morocco', 'FRMF', '🇲🇦', '#C1272D', '#006233'],
  ['netherlands', 'KNVB', '🇳🇱', '#F15A24', '#FFFFFF'],
  ['portugal', 'FPF', '🇵🇹', '#046A38', '#DA291C'],
  ['croatia', 'HNS', '🇭🇷', '#FF0000', '#FFFFFF'],
  ['italy', 'FIGC', '🇮🇹', '#0066BC', '#009246'],
  ['senegal', 'FSF', '🇸🇳', '#00853F', '#FDEF42'],
  ['nigeria', 'NFF', '🇳🇬', '#008751', '#FFFFFF'],
  ['ecuador', 'FEF', '🇪🇨', '#FFD100', '#002F6C'],
  ['chile', 'FFCh', '🇨🇱', '#D52B1E', '#0039A6'],
  ['paraguay', 'APF', '🇵🇾', '#D52B1E', '#0038A8'],
  ['peru', 'FPF', '🇵🇪', '#D91023', '#FFFFFF'],
  ['costa_rica', 'FCRF', '🇨🇷', '#002B7F', '#CE1126'],
  ['canada', 'Canada', '🇨🇦', '#FF0000', '#FFFFFF'],
  ['australia', 'FA', '🇦🇺', '#002B7F', '#FFCD00'],
  ['south_korea', 'KFA', '🇰🇷', '#C60C30', '#003478'],
  ['saudi_arabia', 'SAFF', '🇸🇦', '#006C35', '#FFFFFF'],
  ['iran', 'FFIRI', '🇮🇷', '#239F40', '#DA0000'],
  ['ghana', 'GFA', '🇬🇭', '#EF2B2D', '#FCD116'],
  ['cameroon', 'FECAFOOT', '🇨🇲', '#007A5E', '#CE1126'],
  ['algeria', 'FAF', '🇩🇿', '#006633', '#D21034'],
  ['egypt', 'EFA', '🇪🇬', '#C8102E', '#FFFFFF'],
  ['ivory_coast', 'FIF', '🇨🇮', '#FF8200', '#009A44'],
  ['tunisia', 'FTF', '🇹🇳', '#E70013', '#FFFFFF'],
  ['switzerland', 'ASF', '🇨🇭', '#D52B1E', '#FFFFFF'],
  ['denmark', 'DBU', '🇩🇰', '#C8102E', '#FFFFFF'],
  ['serbia', 'FSS', '🇷🇸', '#C6363C', '#0C4076'],
  ['polonia', 'PZPN', '🇵🇱', '#DC143C', '#FFFFFF'],
  ['belgium', 'RBFA', '🇧🇪', '#ED2939', '#FAE042'],
  ['austria', 'ÖFB', '🇦🇹', '#ED2939', '#FFFFFF']
]

for (const [slug, abbr, flag, bg, textCol] of countryCodes) {
  teamLogos[slug] =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="${bg}" stroke="${textCol}" stroke-width="4"/>
    <text x="50" y="50" font-size="28" text-anchor="middle">${flag}</text>
    <text x="50" y="85" font-size="11" font-weight="bold" fill="${textCol}" text-anchor="middle" font-family="sans-serif">${abbr}</text>
  </svg>`
}

for (const [slug, svg] of Object.entries(teamLogos)) {
  fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg)
}

console.log(
  `Generated ${Object.keys(teamLogos).length} World Cup team SVG logos in ${outDir}`
)
