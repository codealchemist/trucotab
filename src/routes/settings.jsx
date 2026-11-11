import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setSoundEnabled,
  setHandEnabled,
  setHandAutoRotate,
  setHandAutoRotateDelay,
  selectHandEnabled,
  selectHandAutoRotate,
  selectHandAutoRotateDelay,
  HAND_ROTATE_DELAYS
} from '../store/settingsSlice'
import { useTranslation } from '../i18n/useTranslation'
import { InlineSelect } from '../components/InlineSelect'

function SettingToggle({
  checked,
  onChange,
  title,
  desc,
  disabled = false,
  children
}) {
  return (
    <div className='setting-row' style={disabled ? { opacity: 0.5 } : undefined}>
      <div className='setting-left'>
        <label
          className='setting-left'
          style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          <input
            type='checkbox'
            checked={checked}
            disabled={disabled}
            onChange={e => onChange(e.target.checked)}
          />
          <span className='setting-title'>{title}</span>
        </label>
        {children}
      </div>
      <div className='setting-desc'>{desc}</div>
    </div>
  )
}

export default function Settings() {
  const dispatch = useDispatch()
  const soundEnabled = useSelector(s => s.settings.soundEnabled)
  const handEnabled = useSelector(selectHandEnabled)
  const handAutoRotate = useSelector(selectHandAutoRotate)
  const handAutoRotateDelay = useSelector(selectHandAutoRotateDelay)
  const { t } = useTranslation()

  return (
    <section className='settings-section'>
      <h2>{t('settings')}</h2>
      <div className='settings-list'>
        <SettingToggle
          checked={soundEnabled}
          onChange={v => dispatch(setSoundEnabled(v))}
          title={t('enableSound')}
          desc={t('enableSoundDesc')}
        />
        <SettingToggle
          checked={handEnabled}
          onChange={v => dispatch(setHandEnabled(v))}
          title={t('enableHand')}
          desc={t('enableHandDesc')}
        />
        <SettingToggle
          checked={handAutoRotate}
          disabled={!handEnabled}
          onChange={v => dispatch(setHandAutoRotate(v))}
          title={t('enableHandAutoRotate')}
          desc={t('enableHandAutoRotateDesc')}
        >
          <InlineSelect
            ariaLabel={t('handAutoRotateDelay')}
            value={handAutoRotateDelay}
            disabled={!handEnabled || !handAutoRotate}
            options={HAND_ROTATE_DELAYS.map(sec => ({
              value: sec,
              label: `${sec}s`
            }))}
            onChange={v => dispatch(setHandAutoRotateDelay(v))}
          />
        </SettingToggle>
      </div>
    </section>
  )
}
