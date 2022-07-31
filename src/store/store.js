import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
