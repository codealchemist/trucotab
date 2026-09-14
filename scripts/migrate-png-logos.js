import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tmpDir = path.join(__dirname, '../tmp')
const publicLogosDir = path.join(__dirname, '../public/logos')
const badgesJsPath = path.join(__dirname, '../src/data/badges.js')
const planPath = path.join(__dirname, '../PNG_LOGO_MIGRATION_PLAN.md')

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

const dirMap = [
  {
    name: 'FIFA World Cup 2026',
    subDir: 'fifa-world-cup-2026.football-logos.cc/128x128',
    targetDir: 'world-cup-2026',
    badgeKey: 'WORLD_CUP_2026'
  },
  {
    name: 'English Premier League',
    subDir: 'english-premier-league-2026-2027.football-logos.cc/128x128',
    targetDir: 'english-premier-league',
    badgeKey: 'PREMIER_LEAGUE'
  },
  {
    name: 'UEFA Champions League',
    subDir: 'ucl-champions-league-2025-2026.football-logos.cc/128x128',
    targetDir: 'uefa-champions-league',
    badgeKey: 'CHAMPIONS_LEAGUE'
  },
  {
    name: 'La Liga',
    subDir: 'spain-la-liga-2026-2027.football-logos.cc/128x128',
    targetDir: 'la-liga',
    badgeKey: 'LA_LIGA'
  },
  {
    name: 'Bundesliga',
    subDir: 'germany-bundesliga-2026-2027.football-logos.cc/128x128',
    targetDir: 'bundesliga',
    badgeKey: 'BUNDESLIGA'
  },
  {
    name: 'Primera División Argentina',
    subDir: 'argentina-primera-division-2025-2026.football-logos.cc/128x128',
    targetDir: 'primera-division',
    badgeKey: 'PRIMERA_DIVISION'
  },
  {
    name: 'MLS',
    subDir: 'usa-mls-2025-2026.football-logos.cc/128x128',
    targetDir: 'mls',
    badgeKey: 'MLS'
  },
  {
    name: 'UEFA Nations League',
    subDir: 'uefa-nations-league-2026-2027.football-logos.cc/128x128',
    targetDir: 'uefa-nations-league',
    badgeKey: 'NATIONS_LEAGUE'
  }
]

function buildAllStages() {
  const stages = {}
  let stageNum = 1

  for (const item of dirMap) {
    const fullSubDir = path.join(tmpDir, item.subDir)
    if (!fs.existsSync(fullSubDir)) continue

    const files = fs
      .readdirSync(fullSubDir)
      .filter(f => f.endsWith('.png'))
      .sort()

    for (let i = 0; i < files.length; i += 10) {
      const batchFiles = files.slice(i, i + 10)
      stages[stageNum] = {
        stageNum,
        name: item.name,
        subDir: item.subDir,
        targetDir: item.targetDir,
        badgeKey: item.badgeKey,
        files: batchFiles.map(src => {
          const cleanName = src
            .replace('.football-logos.cc.png', '.png')
            .replace('-national-team.png', '.png')
            .replace('dutch-', 'netherlands-')
            .replace('portuguese-football-federation', 'portugal')
          return { src, target: cleanName }
        })
      }
      stageNum++
    }
  }

  return stages
}

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function runStage(stageNum, stages, badgesJsContent) {
  const stage = stages[stageNum]
  if (!stage) {
    console.error(`Stage ${stageNum} not found`)
    return badgesJsContent
  }

  const sourceFolder = path.join(tmpDir, stage.subDir)
  const destFolder = path.join(publicLogosDir, stage.targetDir)
  ensureDir(destFolder)

  console.log(
    `\n=== Executing Stage ${stageNum}: ${stage.name} (${stage.files.length} teams) ===`
  )

  for (const item of stage.files) {
    const srcPath = path.join(sourceFolder, item.src)
    const destPath = path.join(destFolder, item.target)

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`  [Copied] ${item.src} -> ${item.target}`)

      const logoUrl = `/logos/${stage.targetDir}/${item.target}`
      const baseSlug = item.target.replace('.png', '')

      const oldSvgUrl = `/logos/${stage.targetDir}/${baseSlug}.svg`
      if (badgesJsContent.includes(oldSvgUrl)) {
        badgesJsContent = badgesJsContent.replace(oldSvgUrl, logoUrl)
      } else {
        const normSlug = normalize(baseSlug)
        const lines = badgesJsContent.split('\n')
        let replaced = false
        for (let l = 0; l < lines.length; l++) {
          const lineNorm = normalize(lines[l])
          if (lineNorm.includes(normSlug) && lines[l].includes('logoUrl:')) {
            lines[l] = lines[l].replace(
              /logoUrl:\s*['"][^'"]+['"]/,
              `logoUrl: '${logoUrl}'`
            )
            replaced = true
            break
          }
        }
        if (replaced) {
          badgesJsContent = lines.join('\n')
        }
      }
    } else {
      console.warn(`  [Warning] Source file not found: ${srcPath}`)
    }
  }

  return badgesJsContent
}

function updatePlanDoc(completedStages) {
  if (!fs.existsSync(planPath)) return
  let planContent = fs.readFileSync(planPath, 'utf8')

  for (const stageNum of completedStages) {
    const regex = new RegExp(
      `(- \\[ \\] \\*\\*Stage ${stageNum}(?: \\([^\\)]+\\))?\\*\\*)`,
      'g'
    )
    if (regex.test(planContent)) {
      planContent = planContent.replace(regex, `- [x] **Stage ${stageNum}**`)
    }
  }

  fs.writeFileSync(planPath, planContent, 'utf8')
  console.log('Updated PNG_LOGO_MIGRATION_PLAN.md checkboxes.')
}

async function main() {
  const stages = buildAllStages()
  const args = process.argv.slice(2)

  let startStage = 1
  let endStage = Object.keys(stages).length

  if (args.includes('--stage')) {
    const s = parseInt(args[args.indexOf('--stage') + 1], 10)
    startStage = s
    endStage = s
  } else if (args.includes('--from-stage')) {
    startStage = parseInt(args[args.indexOf('--from-stage') + 1], 10)
  }

  let badgesJsContent = fs.readFileSync(badgesJsPath, 'utf8')
  const completedStages = []

  for (let s = startStage; s <= endStage; s++) {
    if (stages[s]) {
      badgesJsContent = runStage(s, stages, badgesJsContent)
      completedStages.push(s)
    }
  }

  fs.writeFileSync(badgesJsPath, badgesJsContent, 'utf8')
  console.log('\nUpdated src/data/badges.js successfully!')

  updatePlanDoc(completedStages)
}

main().catch(err => console.error(err))
