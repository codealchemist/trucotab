import pkg from '../../package.json'
import { useTranslation } from '../i18n/useTranslation'

export default function About() {
  const { t } = useTranslation()
  return (
    <section>
      <p>
        {t('aboutText1')} <span className='version-pill'>v{pkg.version}</span>.
      </p>
      <p>{t('aboutText2')}</p>
      <p>{t('aboutText3')}</p>
      <br />
      <p>{t('aboutText4')}</p>
      <p>--</p>
      <p>
        Bert <a href='mailto:b3rt.js@gmail.com'>b3rt.js@gmail.com</a>
      </p>
    </section>
  )
}
