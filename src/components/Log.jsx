import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLog, clearLog } from '../store/logSlice'
import { useTranslation } from '../i18n/useTranslation'
import { ClipboardList, Trash2 } from 'lucide-react'
import { BadgeDisplay } from './BadgeDisplay'

export default function Log() {
  const dispatch = useDispatch()
  const entries = useSelector(s => selectLog(s))
  const { t } = useTranslation()

  const confirmClearLog = () => {
    toast(
      ({ closeToast }) => (
        <div style={{ padding: 8 }}>
          <div>{t('clearLogConfirm')}</div>
          <div style={{ marginTop: 8 }}>
            <button
              className='btn toast-confirm'
              onClick={() => {
                dispatch(clearLog())
                closeToast()
              }}
            >
              {t('confirm')}
            </button>
            <button className='btn toast-cancel' onClick={() => closeToast()}>
              {t('cancel')}
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false, draggable: false }
    )
  }

  return (
    <section>
      <h2>{t('logTitle')}</h2>
      {entries.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12
          }}
        >
          <div style={{ color: 'var(--muted)' }}>
            {entries.length} {t('entries')}
          </div>
          <div>
            <button
              onClick={confirmClearLog}
              className='btn clear-btn'
              title={t('clearLog')}
              aria-label={t('clearLog')}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}

      <div className='log-list'>
        {entries.length === 0 && (
          <div className='empty-positions'>
            <div className='empty-emoji'>
              <ClipboardList size={48} strokeWidth={1.5} color='var(--muted)' />
            </div>
            <div className='empty-title'>{t('noLoggedMatches')}</div>
            <div className='empty-sub'>{t('noLoggedMatchesSub')}</div>
          </div>
        )}
        {entries.map(e => (
          <div key={e.id} className='log-item'>
            <div className='log-grid'>
              <div className='log-left'>
                <div className='log-left-top'>
                  <div className='log-emoji'>
                    <BadgeDisplay
                      value={e.leftEmoji}
                      imgClassName='badge-log-img'
                    />
                  </div>
                  <div className='log-player'>
                    <div className='log-name'>{e.leftName}</div>
                    <div className='log-score'>
                      {e.leftScore} {e.winner === e.leftName && '🎉'}
                    </div>
                  </div>
                </div>
              </div>

              <div className='log-vs'>vs</div>

              <div className='log-right'>
                <div className='log-right-top'>
                  <div className='log-player log-player-right'>
                    <div className='log-name'>{e.rightName}</div>
                    <div className='log-score'>
                      {e.rightScore} {e.winner === e.rightName && '🎉'}
                    </div>
                  </div>
                  <div className='log-emoji'>
                    <BadgeDisplay
                      value={e.rightEmoji}
                      imgClassName='badge-log-img'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='log-date'>
              {new Date(e.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
