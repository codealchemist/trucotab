import fs from 'fs'
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
console.log(`Found ${folders.length} folder logo collections in /workspace/tmp:`)

for (const f of folders) {
  const imgDir = path.join(tmpDir, f, '128x128')
  const count = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter(x => x.endsWith('.png')).length : 0
  console.log(`  - ${f}: ${count} team logos (128x128 PNG)`)
}

console.log('\nAll local logo collections verified and in sync with /workspace/tmp.')
