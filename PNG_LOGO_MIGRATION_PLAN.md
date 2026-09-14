# 🖼️ PNG Logo Migration Plan (10 Images Per Stage)

This plan outlines the staged migration to replace all existing logo assets with authentic **128x128 PNG** images from the `/workspace/tmp` directory and render them at 128px pixel size across **TrucoTab**.

---

## 🎯 Architecture & Image Rendering Strategy

1. **Resolution & Source Assets**:
   - Source directory: `/workspace/tmp/<competition>.football-logos.cc/128x128/*.png`
   - Target directory: `public/logos/<competition-slug>/<team-slug>.png`
2. **Badge Store Configuration**:
   - Update `logoUrl` in `src/data/badges.js` to point to `/logos/<competition-slug>/<team-slug>.png`.
3. **128px Display Rendering**:
   - Update `styles.css` classes (`.emoji-logo-img`, `.badge-profile-img`, `.badge-winner-img`, `.badge-log-img`, `.badge-cell-img`) to display at 128px container/render size (`width: 128px; height: 128px; object-fit: contain;`).
4. **Execution Granularity**:
   - Update exactly **10 team images per stage** to ensure minimal effort per batch, easy progress tracking, and complete reliability.

---

## 📅 Execution Roadmap (Batches of 10 Images)

### 🏆 FIFA World Cup 2026 (48 Teams)

- [x] **Stage 1 (WC 1–10)**: Algeria, Argentina, Australia, Austria, Belgium, Bosnia and Herzegovina, Brazil, Cabo Verde, Canada, Colombia
- [x] **Stage 2 (WC 11–20)**: DR Congo, Ivory Coast, Croatia, Curaçao, Czech Republic, Netherlands, Ecuador, Egypt, England, France
- [x] **Stage 3 (WC 21–30)**: Germany, Ghana, Haiti, Iran, Iraq, Japan, Jordan, Mexico, Morocco, New Zealand
- [x] **Stage 4**: Norway, Panama, Paraguay, Portugal, Qatar, Saudi Arabia, Scotland, Senegal, South Africa, South Korea
- [x] **Stage 5**: Spain, Sweden, Switzerland, Tunisia, Turkey, Uruguay, USA, Uzbekistan

---

### 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English Premier League (20 Teams)

- [x] **Stage 6**: Arsenal, Aston Villa, Bournemouth, Brentford, Brighton, Chelsea, Coventry City, Crystal Palace, Everton, Fulham
- [x] **Stage 7**: Hull City, Ipswich Town, Leeds United, Liverpool, Manchester City, Manchester United, Newcastle United, Nottingham Forest, Sunderland, Tottenham Hotspur

---

### 🇪🇺 UEFA Champions League (36 Teams)

- [x] **Stage 8**: AEK Athens, Arsenal, Aston Villa, Atlético Madrid, FC Barcelona, Bayern München, Bodø/Glimt, Borussia Dortmund, Club Brugge, Como 1907
- [x] **Stage 9**: FC Porto, Fenerbahçe, Feyenoord, Galatasaray, Inter Milan, LASK, Lille, Liverpool, Manchester City, Manchester United
- [x] **Stage 10**: Napoli, PSG, PSV Eindhoven, RB Leipzig, RC Lens, Real Betis, Real Madrid, AS Roma, Slovan Bratislava, Sabah FC
- [x] **Stage 11**: Shakhtar Donetsk, Slavia Praha, Sporting CP, VfB Stuttgart, Viking FK, Villarreal

---

### 🇪🇸 La Liga (20 Teams)

- [x] **Stage 12**: Athletic Club, Atlético Madrid, FC Barcelona, Celta Vigo, Deportivo La Coruña, Deportivo Alavés, Elche, Espanyol, Getafe, Levante
- [x] **Stage 13**: Málaga, Osasuna, Racing Santander, Rayo Vallecano, Real Betis, Real Madrid, Real Sociedad, Sevilla FC, Valencia, Villarreal

---

### 🇩🇪 Bundesliga (18 Teams)

- [x] **Stage 14**: FC Augsburg, Bayer Leverkusen, Bayern München, Borussia Dortmund, Borussia Mönchengladbach, Eintracht Frankfurt, SC Freiburg, Hamburger SV, TSG Hoffenheim, 1. FC Köln
- [x] **Stage 15**: Mainz 05, SC Paderborn, RB Leipzig, Schalke 04, SV Elversberg, Union Berlin, VfB Stuttgart, Werder Bremen

---

### 🇦🇷 Primera División Argentina (30 Teams)

- [x] **Stage 16**: Aldosivi, Argentinos Juniors, Atlético Tucumán, Banfield, Barracas Central, Belgrano, Boca Juniors, CA Huracán, Central Córdoba, Platense
- [x] **Stage 17**: Defensa y Justicia, Deportivo Riestra, Estudiantes LP, Estudiantes Río Cuarto, Gimnasia LP, Gimnasia y Esgrima, Ind. Rivadavia, Independiente, Instituto, Lanús
- [x] **Stage 18**: Newell's Old Boys, Racing Club, River Plate, Rosario Central, San Lorenzo, Sarmiento, Talleres, Tigre, Unión, Vélez Sarsfield

---

### 🇺🇸 MLS (30 Teams)

- [x] **Stage 19**: Atlanta United, Austin FC, CF Montréal, Charlotte FC, Chicago Fire, Colorado Rapids, Columbus Crew, D.C. United, FC Cincinnati, FC Dallas
- [x] **Stage 20**: Houston Dynamo, Inter Miami, LA Galaxy, LAFC, Minnesota United, Nashville SC, New England Rev., NYCFC, NY Red Bulls, Orlando City
- [x] **Stage 21**: Philadelphia Union, Portland Timbers, Real Salt Lake, San Diego FC, San Jose Earthquakes, Seattle Sounders, Sporting KC, St. Louis City, Toronto FC, Vancouver Whitecaps

---

### 🇪🇺 UEFA Nations League (54 Teams)

- [x] **Stage 22**: Albania, Andorra, Armenia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia
- [x] **Stage 23**: Cyprus, Czech Republic, Denmark, Netherlands, England, Estonia, Faroe Islands, Finland, France, Georgia
- [x] **Stage 24**: Germany, Gibraltar, Greece, Hungary, Iceland, Israel, Italy, Kazakhstan, Kosovo, Latvia
- [x] **Stage 25**: Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Montenegro, North Macedonia, Northern Ireland, Norway, Poland
- [x] **Stage 26**: Portugal, Rep. of Ireland, Romania, San Marino, Scotland, Serbia, Slovakia, Slovenia, Spain, Sweden
- [x] **Stage 27**: Switzerland, Turkey, Ukraine, Wales

---

## 🛠️ Automated Migration Helper

A Node.js migration script (`scripts/migrate-png-logos.js`) handles copying PNG files from `tmp/<competition>/128x128/` to `public/logos/` and updating references in `src/data/badges.js` for any 10-team stage.

```bash
# Process a stage by index or competition slug and offset:
node scripts/migrate-png-logos.js --stage 1
```
