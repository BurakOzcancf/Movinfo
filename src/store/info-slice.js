import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseURL: "https://api.themoviedb.org/3",
  poster: "https://www.themoviedb.org/t/p/original/",
  type: "",
};
const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    types: (state, action) => {
      state.type = action.payload;
    },
  },
});
export default infoSlice.reducer;
export const { types } = infoSlice.actions;
