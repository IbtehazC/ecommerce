import React from "react";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="w-4/5 mx-auto flex flex-col h-[22rem] items-center relative mb-16">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-[18rem] object-cover mb-1 hover:opacity-80 rounded-3xl"
      />
      <div className="w-full h-5 flex justify-between">
        <span className=" w-11/12 mb-4 text-xl">{name}</span>
        <span className="w-1/12 text-xl">${price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
        className="w-4/5 top-32 hidden opacity-70 absolute hover:opacity-80 hover:flex"
      >
        Add to cart
      </Button>
    </div>
  );
}
