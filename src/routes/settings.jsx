import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSoundEnabled, setTheme } from '../store/settingsSlice'
import Select from 'react-select'

export default function Settings() {
  const dispatch = useDispatch()
  const soundEnabled = useSelector(s => s.settings.soundEnabled)
  const theme = useSelector(s => s.settings.theme)
  return (
    <section className="settings-section">
      <h2>Settings</h2>
      <div className="settings-list">
        <div className="setting-row">
          <label className="setting-left" style={{ cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={e => dispatch(setSoundEnabled(e.target.checked))}
            />
            <span className="setting-title">Enable sound effects</span>
          </label>
          <div className="setting-desc">
            Toggle audible feedback for button presses and win events.
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-left">
            <span className="setting-title">Theme</span>
            <div style={{ minWidth: 220 }}>
              <Select
                classNamePrefix="rs"
                value={{
                  value: theme,
                  label: theme[0].toUpperCase() + theme.slice(1),
                }}
                onChange={opt => dispatch(setTheme(opt.value))}
                options={[
                  { value: 'dark', label: 'Dark' },
                  { value: 'light', label: 'Light' },
                ]}
                isSearchable={false}
                styles={{
                  control: base => ({
                    ...base,
                    background: 'transparent',
                    borderColor: 'var(--divider)',
                    color: 'var(--text)',
                  }),
                  singleValue: base => ({ ...base, color: 'var(--text)' }),
                  menu: base => ({ ...base, background: 'var(--surface)' }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isFocused
                      ? 'var(--row-hover)'
                      : 'transparent',
                    color: 'var(--text)',
                  }),
                }}
              />
            </div>
          </div>
          <div className="setting-desc">
            Choose the app theme. You can also press <strong>T</strong> to
            toggle.
          </div>
        </div>
      </div>
    </section>
  )
}
