export const BADGE_TABS = {
  EMOJIS: 'emojis',
  COUNTRY_FLAGS: 'countryFlags',
  SOCCER_FLAGS: 'soccerFlags'
}

export const SOCCER_SUB_TABS = {
  "ARGENTINA_PRIMERA_DIVISION": "argentinaPrimeraDivision",
  "ENGLISH_PREMIER_LEAGUE": "englishPremierLeague",
  "FIFA_WORLD_CUP_2026": "fifaWorldCup2026",
  "GERMANY_BUNDESLIGA": "germanyBundesliga",
  "SPAIN_LA_LIGA": "spainLaLiga",
  "UEFA_CHAMPIONS_LEAGUE": "uclChampionsLeague",
  "UEFA_NATIONS_LEAGUE": "uefaNationsLeague",
  "USA_MLS": "usaMls"
}

// Convert 2-letter ISO country code to flag emoji
export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🏳️'
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

const rawCountries = [
  ['af', 'Afganistán', 'Afghanistan'],
  ['al', 'Albania', 'Albania'],
  ['de', 'Alemania', 'Germany'],
  ['ad', 'Andorra', 'Andorra'],
  ['ao', 'Angola', 'Angola'],
  ['ag', 'Antigua y Barbuda', 'Antigua and Barbuda'],
  ['sa', 'Arabia Saudita', 'Saudi Arabia'],
  ['dz', 'Argelia', 'Algeria'],
  ['ar', 'Argentina', 'Argentina'],
  ['am', 'Armenia', 'Armenia'],
  ['aw', 'Aruba', 'Aruba'],
  ['au', 'Australia', 'Australia'],
  ['at', 'Austria', 'Austria'],
  ['az', 'Azerbaiyán', 'Azerbaijan'],
  ['bs', 'Bahamas', 'Bahamas'],
  ['bd', 'Bangladés', 'Bangladesh'],
  ['bb', 'Barbados', 'Barbados'],
  ['bh', 'Baréin', 'Bahrain'],
  ['be', 'Bélgica', 'Belgium'],
  ['bz', 'Belice', 'Belize'],
  ['bj', 'Benín', 'Benin'],
  ['by', 'Bielorrusia', 'Belarus'],
  ['bo', 'Bolivia', 'Bolivia'],
  ['ba', 'Bosnia y Herzegovina', 'Bosnia and Herzegovina'],
  ['bw', 'Botsuana', 'Botswana'],
  ['br', 'Brasil', 'Brazil'],
  ['bn', 'Brunéi', 'Brunei'],
  ['bg', 'Bulgaria', 'Bulgaria'],
  ['bf', 'Burkina Faso', 'Burkina Faso'],
  ['bi', 'Burundi', 'Burundi'],
  ['bt', 'Bután', 'Bhutan'],
  ['cv', 'Cabo Verde', 'Cape Verde'],
  ['kh', 'Camboya', 'Cambodia'],
  ['cm', 'Camerún', 'Cameroon'],
  ['ca', 'Canadá', 'Canada'],
  ['qa', 'Catar', 'Qatar'],
  ['td', 'Chad', 'Chad'],
  ['cl', 'Chile', 'Chile'],
  ['cn', 'China', 'China'],
  ['cy', 'Chipre', 'Cyprus'],
  ['va', 'Ciudad del Vaticano', 'Vatican City'],
  ['co', 'Colombia', 'Colombia'],
  ['km', 'Comoras', 'Comoros'],
  ['kp', 'Corea del Norte', 'North Korea'],
  ['kr', 'Corea del Sur', 'South Korea'],
  ['ci', 'Costa de Marfil', 'Ivory Coast'],
  ['cr', 'Costa Rica', 'Costa Rica'],
  ['hr', 'Croacia', 'Croatia'],
  ['cu', 'Cuba', 'Cuba'],
  ['cw', 'Curazao', 'Curaçao'],
  ['dk', 'Dinamarca', 'Denmark'],
  ['dm', 'Dominica', 'Dominica'],
  ['ec', 'Ecuador', 'Ecuador'],
  ['eg', 'Egipto', 'Egypt'],
  ['sv', 'El Salvador', 'El Salvador'],
  ['ae', 'Emiratos Árabes Unidos', 'United Arab Emirates'],
  ['er', 'Eritrea', 'Eritrea'],
  ['sk', 'Eslovaquia', 'Slovakia'],
  ['si', 'Eslovenia', 'Slovenia'],
  ['es', 'España', 'Spain'],
  ['us', 'Estados Unidos', 'United States'],
  ['ee', 'Estonia', 'Estonia'],
  ['sz', 'Esuatini', 'Eswatini'],
  ['et', 'Etiopía', 'Ethiopia'],
  ['ph', 'Filipinas', 'Philippines'],
  ['fi', 'Finlandia', 'Finland'],
  ['fj', 'Fiyi', 'Fiji'],
  ['fr', 'Francia', 'France'],
  ['ga', 'Gabón', 'Gabon'],
  ['gm', 'Gambia', 'Gambia'],
  ['ge', 'Georgia', 'Georgia'],
  ['gh', 'Ghana', 'Ghana'],
  ['gd', 'Granada', 'Grenada'],
  ['gr', 'Grecia', 'Greece'],
  ['gl', 'Groenlandia', 'Greenland'],
  ['gt', 'Guatemala', 'Guatemala'],
  ['gn', 'Guinea', 'Guinea'],
  ['gq', 'Guinea Ecuatorial', 'Equatorial Guinea'],
  ['gw', 'Guinea-Bisáu', 'Guinea-Bissau'],
  ['gy', 'Guyana', 'Guyana'],
  ['ht', 'Haití', 'Haiti'],
  ['hn', 'Honduras', 'Honduras'],
  ['hk', 'Hong Kong', 'Hong Kong'],
  ['hu', 'Hungría', 'Hungary'],
  ['in', 'India', 'India'],
  ['id', 'Indonesia', 'Indonesia'],
  ['iq', 'Irak', 'Iraq'],
  ['ir', 'Irán', 'Iran'],
  ['ie', 'Irlanda', 'Ireland'],
  ['is', 'Islandia', 'Iceland'],
  ['mh', 'Islas Marshall', 'Marshall Islands'],
  ['sb', 'Islas Salomón', 'Solomon Islands'],
  ['il', 'Israel', 'Israel'],
  ['it', 'Italia', 'Italy'],
  ['jm', 'Jamaica', 'Jamaica'],
  ['jp', 'Japón', 'Japan'],
  ['jo', 'Jordania', 'Jordan'],
  ['kz', 'Kazajistán', 'Kazakhstan'],
  ['ke', 'Kenia', 'Kenya'],
  ['kg', 'Kirguistán', 'Kyrgyzstan'],
  ['ki', 'Kiribati', 'Kiribati'],
  ['kw', 'Kuwait', 'Kuwait'],
  ['la', 'Laos', 'Laos'],
  ['ls', 'Lesoto', 'Lesotho'],
  ['lv', 'Letonia', 'Latvia'],
  ['lb', 'Líbano', 'Lebanon'],
  ['lr', 'Liberia', 'Liberia'],
  ['ly', 'Libia', 'Libya'],
  ['li', 'Liechtenstein', 'Liechtenstein'],
  ['lt', 'Lituania', 'Lithuania'],
  ['lu', 'Luxemburgo', 'Luxembourg'],
  ['mo', 'Macao', 'Macau'],
  ['mk', 'Macedonia del Norte', 'North Macedonia'],
  ['mg', 'Madagascar', 'Madagascar'],
  ['my', 'Malasia', 'Malaysia'],
  ['mw', 'Malaui', 'Malawi'],
  ['mv', 'Maldivas', 'Maldives'],
  ['ml', 'Malí', 'Mali'],
  ['mt', 'Malta', 'Malta'],
  ['ma', 'Marruecos', 'Morocco'],
  ['mu', 'Mauricio', 'Mauritius'],
  ['mr', 'Mauritania', 'Mauritania'],
  ['mx', 'México', 'Mexico'],
  ['fm', 'Micronesia', 'Micronesia'],
  ['md', 'Moldavia', 'Moldova'],
  ['mc', 'Mónaco', 'Monaco'],
  ['mn', 'Mongolia', 'Mongolia'],
  ['me', 'Montenegro', 'Montenegro'],
  ['mz', 'Mozambique', 'Mozambique'],
  ['mm', 'Myanmar', 'Myanmar'],
  ['na', 'Namibia', 'Namibia'],
  ['nr', 'Nauru', 'Nauru'],
  ['np', 'Nepal', 'Nepal'],
  ['ni', 'Nicaragua', 'Nicaragua'],
  ['ne', 'Níger', 'Niger'],
  ['ng', 'Nigeria', 'Nigeria'],
  ['no', 'Noruega', 'Norway'],
  ['nz', 'Nueva Zelanda', 'New Zealand'],
  ['om', 'Omán', 'Oman'],
  ['nl', 'Países Bajos', 'Netherlands'],
  ['pk', 'Pakistán', 'Pakistan'],
  ['pw', 'Palaos', 'Palau'],
  ['ps', 'Palestina', 'Palestine'],
  ['pa', 'Panamá', 'Panama'],
  ['pg', 'Papúa Nueva Guinea', 'Papua New Guinea'],
  ['py', 'Paraguay', 'Paraguay'],
  ['pe', 'Perú', 'Peru'],
  ['pl', 'Polonia', 'Poland'],
  ['pt', 'Portugal', 'Portugal'],
  ['pr', 'Puerto Rico', 'Puerto Rico'],
  ['gb', 'Reino Unido', 'United Kingdom'],
  ['cf', 'República Centroafricana', 'Central African Republic'],
  ['cz', 'República Checa', 'Czech Republic'],
  ['cg', 'República del Congo', 'Republic of the Congo'],
  ['cd', 'República Democrática del Congo', 'DR Congo'],
  ['do', 'República Dominicana', 'Dominican Republic'],
  ['rw', 'Ruanda', 'Rwanda'],
  ['ro', 'Rumania', 'Romania'],
  ['ru', 'Rusia', 'Russia'],
  ['ws', 'Samoa', 'Samoa'],
  ['kn', 'San Cristóbal y Nieves', 'Saint Kitts and Nevis'],
  ['sm', 'San Marino', 'San Marino'],
  ['vc', 'San Vicente y las Granadinas', 'Saint Vincent and the Grenadines'],
  ['lc', 'Santa Lucía', 'Saint Lucia'],
  ['st', 'Santo Tomé y Príncipe', 'São Tomé and Príncipe'],
  ['sn', 'Senegal', 'Senegal'],
  ['rs', 'Serbia', 'Serbia'],
  ['sc', 'Seychelles', 'Seychelles'],
  ['sl', 'Sierra Leona', 'Sierra Leone'],
  ['sg', 'Singapur', 'Singapore'],
  ['sy', 'Siria', 'Syria'],
  ['so', 'Somalia', 'Somalia'],
  ['lk', 'Sri Lanka', 'Sri Lanka'],
  ['za', 'Sudáfrica', 'South Africa'],
  ['sd', 'Sudán', 'Sudan'],
  ['ss', 'Sudán del Sur', 'South Sudan'],
  ['se', 'Suecia', 'Sweden'],
  ['ch', 'Suiza', 'Switzerland'],
  ['sr', 'Surinam', 'Suriname'],
  ['th', 'Tailandia', 'Thailand'],
  ['tw', 'Taiwán', 'Taiwan'],
  ['tz', 'Tanzania', 'Tanzania'],
  ['tj', 'Tayikistán', 'Tajikistan'],
  ['tl', 'Timor Oriental', 'East Timor'],
  ['tg', 'Togo', 'Togo'],
  ['to', 'Tonga', 'Tonga'],
  ['tt', 'Trinidad y Tobago', 'Trinidad and Tobago'],
  ['tn', 'Túnez', 'Tunisia'],
  ['tm', 'Turkmenistán', 'Turkmenistan'],
  ['tr', 'Turquía', 'Turkey'],
  ['tv', 'Tuvalu', 'Tuvalu'],
  ['ua', 'Ucrania', 'Ukraine'],
  ['ug', 'Uganda', 'Uganda'],
  ['uy', 'Uruguay', 'Uruguay'],
  ['uz', 'Uzbekistán', 'Uzbekistan'],
  ['vu', 'Vanuatu', 'Vanuatu'],
  ['ve', 'Venezuela', 'Venezuela'],
  ['vn', 'Vietnam', 'Vietnam'],
  ['ye', 'Yemen', 'Yemen'],
  ['dj', 'Yibuti', 'Djibouti'],
  ['zm', 'Zambia', 'Zambia'],
  ['zw', 'Zimbabue', 'Zimbabwe']
]

