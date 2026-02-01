import { createSlice } from '@reduxjs/toolkit'

function log () {
  console.log('[ matchSlide ]', ...arguments)
}

const initialState = {
  leftName: 'Player A',
  leftEmoji: '🂠',
  rightName: 'Player B',
  rightEmoji: '🂠',
  matchType: 'half',
  leftScore: 0,
  rightScore: 0,
}

const slice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    setLeftName(state, action) { state.leftName = action.payload },
    setRightName(state, action) { state.rightName = action.payload },
    setLeftEmoji(state, action) { state.leftEmoji = action.payload },
    setRightEmoji(state, action) { state.rightEmoji = action.payload },
    setMatchType(state, action) { state.matchType = action.payload },
    setLeftScore(state, action) { state.leftScore = action.payload },
    setRightScore(state, action) { state.rightScore = action.payload },
    incLeft(state) { const max = state.matchType === 'half' ? 15 : 30; state.leftScore = Math.min(state.leftScore + 1, max) },
    decLeft(state) { state.leftScore = Math.max(state.leftScore - 1, 0) },
    incRight(state) { const max = state.matchType === 'half' ? 15 : 30; state.rightScore = Math.min(state.rightScore + 1, max) },
    decRight(state) { state.rightScore = Math.max(state.rightScore - 1, 0) },
    resetMatch(state) {
      try { console.trace('[ matchSlice ] RESET called') } catch (e) {}
      log('RESET', state)
      state.leftName = 'Player A'
      state.rightName = 'Player B'
      state.leftEmoji = '🂠'
      state.rightEmoji = '🂠'
      state.matchType = 'half'
      state.leftScore = 0
      state.rightScore = 0
    }
  }
})

export const {
  setLeftName, setRightName, setLeftEmoji, setRightEmoji, setMatchType,
  setLeftScore, setRightScore, incLeft, decLeft, incRight, decRight, resetMatch
} = slice.actions
export default slice.reducer

// Selectors
export const selectMatch = (state) => state.match
export const selectMaxScore = (state) => (state.match.matchType === 'half' ? 15 : 30)
