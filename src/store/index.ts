import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/carrinho'
import favoritosSlice from './reducers/favorito'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritos: favoritosSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
