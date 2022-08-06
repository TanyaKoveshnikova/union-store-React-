export type StateCategories = {
  categoriesMap: object;
  isLoading: boolean;
  error: null | string;
};

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  filter?: any
};

export type CategoryItems = {
  title: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[] | {} | any;
};
