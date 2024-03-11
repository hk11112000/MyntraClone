import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: false,
  reducers: {
    hamBurger: (state) => {
      return (state = !state);
    },
  },
});

export const hamburgerActions = hamburgerSlice.actions;

export default hamburgerSlice;
