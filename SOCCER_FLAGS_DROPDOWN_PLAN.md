# ⚽ Soccer Flags Dynamic Folder-Based Dropdown Plan

This document outlines a staged plan to update the **Soccer Flags** section in **TrucoTab** so that the dropdown selector options and team badges are strictly derived from the folders present in `/workspace/tmp`.

---

## 🎯 Architecture & Strategy

1. **Folder-Based Dynamic Sub-Tabs**:
   The dropdown options under the **Soccer Flags** tab will correspond exclusively to the 8 folders in `/workspace/tmp`:

   | Folder Name                                              | Selector / Pretty Name         | Target Directory                          |
   | :------------------------------------------------------- | :----------------------------- | :---------------------------------------- |
   | `argentina-primera-division-2025-2026.football-logos.cc` | **Argentina Primera División** | `public/logos/argentina-primera-division` |
   | `english-premier-league-2026-2027.football-logos.cc`     | **English Premier League**     | `public/logos/english-premier-league`     |
   | `fifa-world-cup-2026.football-logos.cc`                  | **FIFA World Cup 2026**        | `public/logos/fifa-world-cup-2026`        |
   | `germany-bundesliga-2026-2027.football-logos.cc`         | **Germany Bundesliga**         | `public/logos/germany-bundesliga`         |
   | `spain-la-liga-2026-2027.football-logos.cc`              | **Spain La Liga**              | `public/logos/spain-la-liga`              |
   | `ucl-champions-league-2025-2026.football-logos.cc`       | **UEFA Champions League**      | `public/logos/ucl-champions-league`       |
   | `uefa-nations-league-2026-2027.football-logos.cc`        | **UEFA Nations League**        | `public/logos/uefa-nations-league`        |
   | `usa-mls-2025-2026.football-logos.cc`                    | **USA MLS**                    | `public/logos/usa-mls`                    |

2. **Logo Asset Rendering**:
   - Each section renders only the PNG logo files (`128x128`) from its corresponding folder.
   - Sizing remains 128px (`width: 128px; height: 128px; object-fit: contain;`).

3. **10-Image Stage Batches**:
   - Logos across all 8 folders (256 teams total) are mapped and updated in 27 stages of **10 team images per stage**.

---

## 📅 Staged Execution Roadmap

### 🇦🇷 Argentina Primera División (30 Teams)

- [x] **Stage 1 (PD 1–10)**: Aldosivi, Argentinos Juniors, Atlético Tucumán, Banfield, Barracas Central, Belgrano, Boca Juniors, CA Huracán, Central Córdoba, Platense
- [x] **Stage 2 (PD 11–20)**: Defensa y Justicia, Deportivo Riestra, Estudiantes LP, Estudiantes Río Cuarto, Gimnasia LP, Gimnasia y Esgrima, Ind. Rivadavia, Independiente, Instituto, Lanús
- [x] **Stage 3 (PD 21–30)**: Newell's Old Boys, Racing Club, River Plate, Rosario Central, San Lorenzo, Sarmiento, Talleres, Tigre, Unión, Vélez Sarsfield

### 🏴󠁧󠁢󠁥󠁮󠁧󠁿 English Premier League (20 Teams)

- [x] **Stage 4 (EPL 1–10)**: Arsenal, Aston Villa, Bournemouth, Brentford, Brighton, Chelsea, Coventry City, Crystal Palace, Everton, Fulham
- [x] **Stage 5 (EPL 11–20)**: Hull City, Ipswich Town, Leeds United, Liverpool, Manchester City, Manchester United, Newcastle United, Nottingham Forest, Sunderland, Tottenham Hotspur

### 🏆 FIFA World Cup 2026 (48 Teams)

- [x] **Stage 6 (WC 1–10)**: Algeria, Argentina, Australia, Austria, Belgium, Bosnia and Herzegovina, Brazil, Cabo Verde, Canada, Colombia
- [x] **Stage 7 (WC 11–20)**: DR Congo, Ivory Coast, Croatia, Curaçao, Czech Republic, Netherlands, Ecuador, Egypt, England, France
- [x] **Stage 8 (WC 21–30)**: Germany, Ghana, Haiti, Iran, Iraq, Japan, Jordan, Mexico, Morocco, New Zealand
- [x] **Stage 9 (WC 31–40)**: Norway, Panama, Paraguay, Portugal, Qatar, Saudi Arabia, Scotland, Senegal, South Africa, South Korea
- [x] **Stage 10 (WC 41–48)**: Spain, Sweden, Switzerland, Tunisia, Turkey, Uruguay, USA, Uzbekistan

