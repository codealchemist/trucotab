import React, { useState, useEffect } from "react"

const STORAGE_KEY = "trucotab.match"

const EMOJIS = ["🂠", "😀", "😎", "🃏", "🎉", "🥇", "🔥"]

export default function TrucoScore() {
  const [leftName, setLeftName] = useState("Player A")
  const [leftEmoji, setLeftEmoji] = useState("🂠")
  const [rightName, setRightName] = useState("Player B")
  const [rightEmoji, setRightEmoji] = useState("🂠")
  const [matchType, setMatchType] = useState("half") // 'half' -> 15, 'full' -> 30
  const maxScore = matchType === "half" ? 15 : 30
  const [leftScore, setLeftScore] = useState(0)
  const [rightScore, setRightScore] = useState(0)
  const [pickerOpen, setPickerOpen] = useState(null) // 'left' | 'right' | null
  const [showWinner, setShowWinner] = useState(false)
  const [winner, setWinner] = useState(null)
  const [winnerAcknowledged, setWinnerAcknowledged] = useState(false)

  // load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed.leftName) setLeftName(parsed.leftName)
        if (parsed.leftEmoji) setLeftEmoji(parsed.leftEmoji)
        if (parsed.rightName) setRightName(parsed.rightName)
        if (parsed.rightEmoji) setRightEmoji(parsed.rightEmoji)
        if (parsed.matchType) setMatchType(parsed.matchType)
        if (typeof parsed.leftScore === "number") setLeftScore(parsed.leftScore)
        if (typeof parsed.rightScore === "number") setRightScore(parsed.rightScore)
      }
    } catch (e) {
      // ignore parse errors
    }
  }, [])

  // persist to localStorage whenever relevant state changes
  useEffect(() => {
    const payload = {
      leftName,
      leftEmoji,
      rightName,
      rightEmoji,
      matchType,
      leftScore,
      rightScore,
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch (e) {
      // ignore storage errors
    }
  }, [leftName, leftEmoji, rightName, rightEmoji, matchType, leftScore, rightScore])

  useEffect(() => {
    // clamp scores if max changes
    setLeftScore((s) => Math.min(Math.max(0, s), maxScore))
    setRightScore((s) => Math.min(Math.max(0, s), maxScore))
  }, [matchType])

  // show winner overlay when someone reaches maxScore
  useEffect(() => {
    if ((leftScore === maxScore || rightScore === maxScore) && !showWinner && !winnerAcknowledged) {
      const who = leftScore === maxScore ? 'left' : 'right'
      setWinner(who)
      setShowWinner(true)
      setWinnerAcknowledged(false)
      const t = setTimeout(() => { setShowWinner(false); setWinnerAcknowledged(true) }, 3000)
      return () => clearTimeout(t)
    }
  }, [leftScore, rightScore, maxScore, showWinner])

  // clear acknowledgment when scores change away from max
  useEffect(() => {
    if (leftScore !== maxScore && rightScore !== maxScore) {
      setWinnerAcknowledged(false)
    }
  }, [leftScore, rightScore, maxScore])

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target && e.target.tagName
      if (tag === "INPUT" || e.target.isContentEditable) return
      const k = e.key.toLowerCase()
      switch (k) {
        case "q":
          inc("left")
          break
        case "a":
          dec("left")
          break
        case "p":
          inc("right")
          break
        case "l":
          dec("right")
          break
        case "r":
          reset()
          break
        case "h":
          setMatchType("half")
          break
        case "f":
          setMatchType("full")
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [leftScore, rightScore, matchType])

  // close emoji picker on Escape
  useEffect(() => {
    if (!pickerOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") setPickerOpen(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [pickerOpen])

  // prevent body scroll when picker is open
  useEffect(() => {
    if (pickerOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = prev }
    }
  }, [pickerOpen])

  const inc = (side) => {
    if (side === "left") setLeftScore((s) => Math.min(s + 1, maxScore))
    else setRightScore((s) => Math.min(s + 1, maxScore))
  }
  const dec = (side) => {
    if (side === "left") setLeftScore((s) => Math.max(s - 1, 0))
    else setRightScore((s) => Math.max(s - 1, 0))
  }

  const reset = () => {
    setLeftName("Player A")
    setLeftEmoji("🂠")
    setRightName("Player B")
    setRightEmoji("🂠")
    setMatchType("half")
    setLeftScore(0)
    setRightScore(0)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {}
  }

  const selectAll = (e) => {
    try {
      e.target.select()
    } catch (err) {
      // ignore if element doesn't support select
    }
  }

  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try { e.target.blur() } catch (err) {}
    }
  }

  return (
    <>
      <div className="truco-score">
      <div className="match-type">
        <label>
          <input
            type="radio"
            name="match"
            value="half"
            checked={matchType === "half"}
            onChange={() => setMatchType("half")}
          />
          Half (to 15)
        </label>
        <label>
          <input
            type="radio"
            name="match"
            value="full"
            checked={matchType === "full"}
            onChange={() => setMatchType("full")}
          />
          Full (to 30)
        </label>
        <button style={{ marginLeft: 12 }} onClick={reset}>
          Reset
        </button>
      </div>

      <div className="board">
        <div className="player left">
          <div className="player-name-row">
            <input
              className="player-name"
              value={leftName}
              onChange={(e) => setLeftName(e.target.value)}
              onFocus={selectAll}
              onClick={selectAll}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={handleNameKeyDown}
            />
              <button
                className="emoji-profile"
                aria-label="Left player emoji"
                onClick={() => setPickerOpen("left")}
                type="button"
              >
                <span aria-hidden>{leftEmoji}</span>
              </button>
          </div>
          <div className="points-divider" />
          <div className="points">{leftScore}</div>
          <div className="controls">
            <button onClick={() => inc("left")}>+1</button>
            <button onClick={() => dec("left")}>-1</button>
          </div>
        </div>

        <div className="vertical-separator" />

        <div className="player right">
          <div className="player-name-row">
            <input
              className="player-name"
              value={rightName}
              onChange={(e) => setRightName(e.target.value)}
              onFocus={selectAll}
              onClick={selectAll}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={handleNameKeyDown}
            />
            <button
              className="emoji-profile"
              aria-label="Right player emoji"
              onClick={() => setPickerOpen("right")}
              type="button"
            >
              <span aria-hidden>{rightEmoji}</span>
            </button>
          </div>
          <div className="points-divider" />
          <div className="points">{rightScore}</div>
          <div className="controls">
            <button onClick={() => inc("right")}>+1</button>
            <button onClick={() => dec("right")}>-1</button>
          </div>
        </div>
      </div>
      <div className="shortcuts" style={{ marginTop: 10, color: 'var(--muted)', fontSize: '0.9rem' }}>
        Shortcuts: Q/A left +/-, P/L right +/-, H/F half/full, R reset, T toggle theme
      </div>
      </div>
      <EmojiPickerOverlay
        openFor={pickerOpen}
        onClose={() => setPickerOpen(null)}
        onChoose={(side, em) => { if (side === 'left') setLeftEmoji(em); else setRightEmoji(em) }}
      />

      <WinnerOverlay
        show={showWinner}
        winner={winner}
        winnerName={winner === 'left' ? leftName : rightName}
        winnerEmoji={winner === 'left' ? leftEmoji : rightEmoji}
        onClose={() => { setShowWinner(false); setWinnerAcknowledged(true) }}
        onReset={() => { setShowWinner(false); setWinnerAcknowledged(true); reset(); }}
      />
    </>
  )
}

