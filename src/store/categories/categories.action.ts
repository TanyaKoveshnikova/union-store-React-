import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { StateCategories, CategoryMap,CategoryItems } from "./categories.types";

export const fetchCategoriesStart = (state: StateCategories) => {
  state.isLoading = true;
};

export const fetchCategoriesSuccess = (state: StateCategories, action: any) => {
  state.categoriesMap = action.payload;
  state.isLoading = false;
};

export const fetchCategoriesFailed = (state: StateCategories, action: any) => {
  state.error = action.payload;
  state.isLoading = true;
  console.log(state.error);
};

const CATEGORIES_SERVICE_URL = "http://localhost:3000/shop_data";

const makeHashCategories = (categoriesMapValue: CategoryItems[]): CategoryMap => {
  let categories = categoriesMapValue.reduce((hashMapCategories: CategoryMap, nextValue) => {
    const { title, items } = nextValue;
    hashMapCategories[title.toLowerCase()] = items;
    return hashMapCategories;
  }, {});
  return categories;
};

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategoriesAsync",
  async function (_, { rejectWithValue }) {
    try {
      const result = await axios(CATEGORIES_SERVICE_URL);
      const hashCategories = makeHashCategories(result.data);

      return hashCategories;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
