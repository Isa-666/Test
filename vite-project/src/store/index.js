import { configureStore } from '@reduxjs/toolkit'
import  CounterReducer  from './reducers/CounterReducer'
import FavoritesReducer from './reducers/FavoritesReducer'


export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    favorites:FavoritesReducer
  },
})