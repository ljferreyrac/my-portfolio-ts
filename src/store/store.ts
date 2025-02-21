import { configureStore } from "@reduxjs/toolkit";
import { lngSlice } from "./lngSlice";

export const store = configureStore({
  reducer: {
    lng: lngSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
