import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/category";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoriesMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
