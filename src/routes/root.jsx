import { Outlet, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pkg from '../../package.json'
import { setTheme, setLanguage } from '../store/settingsSlice'
import { useTranslation } from '../i18n/useTranslation'
import { QRCodeSVG } from 'qrcode.react'
import { toast } from 'react-toastify'
import {
  Menu,
  X,
  QrCode,
  Sun,
  Moon,
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  History as HistoryIcon,
  Trophy as TrophyIcon,
  Copy
} from 'lucide-react'
import {
  selectMatch,
  setLeftName,
  setRightName,
  setLeftEmoji,
  setRightEmoji,
  setMatchType,
  setLeftScore,
  setRightScore
} from '../store/matchSlice'

export default function Root() {
  const dispatch = useDispatch()
  const theme = useSelector(s => s.settings.theme)
  const matchState = useSelector(selectMatch)
  const { t, lang } = useTranslation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 720 : true
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme || 'dark')
  }, [theme])

  // Restore match state from URL parameters if present
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const leftNameParam = params.get('leftName')
    const rightNameParam = params.get('rightName')
    const leftScoreParam = params.get('leftScore')
    const rightScoreParam = params.get('rightScore')
    const leftEmojiParam = params.get('leftEmoji')
    const rightEmojiParam = params.get('rightEmoji')
    const matchTypeParam = params.get('matchType')

    const hasMatchParams =
      leftNameParam !== null ||
      rightNameParam !== null ||
      leftScoreParam !== null ||
      rightScoreParam !== null

    if (hasMatchParams) {
      if (leftNameParam !== null) dispatch(setLeftName(leftNameParam))
      if (rightNameParam !== null) dispatch(setRightName(rightNameParam))
      if (leftEmojiParam !== null) dispatch(setLeftEmoji(leftEmojiParam))
      if (rightEmojiParam !== null) dispatch(setRightEmoji(rightEmojiParam))
      if (matchTypeParam !== null) dispatch(setMatchType(matchTypeParam))
      if (leftScoreParam !== null)
        dispatch(setLeftScore(Number(leftScoreParam) || 0))
      if (rightScoreParam !== null)
        dispatch(setRightScore(Number(rightScoreParam) || 0))

      toast.info(t('matchLoaded'))

      // Clean query params from URL without refreshing
      const cleanUrl = window.location.origin + window.location.pathname
      window.history.replaceState({}, '', cleanUrl)
    }
  }, [dispatch, t])

  // theme toggle keyboard shortcut: 't'
  useEffect(() => {
    const onKey = e => {
      // Don't trigger if user is typing in an input
      if (
        e.target &&
        (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
      ) {
        return
      }
      if (e.key && e.key.toLowerCase() === 't') {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [theme, dispatch])

  // close menu on Escape
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setShareModalOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // track viewport size
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 720)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const getShareUrl = () => {
    if (typeof window === 'undefined') return ''
    const url = new URL(window.location.origin + window.location.pathname)
    url.searchParams.set('leftName', matchState.leftName)
    url.searchParams.set('leftEmoji', matchState.leftEmoji)
    url.searchParams.set('rightName', matchState.rightName)
    url.searchParams.set('rightEmoji', matchState.rightEmoji)
    url.searchParams.set('matchType', matchState.matchType)
    url.searchParams.set('leftScore', String(matchState.leftScore))
    url.searchParams.set('rightScore', String(matchState.rightScore))
    return url.toString()
  }

  const shareUrl = getShareUrl()

  return (
    <div className='app'>
      <header className='site-header'>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {isMobile && (
            <button
              className='btn hamburger'
              aria-label='Open menu'
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          )}
          <h1>TrucoTab</h1>
        </div>

        <div className='header-controls'>
          <button
            className='btn header-btn'
            title={t('shareMatch')}
            onClick={() => setShareModalOpen(true)}
            aria-label={t('shareMatch')}
          >
            <QrCode size={18} />
          </button>
          <button
            className='btn header-btn'
            title='Language / Idioma'
            onClick={() => dispatch(setLanguage(lang === 'es' ? 'en' : 'es'))}
          >
            {lang === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
          <button
            className='btn header-btn'
            title={t('theme')}
            onClick={() =>
              dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
            }
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>

      {/* Side pane */}
      <aside
        className={`side-pane ${menuOpen ? 'open-mobile' : ''}`}
        aria-label='Navigation pane'
      >
        <nav className='side-nav'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              'menu-item' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <HomeIcon size={18} style={{ marginRight: 8 }} />
            {t('navHome')}
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              'menu-item' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <InfoIcon size={18} style={{ marginRight: 8 }} />
            {t('navAbout')}
          </NavLink>
          <NavLink
            to='/settings'
            className={({ isActive }) =>
              'menu-item' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <SettingsIcon size={18} style={{ marginRight: 8 }} />
            {t('navSettings')}
          </NavLink>
          <NavLink
            to='/log'
            className={({ isActive }) =>
              'menu-item' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <HistoryIcon size={18} style={{ marginRight: 8 }} />
            {t('navLog')}
          </NavLink>
          <NavLink
            to='/leaderboard'
            className={({ isActive }) =>
              'menu-item' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <TrophyIcon size={18} style={{ marginRight: 8 }} />
            {t('navLeaderboard')}
          </NavLink>
        </nav>

        <div className='side-pane-footer'>
          TrucoTab <span className='version-pill'>v{pkg.version}</span>
        </div>
      </aside>

      {/* Backdrop for mobile when menuOpen */}
      {menuOpen && (
        <div className='menu-overlay' onClick={() => setMenuOpen(false)} />
      )}

      {/* Share QR Code Modal */}
      {shareModalOpen && (
        <div className='share-modal-overlay' role='dialog' aria-modal='true'>
          <div
            className='modal-backdrop'
            onClick={() => setShareModalOpen(false)}
          />
          <div className='modal-content share-modal'>
            <button
              className='btn modal-close-x'
              aria-label={t('close')}
              type='button'
              onClick={() => setShareModalOpen(false)}
            >
              <X size={20} />
            </button>
            <h3>{t('shareTitle')}</h3>
            <p className='share-desc'>{t('shareDesc')}</p>
            <div className='qr-container'>
              <QRCodeSVG value={shareUrl} size={190} includeMargin={true} />
            </div>
            <div className='share-url-row'>
              <input
                type='text'
                readOnly
                className='share-url-input'
                value={shareUrl}
                onClick={e => e.target.select()}
              />
              <button
                className='btn share-copy-btn'
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl)
                  toast.success(t('linkCopied'))
                }}
              >
                <Copy
                  size={16}
                  style={{ marginRight: 6, verticalAlign: 'middle' }}
                />
                {t('copyLink')}
              </button>
            </div>
          </div>
        </div>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  )
}
