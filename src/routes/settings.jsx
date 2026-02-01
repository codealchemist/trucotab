import React, { useEffect, useState } from "react"

const STORAGE_KEY = "trucotab.settings"

export default function Settings() {
  const [soundEnabled, setSoundEnabled] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (typeof parsed.soundEnabled === "boolean") setSoundEnabled(parsed.soundEnabled)
      }
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ soundEnabled }))
    } catch (e) {}
  }, [soundEnabled])

  return (
    <section>
      <h2>Settings</h2>
      <div style={{ marginTop: 12 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => setSoundEnabled(e.target.checked)}
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
