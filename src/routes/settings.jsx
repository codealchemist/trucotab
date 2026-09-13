import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSoundEnabled } from '../store/settingsSlice'
import { useTranslation } from '../i18n/useTranslation'

export default function Settings() {
  const dispatch = useDispatch()
  const soundEnabled = useSelector(s => s.settings.soundEnabled)
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
      </div>
    </section>
  )
}
