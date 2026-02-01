import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setSoundEnabled } from '../store/settingsSlice'

export default function Settings() {
  const dispatch = useDispatch()
  const soundEnabled = useSelector(s => s.settings.soundEnabled)

  return (
    <section>
      <h2>Settings</h2>
      <div style={{ marginTop: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => dispatch(setSoundEnabled(e.target.checked))}
          />
          <span>Enable sound effects</span>
        </label>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Toggle audible feedback for button presses and win events.
        </p>
      </div>
    </section>
  )
}
