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
    toggleFavorite(state, action) {
      const linkId = action.payload;
      const link = state.items.find((item) => item.id === linkId);
      if (link) {
        link.favorite = !link.favorite;
      }
    },
    toggleArchived(state, action) {
      const linkId = action.payload;
      const link = state.items.find((item) => item.id === linkId);
      if (link) {
        link.archived = !link.archived;
      }
    },
  },
});

export const { setLinks, toggleFavorite, toggleArchived } = linksSlice.actions;
export default linksSlice.reducer;
