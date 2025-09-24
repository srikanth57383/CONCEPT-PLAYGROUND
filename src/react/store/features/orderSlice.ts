import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from './itemSlice'

interface OrderState {
  items: Item[]
}

const initialState: OrderState = {
  items: [],
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addItemToOrder(state, action: PayloadAction<Item>) {
      state.items.push(action.payload)
    },
    removeItemFromOrder(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addItemToOrder, removeItemFromOrder } = orderSlice.actions
export default orderSlice.reducer