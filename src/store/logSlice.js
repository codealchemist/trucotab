import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: [],
}

const slice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    addLog(state, action) {
      const entry = { id: Date.now(), ...action.payload }
      state.entries.unshift(entry)
      if (state.entries.length > 200) state.entries.length = 200
    },
    clearLog(state) {
      state.entries = []
    },
  },
})

export const { addLog, clearLog } = slice.actions
export default slice.reducer

export const selectLog = state =>
  state.log && state.log.entries ? state.log.entries : []
