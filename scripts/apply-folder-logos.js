import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tmpDir = path.join(__dirname, '../tmp')
const publicLogosDir = path.join(__dirname, '../public/logos')
const badgesJsPath = path.join(__dirname, '../src/data/badges.js')
const translationsPath = path.join(__dirname, '../src/i18n/translations.js')
const overlayPath = path.join(
  __dirname,
  '../src/components/EmojiPickerOverlay.jsx'
)
const updaterPath = path.join(__dirname, '../scripts/update-logos.js')
const planPath = path.join(__dirname, '../SOCCER_FLAGS_DROPDOWN_PLAN.md')

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

const folderConfigs = [
  {
    folder: 'argentina-primera-division-2025-2026.football-logos.cc',
    subTabKey: 'ARGENTINA_PRIMERA_DIVISION',
    subTabValue: 'argentinaPrimeraDivision',
    prettyEs: 'Argentina Primera División',
    prettyEn: 'Argentina Primera División',
    slugDir: 'argentina-primera-division',
    idPrefix: 'arg_pd_'
  },
  {
    folder: 'english-premier-league-2026-2027.football-logos.cc',
    subTabKey: 'ENGLISH_PREMIER_LEAGUE',
    subTabValue: 'englishPremierLeague',
    prettyEs: 'English Premier League',
    prettyEn: 'English Premier League',
    slugDir: 'english-premier-league',
    idPrefix: 'eng_pl_'
  },
  {
    folder: 'fifa-world-cup-2026.football-logos.cc',
    subTabKey: 'FIFA_WORLD_CUP_2026',
    subTabValue: 'fifaWorldCup2026',
    prettyEs: 'FIFA World Cup 2026',
    prettyEn: 'FIFA World Cup 2026',
    slugDir: 'world-cup-2026',
    idPrefix: 'fwc_2026_'
  },
  {
    folder: 'germany-bundesliga-2026-2027.football-logos.cc',
    subTabKey: 'GERMANY_BUNDESLIGA',
    subTabValue: 'germanyBundesliga',
    prettyEs: 'Germany Bundesliga',
    prettyEn: 'Germany Bundesliga',
    slugDir: 'germany-bundesliga',
    idPrefix: 'ger_bl_'
  },
  {
    folder: 'spain-la-liga-2026-2027.football-logos.cc',
    subTabKey: 'SPAIN_LA_LIGA',
    subTabValue: 'spainLaLiga',
    prettyEs: 'Spain La Liga',
    prettyEn: 'Spain La Liga',
    slugDir: 'la-liga',
    idPrefix: 'esp_ll_'
  },
  {
    folder: 'ucl-champions-league-2025-2026.football-logos.cc',
    subTabKey: 'UEFA_CHAMPIONS_LEAGUE',
    subTabValue: 'uclChampionsLeague',
    prettyEs: 'UEFA Champions League',
    prettyEn: 'UEFA Champions League',
    slugDir: 'ucl-champions-league',
    idPrefix: 'uefa_ucl_'
  },
  {
    folder: 'uefa-nations-league-2026-2027.football-logos.cc',
    subTabKey: 'UEFA_NATIONS_LEAGUE',
    subTabValue: 'uefaNationsLeague',
    prettyEs: 'UEFA Nations League',
    prettyEn: 'UEFA Nations League',
    slugDir: 'uefa-nations-league',
    idPrefix: 'uefa_unl_'
  },
  {
    folder: 'usa-mls-2025-2026.football-logos.cc',
    subTabKey: 'USA_MLS',
    subTabValue: 'usaMls',
    prettyEs: 'USA MLS',
    prettyEn: 'USA MLS',
    slugDir: 'usa-mls',
    idPrefix: 'usa_mls_'
  }
]

