import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux/es/exports";

import { useParams } from "react-router-dom";
import CategoryBanner from "../../components/banner-category/CategoryBanner";
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/Spinner";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categorySelector";

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryBanner category={category} products={products} />
      <div className="grid grid-cols-4 gap-5">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