### 🇩🇪 Germany Bundesliga (18 Teams)

- [x] **Stage 11 (BL 1–10)**: FC Augsburg, Bayer Leverkusen, Bayern München, Borussia Dortmund, Borussia Mönchengladbach, Eintracht Frankfurt, SC Freiburg, Hamburger SV, TSG Hoffenheim, 1. FC Köln
- [x] **Stage 12 (BL 11–18)**: Mainz 05, SC Paderborn, RB Leipzig, Schalke 04, SV Elversberg, Union Berlin, VfB Stuttgart, Werder Bremen

### 🇪🇸 Spain La Liga (20 Teams)

- [x] **Stage 13 (LL 1–10)**: Athletic Club, Atlético Madrid, FC Barcelona, Celta Vigo, Deportivo La Coruña, Deportivo Alavés, Elche, Espanyol, Getafe, Levante
- [x] **Stage 14 (LL 11–20)**: Málaga, Osasuna, Racing Santander, Rayo Vallecano, Real Betis, Real Madrid, Real Sociedad, Sevilla FC, Valencia, Villarreal

### 🇪🇺 UEFA Champions League (36 Teams)

- [x] **Stage 15 (UCL 1–10)**: AEK Athens, Arsenal, Aston Villa, Atlético Madrid, FC Barcelona, Bayern München, Bodø/Glimt, Borussia Dortmund, Club Brugge, Como 1907
- [x] **Stage 16 (UCL 11–20)**: FC Porto, Fenerbahçe, Feyenoord, Galatasaray, Inter Milan, LASK, Lille, Liverpool, Manchester City, Manchester United
- [x] **Stage 17 (UCL 21–30)**: Napoli, PSG, PSV Eindhoven, RB Leipzig, RC Lens, Real Betis, Real Madrid, AS Roma, Slovan Bratislava, Sabah FC
- [x] **Stage 18 (UCL 31–36)**: Shakhtar Donetsk, Slavia Praha, Sporting CP, VfB Stuttgart, Viking FK, Villarreal

### 🇪🇺 UEFA Nations League (54 Teams)

- [x] **Stage 19 (UNL 1–10)**: Albania, Andorra, Armenia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia
- [x] **Stage 20 (UNL 11–20)**: Cyprus, Czech Republic, Denmark, Netherlands, England, Estonia, Faroe Islands, Finland, France, Georgia
- [x] **Stage 21 (UNL 21–30)**: Germany, Gibraltar, Greece, Hungary, Iceland, Israel, Italy, Kazakhstan, Kosovo, Latvia
- [x] **Stage 22 (UNL 31–40)**: Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Montenegro, North Macedonia, Northern Ireland, Norway, Poland
- [x] **Stage 23 (UNL 41–50)**: Portugal, Rep. of Ireland, Romania, San Marino, Scotland, Serbia, Slovakia, Slovenia, Spain, Sweden
- [x] **Stage 24 (UNL 51–54)**: Switzerland, Turkey, Ukraine, Wales

### 🇺🇸 USA MLS (30 Teams)

- [x] **Stage 25 (MLS 1–10)**: Atlanta United, Austin FC, CF Montréal, Charlotte FC, Chicago Fire, Colorado Rapids, Columbus Crew, D.C. United, FC Cincinnati, FC Dallas
- [x] **Stage 26 (MLS 11–20)**: Houston Dynamo, Inter Miami, LA Galaxy, LAFC, Minnesota United, Nashville SC, New England Rev., NYCFC, NY Red Bulls, Orlando City
- [x] **Stage 27 (MLS 21–30)**: Philadelphia Union, Portland Timbers, Real Salt Lake, San Diego FC, San Jose Earthquakes, Seattle Sounders, Sporting KC, St. Louis City, Toronto FC, Vancouver Whitecaps

---

### 🔧 Stage 28: Update Logo Updater Tool

- [x] Update `scripts/update-logos.js` and `src/data/badges.js` to automatically scan `/workspace/tmp` folders, map pretty selector names, dynamically populate `SOCCER_SUB_TABS`, and refresh logo assets for all folders.
