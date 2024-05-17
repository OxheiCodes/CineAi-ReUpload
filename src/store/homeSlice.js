// Author: Richard Ochei (OxheiCodes)

import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice named 'home'
export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {}, // Initial state for the 'url' object
    genres: {}, // Initial state for the 'genres' object
  },
  reducers: {
    // Reducer: Updates the 'url' state with the payload provided
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    // Reducer: Updates the 'genres' state with the payload provided
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are automatically generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

// Export the reducer function
export default homeSlice.reducer;
