import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import bookmarksReducer from "./bookmarks-slice";
const store = configureStore({
  reducer: {
    bookmark: bookmarksReducer,
  },
});

export default store;
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
