import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
import Category from "../category/category.component";
import "./shop.styles.scss";

import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { fetchCategoriesSuccess } from "../../store/categories/categories.reducer";
import axios from "axios";
const CATEGORIES_SERVICE_URL = "http://localhost:3000/shop_data";

const makeHashCategories = (categoriesMapValue) => {
  let categories = categoriesMapValue.reduce((hashMapCategories, nextValue) => {
    const { title, items } = nextValue;
    hashMapCategories[title.toLowerCase()] = items;
    return hashMapCategories;
  }, {});
  return categories;
};
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fff() {
      const result = await axios(CATEGORIES_SERVICE_URL);
      const hashCategories = makeHashCategories(result.data);
      dispatch(fetchCategoriesSuccess(hashCategories));
    }
    fff();
  });

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
