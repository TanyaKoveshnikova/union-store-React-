import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { CategoryMap } from "./categories.types";

type CategoriesState = {
  readonly categoriesMap: CategoryMap;
  readonly isLoading: boolean;
  readonly error: any;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      fetchCategoriesStart(state);
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      fetchCategoriesSuccess(state, action);
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      fetchCategoriesFailed(state, action);
    });
  },
});

export default categoriesSlice.reducer;
