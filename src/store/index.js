import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import matchReducer from './matchSlice'
import settingsReducer, { setTheme } from './settingsSlice'
import logReducer from './logSlice'

const rootReducer = combineReducers({
  match: matchReducer,
  settings: settingsReducer,
  log: logReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['match', 'settings', 'log'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const base = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // dev-only action logger
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV !== 'production'
    ) {
      const devLogger = storeAPI => next => action => {
        try {
          console.log('[DEV ACTION]', action.type, action.payload)
        } catch (e) {}
        return next(action)
      }
      return base.concat(devLogger)
    }
    return base
  },
})

export const persistor = persistStore(store)

export default store
