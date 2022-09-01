import React from "react";
import DirectoryItem from "../directory-items/DirectoryItem";
import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
];

export default function Directory() {
  return (
    <div className="container flex justify-between mx-auto gap-8 pb-16">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
