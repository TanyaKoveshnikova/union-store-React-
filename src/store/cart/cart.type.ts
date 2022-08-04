import { CategoryItem } from "../categories/categories.types";

export type CategoriesState = {
  readonly total: number;
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export type CartItem = CategoryItem & {
  quantity: number;
};

export type CartState = {
    isCartOpen: boolean;
    cartItems: CartItem[];
  };
