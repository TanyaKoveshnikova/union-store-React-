import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
import Category from "../category/category.component";
import "./shop.styles.scss";
import axios from "axios";
import { setCategoriesMap } from "../../store/categories/categories.action";

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
    const getCategoriesMap = async () => {
      const result = await axios(CATEGORIES_SERVICE_URL);
      const hashCategories= makeHashCategories(result.data);
      dispatch(setCategoriesMap(hashCategories))
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
