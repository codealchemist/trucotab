import logReducer, { addLog, clearLog, selectLog } from './logSlice'

export const logMatch = addLog
export const clearLog = clearLog
export const selectLog = state => selectLog(state)

export default logReducer
