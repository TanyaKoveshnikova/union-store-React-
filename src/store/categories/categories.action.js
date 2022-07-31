import { createAction } from "../../utils/reducer/reducer.utils";
import axios from "axios";

import CATEGORIES_ACTION_TYPES from "./categories.types";

export const fetchCategoriesStart = () => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesMap) => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);
};

export const fetchCategoriesFailed = (error) => {
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
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

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const result = await axios(CATEGORIES_SERVICE_URL);
    const hashCategories = makeHashCategories(result.data);
    dispatch(fetchCategoriesSuccess(hashCategories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
