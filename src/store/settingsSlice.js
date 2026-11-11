import { createSlice } from '@reduxjs/toolkit'

export const HAND_ROTATE_DELAYS = [5, 10, 15, 20, 30] // seconds

const initialState = {
  soundEnabled: false,
  handEnabled: true,
  handAutoRotate: true,
  handAutoRotateDelay: 5, // seconds
  theme: 'dark',
  language: 'es'
}

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSoundEnabled(state, action) {
      state.soundEnabled = !!action.payload
    },
    setHandEnabled(state, action) {
      state.handEnabled = !!action.payload
    },
    setHandAutoRotate(state, action) {
      state.handAutoRotate = !!action.payload
    },
    setHandAutoRotateDelay(state, action) {
      const v = Number(action.payload)
      if (HAND_ROTATE_DELAYS.includes(v)) state.handAutoRotateDelay = v
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
    setLanguage(state, action) {
      state.language = action.payload
    }
  }
})

export const {
  setSoundEnabled,
  setHandEnabled,
  setHandAutoRotate,
  setHandAutoRotateDelay,
  setTheme,
  setLanguage
} = slice.actions
export default slice.reducer

// Persisted settings from older versions may lack these keys, so default them here.
export const selectHandEnabled = state => state.settings.handEnabled ?? true
export const selectHandAutoRotate = state =>
  state.settings.handAutoRotate ?? true
export const selectHandAutoRotateDelay = state => {
  const v = state.settings.handAutoRotateDelay
  return HAND_ROTATE_DELAYS.includes(v) ? v : 5
}
