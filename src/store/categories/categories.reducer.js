import { createReducer, createSlice } from "@reduxjs/toolkit";

import CATEGORIES_ACTION_TYPES from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};


const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state, action) {
      console.log(state);
      console.log(action);
      state.isLoading = true;
    },
    fetchCategoriesSuccess(state, action) {
      console.log(state);
      console.log(action);
      state.categoriesMap = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed(state, action) {
      console.log(state);
      console.log(action);
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
