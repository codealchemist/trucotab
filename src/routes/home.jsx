import TrucoScore from '../components/TrucoScore'
import { useTranslation } from '../i18n/useTranslation'

export default function Home() {
  const { t } = useTranslation()
  return (
    <section>
      <p>{t('welcome')}</p>
      <TrucoScore />
    </section>
  )
}
