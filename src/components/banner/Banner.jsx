import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-wsreen bg-[#DDDDDD] mx-auto flex justify-center items-center rounded-3xl">
      <div className=" pl-16">
        <h2 className="text-5xl font-semibold">Gift Combo</h2>
        <p className=" text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi r
        </p>
        <button
          className="bg-[#F32424] h-14 w-48 rounded-full text-white text-xl mt-16"
          onClick={navigate("/shop")}
        >
          Shop Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="gift"
        className="w-1/2 my-24 mx-24 border rounded-3xl"
      />
    </div>
  );
};

export default Banner;