// emoji picker overlay rendered outside main flow
export function EmojiPickerOverlay({ openFor, onClose, onChoose }) {
  if (!openFor) return null
  return (
    <div className="emoji-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="emoji-overlay-backdrop" />
      <div className="emoji-overlay-content">
        <div className="emoji-grid">
          {EMOJIS.map((em) => (
            <button
              key={em}
              className="emoji-btn"
              onClick={() => { onChoose(openFor, em); onClose() }}
              aria-label={`Choose ${em}`}
            >
              {em}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function WinnerOverlay({ show, winner, winnerName, winnerEmoji, onClose, onReset }) {
  if (!show) return null

  const colors = ["#F97316", "#60A5FA", "#FB7185", "#34D399", "#F59E0B", "#A78BFA"]
  const pieces = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 0.6
    const rotate = Math.random() * 360
    const bg = colors[i % colors.length]
    return (
      <div
        key={i}
        className="confetti-piece"
        style={{ left: `${left}%`, background: bg, animationDelay: `${delay}s`, transform: `rotate(${rotate}deg)` }}
      />
    )
  })

  return (
    <div className="winner-overlay" role="status" aria-live="polite" onClick={onClose}>
      <div className="winner-backdrop" />
      <div className="winner-content">
        <div className="winner-card tada">
          <div className="winner-emoji">{winnerEmoji}</div>
          <div className="winner-text">{winnerName} wins!</div>
          <div style={{ marginTop: 12 }}>
            <button className="winner-close-btn" onClick={() => { if (onReset) onReset(); else onClose(); }}>
              Close & Reset
            </button>
          </div>
        </div>
        {pieces}
      </div>
    </div>
  )
}

