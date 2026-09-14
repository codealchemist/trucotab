import React, { useState, useEffect } from 'react'
import { X, Search } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { BADGE_TABS, SOCCER_SUB_TABS, BADGES } from '../data/badges'

function findBadgeLocation(badgeValue) {
  if (!badgeValue) return null

  // Check Soccer Flags for logoUrl match or symbol match
  const soccerTabObj = BADGES[BADGE_TABS.SOCCER_FLAGS] || {}
  for (const [subKey, teamList] of Object.entries(soccerTabObj)) {
    if (Array.isArray(teamList)) {
      const match = teamList.find(
        item => item.logoUrl === badgeValue || item.symbol === badgeValue
      )
      if (match) {
        return { tab: BADGE_TABS.SOCCER_FLAGS, subTab: subKey }
      }
    }
  }

  // Check Country Flags
  const countryList = BADGES[BADGE_TABS.COUNTRY_FLAGS] || []
  if (
    countryList.some(
      item => item.symbol === badgeValue || item.id === badgeValue
    )
  ) {
    return { tab: BADGE_TABS.COUNTRY_FLAGS }
  }

  // Check Emojis
  const emojiList = BADGES[BADGE_TABS.EMOJIS] || []
  if (
    emojiList.some(item => item.symbol === badgeValue || item.id === badgeValue)
  ) {
    return { tab: BADGE_TABS.EMOJIS }
  }

  return null
}

