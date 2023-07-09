import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorites:["Iphone 6"],
}

export const FavoritesReducer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addFavorite: (state) => {
        state.value += 1
      }
    },
  })
  
  export const { addFavorite } = FavoritesReducer.actions
  
  export default FavoritesReducer.reducer