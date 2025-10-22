import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/carrinho'
import favoritosSlice from './reducers/favorito'
import api from '../service/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritos: favoritosSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
