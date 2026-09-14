# Logo Extraction & Integration Plan

This document outlines a staged plan for downloading, storing, and integrating football logos from [football-logos.cc](https://football-logos.cc) into **TrucoTab**.

---

## 🎯 Architecture & Workflow Strategy

To ensure minimal manual effort and full integration for each stage:

1. **Download Stage**: A Node.js helper script (`scripts/fetch-logos.js`) downloads SVG/PNG logo assets into `public/logos/<competition-slug>/` for a batch of 20 teams.
2. **Application & Integration Stage**: Immediately after each download stage:
   - Register downloaded team logo paths (`/logos/<competition-slug>/<team-slug>.png` or `.svg`) in `src/data/badges.js`.
   - Update `EmojiPickerOverlay.jsx` with any new league/tournament sub-tabs or badge rendering logic as needed.
   - Verify the application builds (`npm run build`) and badges render correctly in the player emoji modal picker.
3. **Automated Logo Updater Tool**: A CLI tool (`scripts/update-logos.js` / `npm run update-logos`) allows re-checking and refreshing all downloaded logos periodically.

---

## 📅 Execution Roadmap

### Stage 1: FIFA World Cup 2026

Source: `https://football-logos.cc/tournaments/fifa-world-cup-2026/` (or `https://football-logos.cc/national-teams/`)
Estimated total: ~48 national teams

- [x] **Stage 1.1: FIFA World Cup 2026 (Teams 1–20)**
  - **1.1a Download**: Download logo assets for Argentina, Brazil, France, Spain, England, Germany, Uruguay, Colombia, Mexico, USA, Japan, Morocco, Netherlands, Portugal, Croatia, Italy, Senegal, Nigeria, Ecuador, Chile into `public/logos/world-cup-2026/`.
  - **1.1b Application**: Update `src/data/badges.js` and `EmojiPickerOverlay.jsx` to introduce World Cup 2026 badges in the application badge selector.
- [x] **Stage 1.2: FIFA World Cup 2026 (Teams 21–40)**
  - **1.2a Download**: Download logo assets for Paraguay, Peru, Costa Rica, Canada, Australia, South Korea, Saudi Arabia, Iran, Ghana, Cameroon, Algeria, Egypt, Ivory Coast, Tunisia, Switzerland, Denmark, Serbia, Poland, Belgium, Austria into `public/logos/world-cup-2026/`.
  - **1.2b Application**: Register Teams 21–40 in `src/data/badges.js` and test in player emoji modal.
- [x] **Stage 1.3: FIFA World Cup 2026 (Teams 41–48+)**
  - **1.3a Download**: Download logo assets for remaining qualified / play-off teams into `public/logos/world-cup-2026/`.
  - **1.3b Application**: Register remaining teams in `src/data/badges.js` and verify rendering in the app.

---

### Stage 2: English Premier League

Source: `https://football-logos.cc/england/english-premier-league/`
Total: 20 teams

- [x] **Stage 2.1: English Premier League (Teams 1–20)**
  - **2.1a Download**: Download logo assets for Arsenal, Aston Villa, Bournemouth, Brentford, Brighton, Chelsea, Crystal Palace, Everton, Fulham, Ipswich, Leicester City, Liverpool, Manchester City, Manchester United, Newcastle United, Nottingham Forest, Southampton, Tottenham Hotspur, West Ham United, Wolverhampton Wanderers into `public/logos/english-premier-league/`.
  - **2.1b Application**: Add Premier League sub-tab in `EmojiPickerOverlay.jsx`, update `src/data/badges.js`, and verify rendering in the app.

---

### Stage 3: UEFA Champions League

Source: `https://football-logos.cc/tournaments/uefa-champions-league/`
Total: 36 teams (New League Phase format)

- [x] **Stage 3.1: UEFA Champions League (Teams 1–20)**
  - **3.1a Download**: Download logo assets for Real Madrid, Manchester City, Bayern München, Paris Saint-Germain, FC Barcelona, Liverpool, Inter Milan, Borussia Dortmund, RB Leipzig, Bayer Leverkusen, Atlético Madrid, Atalanta, Juventus, Benfica, Sporting CP, Club Brugge, Feyenoord, PSV Eindhoven, Shakhtar Donetsk, Celtic into `public/logos/uefa-champions-league/`.
  - **3.1b Application**: Add Champions League sub-tab, register teams in `src/data/badges.js`, and verify rendering in the app.
- [x] **Stage 3.2: UEFA Champions League (Teams 21–36)**
  - **3.2a Download**: Download logo assets for Red Bull Salzburg, Young Boys, Dinamo Zagreb, Sparta Praha, Aston Villa, Bologna, Girona, VfB Stuttgart, Sturm Graz, Brest, Monaco, Sparta Rotterdam, and remaining qualified clubs into `public/logos/uefa-champions-league/`.
  - **3.2b Application**: Register Teams 21–36 in `src/data/badges.js` and verify rendering in the app.

---

### Stage 4: La Liga

Source: `https://football-logos.cc/spain/la-liga/`
Total: 20 teams

- [x] **Stage 4.1: La Liga (Teams 1–20)**
  - **4.1a Download**: Download logo assets for Athletic Club, Atlético Madrid, CA Osasuna, CD Leganés, Celta de Vigo, Deportivo Alavés, FC Barcelona, Getafe CF, Girona FC, Rayo Vallecano, Real Betis, Real Madrid, Real Sociedad, Real Valladolid, Sevilla FC, UD Las Palmas, Valencia CF, Villarreal CF, RCD Espanyol, RCD Mallorca into `public/logos/la-liga/`.
  - **4.1b Application**: Add La Liga sub-tab, update `src/data/badges.js`, and verify rendering in the app.

---

### Stage 5: Bundesliga

Source: `https://football-logos.cc/germany/bundesliga/`
Total: 18 teams

- [x] **Stage 5.1: Bundesliga (Teams 1–18)**
  - **5.1a Download**: Download logo assets for 1. FC Heidenheim, 1. FC Union Berlin, 1. FSV Mainz 05, Bayer 04 Leverkusen, FC Bayern München, Borussia Dortmund, Borussia Mönchengladbach, Eintracht Frankfurt, FC Augsburg, RB Leipzig, SC Freiburg, FC St. Pauli, TSG 1899 Hoffenheim, VfB Stuttgart, VfL Wolfsburg, SV Werder Bremen, Holstein Kiel, VfL Bochum into `public/logos/bundesliga/`.
  - **5.1b Application**: Add Bundesliga sub-tab, update `src/data/badges.js`, and verify rendering in the app.

---

### Stage 6: Primera División (Argentina)

Source: `https://football-logos.cc/argentina/argentina-primera-division/`
Total: 28 teams

- [x] **Stage 6.1: Primera División (Teams 1–20)**
  - **6.1a Download**: Download logo assets for Argentinos Juniors, Atlético Tucumán, Banfield, Barracas Central, Belgrano, Boca Juniors, Central Córdoba, Defensa y Justicia, Deportivo Riestra, Estudiantes LP, Gimnasia LP, Godoy Cruz, Huracán, Independiente, Independiente Rivadavia, Instituto, Lanús, Newell's Old Boys, Platense, Racing Club into `public/logos/primera-division/`.
  - **6.1b Application**: Add Primera División sub-tab, update `src/data/badges.js`, and verify rendering in the app.
- [x] **Stage 6.2: Primera División (Teams 21–28)**
  - **6.2a Download**: Download logo assets for River Plate, Rosario Central, San Lorenzo, Sarmiento, Talleres, Tigre, Unión, Vélez Sarsfield into `public/logos/primera-division/`.
  - **6.2b Application**: Register Teams 21–28 in `src/data/badges.js` and verify rendering in the app.

---

### Stage 7: MLS (Major League Soccer)

Source: `https://football-logos.cc/usa/mls/`
Total: 30 teams

- [x] **Stage 7.1: MLS (Teams 1–20)**
  - **7.1a Download**: Download logo assets for Atlanta United, Austin FC, Charlotte FC, Chicago Fire, FC Cincinnati, Colorado Rapids, Columbus Crew, D.C. United, FC Dallas, Houston Dynamo, Inter Miami CF, LA Galaxy, Los Angeles FC, Minnesota United, CF Montréal, Nashville SC, New England Revolution, New York Red Bulls, New York City FC, Orlando City into `public/logos/mls/`.
  - **7.1b Application**: Add MLS sub-tab, update `src/data/badges.js`, and verify rendering in the app.
- [x] **Stage 7.2: MLS (Teams 21–30)**
  - **7.2a Download**: Download logo assets for Philadelphia Union, Portland Timbers, Real Salt Lake, San Jose Earthquakes, Seattle Sounders, St. Louis City SC, Sporting Kansas City, Toronto FC, Vancouver Whitecaps, San Diego FC into `public/logos/mls/`.
  - **7.2b Application**: Register Teams 21–30 in `src/data/badges.js` and verify rendering in the app.

---

### Stage 8: Automated Logo Updater Tool

Build a reusable CLI updater script (`scripts/update-logos.js` / `npm run update-logos`) to check and refresh team and league logos periodically.

- [x] **Stage 8.1: Implement Automated Updater Script**
  - Create `scripts/update-logos.js` supporting flags `--league`, `--all`, and `--check-only`.
  - Scrape or query latest league/tournament team lists and asset URLs from `football-logos.cc`.
  - Compare local stored assets in `public/logos/` against remote hashes/timestamps.
  - Download new/updated SVG and PNG logos automatically.
  - Automatically update or regenerate `src/data/badges.js` team references.
  - Add npm script shortcut `"update-logos": "node scripts/update-logos.js"` to `package.json`.

---

## 🛠️ Automated Extraction Helper

A script `scripts/fetch-logos.js` can be executed to process any stage by URL and limit:

```bash
# Example usage:
node scripts/fetch-logos.js --url https://football-logos.cc/tournaments/fifa-world-cup-2026/ --offset 0 --limit 20 --out public/logos/world-cup-2026/
```

### Steps per Stage:

1. Run the extraction script for the stage batch.
2. Verify downloaded assets in `public/logos/<competition>/`.
3. Append extracted team badge mappings into `src/data/badges.js`.
4. Mark the stage checkbox as completed `[x]` in this document.
