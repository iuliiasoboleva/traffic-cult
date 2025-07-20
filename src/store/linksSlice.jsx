import { createSlice } from '@reduxjs/toolkit';

const linksSlice = createSlice({
  name: 'links',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setLinks(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setLinks } = linksSlice.actions;
export default linksSlice.reducer;
