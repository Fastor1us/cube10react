import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: [], isLoading: false, isError: false, isSuccess: false };

const gamesDataSlicer = createSlice({
  name: 'gamesData',
  initialState,
  reducers: {
    setGamesData(state, action) {
      state.data = action.payload.data || [];
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.isSuccess = action.payload.isSuccess;
    },
  }
});

export const { setGamesData } = gamesDataSlicer.actions;

export default gamesDataSlicer.reducer;
