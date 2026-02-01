import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLog, clearLog } from '../store/logSlice'

export default function Log() {
  const dispatch = useDispatch()
  const entries = useSelector(s => selectLog(s))

  const confirmClearLog = () => {
    toast(
      ({ closeToast }) => (
        <div style={{ padding: 8 }}>
          <div>Clear log? This will remove all saved entries.</div>
          <div style={{ marginTop: 8 }}>
            <button
              className="btn toast-confirm"
              onClick={() => {
                dispatch(clearLog())
                closeToast()
              }}
            >
              Confirm
            </button>
            <button className="btn toast-cancel" onClick={() => closeToast()}>
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false, draggable: false },
    )
  }

  return (
    <section>
      <h2>Log</h2>
      {entries.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <div style={{ color: 'var(--muted)' }}>{entries.length} entries</div>
          <div>
            <button onClick={confirmClearLog} className="btn clear-btn">
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="log-list">
        {entries.length === 0 && (
          <div className="empty-positions">
            <div className="empty-emoji">📝</div>
            <div className="empty-title">No logged matches yet</div>
            <div className="empty-sub">
              Finish a match and press "Log result" to add an entry here.
            </div>
          </div>
        )}
        {entries.map(e => (
          <div key={e.id} className="log-item">
            <div className="log-grid">
              <div className="log-left">
                <div className="log-left-top">
                  <div className="log-emoji">{e.leftEmoji}</div>
                  <div className="log-player">
                    <div className="log-name">{e.leftName}</div>
                    <div className="log-score">
                      {e.leftScore} {e.winner === e.leftName && '🎉'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="log-vs">vs</div>

              <div className="log-right">
                <div className="log-right-top">
                  <div className="log-player log-player-right">
                    <div className="log-name">{e.rightName}</div>
                    <div className="log-score">
                      {e.rightScore} {e.winner === e.rightName && '🎉'}
                    </div>
                  </div>
                  <div className="log-emoji">{e.rightEmoji}</div>
                </div>
              </div>
            </div>

            <div className="log-date">
              {new Date(e.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
