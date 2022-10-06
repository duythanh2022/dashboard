import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/CryptoApi'
import { cryptoNewsApi } from "../services/CryptoNewApi"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store =  configureStore({
    reducer: {
      [cryptoApi.reducerPath]:cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
  })
  setupListeners(store.dispatch)

