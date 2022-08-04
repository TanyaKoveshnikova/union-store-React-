import { createSlice } from "@reduxjs/toolkit";

import { addCardItem, removeCardItem, clearCardItem } from "./cart.action";
import { CartItem } from "./cart.type";

export const CART_INITIAL_STATE = {
  total: 0,
  cartItems: [] as CartItem[],
  isCartOpen: false,
};


const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },

    addItemToCart(state, action) {
      const newCartItems = addCardItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },

    removeItemToCart(state, action) {
      const newCartItems = removeCardItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },

    clearItemFromCart(state, action) {
      const newCartItems = clearCardItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
