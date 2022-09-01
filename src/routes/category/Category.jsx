import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux/es/exports";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/Spinner";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categorySelector";

import "./category.styles.scss";

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
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}
