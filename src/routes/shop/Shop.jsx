import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import { Routes, Route } from "react-router-dom";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categoryAction";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import "./shop.styles.scss";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
