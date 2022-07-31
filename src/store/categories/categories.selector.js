import { createSelector } from "reselect";

export const selectCategoriesMap = (state) => state.categories.categoriesMap;
export const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
