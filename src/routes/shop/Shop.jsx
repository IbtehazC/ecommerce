import React from "react";

import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";

import { ProductsContext } from "../../context/ProductsContext";

import "./shop.styles.scss";

export default function () {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
