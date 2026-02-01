import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  setLeftName, setRightName, setLeftEmoji, setRightEmoji,
  setMatchType, setLeftScore, setRightScore, incLeft, decLeft, incRight, decRight, resetMatch,
  selectMatch, selectMaxScore
} from '../store/matchSlice'

const EMOJIS = ["🂠", "😀", "😎", "🃏", "🎉", "🥇", "🔥"]

export default function TrucoScore() {
  const dispatch = useDispatch()
  const match = useSelector(selectMatch)
  const leftName = match.leftName
  const leftEmoji = match.leftEmoji
  const rightName = match.rightName
  const rightEmoji = match.rightEmoji
  const matchType = match.matchType
  const leftScore = match.leftScore
  const rightScore = match.rightScore
  const maxScore = useSelector(selectMaxScore)
  const rehydrated = useSelector(s => s._persist && s._persist.rehydrated)
  const [pickerOpen, setPickerOpen] = useState(null) // 'left' | 'right' | null
  const [showWinner, setShowWinner] = useState(false)
  const [winner, setWinner] = useState(null)
  const [winnerAcknowledged, setWinnerAcknowledged] = useState(false)

  const audioCtxRef = useRef(null)

  useEffect(() => {
    console.log('RENDER TRUCO')
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (Ctx) audioCtxRef.current = new Ctx()
    } catch (e) {
      audioCtxRef.current = null
    }
    return () => {
      try {
        if (audioCtxRef.current) audioCtxRef.current.close()
      } catch (e) {}
    }
  }, [])

  const soundEnabled = useSelector(s => s.settings.soundEnabled)
  const theme = useSelector(s => s.settings.theme)

  const playTone = (freq, when = 0, dur = 0.12, type = "sine") => {
    const ctx = audioCtxRef.current
    if (!ctx) return
    try {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = type
      o.frequency.value = freq
      o.connect(g)
      g.connect(ctx.destination)
      const start = ctx.currentTime + when
      g.gain.setValueAtTime(0.0001, start)
      g.gain.exponentialRampToValueAtTime(0.12, start + 0.01)
      o.start(start)
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur)
      o.stop(start + dur + 0.02)
    } catch (e) {
      // ignore
    }
  }

  const playClick = () => { if (soundEnabled) playTone(1000, 0, 0.08, 'square') }
  const playWin = () => { if (soundEnabled) { playTone(660,0,0.14,'sine'); playTone(880,0.12,0.16,'sine'); playTone(990,0.28,0.22,'sine') } }

  // When matchType changes ensure stored scores are clamped to new max
  useEffect(() => {
    const clamp = (v) => Math.min(Math.max(0, v), maxScore)
    if (leftScore !== clamp(leftScore)) dispatch(setLeftScore(clamp(leftScore)))
    if (rightScore !== clamp(rightScore)) dispatch(setRightScore(clamp(rightScore)))
  }, [matchType, leftScore, rightScore, dispatch])

  // show winner overlay when someone reaches maxScore
  useEffect(() => {
    if ((leftScore === maxScore || rightScore === maxScore) && !showWinner && !winnerAcknowledged) {
      const who = leftScore === maxScore ? 'left' : 'right'
      setWinner(who)
      setShowWinner(true)
      setWinnerAcknowledged(false)
      // play win sound
      try { playWin() } catch (e) {}
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
      // ignore shortcut handling until persistence finished rehydration
      if (!rehydrated) return
      const tag = e.target && e.target.tagName
      if (tag === "INPUT" || e.target.isContentEditable) return
      const k = e.key.toLowerCase()
      // don't trigger clear on Ctrl/C / Cmd/C (copy) or other modifiers
      if (k === 'c' && (e.ctrlKey || e.metaKey)) return
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
          case "c":
            confirmClear()
            break
        case "h":
          dispatch(setMatchType("half"))
          break
        case "f":
          dispatch(setMatchType("full"))
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [leftScore, rightScore, matchType, rehydrated])

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
    if (side === 'left') dispatch(incLeft())
    else dispatch(incRight())
    playClick()
  }
  const dec = (side) => {
    if (side === 'left') dispatch(decLeft())
    else dispatch(decRight())
    playClick()
  }

  const clear = () => {
    dispatch(resetMatch())
  }

  const confirmClear = () => {
    toast(({ closeToast }) => (
      <div style={{ padding: 8 }}>
        <div>Clear match? This will reset names and scores.</div>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => { dispatch(resetMatch()); closeToast(); }} style={{ background: 'var(--accent)', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6 }}>Confirm</button>
          <button className="toast-cancel" onClick={() => closeToast()}>Cancel</button>
        </div>
      </div>
    ), { autoClose: false, closeOnClick: false, draggable: false })
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
            onChange={() => dispatch(setMatchType("half"))}
          />
          Half (to 15)
        </label>
        <label>
          <input
            type="radio"
            name="match"
            value="full"
            checked={matchType === "full"}
            onChange={() => dispatch(setMatchType("full"))}
          />
          Full (to 30)
        </label>
        <button style={{ marginLeft: 12 }} onClick={clear}>
          Clear
        </button>
      </div>

      <div className="board">
        <div className="player left">
          <div className="player-name-row">
            <input
              className="player-name"
              value={leftName}
              onChange={(e) => dispatch(setLeftName(e.target.value))}
              onFocus={selectAll}
              onClick={selectAll}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={handleNameKeyDown}
            />
              <button className="emoji-profile" aria-label="Left player emoji" onClick={() => setPickerOpen('left')} type="button">
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
              onChange={(e) => dispatch(setRightName(e.target.value))}
              onFocus={selectAll}
              onClick={selectAll}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={handleNameKeyDown}
            />
            <button className="emoji-profile" aria-label="Right player emoji" onClick={() => setPickerOpen('right')} type="button">
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
        Shortcuts: Q/A left +/-, P/L right +/-, H/F half/full, C clear, T toggle theme
      </div>
      </div>
      <EmojiPickerOverlay
        openFor={pickerOpen}
        onClose={() => setPickerOpen(null)}
          onChoose={(side, em) => { if (side === 'left') dispatch(setLeftEmoji(em)); else dispatch(setRightEmoji(em)) }}
      />

      <WinnerOverlay
        show={showWinner}
        winner={winner}
        winnerName={winner === 'left' ? leftName : rightName}
        winnerEmoji={winner === 'left' ? leftEmoji : rightEmoji}
        onClose={() => { setShowWinner(false); setWinnerAcknowledged(true) }}
        onReset={() => { setShowWinner(false); setWinnerAcknowledged(true); clear(); }}
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

