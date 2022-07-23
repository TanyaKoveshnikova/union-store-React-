import { useContext, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import axios from "axios";
import {
  CategoriesContext,
} from "../../contexts/categories.context";
import "./shop.styles.scss";


const CATEGORIES_SERVICE_URL = "http://localhost:3000/shop_data";

const Shop = () => {
  const { categoriesMap, getCategoriesMap } = useContext(CategoriesContext);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(CATEGORIES_SERVICE_URL);
      getCategoriesMap(result.data);
      console.log(result.data)
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
