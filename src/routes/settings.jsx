import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSoundEnabled, setTheme, setLanguage } from '../store/settingsSlice'
import Select from 'react-select'
import { useTranslation } from '../i18n/useTranslation'

export default function Settings() {
  const dispatch = useDispatch()
  const soundEnabled = useSelector(s => s.settings.soundEnabled)
  const theme = useSelector(s => s.settings.theme)
  const language = useSelector(s => s.settings.language || 'es')
  const { t } = useTranslation()

  return (
    <section className='settings-section'>
      <h2>{t('settings')}</h2>
      <div className='settings-list'>
        <div className='setting-row'>
          <label className='setting-left' style={{ cursor: 'pointer' }}>
            <input
              type='checkbox'
              checked={soundEnabled}
              onChange={e => dispatch(setSoundEnabled(e.target.checked))}
            />
            <span className='setting-title'>{t('enableSound')}</span>
          </label>
          <div className='setting-desc'>{t('enableSoundDesc')}</div>
        </div>

        <div className='setting-row'>
          <div className='setting-left'>
            <span className='setting-title'>{t('theme')}</span>
            <div style={{ minWidth: 220 }}>
              <Select
                classNamePrefix='rs'
                value={{
                  value: theme,
                  label: theme === 'dark' ? t('dark') : t('light')
                }}
                onChange={opt => dispatch(setTheme(opt.value))}
                options={[
                  { value: 'dark', label: t('dark') },
                  { value: 'light', label: t('light') }
                ]}
                isSearchable={false}
                styles={{
                  control: base => ({
                    ...base,
                    background: 'transparent',
                    borderColor: 'var(--divider)',
                    color: 'var(--text)'
                  }),
                  singleValue: base => ({ ...base, color: 'var(--text)' }),
                  menu: base => ({ ...base, background: 'var(--surface)' }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isFocused
                      ? 'var(--row-hover)'
                      : 'transparent',
                    color: 'var(--text)'
                  })
                }}
              />
            </div>
          </div>
          <div className='setting-desc'>{t('themeDesc')}</div>
        </div>

        <div className='setting-row'>
          <div className='setting-left'>
            <span className='setting-title'>{t('language')}</span>
            <div style={{ minWidth: 220 }}>
              <Select
                classNamePrefix='rs'
                value={{
                  value: language,
                  label: language === 'es' ? t('spanish') : t('english')
                }}
                onChange={opt => dispatch(setLanguage(opt.value))}
                options={[
                  { value: 'es', label: 'Español' },
                  { value: 'en', label: 'English' }
                ]}
                isSearchable={false}
                styles={{
                  control: base => ({
                    ...base,
                    background: 'transparent',
                    borderColor: 'var(--divider)',
                    color: 'var(--text)'
                  }),
                  singleValue: base => ({ ...base, color: 'var(--text)' }),
                  menu: base => ({ ...base, background: 'var(--surface)' }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isFocused
                      ? 'var(--row-hover)'
                      : 'transparent',
                    color: 'var(--text)'
                  })
                }}
              />
            </div>
          </div>
          <div className='setting-desc'>{t('languageDesc')}</div>
        </div>
      </div>
    </section>
  )
}
