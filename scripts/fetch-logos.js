import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return await res.text()
}

function parseTeamLinks(html, baseUrl = 'https://football-logos.cc') {
  const teams = []
  // Matches <a href="/country/team-slug/">Team Name</a> or similar links in team listings
  const regex =
    /<a\s+[^>]*href=["'](\/[a-z0-9-]+\/[a-z0-9-]+\/)["'][^>]*>(.*?)<\/a>/gi
  let match
  const seen = new Set()

  while ((match = regex.exec(html)) !== null) {
    const linkPath = match[1]
    let name = match[2].replace(/<[^>]+>/g, '').trim()
    if (
      !name ||
      name.toLowerCase().includes('view all') ||
      name.toLowerCase().includes('logo')
    )
      continue
    // Filter out standard nav/footer links that don't match country/team format
    if (
      linkPath.startsWith('/tournaments/') ||
      linkPath.startsWith('/all/') ||
      linkPath.startsWith('/new/')
    )
      continue

    if (!seen.has(linkPath)) {
      seen.add(linkPath)
      teams.push({
        url: new URL(linkPath, baseUrl).toString(),
        slug: linkPath.split('/').filter(Boolean).pop(),
        countrySlug: linkPath.split('/').filter(Boolean)[0],
        name
      })
    }
  }
  return teams
}

async function extractTeamLogoDetails(teamUrl) {
  const html = await fetchHtml(teamUrl)

  // Extract main logo image URL (prefer 256x256 or 700x700 PNG or SVG)
  // Example image src: https://assets.football-logos.cc/logos/argentina/256x256/argentina-national-team.7041952f.png
  // Or SVG link: href=".../logo.svg"
  const imgMatch =
    html.match(
      /https:\/\/assets\.football-logos\.cc\/logos\/[a-z0-9-]+\/(?:256x256|700x700|svg)\/[a-z0-9.-]+\.(?:png|svg)/i
    ) ||
    html.match(
      /https:\/\/assets\.football-logos\.cc\/logos\/[a-z0-9\/-_.-]+\.(?:png|svg)/i
    )

  const nameMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i)
  let titleName = nameMatch
    ? nameMatch[1]
        .replace(/<[^>]+>/g, '')
        .replace(/Logo.*$/i, '')
        .trim()
    : ''

  return {
    logoUrl: imgMatch ? imgMatch[0] : null,
    titleName
  }
}

async function downloadFile(url, destPath) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  fs.mkdirSync(path.dirname(destPath), { recursive: true })
  fs.writeFileSync(destPath, buffer)
}

async function main() {
  const args = process.argv.slice(2)
  let url = 'https://football-logos.cc/tournaments/fifa-world-cup-2026/'
  let offset = 0
  let limit = 20
  let outDir = path.join(__dirname, '../public/logos/world-cup-2026')

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) url = args[++i]
    if (args[i] === '--offset' && args[i + 1]) offset = parseInt(args[++i], 10)
    if (args[i] === '--limit' && args[i + 1]) limit = parseInt(args[++i], 10)
    if (args[i] === '--out' && args[i + 1]) outDir = path.resolve(args[++i])
  }

  console.log(`Fetching team list from ${url}...`)
  const html = await fetchHtml(url)
  const allTeams = parseTeamLinks(html)

  console.log(
    `Found ${allTeams.length} total teams. Extracting batch offset=${offset}, limit=${limit}...`
  )
  const batch = allTeams.slice(offset, offset + limit)

  const results = []

  for (let i = 0; i < batch.length; i++) {
    const team = batch[i]
    console.log(
      `[${i + 1}/${batch.length}] Fetching ${team.name} (${team.url})...`
    )
    try {
      const details = await extractTeamLogoDetails(team.url)
      if (details.logoUrl) {
        const ext = path.extname(details.logoUrl.split('?')[0]) || '.png'
        const fileName = `${team.slug}${ext}`
        const localPath = path.join(outDir, fileName)

        await downloadFile(details.logoUrl, localPath)

        const relativeLogoPath = `/logos/${path.basename(outDir)}/${fileName}`
        results.push({
          id: team.slug,
          name: details.titleName || team.name,
          logoUrl: relativeLogoPath,
          symbol: '⚽'
        })
        console.log(`  -> Downloaded ${fileName}`)
      } else {
        console.warn(`  -> No logo image found for ${team.name}`)
      }
    } catch (err) {
      console.error(`  -> Error processing ${team.name}:`, err.message)
    }
  }

  console.log('\n--- Batch Results Summary ---')
  console.log(JSON.stringify(results, null, 2))
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
