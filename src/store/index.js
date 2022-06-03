import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./info-slice";
import bookmarksReducer from "./bookmarks-slice";
const store = configureStore({
  reducer: {
    bookmark: bookmarksReducer,
    info: infoSlice,
  },
});

export default store;
