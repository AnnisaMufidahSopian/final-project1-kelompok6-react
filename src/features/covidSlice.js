import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";
import getPreviousMonth from "../app/latestMonth";

const API = getAPI({
  req: `everything?q=covid&from=${getPreviousMonth()}&pageSize=5`,
});

const initialState = {
  article: [],
  loading: false,
};

export const fetchData = createAsyncThunk("covid/fetchData", async () => {
  const res = await axios.get(API);
  return res.data.articles;
});

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.article = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default covidSlice.reducer;
