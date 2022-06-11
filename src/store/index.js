import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarks-slice";
const store = configureStore({
  reducer: {
    bookmark: bookmarksReducer,
  },
});

export default store;
