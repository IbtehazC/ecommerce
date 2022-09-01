import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="container max-w-2xl bg-[#DDDDDD] flex justify-between items-center rounded-3xl p-10 mt-16">
      <div>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <button
          className="bg-[#F32424] h-12 w-32 rounded-full text-white text-xl mt-8"
          onClick={onNavigateHandler}
        >
          Browse
        </button>
      </div>
      <img className="h-64 w-1/2 border rounded-3xl" src={imageUrl} alt="directory-item" />
    </div>
  );
}
