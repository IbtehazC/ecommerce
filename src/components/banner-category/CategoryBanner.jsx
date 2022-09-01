import React from "react";

const CategoryBanner = ({ category, products }) => {
  console.log(products);
  return (
    <div className="container mx-auto bg-[#DDDDDD] flex justify-center items-center rounded-3xl mb-8 text-white">
      <div className="pl-16 bg-[#F32424] h-[46rem] flex flex-col items-center justify-center rounded-l-3xl">
        <h2 className="text-5xl font-semibold text-center">{category.toUpperCase()}</h2>
        <p className=" text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi r
        </p>
      </div>

      <img
        src={products[0].imageUrl}
        alt="gift"
        className="w-1/2 border rounded-r-3xl h-[46rem]"
      />
    </div>
  );
};

export default CategoryBanner;
