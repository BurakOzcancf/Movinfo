import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarks: [],
  },
  reducers: {
    addBookmarks: (state, action) => {
      const itemIndex = state.bookmarks.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.bookmarks = [...state.bookmarks, action.payload];
      } else {
        state.bookmarks = state.bookmarks.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
  },
});
export const { addBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
