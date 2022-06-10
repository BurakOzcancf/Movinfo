import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarks: [],
    favMovie: [],
    favSerie: [],
    favPerson: [],
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
    addFavMovie: (state, action) => {
      const itemIndex = state.favMovie.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.favMovie = [...state.favMovie, action.payload];
      } else {
        state.favMovie = state.favMovie.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
    addFavSerie: (state, action) => {
      const itemIndex = state.favSerie.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.favSerie = [...state.favSerie, action.payload];
      } else {
        state.favSerie = state.favSerie.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
    addFavPerson: (state, action) => {
      const itemIndex = state.favPerson.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.favPerson = [...state.favPerson, action.payload];
      } else {
        state.favPerson = state.favPerson.filter(
          (fav) => fav.id !== action.payload.id
        );
      }
    },
  },
});
export const { addBookmarks, addFavMovie, addFavPerson, addFavSerie } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
