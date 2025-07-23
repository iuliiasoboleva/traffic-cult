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
    updateCost: (state, action) => {
      const { id, newCost } = action.payload;
      const link = state.items.find((link) => link.id === id);
      if (link) {
        link.cost = newCost;
      }
    },
  },
});

export const { setLinks, toggleFavorite, toggleArchived, updateCost } = linksSlice.actions;
export default linksSlice.reducer;
