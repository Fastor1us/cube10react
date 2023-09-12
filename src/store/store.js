import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gamesDataSlicer from './slicers/gamesDataSlicer';

import { api } from '../utils/api';

const rootReducer = combineReducers({
  gamesData: gamesDataSlicer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
