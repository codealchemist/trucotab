import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectLog } from '../store/logSlice'

export default function LeaderboardPositions() {
  const entries = useSelector(s => selectLog(s))

  // aggregate stats per player
  const map = new Map()

  const [selected, setSelected] = useState(null)

  const openPlayer = r => setSelected(r)

  const ensure = name => {
    if (!map.has(name))
      map.set(name, {
        name,
        played: 0,
        won: 0,
        lost: 0,
        emoji: '🂠',
      })
    return map.get(name)
  }

  entries.forEach(e => {
    const left = ensure(e.leftName)
    const right = ensure(e.rightName)
    left.played += 1
    right.played += 1
    // record last-seen emoji for each player
    if (e.leftEmoji) left.emoji = e.leftEmoji
    if (e.rightEmoji) right.emoji = e.rightEmoji
    if (e.winner === e.leftName) {
      left.won += 1
      right.lost += 1
    } else if (e.winner === e.rightName) {
      right.won += 1
      left.lost += 1
    }
  })

  const rows = Array.from(map.values())

  // sort by wins desc, then win rate desc, then name
  rows.sort((a, b) => {
    if (b.won !== a.won) return b.won - a.won
    const rateA = a.played ? a.won / a.played : 0
    const rateB = b.played ? b.won / b.played : 0
    if (rateB !== rateA) return rateB - rateA
    return a.name.localeCompare(b.name)
  })

  if (rows.length === 0) {
    return (
      <section>
        <h2>Leaderboard</h2>
        <div className="empty-positions">
          <div className="empty-emoji">🎯</div>
          <div className="empty-title">No matches logged yet</div>
          <div className="empty-sub">
            Play a match and use "Log result" to add entries here.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2>Leaderboard</h2>
      <div style={{ marginBottom: 12, color: 'var(--muted)' }}>
        {rows.length} players
      </div>
      <div className="positions-grid-wrapper">
        <div className="positions-grid">
          <div className="positions-grid-head">
            <div></div>
            <div>Player</div>
            <div style={{ textAlign: 'center' }}>Victories</div>
          </div>
          {rows.map(r => (
            <button
              key={r.name}
              className="positions-row"
              onClick={() => openPlayer(r)}
              type="button"
            >
              <div className="cell-emoji">{r.emoji || '🂠'}</div>
              <div className="cell-name">{r.name}</div>
              <div className="cell-points">{r.won}</div>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className="player-modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={() => setSelected(null)} />
          <div className="modal-content">
            <button
              onClick={() => setSelected(null)}
              className="btn modal-close-x"
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ fontSize: '2rem' }}>{selected.emoji || '🂠'}</div>
              <div>
                <h3 style={{ margin: 0 }}>{selected.name}</h3>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div>Matches: {selected.played}</div>
              <div>Won: {selected.won}</div>
              <div>Lost: {selected.lost}</div>
              <div>
                Win rate:{' '}
                {selected.played
                  ? `${Math.round((selected.won / selected.played) * 100)}%`
                  : '-'}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
