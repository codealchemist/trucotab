import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  soundEnabled: false,
  theme: 'dark'
}

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSoundEnabled(state, action) { state.soundEnabled = !!action.payload },
    setTheme(state, action) { state.theme = action.payload }
  }
})

export const { setSoundEnabled, setTheme } = slice.actions
export default slice.reducer
