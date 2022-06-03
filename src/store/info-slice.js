import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseURL: "https://api.themoviedb.org/3",
  poster: "https://www.themoviedb.org/t/p/original/",
};
const infoSlice = createSlice({
  name: "info",
  initialState,
});
export default infoSlice.reducer;
