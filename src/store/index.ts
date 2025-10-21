import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
