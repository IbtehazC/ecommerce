import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import { Routes, Route } from "react-router-dom";
import { fetchCategoriesStart } from "../../store/categories/categoryAction";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import "./shop.styles.scss";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
