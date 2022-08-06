import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import userReducer from "./user/user.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
