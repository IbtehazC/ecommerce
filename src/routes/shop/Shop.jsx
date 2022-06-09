import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import "./shop.styles.scss";

export default function () {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
