import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  soundEnabled: false,
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
    setTheme(state, action) {
      state.theme = action.payload
    },
    setLanguage(state, action) {
      state.language = action.payload
    }
  }
})

export const { setSoundEnabled, setTheme, setLanguage } = slice.actions
export default slice.reducer
