import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoriesStart = (state) => {
  state.isLoading = true;
};

export const fetchCategoriesSuccess = (state, action) => {
  state.categoriesMap = action.payload;
  state.isLoading = false;
};

export const fetchCategoriesFailed = (state, action) => {
  state.error = action.payload;
  state.isLoading = true;
  console.log(state.error);
};

const CATEGORIES_SERVICE_URL = "http://localhost:3000/shop_data";

const makeHashCategories = (categoriesMapValue) => {
  let categories = categoriesMapValue.reduce((hashMapCategories, nextValue) => {
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
      const hashCategories = await makeHashCategories(result.data);

      return hashCategories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
