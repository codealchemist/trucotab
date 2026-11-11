const KEY = 'truco:matchType'
const VALID = ['half', 'full']

export function getPreferredMatchType () {
  try {
    const v = window.localStorage.getItem(KEY)
    if (VALID.includes(v)) return v
  } catch (e) {}
  return 'half'
}

export function savePreferredMatchType (type) {
  if (!VALID.includes(type)) return
  try {
    window.localStorage.setItem(KEY, type)
  } catch (e) {}
}
