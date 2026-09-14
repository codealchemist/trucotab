import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function createCrestSvg(
  initials,
  primaryColor,
  secondaryColor,
  accentColor = '#FFFFFF',
  shape = 'shield'
) {
  let shapePath = `<path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="${primaryColor}" stroke="${accentColor}" stroke-width="4"/>`
  if (shape === 'circle') {
    shapePath = `<circle cx="50" cy="60" r="45" fill="${primaryColor}" stroke="${accentColor}" stroke-width="4"/>`
  } else if (shape === 'diamond') {
    shapePath = `<polygon points="50,10 90,60 50,110 10,60" fill="${primaryColor}" stroke="${accentColor}" stroke-width="4"/>`
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    ${shapePath}
    <path d="M50,15 L85,10 L85,40 Q50,45 15,40 L15,10 Z" fill="${secondaryColor}" opacity="0.8"/>
    <circle cx="50" cy="60" r="22" fill="${accentColor}" opacity="0.2"/>
    <text x="50" y="66" font-size="16" font-weight="900" fill="${accentColor}" text-anchor="middle" font-family="system-ui, sans-serif" letter-spacing="-0.5">${initials}</text>
  </svg>`
}

// 1. World Cup Remaining (Stage 1.3)
const wcDir = path.join(__dirname, '../public/logos/world-cup-2026')
ensureDir(wcDir)

const wcTeams = [
  ['czech_republic', 'FACR', '🇨🇿', '#D7141A', '#11457E'],
  ['wales', 'FAW', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', '#C8102E', '#00AB6B'],
  ['scotland', 'SFA', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '#002B7F', '#FFFFFF'],
  ['turkey', 'TFF', '🇹🇷', '#E30A17', '#FFFFFF'],
  ['greece', 'EPO', '🇬🇷', '#0D5EAF', '#FFFFFF'],
  ['ukraine', 'UAF', '🇺🇦', '#FFD700', '#005BBB'],
  ['slovakia', 'SFZ', '🇸🇰', '#0B4EA2', '#EE1C25'],
  ['south_africa', 'SAFA', '🇿🇦', '#007749', '#FFB81C'],
  ['qatar', 'QFA', '🇶🇦', '#8A1538', '#FFFFFF'],
  ['panama', 'FEPAFUT', '🇵🇦', '#DA121A', '#00247D'],
  ['iraq', 'IFA', '🇮🇶', '#007A3D', '#CE1126'],
  ['uzbekistan', 'UFA', '🇺🇿', '#0099B5', '#1EB53A'],
  ['new_zealand', 'NZF', '🇳🇿', '#000000', '#FFFFFF'],
  ['haiti', 'FHF', '🇭🇹', '#00209F', '#D21034'],
  ['curacao', 'FFK', '🇨🇼', '#002B7F', '#F9E814'],
  ['bolivia', 'FBF', '🇧🇴', '#007A3D', '#F9E814'],
  ['honduras', 'FFH', '🇭🇳', '#0073CF', '#FFFFFF'],
  ['jamaica', 'JFF', '🇯🇲', '#009B3A', '#FED100']
]

for (const [slug, abbr, flag, bg, textCol] of wcTeams) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M15,10 L85,10 L85,65 C85,95 50,115 50,115 C50,115 15,95 15,65 Z" fill="${bg}" stroke="${textCol}" stroke-width="4"/>
    <text x="50" y="50" font-size="28" text-anchor="middle">${flag}</text>
    <text x="50" y="85" font-size="11" font-weight="bold" fill="${textCol}" text-anchor="middle" font-family="sans-serif">${abbr}</text>
  </svg>`
  fs.writeFileSync(path.join(wcDir, `${slug}.svg`), svg)
}

// 2. Premier League
const plDir = path.join(__dirname, '../public/logos/english-premier-league')
ensureDir(plDir)

const plTeams = [
  ['arsenal', 'ARS', '#EF0107', '#063672'],
  ['aston_villa', 'AVL', '#95BFE5', '#670E36'],
  ['bournemouth', 'BOU', '#DA291C', '#000000'],
  ['brentford', 'BRE', '#E30613', '#FFFFFF'],
  ['brighton', 'BHA', '#0057B8', '#FFFFFF'],
  ['chelsea', 'CHE', '#034694', '#DBA111'],
  ['crystal_palace', 'CRY', '#1B458F', '#C41230'],
  ['everton', 'EVE', '#00369C', '#FFFFFF'],
  ['fulham', 'FUL', '#000000', '#CC0000'],
  ['ipswich_town', 'IPS', '#0038A8', '#FFFFFF'],
  ['leicester_city', 'LEI', '#0053A0', '#FDBE11'],
  ['liverpool', 'LIV', '#C8102E', '#00B2A9'],
  ['manchester_city', 'MCI', '#6CABDD', '#1C2C5B', '#FFFFFF', 'circle'],
  ['manchester_united', 'MUN', '#DA291C', '#FFE500'],
  ['newcastle_united', 'NEW', '#241F20', '#FFFFFF'],
  ['nottingham_forest', 'NFO', '#DD0000', '#FFFFFF'],
  ['southampton', 'SOU', '#D91A2A', '#000000'],
  ['tottenham_hotspur', 'TOT', '#132257', '#FFFFFF'],
  ['west_ham_united', 'WHU', '#7A263A', '#1BB1E7'],
  ['wolverhampton', 'WOL', '#FDB913', '#231F20']
]

for (const [slug, init, c1, c2, c3, shape] of plTeams) {
  fs.writeFileSync(
    path.join(plDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

// 3. Champions League
const clDir = path.join(__dirname, '../public/logos/uefa-champions-league')
ensureDir(clDir)

const clTeams = [
  ['real_madrid', 'RMA', '#FEFEFE', '#FEBE10', '#00529F'],
  ['manchester_city', 'MCI', '#6CABDD', '#1C2C5B'],
  ['bayern_munich', 'BAY', '#DC052D', '#0066B2', '#FFFFFF', 'circle'],
  ['psg', 'PSG', '#004170', '#DA291C', '#FFFFFF', 'circle'],
  ['fc_barcelona', 'BAR', '#004D98', '#A50044'],
  ['liverpool', 'LIV', '#C8102E', '#00B2A9'],
  ['inter_milan', 'INT', '#0066B2', '#000000', '#FFFFFF', 'circle'],
  ['borussia_dortmund', 'BVB', '#FDE100', '#000000', '#FFFFFF', 'circle'],
  ['rb_leipzig', 'RBL', '#DD011D', '#09142B'],
  ['bayer_leverkusen', 'B04', '#E32219', '#000000'],
  ['atletico_madrid', 'ATM', '#CB3524', '#272E61'],
  ['atalanta', 'ATA', '#1E71B8', '#000000'],
  ['juventus', 'JUV', '#000000', '#FFFFFF'],
  ['benfica', 'SLB', '#E83023', '#000000'],
  ['sporting_cp', 'SCP', '#008048', '#FFD100'],
  ['club_brugge', 'BRU', '#000000', '#00A3E0'],
  ['feyenoord', 'FEY', '#ED1C24', '#000000'],
  ['psv_eindhoven', 'PSV', '#ED1C24', '#FFFFFF'],
  ['shakhtar_donetsk', 'SHK', '#F26522', '#000000'],
  ['celtic', 'CEL', '#008542', '#FFFFFF', '#FFFFFF', 'circle'],
  ['rb_salzburg', 'SAL', '#DD011D', '#002B7F'],
  ['young_boys', 'YB', '#FFCC00', '#000000'],
  ['dinamo_zagreb', 'DZG', '#0054A6', '#FFFFFF'],
  ['sparta_praha', 'SPA', '#1B365D', '#AC1529'],
  ['bologna', 'BOL', '#A71930', '#122648'],
  ['girona', 'GIR', '#ED1B2D', '#FFFFFF'],
  ['vfb_stuttgart', 'VFB', '#E32219', '#FFFFFF'],
  ['sturm_graz', 'STU', '#000000', '#FFFFFF'],
  ['brest', 'SB29', '#E20613', '#FFFFFF'],
  ['monaco', 'ASM', '#ED1C24', '#FFD700']
]

for (const [slug, init, c1, c2, c3, shape] of clTeams) {
  fs.writeFileSync(
    path.join(clDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

// 4. La Liga
const llDir = path.join(__dirname, '../public/logos/la-liga')
ensureDir(llDir)

const llTeams = [
  ['athletic_club', 'ATH', '#EE2523', '#FFFFFF'],
  ['atletico_madrid', 'ATM', '#CB3524', '#272E61'],
  ['osasuna', 'OSA', '#D91A2A', '#002B7F'],
  ['leganes', 'LEG', '#00529F', '#FFFFFF'],
  ['celta_vigo', 'CEL', '#8BB8E8', '#CE1126'],
  ['alaves', 'ALA', '#00529F', '#FFFFFF'],
  ['fc_barcelona', 'BAR', '#004D98', '#A50044'],
  ['getafe', 'GET', '#00529F', '#FFFFFF'],
  ['girona', 'GIR', '#ED1B2D', '#FFFFFF'],
  ['rayo_vallecano', 'RAY', '#FFFFFF', '#E30613'],
  ['real_betis', 'BET', '#00A550', '#FFFFFF'],
  ['real_madrid', 'RMA', '#FEFEFE', '#FEBE10', '#00529F'],
  ['real_sociedad', 'RSO', '#00529F', '#FFFFFF'],
  ['real_valladolid', 'VLL', '#662D91', '#FFFFFF'],
  ['sevilla', 'SEV', '#FFFFFF', '#D0021B'],
  ['las_palmas', 'LPA', '#FEE100', '#00529F'],
  ['valencia', 'VAL', '#FFFFFF', '#FF6600'],
  ['villarreal', 'VIL', '#FFE500', '#00529F'],
  ['espanyol', 'ESP', '#00529F', '#FFFFFF'],
  ['mallorca', 'MLL', '#E30613', '#000000']
]

for (const [slug, init, c1, c2, c3, shape] of llTeams) {
  fs.writeFileSync(
    path.join(llDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

// 5. Bundesliga
const blDir = path.join(__dirname, '../public/logos/bundesliga')
ensureDir(blDir)

const blTeams = [
  ['heidenheim', 'FCH', '#E20613', '#003A70'],
  ['union_berlin', 'FCU', '#D0021B', '#FFE500'],
  ['mainz_05', 'M05', '#D0021B', '#FFFFFF'],
  ['bayer_leverkusen', 'B04', '#E32219', '#000000'],
  ['bayern_munich', 'BAY', '#DC052D', '#0066B2'],
  ['borussia_dortmund', 'BVB', '#FDE100', '#000000'],
  ['monchengladbach', 'BMG', '#000000', '#009640'],
  ['eintracht_frankfurt', 'SGE', '#E30613', '#000000'],
  ['fc_augsburg', 'FCA', '#C8102E', '#008542'],
  ['rb_leipzig', 'RBL', '#DD011D', '#09142B'],
  ['sc_freiburg', 'SCF', '#D0021B', '#000000'],
  ['fc_st_pauli', 'STP', '#4B2D1D', '#FFFFFF'],
  ['hoffenheim', 'TSG', '#00529F', '#FFFFFF'],
  ['vfb_stuttgart', 'VFB', '#E32219', '#FFFFFF'],
  ['vfl_wolfsburg', 'WOB', '#65B32E', '#FFFFFF'],
  ['werder_bremen', 'SVW', '#008B47', '#FFFFFF', '#FFFFFF', 'diamond'],
  ['holstein_kiel', 'KSV', '#00529F', '#E30613'],
  ['vfl_bochum', 'BOC', '#00529F', '#FFFFFF']
]

for (const [slug, init, c1, c2, c3, shape] of blTeams) {
  fs.writeFileSync(
    path.join(blDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

// 6. Primera Division (Argentina)
const pdDir = path.join(__dirname, '../public/logos/primera-division')
ensureDir(pdDir)

const pdTeams = [
  ['argentinos_juniors', 'AAA', '#D0021B', '#FFFFFF'],
  ['atletico_tucuman', 'DKA', '#75AADB', '#FFFFFF'],
  ['banfield', 'CAB', '#007A3D', '#FFFFFF'],
  ['barracas_central', 'BAR', '#D0021B', '#FFFFFF'],
  ['belgrano', 'CAB', '#75AADB', '#FFFFFF'],
  ['boca_juniors', 'CABJ', '#0038A8', '#FFCC00'],
  ['central_cordoba', 'CCO', '#000000', '#FFFFFF'],
  ['defensa_y_justicia', 'DYJ', '#FFCC00', '#007A3D'],
  ['deportivo_riestra', 'RIE', '#000000', '#FFFFFF'],
  ['estudiantes_lp', 'EDLP', '#D0021B', '#FFFFFF'],
  ['gimnasia_lp', 'GELP', '#002B7F', '#FFFFFF'],
  ['godoy_cruz', 'TOM', '#0038A8', '#FFFFFF'],
  ['huracan', 'CAH', '#FFFFFF', '#D0021B'],
  ['independiente', 'CAI', '#D0021B', '#FFFFFF'],
  ['ind_rivadavia', 'CSIR', '#002B7F', '#FFFFFF'],
  ['instituto', 'IACC', '#D0021B', '#FFFFFF'],
  ['lanus', 'CAL', '#670E36', '#FFFFFF'],
  ['newells', 'NOB', '#D0021B', '#000000'],
  ['platense', 'CAP', '#5C3317', '#FFFFFF'],
  ['racing_club', 'RAC', '#75AADB', '#FFFFFF'],
  ['river_plate', 'CARP', '#FFFFFF', '#D0021B'],
  ['rosario_central', 'CARC', '#0038A8', '#FFCC00'],
  ['san_lorenzo', 'CASLA', '#002B7F', '#D0021B'],
  ['sarmiento', 'CAS', '#007A3D', '#FFCC00'],
  ['talleres', 'CAT', '#002B7F', '#FFFFFF'],
  ['tigre', 'CAT', '#002B7F', '#D0021B'],
  ['union', 'CAU', '#D0021B', '#FFFFFF'],
  ['velez_sarsfield', 'CAVS', '#FFFFFF', '#0038A8']
]

for (const [slug, init, c1, c2, c3, shape] of pdTeams) {
  fs.writeFileSync(
    path.join(pdDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

// 7. MLS
const mlsDir = path.join(__dirname, '../public/logos/mls')
ensureDir(mlsDir)

const mlsTeams = [
  ['atlanta_united', 'ATL', '#800000', '#231F20', '#FFD700'],
  ['austin_fc', 'ATX', '#00B140', '#000000'],
  ['charlotte_fc', 'CLT', '#1A85C8', '#000000'],
  ['chicago_fire', 'CHI', '#FF0000', '#001E62'],
  ['fc_cincinnati', 'CIN', '#F05323', '#002B49'],
  ['colorado_rapids', 'COL', '#862633', '#8BB8E8'],
  ['columbus_crew', 'CLB', '#FED100', '#000000'],
  ['dc_united', 'DCU', '#EF3340', '#000000'],
  ['fc_dallas', 'DAL', '#E31837', '#002F6C'],
  ['houston_dynamo', 'HOU', '#FF6B00', '#000000'],
  ['inter_miami', 'MIA', '#F7B5CD', '#231F20'],
  ['la_galaxy', 'LAG', '#00245D', '#FFD100'],
  ['lafc', 'LAFC', '#000000', '#C39B53'],
  ['minnesota_united', 'MIN', '#8B9D9D', '#DF2827'],
  ['cf_montreal', 'MTL', '#00529F', '#000000'],
  ['nashville_sc', 'NSH', '#ECE81A', '#1F1F56'],
  ['new_england_rev', 'NER', '#002B49', '#CE0E2D'],
  ['ny_red_bulls', 'RBNY', '#D0021B', '#FFD100'],
  ['nycfc', 'NYC', '#6CACE4', '#001A72'],
  ['orlando_city', 'ORL', '#633492', '#FDE100'],
  ['philadelphia_union', 'PHI', '#002D56', '#B3995D'],
  ['portland_timbers', 'POR', '#00482B', '#EAAA00'],
  ['real_salt_lake', 'RSL', '#B30838', '#002D62'],
  ['sj_earthquakes', 'SJE', '#0067B1', '#000000'],
  ['seattle_sounders', 'SEA', '#5C9A22', '#005595'],
  ['st_louis_city', 'STL', '#E3004F', '#00142D'],
  ['sporting_kc', 'SKC', '#91B0D5', '#002A5C'],
  ['toronto_fc', 'TFC', '#B81137', '#424242'],
  ['vancouver_whitecaps', 'VAN', '#00245D', '#99B5DD'],
  ['san_diego_fc', 'SDFC', '#183028', '#1890A8']
]

for (const [slug, init, c1, c2, c3, shape] of mlsTeams) {
  fs.writeFileSync(
    path.join(mlsDir, `${slug}.svg`),
    createCrestSvg(init, c1, c2, c3 || '#FFFFFF', shape)
  )
}

console.log('All league logo SVG assets generated successfully!')
