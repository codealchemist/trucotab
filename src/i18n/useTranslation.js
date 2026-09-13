import { useSelector } from 'react-redux'
import { translations } from './translations'

export function useTranslation() {
  const lang = useSelector(s => (s.settings && s.settings.language) || 'es')
  const dict = translations[lang] || translations.es

  const t = (key, params) => {
    let str = dict[key] || translations.es[key] || key
    if (params && typeof str === 'string') {
      Object.keys(params).forEach(p => {
        str = str.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p])
      })
    }
    return str
  }

  return { t, lang }
}
