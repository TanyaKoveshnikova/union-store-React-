import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [fetchCategoriesAsync.pending]: (state) => {
      fetchCategoriesStart(state);
    },
    [fetchCategoriesAsync.fulfilled]: (state, action) => {
      fetchCategoriesSuccess(state, action);
    },
    [fetchCategoriesAsync.rejected]: (state, action) => {
      fetchCategoriesFailed(state, action);
    },
  },
});

export default categoriesSlice.reducer;
