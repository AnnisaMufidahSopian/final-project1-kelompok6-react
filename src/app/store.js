import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/indonesiaSlice";
import programmingReducer from "../features/programmingSlice";
import covidReducer from "../features/covidSlice";
import savedReducer from "../features/savedSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    programming: programmingReducer,
    covid: covidReducer,
    saved: savedReducer,
    search: searchReducer,
  },
});
