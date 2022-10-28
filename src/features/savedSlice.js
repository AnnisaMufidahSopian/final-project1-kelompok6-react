import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: JSON.parse(localStorage.getItem("saved")) || [],
  loading: false,
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addToSaved(state, action) {
      state.savedItems.unshift(action.payload);

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
      alert("News has been Saved");
    },

    removeFromSaved(state, action) {
      state.savedItems = state.savedItems.filter(
        (item) => item.title !== action.payload.title
      );

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
      alert("News has been Removed from saved");
    },
  },
});

export const { addToSaved, checkedSaved, removeFromSaved } = savedSlice.actions;

export default savedSlice.reducer;
