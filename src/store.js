import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import sidebarSlice from './store/sidebarSlice'
import userSlice from './store/userSlice'
const rootReducer = combineReducers({ sidebar: sidebarSlice, user: userSlice })

const persistConfig = {
  key: 'user',
  whitelist: ['user'],
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
