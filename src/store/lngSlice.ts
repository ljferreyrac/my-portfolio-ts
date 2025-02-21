import { createSlice } from "@reduxjs/toolkit";

export const lngSlice = createSlice({
  name: "lng",
  initialState: {
    actualLng: "en",
  },
  reducers: {
    onSwitchLanguage: (state, { payload }) => {
      state.actualLng = payload;
    },
  },
});

export const { onSwitchLanguage } = lngSlice.actions;
