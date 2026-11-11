import pkg from '../../package.json'
import { Bug, Lightbulb, ExternalLink, Heart } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

const REPO_URL = 'https://github.com/codealchemist/trucotab'
const NEW_ISSUE_URL = `${REPO_URL}/issues/new`

// GitHub mark (Octicons "mark-github"); lucide no longer ships brand icons.
function GitHubMark({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z' />
    </svg>
  )
}

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function About() {
  const { t } = useTranslation()
  return (
    <section className='about'>
      <h2>{t('aboutTitle')}</h2>

      <div className='about-card about-hero'>
        <img
          className='about-logo'
          src='/icons/icon-192.svg'
          alt=''
          width='72'
          height='72'
        />
        <div className='about-name'>
          TrucoTab <span className='about-version'>v{pkg.version}</span>
        </div>
        <p className='about-tagline'>{t('aboutText2')}</p>
        <p className='about-quote'>{t('aboutText3')}</p>
      </div>

      <div className='about-card about-collab'>
        <div className='about-collab-head'>
          <span className='about-collab-icon'>
            <GitHubMark size={26} />
          </span>
          <div>
            <div className='about-collab-title'>{t('aboutCollabTitle')}</div>
            <div className='about-collab-repo'>codealchemist/trucotab</div>
          </div>
        </div>
        <p className='about-collab-text'>{t('aboutCollabText')}</p>
        <div className='about-actions'>
          <a className='about-btn primary' href={REPO_URL} {...external}>
            <GitHubMark size={18} />
            {t('aboutViewOnGithub')}
            <ExternalLink size={14} aria-hidden='true' className='about-ext' />
          </a>
          <a
            className='about-btn'
            href={`${NEW_ISSUE_URL}?labels=bug`}
            {...external}
          >
            <Bug size={18} aria-hidden='true' />
            {t('aboutReportBug')}
          </a>
          <a
            className='about-btn'
            href={`${NEW_ISSUE_URL}?labels=enhancement`}
            {...external}
          >
            <Lightbulb size={18} aria-hidden='true' />
            {t('aboutSuggestFeature')}
          </a>
        </div>
      </div>

      <footer className='about-footer'>
        <p>{t('aboutText4')}</p>
        <p className='about-signature'>
          {t('aboutMadeBy')}{' '}
          <Heart size={14} aria-hidden='true' className='about-heart' /> Bert
          {' · '}
          <a href='https://albertomiranda.com.ar' {...external}>
            albertomiranda.com.ar
          </a>
        </p>
      </footer>
    </section>
  )
}