export function EmojiPickerOverlay({
  openFor,
  currentBadge,
  onClose,
  onChoose
}) {
  const { t, lang } = useTranslation()
  const [activeTab, setActiveTab] = useState(BADGE_TABS.EMOJIS)
  const [soccerSubTab, setSoccerSubTab] = useState(
    SOCCER_SUB_TABS.ARGENTINA_PRIMERA_DIVISION
  )
  const [searchQuery, setSearchQuery] = useState('')

  // Reset tab states when picker opens or locate active badge
  useEffect(() => {
    if (openFor) {
      setSearchQuery('')
      const loc = findBadgeLocation(currentBadge)
      if (loc) {
        setActiveTab(loc.tab)
        if (loc.subTab) {
          setSoccerSubTab(loc.subTab)
        }
      } else {
        setActiveTab(BADGE_TABS.EMOJIS)
        setSoccerSubTab(SOCCER_SUB_TABS.ARGENTINA_PRIMERA_DIVISION)
      }
    }
  }, [openFor, currentBadge])

  // Close on Escape key
  useEffect(() => {
    if (!openFor) return
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [openFor, onClose])

  if (!openFor) return null

  // Get active items list
  let items = []
  const query = searchQuery.trim().toLowerCase()

  if (activeTab === BADGE_TABS.SOCCER_FLAGS) {
    const soccerObj = BADGES[BADGE_TABS.SOCCER_FLAGS] || {}

    if (query !== '') {
      // When searching soccer teams, search across ALL soccer sections and deduplicate by team name!
      const combined = []
      const seenNames = new Set()
      Object.entries(soccerObj).forEach(([subKey, list]) => {
        if (Array.isArray(list)) {
          list.forEach(item => {
            const teamKey = (item.nameEs || item.nameEn || item.id)
              .toLowerCase()
              .trim()
            if (!seenNames.has(teamKey)) {
              seenNames.add(teamKey)
              combined.push({ ...item, subTabKey: subKey })
            }
          })
        }
      })
      items = combined
    } else if (soccerSubTab === SOCCER_SUB_TABS.ALL) {
      const combined = []
      const seenNames = new Set()
      Object.entries(soccerObj).forEach(([subKey, list]) => {
        if (Array.isArray(list)) {
          list.forEach(item => {
            const teamKey = (item.nameEs || item.nameEn || item.id)
              .toLowerCase()
              .trim()
            if (!seenNames.has(teamKey)) {
              seenNames.add(teamKey)
              combined.push({ ...item, subTabKey: subKey })
            }
          })
        }
      })
      items = combined
    } else {
      const list = soccerObj[soccerSubTab] || []
      items = list.map(item => ({ ...item, subTabKey: soccerSubTab }))
    }
  } else {
    items = BADGES[activeTab] || []
  }

  // Section-specific search placeholder
  let searchPlaceholder = t('searchBadge')
  if (activeTab === BADGE_TABS.EMOJIS) {
    searchPlaceholder = t('searchEmoji')
  } else if (activeTab === BADGE_TABS.COUNTRY_FLAGS) {
    searchPlaceholder = t('searchCountry')
  } else if (activeTab === BADGE_TABS.SOCCER_FLAGS) {
    searchPlaceholder = t('searchSoccer')
  }

  // Filter items by search query
  const filteredItems = items.filter(item => {
    if (!query) return true
    const nameEs = (item.nameEs || '').toLowerCase()
    const nameEn = (item.nameEn || '').toLowerCase()
    const symbol = (item.symbol || '').toLowerCase()
    const id = (item.id || '').toLowerCase()
    return (
      nameEs.includes(query) ||
      nameEn.includes(query) ||
      symbol.includes(query) ||
      id.includes(query)
    )
  })

  return (
    <div
      className='emoji-overlay'
      role='dialog'
      aria-modal='true'
      onClick={onClose}
    >
      <div className='emoji-overlay-backdrop' />
      <div className='emoji-modal-card' onClick={e => e.stopPropagation()}>
        <div className='emoji-modal-header'>
          <h3 className='emoji-modal-title'>{t('selectBadge')}</h3>
          <button
            className='btn emoji-modal-close'
            onClick={onClose}
            aria-label={t('close')}
            type='button'
          >
            <X size={20} />
          </button>
        </div>

        {/* Primary Tabs */}
        <div className='badge-tabs-nav' role='tablist'>
          <button
            type='button'
            role='tab'
            aria-selected={activeTab === BADGE_TABS.EMOJIS}
            className={`badge-tab-btn ${activeTab === BADGE_TABS.EMOJIS ? 'active' : ''}`}
            onClick={() => setActiveTab(BADGE_TABS.EMOJIS)}
          >
            {t('tabEmojis')}
          </button>
          <button
            type='button'
            role='tab'
            aria-selected={activeTab === BADGE_TABS.COUNTRY_FLAGS}
            className={`badge-tab-btn ${activeTab === BADGE_TABS.COUNTRY_FLAGS ? 'active' : ''}`}
            onClick={() => setActiveTab(BADGE_TABS.COUNTRY_FLAGS)}
          >
            {t('tabCountryFlags')}
          </button>
          <button
            type='button'
            role='tab'
            aria-selected={activeTab === BADGE_TABS.SOCCER_FLAGS}
            className={`badge-tab-btn ${activeTab === BADGE_TABS.SOCCER_FLAGS ? 'active' : ''}`}
            onClick={() => setActiveTab(BADGE_TABS.SOCCER_FLAGS)}
          >
            {t('tabSoccerFlags')}
          </button>
        </div>

        {/* Dropdown Selector for Soccer Flags */}
        {activeTab === BADGE_TABS.SOCCER_FLAGS && (
          <div className='badge-dropdown-wrapper'>
            <select
              id='soccer-league-select'
              className='badge-dropdown-select'
              value={soccerSubTab}
              onChange={e => setSoccerSubTab(e.target.value)}
              aria-label={t('selectLeague')}
            >
              <option value={SOCCER_SUB_TABS.ARGENTINA_PRIMERA_DIVISION}>
                {t('argentinaPrimeraDivision')}
              </option>
              <option value={SOCCER_SUB_TABS.ENGLISH_PREMIER_LEAGUE}>
                {t('englishPremierLeague')}
              </option>
              <option value={SOCCER_SUB_TABS.FIFA_WORLD_CUP_2026}>
                {t('fifaWorldCup2026')}
              </option>
              <option value={SOCCER_SUB_TABS.GERMANY_BUNDESLIGA}>
                {t('germanyBundesliga')}
              </option>
              <option value={SOCCER_SUB_TABS.SPAIN_LA_LIGA}>
                {t('spainLaLiga')}
              </option>
              <option value={SOCCER_SUB_TABS.UEFA_CHAMPIONS_LEAGUE}>
                {t('uclChampionsLeague')}
              </option>
              <option value={SOCCER_SUB_TABS.UEFA_NATIONS_LEAGUE}>
                {t('uefaNationsLeague')}
              </option>
              <option value={SOCCER_SUB_TABS.USA_MLS}>{t('usaMls')}</option>
            </select>
          </div>
        )}

        {/* Search Input Box */}
        <div className='emoji-search-wrapper'>
          <Search size={16} className='emoji-search-icon' />
          <input
            type='text'
            className='emoji-search-input'
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type='button'
              className='emoji-search-clear'
              onClick={() => setSearchQuery('')}
              aria-label={t('close')}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Badge Grid Area */}
        <div className='emoji-overlay-content'>
          {filteredItems.length === 0 ? (
            <div className='no-badges-found'>{t('noBadgesFound')}</div>
          ) : (
            <div
              className={`emoji-grid ${activeTab === BADGE_TABS.SOCCER_FLAGS ? 'soccer-grid' : ''}`}
            >
              {filteredItems.map(item => {
                const name = lang === 'es' ? item.nameEs : item.nameEn
                return (
                  <button
                    key={item.id}
                    className={`btn emoji-btn ${activeTab === BADGE_TABS.SOCCER_FLAGS ? 'soccer-btn' : ''}`}
                    onClick={() => {
                      const targetSubTab =
                        item.subTabKey ||
                        (activeTab === BADGE_TABS.SOCCER_FLAGS
                          ? soccerSubTab
                          : null)
                      if (targetSubTab) {
                        setSoccerSubTab(targetSubTab)
                      }
                      onChoose(openFor, item.logoUrl || item.symbol)
                      onClose()
                    }}
                    title={name}
                    aria-label={`${name} (${item.symbol})`}
                    type='button'
                  >
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={name}
                        className='emoji-logo-img'
                      />
                    ) : (
                      <span className='emoji-symbol'>{item.symbol}</span>
                    )}
                    {name && <span className='emoji-name'>{name}</span>}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmojiPickerOverlay
