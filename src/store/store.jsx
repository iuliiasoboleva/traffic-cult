import { configureStore } from '@reduxjs/toolkit';

import linksReducer from './linksSlice';

export const store = configureStore({
  reducer: {
    links: linksReducer,
  },
});
