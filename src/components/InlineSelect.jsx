import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

// Small custom dropdown. Used instead of a native <select>, whose popup
// placement is controlled by the OS (and can end up misplaced).
export function InlineSelect({ value, options, onChange, disabled, ariaLabel }) {
  const [open, setOpen] = useState(false)
  const [focusIdx, setFocusIdx] = useState(0)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const current = options.find(o => o.value === value) || options[0]

  useEffect(() => {
    if (!open) return
    const onDocDown = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDocDown)
    return () => document.removeEventListener('pointerdown', onDocDown)
  }, [open])

  useEffect(() => {
    if (disabled) setOpen(false)
  }, [disabled])

  useEffect(() => {
    if (!open || !listRef.current) return
    const el = listRef.current.children[focusIdx]
    if (el) el.focus()
  }, [open, focusIdx])

  const openList = () => {
    setFocusIdx(Math.max(0, options.findIndex(o => o.value === value)))
    setOpen(true)
  }

  const choose = opt => {
    onChange(opt.value)
    setOpen(false)
    rootRef.current?.querySelector('.inline-select-btn')?.focus()
  }

  const onListKeyDown = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusIdx(i => Math.min(options.length - 1, i + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusIdx(i => Math.max(0, i - 1))
    } else if (e.key === 'Escape' || e.key === 'Tab') {
      if (e.key === 'Escape') e.preventDefault()
      setOpen(false)
      rootRef.current?.querySelector('.inline-select-btn')?.focus()
    }
  }

  return (
    <div className='inline-select' ref={rootRef}>
      <button
        type='button'
        className='inline-select-btn'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={e => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
            openList()
          }
        }}
      >
        <span>{current.label}</span>
        <ChevronDown size={16} aria-hidden='true' />
      </button>
      {open && (
        <ul
          className='inline-select-list'
          role='listbox'
          aria-label={ariaLabel}
          ref={listRef}
          onKeyDown={onListKeyDown}
        >
          {options.map(opt => {
            const selected = opt.value === value
            return (
              <li
                key={opt.value}
                role='option'
                aria-selected={selected}
                tabIndex={-1}
                className={`inline-select-option${selected ? ' selected' : ''}`}
                onClick={() => choose(opt)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    choose(opt)
                  }
                }}
              >
                <span>{opt.label}</span>
                {selected && <Check size={14} aria-hidden='true' />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
