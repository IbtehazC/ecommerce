import React, { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import CategoryBanner from "../../components/banner-category/CategoryBanner";
import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../context/CategoriesContext";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
