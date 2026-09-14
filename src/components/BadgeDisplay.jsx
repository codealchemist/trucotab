import React from 'react'

export function BadgeDisplay({
  value,
  className,
  imgClassName,
  fallback = '🂠'
}) {
  const val = value || fallback
  if (typeof val === 'string' && (val.startsWith('/') || val.includes('.'))) {
    return (
      <img src={val} alt='' className={imgClassName || 'badge-profile-img'} />
    )
  }
  return (
    <span aria-hidden className={className}>
      {val}
    </span>
  )
}

export default BadgeDisplay
