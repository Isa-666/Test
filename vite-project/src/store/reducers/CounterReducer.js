import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CounterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = CounterReducer.actions

export default CounterReducer.reducer