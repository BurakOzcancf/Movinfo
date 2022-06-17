import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface person {
    id: number;
    name: string;
    profile_path: string | null;
    biography: string;
}

export interface tv {
    title: string | undefined;
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string;
    original_language: string;
    first_air_date: string;
    vote_average: number;
    production_companies: [{
      name: string;
    }]
    production_countries: [{
      name: string
    }]
}
export interface movie {
    id: number;
    title: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string | null;
    original_language: string;
    release_date: string;
    vote_average: string;
    production_companies: [{
      name: string;
      id: number;
    }];
    production_countries: [{
      name: string;
    }];
  
}
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
