import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmarks: (state, action) => {
      const a = [];
      state.bookmarks.map((item) => a.push(item.id));
      if (!a.includes(action.payload.id)) {
        state.bookmarks = [...state.bookmarks, action.payload];
      } else {
        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload.id
        );
      }
    },
  },
});
export const { addBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