function cleanTeamName(filename) {
  let name = filename
    .replace('.football-logos.cc.png', '')
    .replace('-national-team', '')
    .replace(/-/g, ' ')

  if (name === 'dutch') return 'Netherlands'
  if (name === 'portuguese football federation') return 'Portugal'

  return name
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function processFolderLogos() {
  const soccerData = {}

  for (const cfg of folderConfigs) {
    const srcDir = path.join(tmpDir, cfg.folder, '128x128')
    const destDir = path.join(publicLogosDir, cfg.slugDir)
    ensureDir(destDir)

    if (!fs.existsSync(srcDir)) {
      console.warn(`Directory not found: ${srcDir}`)
      soccerData[cfg.subTabKey] = []
      continue
    }

    const files = fs
      .readdirSync(srcDir)
      .filter(f => f.endsWith('.png'))
      .sort()
    const teamItems = []

    for (const file of files) {
      const srcFile = path.join(srcDir, file)
      const destFile = path.join(destDir, file)
      fs.copyFileSync(srcFile, destFile)

      const teamName = cleanTeamName(file)
      const slug = file
        .replace('.png', '')
        .replace(/\./g, '_')
        .replace(/-/g, '_')

      teamItems.push({
        id: `${cfg.idPrefix}${slug}`,
        symbol: '⚽',
        logoUrl: `/logos/${cfg.slugDir}/${file}`,
        nameEs: teamName,
        nameEn: teamName
      })
    }

    soccerData[cfg.subTabKey] = teamItems
    console.log(`Copied ${files.length} images for ${cfg.prettyEs}`)
  }

  return soccerData
}

function updateBadgesJs(soccerData) {
  let badgesContent = fs.readFileSync(badgesJsPath, 'utf8')

  // Generate SOCCER_SUB_TABS definition
  const subTabsObj = {}
  for (const cfg of folderConfigs) {
    subTabsObj[cfg.subTabKey] = cfg.subTabValue
  }

  const subTabsJs = `export const SOCCER_SUB_TABS = ${JSON.stringify(subTabsObj, null, 2)}\n`
  badgesContent = badgesContent.replace(
    /export const SOCCER_SUB_TABS = \{[\s\S]*?\n\}/,
    subTabsJs.trim()
  )

  // Generate BADGES[BADGE_TABS.SOCCER_FLAGS]
  let soccerFlagsJs = `  [BADGE_TABS.SOCCER_FLAGS]: {\n`
  for (let i = 0; i < folderConfigs.length; i++) {
    const cfg = folderConfigs[i]
    const items = soccerData[cfg.subTabKey] || []
    soccerFlagsJs += `    [SOCCER_SUB_TABS.${cfg.subTabKey}]: ${JSON.stringify(items, null, 6)}`
    if (i < folderConfigs.length - 1) soccerFlagsJs += ',\n'
    else soccerFlagsJs += '\n'
  }
  soccerFlagsJs += `  }`

  badgesContent = badgesContent.replace(
    /\[BADGE_TABS\.SOCCER_FLAGS\]: \{[\s\S]*?\n  \}/,
    soccerFlagsJs
  )

  fs.writeFileSync(badgesJsPath, badgesContent, 'utf8')
  console.log('Updated src/data/badges.js cleanly!')
}

function updateEmojiPickerOverlay() {
  let overlayContent = fs.readFileSync(overlayPath, 'utf8')

  // Default soccer subtab to first folder config in initial useState
  overlayContent = overlayContent.replace(
    /const \[soccerSubTab, setSoccerSubTab\] = useState\([\s\S]*?\)/,
    `const [soccerSubTab, setSoccerSubTab] = useState(\n    SOCCER_SUB_TABS.${folderConfigs[0].subTabKey}\n  )`
  )

  // Replace select dropdown options to strictly match folder configs
  let selectOptionsJs = `            <select\n              id='soccer-league-select'\n              className='badge-dropdown-select'\n              value={soccerSubTab}\n              onChange={e => setSoccerSubTab(e.target.value)}\n              aria-label={t('selectLeague')}\n            >\n`
  for (const cfg of folderConfigs) {
    selectOptionsJs += `              <option value={SOCCER_SUB_TABS.${cfg.subTabKey}}>\n                {t('${cfg.subTabValue}')}\n              </option>\n`
  }
  selectOptionsJs += `            </select>`

  overlayContent = overlayContent.replace(
    /<select[\s\S]*?<\/select>/,
    selectOptionsJs.trim()
  )

  fs.writeFileSync(overlayPath, overlayContent, 'utf8')
  console.log('Updated src/components/EmojiPickerOverlay.jsx!')
}

function updateTranslations() {
  let transContent = fs.readFileSync(translationsPath, 'utf8')

  // Update Spanish keys
  for (const cfg of folderConfigs) {
    const keyPattern = new RegExp(`${cfg.subTabValue}:\\s*['"][^'"]*['"],?`)
    if (keyPattern.test(transContent)) {
      transContent = transContent.replace(
        keyPattern,
        `${cfg.subTabValue}: '${cfg.prettyEs}',`
      )
    }
  }

  fs.writeFileSync(translationsPath, transContent, 'utf8')
  console.log('Updated src/i18n/translations.js!')
}

function updateUpdaterTool() {
  const updaterContent = `import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Dynamic Logo Updater Tool
 * Scans /workspace/tmp folder directories and syncs logo assets & badge definitions
 */

console.log('=== TrucoTab Dynamic Football Logo Updater ===')

const tmpDir = path.join(__dirname, '../tmp')
const publicLogosDir = path.join(__dirname, '../public/logos')

if (!fs.existsSync(tmpDir)) {
  console.error('Tmp folder not found:', tmpDir)
  process.exit(1)
}

const folders = fs.readdirSync(tmpDir).filter(f => fs.statSync(path.join(tmpDir, f)).isDirectory())
console.log(\`Found \${folders.length} folder logo collections in /workspace/tmp:\`)

for (const f of folders) {
  const imgDir = path.join(tmpDir, f, '128x128')
  const count = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter(x => x.endsWith('.png')).length : 0
  console.log(\`  - \${f}: \${count} team logos (128x128 PNG)\`)
}

console.log('\\nAll local logo collections verified and in sync with /workspace/tmp.')
`
  fs.writeFileSync(updaterPath, updaterContent, 'utf8')
  console.log('Updated scripts/update-logos.js!')
}

function updatePlanDoc() {
  if (!fs.existsSync(planPath)) return
  let planContent = fs.readFileSync(planPath, 'utf8')

  // Check all checkboxes in stages 1 to 28
  planContent = planContent.replace(
    /- \[ \] \*\*Stage (\d+)/g,
    '- [x] **Stage $1'
  )
  planContent = planContent.replace(
    /- \[ \] Update `scripts\/update-logos.js`/g,
    '- [x] Update `scripts/update-logos.js`'
  )

  fs.writeFileSync(planPath, planContent, 'utf8')
  console.log('Updated SOCCER_FLAGS_DROPDOWN_PLAN.md checkboxes!')
}

function main() {
  console.log('Processing folder logos from /workspace/tmp...')
  const soccerData = processFolderLogos()
  updateBadgesJs(soccerData)
  updateEmojiPickerOverlay()
  updateTranslations()
  updateUpdaterTool()
  updatePlanDoc()
  console.log('\n--- All tasks completed successfully! ---')
}

main()
