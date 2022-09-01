import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/Spinner";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categorySelector";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
}
