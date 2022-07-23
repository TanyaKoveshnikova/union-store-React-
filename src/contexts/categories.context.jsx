import { createContext, useState, useEffect } from "react";

const makeHashCategories = (categoriesMapValue) => {
  return categoriesMapValue.reduce((hashMapCategories, nextValue) => {
    const { title, items } = nextValue;
    hashMapCategories[title] = items;
    return hashMapCategories;
  }, {});
};

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const getCategoriesMap = (categoriesMapValue) => {
    setCategoriesMap(makeHashCategories(categoriesMapValue));
  };

  const value = { categoriesMap, getCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
