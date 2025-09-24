import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './features/itemSlice'
import orderReducer from './features/orderSlice'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    orders: orderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch