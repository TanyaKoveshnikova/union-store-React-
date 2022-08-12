import {FC} from "react";
import {Link} from "react-router-dom";

import {CategoryItem} from "../../store/categories/categories.types";

import ProductCard from "../product-card/product-card.component";
import {CategoryPreviewContainer} from "./category-preview.styles";

type CategoryPreviewParams = {
    title: string;
    products: CategoryItem;
};

const CategoryPreview: FC<CategoryPreviewParams> = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2 className="title">
                <Link to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {products
                    .filter((_: any, idx: number) => idx < 4)
                    .map((product: CategoryItem) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
