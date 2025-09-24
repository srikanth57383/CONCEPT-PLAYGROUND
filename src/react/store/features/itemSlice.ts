import { createSlice } from '@reduxjs/toolkit'

export interface Item {
  id: number
  name: string
  price: number
  available: boolean
}

const initialState: Item[] = [
  { id: 1, name: 'Burger', price: 120, available: true },
  { id: 2, name: 'Pizza', price: 250, available: true },
  { id: 3, name: 'Fries', price: 90, available: true },
]

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

  },
})

export default itemSlice.reducer