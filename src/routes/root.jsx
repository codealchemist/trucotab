import { Outlet, Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Root() {
  const [theme, setTheme] = useState("dark")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trucotab.theme")
      if (saved === "light" || saved === "dark") setTheme(saved)
    } catch (e) {}
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem("trucotab.theme", theme)
    } catch (e) {}
  }, [theme])

  // theme toggle keyboard shortcut: 't'
  useEffect(() => {
    const onKey = (e) => {
      if (e.key && e.key.toLowerCase() === "t") {
        setTheme((t) => (t === "dark" ? "light" : "dark"))
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  // close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="app">
      <header className="site-header">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
          <h1>TrucoTab</h1>
        </div>

        <div>
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* Side pane always present; on small screens it's hidden until menuOpen */}
      <aside className={`side-pane ${menuOpen ? "open-mobile" : ""}`} aria-label="Navigation pane">
        <nav className="side-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Backdrop for mobile when menuOpen */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

      <main>
        <Outlet />
      </main>
    </div>
  )
}
