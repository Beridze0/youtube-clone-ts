import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