const ALL_COUNTRY_FLAGS = rawCountries.map(([id, nameEs, nameEn]) => ({
  id,
  symbol: getFlagEmoji(id),
  nameEs,
  nameEn
}))

export const BADGES = {
  [BADGE_TABS.EMOJIS]: [
    { id: 'card', symbol: '🂠', nameEs: 'Carta', nameEn: 'Card' },
    { id: 'joker', symbol: '🃏', nameEs: 'Comodín', nameEn: 'Joker' },
    { id: 'target', symbol: '🎯', nameEs: 'Blanco', nameEn: 'Target' },
    { id: 'dice', symbol: '🎲', nameEs: 'Dado', nameEn: 'Dice' },
    { id: 'trophy', symbol: '🏆', nameEs: 'Trofeo', nameEn: 'Trophy' },
    {
      id: 'gold_medal',
      symbol: '🥇',
      nameEs: 'Medalla de oro',
      nameEn: 'Gold medal'
    },
    { id: 'crown', symbol: '👑', nameEs: 'Corona', nameEn: 'Crown' },
    { id: 'happy', symbol: '😀', nameEs: 'Feliz', nameEn: 'Happy' },
    { id: 'cool', symbol: '😎', nameEs: 'Genial', nameEn: 'Cool' },
    { id: 'cowboy', symbol: '🤠', nameEs: 'Vaquero', nameEn: 'Cowboy' },
    { id: 'party', symbol: '🥳', nameEs: 'Fiesta', nameEn: 'Party' },
    { id: 'monocle', symbol: '🧐', nameEs: 'Sabio', nameEn: 'Monocle' },
    { id: 'robot', symbol: '🤖', nameEs: 'Robot', nameEn: 'Robot' },
    { id: 'alien', symbol: '👽', nameEs: 'Alien', nameEn: 'Alien' },
    { id: 'ghost', symbol: '👻', nameEs: 'Fantasma', nameEn: 'Ghost' },
    { id: 'fire', symbol: '🔥', nameEs: 'Fuego', nameEn: 'Fire' },
    { id: 'lightning', symbol: '⚡', nameEs: 'Rayo', nameEn: 'Lightning' },
    {
      id: 'popper',
      symbol: '🎉',
      nameEs: 'Celebración',
      nameEn: 'Party popper'
    },
    { id: 'explosion', symbol: '💥', nameEs: 'Explosión', nameEn: 'Explosion' },
    { id: 'star', symbol: '🌟', nameEs: 'Estrella', nameEn: 'Star' },
    { id: 'rocket', symbol: '🚀', nameEs: 'Cohete', nameEn: 'Rocket' },
    { id: 'sword', symbol: '🗡️', nameEs: 'Espada', nameEn: 'Sword' },
    { id: 'muscle', symbol: '💪', nameEs: 'Fuerza', nameEn: 'Flex' },
    { id: 'poop', symbol: '💩', nameEs: 'Popó', nameEn: 'Poop' },
    { id: 'lion', symbol: '🦁', nameEs: 'León', nameEn: 'Lion' },
    { id: 'tiger', symbol: '🐯', nameEs: 'Tigre', nameEn: 'Tiger' },
    { id: 'eagle', symbol: '🦅', nameEs: 'Águila', nameEn: 'Eagle' },
    { id: 'ball', symbol: '⚽', nameEs: 'Pelota', nameEn: 'Soccer ball' }
  ],
  [BADGE_TABS.COUNTRY_FLAGS]: ALL_COUNTRY_FLAGS,
      [BADGE_TABS.SOCCER_FLAGS]: {
    [SOCCER_SUB_TABS.ARGENTINA_PRIMERA_DIVISION]: [
      {
            "id": "arg_pd_aldosivi_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/aldosivi.football-logos.cc.png",
            "nameEs": "Aldosivi",
            "nameEn": "Aldosivi"
      },
      {
            "id": "arg_pd_argeninos_juniors_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/argeninos-juniors.football-logos.cc.png",
            "nameEs": "Argeninos Juniors",
            "nameEn": "Argeninos Juniors"
      },
      {
            "id": "arg_pd_atletico_tucuman_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/atletico-tucuman.football-logos.cc.png",
            "nameEs": "Atletico Tucuman",
            "nameEn": "Atletico Tucuman"
      },
      {
            "id": "arg_pd_banfield_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/banfield.football-logos.cc.png",
            "nameEs": "Banfield",
            "nameEn": "Banfield"
      },
      {
            "id": "arg_pd_barracas_central_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/barracas-central.football-logos.cc.png",
            "nameEs": "Barracas Central",
            "nameEn": "Barracas Central"
      },
      {
            "id": "arg_pd_belgrano_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/belgrano.football-logos.cc.png",
            "nameEs": "Belgrano",
            "nameEn": "Belgrano"
      },
      {
            "id": "arg_pd_boca_juniors_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/boca-juniors.football-logos.cc.png",
            "nameEs": "Boca Juniors",
            "nameEn": "Boca Juniors"
      },
      {
            "id": "arg_pd_ca_huracan_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/ca-huracan.football-logos.cc.png",
            "nameEs": "Ca Huracan",
            "nameEn": "Ca Huracan"
      },
      {
            "id": "arg_pd_central_cordoba_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/central-cordoba.football-logos.cc.png",
            "nameEs": "Central Cordoba",
            "nameEn": "Central Cordoba"
      },
      {
            "id": "arg_pd_club_atletico_platanense_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/club-atletico-platanense.football-logos.cc.png",
            "nameEs": "Club Atletico Platanense",
            "nameEn": "Club Atletico Platanense"
      },
      {
            "id": "arg_pd_defensa_y_justicia_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/defensa-y-justicia.football-logos.cc.png",
            "nameEs": "Defensa Y Justicia",
            "nameEn": "Defensa Y Justicia"
      },
      {
            "id": "arg_pd_deportivo_riestra_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/deportivo-riestra.football-logos.cc.png",
            "nameEs": "Deportivo Riestra",
            "nameEn": "Deportivo Riestra"
      },
      {
            "id": "arg_pd_estudiantes_de_la_plata_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/estudiantes-de-la-plata.football-logos.cc.png",
            "nameEs": "Estudiantes De La Plata",
            "nameEn": "Estudiantes De La Plata"
      },
      {
            "id": "arg_pd_estudiantes_de_rio_cuarto_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/estudiantes-de-rio-cuarto.football-logos.cc.png",
            "nameEs": "Estudiantes De Rio Cuarto",
            "nameEn": "Estudiantes De Rio Cuarto"
      },
      {
            "id": "arg_pd_gimnasia_lp_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/gimnasia-lp.football-logos.cc.png",
            "nameEs": "Gimnasia Lp",
            "nameEn": "Gimnasia Lp"
      },
      {
            "id": "arg_pd_gimnasia_y_esgrima_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/gimnasia-y-esgrima.football-logos.cc.png",
            "nameEs": "Gimnasia Y Esgrima",
            "nameEn": "Gimnasia Y Esgrima"
      },
      {
            "id": "arg_pd_independiente_rivadavia_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/independiente-rivadavia.football-logos.cc.png",
            "nameEs": "Independiente Rivadavia",
            "nameEn": "Independiente Rivadavia"
      },
      {
            "id": "arg_pd_independiente_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/independiente.football-logos.cc.png",
            "nameEs": "Independiente",
            "nameEn": "Independiente"
      },
      {
            "id": "arg_pd_instituto_cordoba_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/instituto-cordoba.football-logos.cc.png",
            "nameEs": "Instituto Cordoba",
            "nameEn": "Instituto Cordoba"
      },
      {
            "id": "arg_pd_lanus_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/lanus.football-logos.cc.png",
            "nameEs": "Lanus",
            "nameEn": "Lanus"
      },
      {
            "id": "arg_pd_newells_old_boys_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/newells-old-boys.football-logos.cc.png",
            "nameEs": "Newells Old Boys",
            "nameEn": "Newells Old Boys"
      },
      {
            "id": "arg_pd_racing_club_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/racing-club.football-logos.cc.png",
            "nameEs": "Racing Club",
            "nameEn": "Racing Club"
      },
      {
            "id": "arg_pd_river_plate_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/river-plate.football-logos.cc.png",
            "nameEs": "River Plate",
            "nameEn": "River Plate"
      },
      {
            "id": "arg_pd_rosario_central_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/rosario-central.football-logos.cc.png",
            "nameEs": "Rosario Central",
            "nameEn": "Rosario Central"
      },
      {
            "id": "arg_pd_san_lorenzo_de_almagro_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/san-lorenzo-de-almagro.football-logos.cc.png",
            "nameEs": "San Lorenzo De Almagro",
            "nameEn": "San Lorenzo De Almagro"
      },
      {
            "id": "arg_pd_sarmiento_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/sarmiento.football-logos.cc.png",
            "nameEs": "Sarmiento",
            "nameEn": "Sarmiento"
      },
      {
            "id": "arg_pd_talleres_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/talleres.football-logos.cc.png",
            "nameEs": "Talleres",
            "nameEn": "Talleres"
      },
      {
            "id": "arg_pd_tigre_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/tigre.football-logos.cc.png",
            "nameEs": "Tigre",
            "nameEn": "Tigre"
      },
      {
            "id": "arg_pd_union_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/union.football-logos.cc.png",
            "nameEs": "Union",
            "nameEn": "Union"
      },
      {
            "id": "arg_pd_velez_sarsfield_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/argentina-primera-division/velez-sarsfield.football-logos.cc.png",
            "nameEs": "Velez Sarsfield",
            "nameEn": "Velez Sarsfield"
      }
],
    [SOCCER_SUB_TABS.ENGLISH_PREMIER_LEAGUE]: [
      {
            "id": "eng_pl_arsenal_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/arsenal.football-logos.cc.png",
            "nameEs": "Arsenal",
            "nameEn": "Arsenal"
      },
      {
            "id": "eng_pl_aston_villa_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/aston-villa.football-logos.cc.png",
            "nameEs": "Aston Villa",
            "nameEn": "Aston Villa"
      },
      {
            "id": "eng_pl_bournemouth_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/bournemouth.football-logos.cc.png",
            "nameEs": "Bournemouth",
            "nameEn": "Bournemouth"
      },
      {
            "id": "eng_pl_brentford_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/brentford.football-logos.cc.png",
            "nameEs": "Brentford",
            "nameEn": "Brentford"
      },
      {
            "id": "eng_pl_brighton_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/brighton.football-logos.cc.png",
            "nameEs": "Brighton",
            "nameEn": "Brighton"
      },
      {
            "id": "eng_pl_chelsea_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/chelsea.football-logos.cc.png",
            "nameEs": "Chelsea",
            "nameEn": "Chelsea"
      },
      {
            "id": "eng_pl_coventry_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/coventry-city.football-logos.cc.png",
            "nameEs": "Coventry City",
            "nameEn": "Coventry City"
      },
      {
            "id": "eng_pl_crystal_palace_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/crystal-palace.football-logos.cc.png",
            "nameEs": "Crystal Palace",
            "nameEn": "Crystal Palace"
      },
      {
            "id": "eng_pl_everton_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/everton.football-logos.cc.png",
            "nameEs": "Everton",
            "nameEn": "Everton"
      },
      {
            "id": "eng_pl_fulham_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/fulham.football-logos.cc.png",
            "nameEs": "Fulham",
            "nameEn": "Fulham"
      },
      {
            "id": "eng_pl_hull_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/hull-city.football-logos.cc.png",
            "nameEs": "Hull City",
            "nameEn": "Hull City"
      },
      {
            "id": "eng_pl_ipswich_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/ipswich.football-logos.cc.png",
            "nameEs": "Ipswich",
            "nameEn": "Ipswich"
      },
      {
            "id": "eng_pl_leeds_united_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/leeds-united.football-logos.cc.png",
            "nameEs": "Leeds United",
            "nameEn": "Leeds United"
      },
      {
            "id": "eng_pl_liverpool_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/liverpool.football-logos.cc.png",
            "nameEs": "Liverpool",
            "nameEn": "Liverpool"
      },
      {
            "id": "eng_pl_manchester_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/manchester-city.football-logos.cc.png",
            "nameEs": "Manchester City",
            "nameEn": "Manchester City"
      },
      {
            "id": "eng_pl_manchester_united_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/manchester-united.football-logos.cc.png",
            "nameEs": "Manchester United",
            "nameEn": "Manchester United"
      },
      {
            "id": "eng_pl_newcastle_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/newcastle.football-logos.cc.png",
            "nameEs": "Newcastle",
            "nameEn": "Newcastle"
      },
      {
            "id": "eng_pl_nottingham_forest_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/nottingham-forest.football-logos.cc.png",
            "nameEs": "Nottingham Forest",
            "nameEn": "Nottingham Forest"
      },
      {
            "id": "eng_pl_sunderland_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/sunderland.football-logos.cc.png",
            "nameEs": "Sunderland",
            "nameEn": "Sunderland"
      },
      {
            "id": "eng_pl_tottenham_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/english-premier-league/tottenham.football-logos.cc.png",
            "nameEs": "Tottenham",
            "nameEn": "Tottenham"
      }
],
    [SOCCER_SUB_TABS.FIFA_WORLD_CUP_2026]: [
      {
            "id": "fwc_2026_algeria_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/algeria-national-team.football-logos.cc.png",
            "nameEs": "Algeria",
            "nameEn": "Algeria"
      },
      {
            "id": "fwc_2026_argentina_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/argentina-national-team.football-logos.cc.png",
            "nameEs": "Argentina",
            "nameEn": "Argentina"
      },
      {
            "id": "fwc_2026_australia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/australia-national-team.football-logos.cc.png",
            "nameEs": "Australia",
            "nameEn": "Australia"
      },
      {
            "id": "fwc_2026_austria_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/austria-national-team.football-logos.cc.png",
            "nameEs": "Austria",
            "nameEn": "Austria"
      },
      {
            "id": "fwc_2026_belgium_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/belgium-national-team.football-logos.cc.png",
            "nameEs": "Belgium",
            "nameEn": "Belgium"
      },
      {
            "id": "fwc_2026_bosnia_and_herzegovina_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/bosnia-and-herzegovina-national-team.football-logos.cc.png",
            "nameEs": "Bosnia And Herzegovina",
            "nameEn": "Bosnia And Herzegovina"
      },
      {
            "id": "fwc_2026_brazil_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/brazil-national-team.football-logos.cc.png",
            "nameEs": "Brazil",
            "nameEn": "Brazil"
      },
      {
            "id": "fwc_2026_cabo_verde_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/cabo-verde-national-team.football-logos.cc.png",
            "nameEs": "Cabo Verde",
            "nameEn": "Cabo Verde"
      },
      {
            "id": "fwc_2026_canada_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/canada-national-team.football-logos.cc.png",
            "nameEs": "Canada",
            "nameEn": "Canada"
      },
      {
            "id": "fwc_2026_colombia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/colombia-national-team.football-logos.cc.png",
            "nameEs": "Colombia",
            "nameEn": "Colombia"
      },
      {
            "id": "fwc_2026_congo_dr_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/congo-dr-national-team.football-logos.cc.png",
            "nameEs": "Congo Dr",
            "nameEn": "Congo Dr"
      },
      {
            "id": "fwc_2026_cote_d_ivoire_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/cote-d-ivoire-national-team.football-logos.cc.png",
            "nameEs": "Cote D Ivoire",
            "nameEn": "Cote D Ivoire"
      },
      {
            "id": "fwc_2026_croatia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/croatia-national-team.football-logos.cc.png",
            "nameEs": "Croatia",
            "nameEn": "Croatia"
      },
      {
            "id": "fwc_2026_curacao_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/curacao-national-team.football-logos.cc.png",
            "nameEs": "Curacao",
            "nameEn": "Curacao"
      },
      {
            "id": "fwc_2026_czech_republic_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/czech-republic-national-team.football-logos.cc.png",
            "nameEs": "Czech Republic",
            "nameEn": "Czech Republic"
      },
      {
            "id": "fwc_2026_dutch_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/dutch-national-team.football-logos.cc.png",
            "nameEs": "Netherlands",
            "nameEn": "Netherlands"
      },
      {
            "id": "fwc_2026_ecuador_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/ecuador-national-team.football-logos.cc.png",
            "nameEs": "Ecuador",
            "nameEn": "Ecuador"
      },
      {
            "id": "fwc_2026_egypt_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/egypt-national-team.football-logos.cc.png",
            "nameEs": "Egypt",
            "nameEn": "Egypt"
      },
      {
            "id": "fwc_2026_england_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/england-national-team.football-logos.cc.png",
            "nameEs": "England",
            "nameEn": "England"
      },
      {
            "id": "fwc_2026_france_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/france-national-team.football-logos.cc.png",
            "nameEs": "France",
            "nameEn": "France"
      },
      {
            "id": "fwc_2026_germany_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/germany-national-team.football-logos.cc.png",
            "nameEs": "Germany",
            "nameEn": "Germany"
      },
      {
            "id": "fwc_2026_ghana_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/ghana-national-team.football-logos.cc.png",
            "nameEs": "Ghana",
            "nameEn": "Ghana"
      },
      {
            "id": "fwc_2026_haiti_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/haiti-national-team.football-logos.cc.png",
            "nameEs": "Haiti",
            "nameEn": "Haiti"
      },
      {
            "id": "fwc_2026_iran_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/iran-national-team.football-logos.cc.png",
            "nameEs": "Iran",
            "nameEn": "Iran"
      },
      {
            "id": "fwc_2026_iraq_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/iraq-national-team.football-logos.cc.png",
            "nameEs": "Iraq",
            "nameEn": "Iraq"
      },
      {
            "id": "fwc_2026_japan_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/japan-national-team.football-logos.cc.png",
            "nameEs": "Japan",
            "nameEn": "Japan"
      },
      {
            "id": "fwc_2026_jordan_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/jordan-national-team.football-logos.cc.png",
            "nameEs": "Jordan",
            "nameEn": "Jordan"
      },
      {
            "id": "fwc_2026_mexico_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/mexico-national-team.football-logos.cc.png",
            "nameEs": "Mexico",
            "nameEn": "Mexico"
      },
      {
            "id": "fwc_2026_morocco_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/morocco-national-team.football-logos.cc.png",
            "nameEs": "Morocco",
            "nameEn": "Morocco"
      },
      {
            "id": "fwc_2026_new_zealand_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/new-zealand-national-team.football-logos.cc.png",
            "nameEs": "New Zealand",
            "nameEn": "New Zealand"
      },
      {
            "id": "fwc_2026_norway_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/norway-national-team.football-logos.cc.png",
            "nameEs": "Norway",
            "nameEn": "Norway"
      },
      {
            "id": "fwc_2026_panama_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/panama-national-team.football-logos.cc.png",
            "nameEs": "Panama",
            "nameEn": "Panama"
      },
      {
            "id": "fwc_2026_paraguay_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/paraguay-national-team.football-logos.cc.png",
            "nameEs": "Paraguay",
            "nameEn": "Paraguay"
      },
      {
            "id": "fwc_2026_portuguese_football_federation_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/portuguese-football-federation.football-logos.cc.png",
            "nameEs": "Portugal",
            "nameEn": "Portugal"
      },
      {
            "id": "fwc_2026_qatar_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/qatar-national-team.football-logos.cc.png",
            "nameEs": "Qatar",
            "nameEn": "Qatar"
      },
      {
            "id": "fwc_2026_saudi_arabia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/saudi-arabia-national-team.football-logos.cc.png",
            "nameEs": "Saudi Arabia",
            "nameEn": "Saudi Arabia"
      },
      {
            "id": "fwc_2026_scotland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/scotland-national-team.football-logos.cc.png",
            "nameEs": "Scotland",
            "nameEn": "Scotland"
      },
      {
            "id": "fwc_2026_senegal_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/senegal-national-team.football-logos.cc.png",
            "nameEs": "Senegal",
            "nameEn": "Senegal"
      },
      {
            "id": "fwc_2026_south_africa_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/south-africa-national-team.football-logos.cc.png",
            "nameEs": "South Africa",
            "nameEn": "South Africa"
      },
      {
            "id": "fwc_2026_south_korea_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/south-korea-national-team.football-logos.cc.png",
            "nameEs": "South Korea",
            "nameEn": "South Korea"
      },
      {
            "id": "fwc_2026_spain_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/spain-national-team.football-logos.cc.png",
            "nameEs": "Spain",
            "nameEn": "Spain"
      },
      {
            "id": "fwc_2026_sweden_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/sweden-national-team.football-logos.cc.png",
            "nameEs": "Sweden",
            "nameEn": "Sweden"
      },
      {
            "id": "fwc_2026_switzerland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/switzerland-national-team.football-logos.cc.png",
            "nameEs": "Switzerland",
            "nameEn": "Switzerland"
      },
      {
            "id": "fwc_2026_tunisia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/tunisia-national-team.football-logos.cc.png",
            "nameEs": "Tunisia",
            "nameEn": "Tunisia"
      },
      {
            "id": "fwc_2026_turkey_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/turkey-national-team.football-logos.cc.png",
            "nameEs": "Turkey",
            "nameEn": "Turkey"
      },
      {
            "id": "fwc_2026_uruguay_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/uruguay-national-team.football-logos.cc.png",
            "nameEs": "Uruguay",
            "nameEn": "Uruguay"
      },
      {
            "id": "fwc_2026_usa_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/usa-national-team.football-logos.cc.png",
            "nameEs": "Usa",
            "nameEn": "Usa"
      },
      {
            "id": "fwc_2026_uzbekistan_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/world-cup-2026/uzbekistan-national-team.football-logos.cc.png",
            "nameEs": "Uzbekistan",
            "nameEn": "Uzbekistan"
      }
],
    [SOCCER_SUB_TABS.GERMANY_BUNDESLIGA]: [
      {
            "id": "ger_bl_augsburg_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/augsburg.football-logos.cc.png",
            "nameEs": "Augsburg",
            "nameEn": "Augsburg"
      },
      {
            "id": "ger_bl_bayer_leverkusen_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/bayer-leverkusen.football-logos.cc.png",
            "nameEs": "Bayer Leverkusen",
            "nameEn": "Bayer Leverkusen"
      },
      {
            "id": "ger_bl_bayern_munchen_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/bayern-munchen.football-logos.cc.png",
            "nameEs": "Bayern Munchen",
            "nameEn": "Bayern Munchen"
      },
      {
            "id": "ger_bl_borussia_dortmund_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/borussia-dortmund.football-logos.cc.png",
            "nameEs": "Borussia Dortmund",
            "nameEn": "Borussia Dortmund"
      },
      {
            "id": "ger_bl_borussia_monchengladbach_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/borussia-monchengladbach.football-logos.cc.png",
            "nameEs": "Borussia Monchengladbach",
            "nameEn": "Borussia Monchengladbach"
      },
      {
            "id": "ger_bl_eintracht_frankfurt_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/eintracht-frankfurt.football-logos.cc.png",
            "nameEs": "Eintracht Frankfurt",
            "nameEn": "Eintracht Frankfurt"
      },
      {
            "id": "ger_bl_freiburg_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/freiburg.football-logos.cc.png",
            "nameEs": "Freiburg",
            "nameEn": "Freiburg"
      },
      {
            "id": "ger_bl_hamburger_sv_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/hamburger-sv.football-logos.cc.png",
            "nameEs": "Hamburger Sv",
            "nameEn": "Hamburger Sv"
      },
      {
            "id": "ger_bl_hoffenheim_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/hoffenheim.football-logos.cc.png",
            "nameEs": "Hoffenheim",
            "nameEn": "Hoffenheim"
      },
      {
            "id": "ger_bl_koln_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/koln.football-logos.cc.png",
            "nameEs": "Koln",
            "nameEn": "Koln"
      },
      {
            "id": "ger_bl_mainz_05_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/mainz-05.football-logos.cc.png",
            "nameEs": "Mainz 05",
            "nameEn": "Mainz 05"
      },
      {
            "id": "ger_bl_paderborn_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/paderborn.football-logos.cc.png",
            "nameEs": "Paderborn",
            "nameEn": "Paderborn"
      },
      {
            "id": "ger_bl_rb_leipzig_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/rb-leipzig.football-logos.cc.png",
            "nameEs": "Rb Leipzig",
            "nameEn": "Rb Leipzig"
      },
      {
            "id": "ger_bl_schalke_04_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/schalke-04.football-logos.cc.png",
            "nameEs": "Schalke 04",
            "nameEn": "Schalke 04"
      },
      {
            "id": "ger_bl_sv_elversberg_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/sv-elversberg.football-logos.cc.png",
            "nameEs": "Sv Elversberg",
            "nameEn": "Sv Elversberg"
      },
      {
            "id": "ger_bl_union_berlin_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/union-berlin.football-logos.cc.png",
            "nameEs": "Union Berlin",
            "nameEn": "Union Berlin"
      },
      {
            "id": "ger_bl_vfb_stuttgart_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/vfb-stuttgart.football-logos.cc.png",
            "nameEs": "Vfb Stuttgart",
            "nameEn": "Vfb Stuttgart"
      },
      {
            "id": "ger_bl_werder_bremen_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/germany-bundesliga/werder-bremen.football-logos.cc.png",
            "nameEs": "Werder Bremen",
            "nameEn": "Werder Bremen"
      }
],
    [SOCCER_SUB_TABS.SPAIN_LA_LIGA]: [
      {
            "id": "esp_ll_athletic_club_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/athletic-club.football-logos.cc.png",
            "nameEs": "Athletic Club",
            "nameEn": "Athletic Club"
      },
      {
            "id": "esp_ll_atletico_madrid_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/atletico-madrid.football-logos.cc.png",
            "nameEs": "Atletico Madrid",
            "nameEn": "Atletico Madrid"
      },
      {
            "id": "esp_ll_barcelona_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/barcelona.football-logos.cc.png",
            "nameEs": "Barcelona",
            "nameEn": "Barcelona"
      },
      {
            "id": "esp_ll_celta_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/celta.football-logos.cc.png",
            "nameEs": "Celta",
            "nameEn": "Celta"
      },
      {
            "id": "esp_ll_deportivo_la_coruna_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/deportivo-la-coruna.football-logos.cc.png",
            "nameEs": "Deportivo La Coruna",
            "nameEn": "Deportivo La Coruna"
      },
      {
            "id": "esp_ll_deportivo_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/deportivo.football-logos.cc.png",
            "nameEs": "Deportivo",
            "nameEn": "Deportivo"
      },
      {
            "id": "esp_ll_elche_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/elche.football-logos.cc.png",
            "nameEs": "Elche",
            "nameEn": "Elche"
      },
      {
            "id": "esp_ll_espanyol_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/espanyol.football-logos.cc.png",
            "nameEs": "Espanyol",
            "nameEn": "Espanyol"
      },
      {
            "id": "esp_ll_getafe_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/getafe.football-logos.cc.png",
            "nameEs": "Getafe",
            "nameEn": "Getafe"
      },
      {
            "id": "esp_ll_levante_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/levante.football-logos.cc.png",
            "nameEs": "Levante",
            "nameEn": "Levante"
      },
      {
            "id": "esp_ll_malaga_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/malaga.football-logos.cc.png",
            "nameEs": "Malaga",
            "nameEn": "Malaga"
      },
      {
            "id": "esp_ll_osasuna_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/osasuna.football-logos.cc.png",
            "nameEs": "Osasuna",
            "nameEn": "Osasuna"
      },
      {
            "id": "esp_ll_racing_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/racing.football-logos.cc.png",
            "nameEs": "Racing",
            "nameEn": "Racing"
      },
      {
            "id": "esp_ll_rayo_vallecano_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/rayo-vallecano.football-logos.cc.png",
            "nameEs": "Rayo Vallecano",
            "nameEn": "Rayo Vallecano"
      },
      {
            "id": "esp_ll_real_betis_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/real-betis.football-logos.cc.png",
            "nameEs": "Real Betis",
            "nameEn": "Real Betis"
      },
      {
            "id": "esp_ll_real_madrid_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/real-madrid.football-logos.cc.png",
            "nameEs": "Real Madrid",
            "nameEn": "Real Madrid"
      },
      {
            "id": "esp_ll_real_sociedad_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/real-sociedad.football-logos.cc.png",
            "nameEs": "Real Sociedad",
            "nameEn": "Real Sociedad"
      },
      {
            "id": "esp_ll_sevilla_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/sevilla.football-logos.cc.png",
            "nameEs": "Sevilla",
            "nameEn": "Sevilla"
      },
      {
            "id": "esp_ll_valencia_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/valencia.football-logos.cc.png",
            "nameEs": "Valencia",
            "nameEn": "Valencia"
      },
      {
            "id": "esp_ll_villarreal_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/la-liga/villarreal.football-logos.cc.png",
            "nameEs": "Villarreal",
            "nameEn": "Villarreal"
      }
],
    [SOCCER_SUB_TABS.UEFA_CHAMPIONS_LEAGUE]: [
      {
            "id": "uefa_ucl_aek_athens_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/aek-athens.football-logos.cc.png",
            "nameEs": "Aek Athens",
            "nameEn": "Aek Athens"
      },
      {
            "id": "uefa_ucl_arsenal_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/arsenal.football-logos.cc.png",
            "nameEs": "Arsenal",
            "nameEn": "Arsenal"
      },
      {
            "id": "uefa_ucl_aston_villa_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/aston-villa.football-logos.cc.png",
            "nameEs": "Aston Villa",
            "nameEn": "Aston Villa"
      },
      {
            "id": "uefa_ucl_atletico_madrid_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/atletico-madrid.football-logos.cc.png",
            "nameEs": "Atletico Madrid",
            "nameEn": "Atletico Madrid"
      },
      {
            "id": "uefa_ucl_barcelona_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/barcelona.football-logos.cc.png",
            "nameEs": "Barcelona",
            "nameEn": "Barcelona"
      },
      {
            "id": "uefa_ucl_bayern_munchen_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/bayern-munchen.football-logos.cc.png",
            "nameEs": "Bayern Munchen",
            "nameEn": "Bayern Munchen"
      },
      {
            "id": "uefa_ucl_bodo_glimt_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/bodo-glimt.football-logos.cc.png",
            "nameEs": "Bodo Glimt",
            "nameEn": "Bodo Glimt"
      },
      {
            "id": "uefa_ucl_borussia_dortmund_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/borussia-dortmund.football-logos.cc.png",
            "nameEs": "Borussia Dortmund",
            "nameEn": "Borussia Dortmund"
      },
      {
            "id": "uefa_ucl_club_brugge_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/club-brugge.football-logos.cc.png",
            "nameEs": "Club Brugge",
            "nameEn": "Club Brugge"
      },
      {
            "id": "uefa_ucl_como_1907_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/como-1907.football-logos.cc.png",
            "nameEs": "Como 1907",
            "nameEn": "Como 1907"
      },
      {
            "id": "uefa_ucl_fc_porto_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/fc-porto.football-logos.cc.png",
            "nameEs": "Fc Porto",
            "nameEn": "Fc Porto"
      },
      {
            "id": "uefa_ucl_fenerbahce_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/fenerbahce.football-logos.cc.png",
            "nameEs": "Fenerbahce",
            "nameEn": "Fenerbahce"
      },
      {
            "id": "uefa_ucl_feyenoord_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/feyenoord.football-logos.cc.png",
            "nameEs": "Feyenoord",
            "nameEn": "Feyenoord"
      },
      {
            "id": "uefa_ucl_galatasaray_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/galatasaray.football-logos.cc.png",
            "nameEs": "Galatasaray",
            "nameEn": "Galatasaray"
      },
      {
            "id": "uefa_ucl_inter_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/inter.football-logos.cc.png",
            "nameEs": "Inter",
            "nameEn": "Inter"
      },
      {
            "id": "uefa_ucl_lask_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/lask.football-logos.cc.png",
            "nameEs": "Lask",
            "nameEn": "Lask"
      },
      {
            "id": "uefa_ucl_lille_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/lille.football-logos.cc.png",
            "nameEs": "Lille",
            "nameEn": "Lille"
      },
      {
            "id": "uefa_ucl_liverpool_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/liverpool.football-logos.cc.png",
            "nameEs": "Liverpool",
            "nameEn": "Liverpool"
      },
      {
            "id": "uefa_ucl_manchester_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/manchester-city.football-logos.cc.png",
            "nameEs": "Manchester City",
            "nameEn": "Manchester City"
      },
      {
            "id": "uefa_ucl_manchester_united_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/manchester-united.football-logos.cc.png",
            "nameEs": "Manchester United",
            "nameEn": "Manchester United"
      },
      {
            "id": "uefa_ucl_napoli_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/napoli.football-logos.cc.png",
            "nameEs": "Napoli",
            "nameEn": "Napoli"
      },
      {
            "id": "uefa_ucl_paris_saint_germain_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/paris-saint-germain.football-logos.cc.png",
            "nameEs": "Paris Saint Germain",
            "nameEn": "Paris Saint Germain"
      },
      {
            "id": "uefa_ucl_psv_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/psv.football-logos.cc.png",
            "nameEs": "Psv",
            "nameEn": "Psv"
      },
      {
            "id": "uefa_ucl_rb_leipzig_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/rb-leipzig.football-logos.cc.png",
            "nameEs": "Rb Leipzig",
            "nameEn": "Rb Leipzig"
      },
      {
            "id": "uefa_ucl_rc_lens_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/rc-lens.football-logos.cc.png",
            "nameEs": "Rc Lens",
            "nameEn": "Rc Lens"
      },
      {
            "id": "uefa_ucl_real_betis_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/real-betis.football-logos.cc.png",
            "nameEs": "Real Betis",
            "nameEn": "Real Betis"
      },
      {
            "id": "uefa_ucl_real_madrid_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/real-madrid.football-logos.cc.png",
            "nameEs": "Real Madrid",
            "nameEn": "Real Madrid"
      },
      {
            "id": "uefa_ucl_roma_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/roma.football-logos.cc.png",
            "nameEs": "Roma",
            "nameEn": "Roma"
      },
      {
            "id": "uefa_ucl_s_bratislava_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/s-bratislava.football-logos.cc.png",
            "nameEs": "S Bratislava",
            "nameEn": "S Bratislava"
      },
      {
            "id": "uefa_ucl_sabah_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/sabah.football-logos.cc.png",
            "nameEs": "Sabah",
            "nameEn": "Sabah"
      },
      {
            "id": "uefa_ucl_shakhtar_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/shakhtar.football-logos.cc.png",
            "nameEs": "Shakhtar",
            "nameEn": "Shakhtar"
      },
      {
            "id": "uefa_ucl_slavia_praha_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/slavia-praha.football-logos.cc.png",
            "nameEs": "Slavia Praha",
            "nameEn": "Slavia Praha"
      },
      {
            "id": "uefa_ucl_sporting_cp_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/sporting-cp.football-logos.cc.png",
            "nameEs": "Sporting Cp",
            "nameEn": "Sporting Cp"
      },
      {
            "id": "uefa_ucl_vfb_stuttgart_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/vfb-stuttgart.football-logos.cc.png",
            "nameEs": "Vfb Stuttgart",
            "nameEn": "Vfb Stuttgart"
      },
      {
            "id": "uefa_ucl_viking_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/viking.football-logos.cc.png",
            "nameEs": "Viking",
            "nameEn": "Viking"
      },
      {
            "id": "uefa_ucl_villarreal_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/ucl-champions-league/villarreal.football-logos.cc.png",
            "nameEs": "Villarreal",
            "nameEn": "Villarreal"
      }
],
    [SOCCER_SUB_TABS.UEFA_NATIONS_LEAGUE]: [
      {
            "id": "uefa_unl_albania_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/albania-national-team.football-logos.cc.png",
            "nameEs": "Albania",
            "nameEn": "Albania"
      },
      {
            "id": "uefa_unl_andorra_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/andorra-national-team.football-logos.cc.png",
            "nameEs": "Andorra",
            "nameEn": "Andorra"
      },
      {
            "id": "uefa_unl_armenia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/armenia-national-team.football-logos.cc.png",
            "nameEs": "Armenia",
            "nameEn": "Armenia"
      },
      {
            "id": "uefa_unl_austria_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/austria-national-team.football-logos.cc.png",
            "nameEs": "Austria",
            "nameEn": "Austria"
      },
      {
            "id": "uefa_unl_azerbaijan_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/azerbaijan-national-team.football-logos.cc.png",
            "nameEs": "Azerbaijan",
            "nameEn": "Azerbaijan"
      },
      {
            "id": "uefa_unl_belarus_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/belarus-national-team.football-logos.cc.png",
            "nameEs": "Belarus",
            "nameEn": "Belarus"
      },
      {
            "id": "uefa_unl_belgium_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/belgium-national-team.football-logos.cc.png",
            "nameEs": "Belgium",
            "nameEn": "Belgium"
      },
      {
            "id": "uefa_unl_bosnia_and_herzegovina_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/bosnia-and-herzegovina-national-team.football-logos.cc.png",
            "nameEs": "Bosnia And Herzegovina",
            "nameEn": "Bosnia And Herzegovina"
      },
      {
            "id": "uefa_unl_bulgaria_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/bulgaria-national-team.football-logos.cc.png",
            "nameEs": "Bulgaria",
            "nameEn": "Bulgaria"
      },
      {
            "id": "uefa_unl_croatia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/croatia-national-team.football-logos.cc.png",
            "nameEs": "Croatia",
            "nameEn": "Croatia"
      },
      {
            "id": "uefa_unl_cyprus_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/cyprus-national-team.football-logos.cc.png",
            "nameEs": "Cyprus",
            "nameEn": "Cyprus"
      },
      {
            "id": "uefa_unl_czech_republic_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/czech-republic-national-team.football-logos.cc.png",
            "nameEs": "Czech Republic",
            "nameEn": "Czech Republic"
      },
      {
            "id": "uefa_unl_denmark_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/denmark-national-team.football-logos.cc.png",
            "nameEs": "Denmark",
            "nameEn": "Denmark"
      },
      {
            "id": "uefa_unl_dutch_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/dutch-national-team.football-logos.cc.png",
            "nameEs": "Netherlands",
            "nameEn": "Netherlands"
      },
      {
            "id": "uefa_unl_england_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/england-national-team.football-logos.cc.png",
            "nameEs": "England",
            "nameEn": "England"
      },
      {
            "id": "uefa_unl_estonia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/estonia-national-team.football-logos.cc.png",
            "nameEs": "Estonia",
            "nameEn": "Estonia"
      },
      {
            "id": "uefa_unl_faroe_islands_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/faroe-islands-national-team.football-logos.cc.png",
            "nameEs": "Faroe Islands",
            "nameEn": "Faroe Islands"
      },
      {
            "id": "uefa_unl_finland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/finland-national-team.football-logos.cc.png",
            "nameEs": "Finland",
            "nameEn": "Finland"
      },
      {
            "id": "uefa_unl_france_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/france-national-team.football-logos.cc.png",
            "nameEs": "France",
            "nameEn": "France"
      },
      {
            "id": "uefa_unl_georgia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/georgia-national-team.football-logos.cc.png",
            "nameEs": "Georgia",
            "nameEn": "Georgia"
      },
      {
            "id": "uefa_unl_germany_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/germany-national-team.football-logos.cc.png",
            "nameEs": "Germany",
            "nameEn": "Germany"
      },
      {
            "id": "uefa_unl_gibraltar_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/gibraltar-national-team.football-logos.cc.png",
            "nameEs": "Gibraltar",
            "nameEn": "Gibraltar"
      },
      {
            "id": "uefa_unl_greece_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/greece-national-team.football-logos.cc.png",
            "nameEs": "Greece",
            "nameEn": "Greece"
      },
      {
            "id": "uefa_unl_hungary_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/hungary-national-team.football-logos.cc.png",
            "nameEs": "Hungary",
            "nameEn": "Hungary"
      },
      {
            "id": "uefa_unl_iceland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/iceland-national-team.football-logos.cc.png",
            "nameEs": "Iceland",
            "nameEn": "Iceland"
      },
      {
            "id": "uefa_unl_israel_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/israel-national-team.football-logos.cc.png",
            "nameEs": "Israel",
            "nameEn": "Israel"
      },
      {
            "id": "uefa_unl_italy_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/italy-national-team.football-logos.cc.png",
            "nameEs": "Italy",
            "nameEn": "Italy"
      },
      {
            "id": "uefa_unl_kazakhstan_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/kazakhstan-national-team.football-logos.cc.png",
            "nameEs": "Kazakhstan",
            "nameEn": "Kazakhstan"
      },
      {
            "id": "uefa_unl_kosovo_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/kosovo-national-team.football-logos.cc.png",
            "nameEs": "Kosovo",
            "nameEn": "Kosovo"
      },
      {
            "id": "uefa_unl_latvia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/latvia-national-team.football-logos.cc.png",
            "nameEs": "Latvia",
            "nameEn": "Latvia"
      },
      {
            "id": "uefa_unl_liechtenstein_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/liechtenstein-national-team.football-logos.cc.png",
            "nameEs": "Liechtenstein",
            "nameEn": "Liechtenstein"
      },
      {
            "id": "uefa_unl_lithuania_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/lithuania-national-team.football-logos.cc.png",
            "nameEs": "Lithuania",
            "nameEn": "Lithuania"
      },
      {
            "id": "uefa_unl_luxembourg_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/luxembourg-national-team.football-logos.cc.png",
            "nameEs": "Luxembourg",
            "nameEn": "Luxembourg"
      },
      {
            "id": "uefa_unl_malta_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/malta-national-team.football-logos.cc.png",
            "nameEs": "Malta",
            "nameEn": "Malta"
      },
      {
            "id": "uefa_unl_moldova_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/moldova-national-team.football-logos.cc.png",
            "nameEs": "Moldova",
            "nameEn": "Moldova"
      },
      {
            "id": "uefa_unl_montenegro_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/montenegro-national-team.football-logos.cc.png",
            "nameEs": "Montenegro",
            "nameEn": "Montenegro"
      },
      {
            "id": "uefa_unl_north_macedonia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/north-macedonia-national-team.football-logos.cc.png",
            "nameEs": "North Macedonia",
            "nameEn": "North Macedonia"
      },
      {
            "id": "uefa_unl_northern_ireland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/northern-ireland-national-team.football-logos.cc.png",
            "nameEs": "Northern Ireland",
            "nameEn": "Northern Ireland"
      },
      {
            "id": "uefa_unl_norway_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/norway-national-team.football-logos.cc.png",
            "nameEs": "Norway",
            "nameEn": "Norway"
      },
      {
            "id": "uefa_unl_poland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/poland-national-team.football-logos.cc.png",
            "nameEs": "Poland",
            "nameEn": "Poland"
      },
      {
            "id": "uefa_unl_portuguese_football_federation_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/portuguese-football-federation.football-logos.cc.png",
            "nameEs": "Portugal",
            "nameEn": "Portugal"
      },
      {
            "id": "uefa_unl_republic_of_ireland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/republic-of-ireland-national-team.football-logos.cc.png",
            "nameEs": "Republic Of Ireland",
            "nameEn": "Republic Of Ireland"
      },
      {
            "id": "uefa_unl_romania_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/romania-national-team.football-logos.cc.png",
            "nameEs": "Romania",
            "nameEn": "Romania"
      },
      {
            "id": "uefa_unl_san_marino_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/san-marino-national-team.football-logos.cc.png",
            "nameEs": "San Marino",
            "nameEn": "San Marino"
      },
      {
            "id": "uefa_unl_scotland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/scotland-national-team.football-logos.cc.png",
            "nameEs": "Scotland",
            "nameEn": "Scotland"
      },
      {
            "id": "uefa_unl_serbia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/serbia-national-team.football-logos.cc.png",
            "nameEs": "Serbia",
            "nameEn": "Serbia"
      },
      {
            "id": "uefa_unl_slovakia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/slovakia-national-team.football-logos.cc.png",
            "nameEs": "Slovakia",
            "nameEn": "Slovakia"
      },
      {
            "id": "uefa_unl_slovenia_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/slovenia-national-team.football-logos.cc.png",
            "nameEs": "Slovenia",
            "nameEn": "Slovenia"
      },
      {
            "id": "uefa_unl_spain_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/spain-national-team.football-logos.cc.png",
            "nameEs": "Spain",
            "nameEn": "Spain"
      },
      {
            "id": "uefa_unl_sweden_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/sweden-national-team.football-logos.cc.png",
            "nameEs": "Sweden",
            "nameEn": "Sweden"
      },
      {
            "id": "uefa_unl_switzerland_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/switzerland-national-team.football-logos.cc.png",
            "nameEs": "Switzerland",
            "nameEn": "Switzerland"
      },
      {
            "id": "uefa_unl_turkey_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/turkey-national-team.football-logos.cc.png",
            "nameEs": "Turkey",
            "nameEn": "Turkey"
      },
      {
            "id": "uefa_unl_ukraine_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/ukraine-national-team.football-logos.cc.png",
            "nameEs": "Ukraine",
            "nameEn": "Ukraine"
      },
      {
            "id": "uefa_unl_wales_national_team_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/uefa-nations-league/wales-national-team.football-logos.cc.png",
            "nameEs": "Wales",
            "nameEn": "Wales"
      }
],
    [SOCCER_SUB_TABS.USA_MLS]: [
      {
            "id": "usa_mls_atlanta_united_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/atlanta-united.football-logos.cc.png",
            "nameEs": "Atlanta United",
            "nameEn": "Atlanta United"
      },
      {
            "id": "usa_mls_austins_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/austins-fc.football-logos.cc.png",
            "nameEs": "Austins Fc",
            "nameEn": "Austins Fc"
      },
      {
            "id": "usa_mls_cf_montreal_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/cf-montreal.football-logos.cc.png",
            "nameEs": "Cf Montreal",
            "nameEn": "Cf Montreal"
      },
      {
            "id": "usa_mls_charlotte_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/charlotte-fc.football-logos.cc.png",
            "nameEs": "Charlotte Fc",
            "nameEn": "Charlotte Fc"
      },
      {
            "id": "usa_mls_chicago_fire_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/chicago-fire-fc.football-logos.cc.png",
            "nameEs": "Chicago Fire Fc",
            "nameEn": "Chicago Fire Fc"
      },
      {
            "id": "usa_mls_colorado_rapids_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/colorado-rapids.football-logos.cc.png",
            "nameEs": "Colorado Rapids",
            "nameEn": "Colorado Rapids"
      },
      {
            "id": "usa_mls_columbus_crew_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/columbus-crew.football-logos.cc.png",
            "nameEs": "Columbus Crew",
            "nameEn": "Columbus Crew"
      },
      {
            "id": "usa_mls_dc_united_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/dc-united.football-logos.cc.png",
            "nameEs": "Dc United",
            "nameEn": "Dc United"
      },
      {
            "id": "usa_mls_fc_cincinnati_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/fc-cincinnati.football-logos.cc.png",
            "nameEs": "Fc Cincinnati",
            "nameEn": "Fc Cincinnati"
      },
      {
            "id": "usa_mls_fc_dallas_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/fc-dallas.football-logos.cc.png",
            "nameEs": "Fc Dallas",
            "nameEn": "Fc Dallas"
      },
      {
            "id": "usa_mls_houston_dynamo_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/houston-dynamo.football-logos.cc.png",
            "nameEs": "Houston Dynamo",
            "nameEn": "Houston Dynamo"
      },
      {
            "id": "usa_mls_inter_miami_cf_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/inter-miami-cf.football-logos.cc.png",
            "nameEs": "Inter Miami Cf",
            "nameEn": "Inter Miami Cf"
      },
      {
            "id": "usa_mls_la_galaxy_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/la-galaxy.football-logos.cc.png",
            "nameEs": "La Galaxy",
            "nameEn": "La Galaxy"
      },
      {
            "id": "usa_mls_los_angeles_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/los-angeles-fc.football-logos.cc.png",
            "nameEs": "Los Angeles Fc",
            "nameEn": "Los Angeles Fc"
      },
      {
            "id": "usa_mls_minnesota_united_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/minnesota-united-fc.football-logos.cc.png",
            "nameEs": "Minnesota United Fc",
            "nameEn": "Minnesota United Fc"
      },
      {
            "id": "usa_mls_nashville_sc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/nashville-sc.football-logos.cc.png",
            "nameEs": "Nashville Sc",
            "nameEn": "Nashville Sc"
      },
      {
            "id": "usa_mls_new_england_revolution_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/new-england-revolution.football-logos.cc.png",
            "nameEs": "New England Revolution",
            "nameEn": "New England Revolution"
      },
      {
            "id": "usa_mls_new_york_city_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/new-york-city-fc.football-logos.cc.png",
            "nameEs": "New York City Fc",
            "nameEn": "New York City Fc"
      },
      {
            "id": "usa_mls_new_york_red_bulls_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/new-york-red-bulls.football-logos.cc.png",
            "nameEs": "New York Red Bulls",
            "nameEn": "New York Red Bulls"
      },
      {
            "id": "usa_mls_orlando_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/orlando-city.football-logos.cc.png",
            "nameEs": "Orlando City",
            "nameEn": "Orlando City"
      },
      {
            "id": "usa_mls_philadelphia_union_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/philadelphia-union.football-logos.cc.png",
            "nameEs": "Philadelphia Union",
            "nameEn": "Philadelphia Union"
      },
      {
            "id": "usa_mls_portland_timbers_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/portland-timbers.football-logos.cc.png",
            "nameEs": "Portland Timbers",
            "nameEn": "Portland Timbers"
      },
      {
            "id": "usa_mls_real_salt_lake_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/real-salt-lake.football-logos.cc.png",
            "nameEs": "Real Salt Lake",
            "nameEn": "Real Salt Lake"
      },
      {
            "id": "usa_mls_san_diego_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/san-diego-fc.football-logos.cc.png",
            "nameEs": "San Diego Fc",
            "nameEn": "San Diego Fc"
      },
      {
            "id": "usa_mls_san_jose_earthquakes_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/san-jose-earthquakes.football-logos.cc.png",
            "nameEs": "San Jose Earthquakes",
            "nameEn": "San Jose Earthquakes"
      },
      {
            "id": "usa_mls_seattle_sounders_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/seattle-sounders-fc.football-logos.cc.png",
            "nameEs": "Seattle Sounders Fc",
            "nameEn": "Seattle Sounders Fc"
      },
      {
            "id": "usa_mls_sporting_kansas_city_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/sporting-kansas-city.football-logos.cc.png",
            "nameEs": "Sporting Kansas City",
            "nameEn": "Sporting Kansas City"
      },
      {
            "id": "usa_mls_st_louis_city_sc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/st-louis-city-sc.football-logos.cc.png",
            "nameEs": "St Louis City Sc",
            "nameEn": "St Louis City Sc"
      },
      {
            "id": "usa_mls_toronto_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/toronto-fc.football-logos.cc.png",
            "nameEs": "Toronto Fc",
            "nameEn": "Toronto Fc"
      },
      {
            "id": "usa_mls_vancouver_whitecaps_fc_football_logos_cc",
            "symbol": "⚽",
            "logoUrl": "/logos/usa-mls/vancouver-whitecaps-fc.football-logos.cc.png",
            "nameEs": "Vancouver Whitecaps Fc",
            "nameEn": "Vancouver Whitecaps Fc"
      }
]
  }
}
