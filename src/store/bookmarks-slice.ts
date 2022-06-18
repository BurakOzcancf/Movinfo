import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {movie,tv,person} from '../types'


type InitialState = {
  favMovie: movie[];
  favSerie: tv[];
  favPerson: person[];
}
const initialState: InitialState = {
    favMovie: [],
    favSerie: [],
    favPerson: [],
}
const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addFavMovie: (state, action:PayloadAction<movie>) => {
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
    addFavSerie: (state, action:PayloadAction<tv>) => {
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
    addFavPerson: (state, action:PayloadAction<person>) => {
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
export const {  addFavMovie, addFavPerson, addFavSerie } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
