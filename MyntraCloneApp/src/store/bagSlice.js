import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => {
        console.log(itemId);
        return itemId !== action.payload;
      });
      console.log(state);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
