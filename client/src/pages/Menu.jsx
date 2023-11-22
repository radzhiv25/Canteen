/* eslint-disable react/jsx-key */
// import React from 'react'

import { FoodCard } from "../components/FoodCard";
// import LoginImg from "../assets/burgerImg.avif";

export const Menu = () => {
  const menuItems = [
    {
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },
    {
      image: "../src/assets//MenuItems/chai.jpeg",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },
    {
      image: "../src/assets/MenuItems/chole-bhature.jpg",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },
    {
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/burgerImg.avif",
      title: "Burger",
      rating: "4.5",
      price: "50",
    },
  ];
  return (
    <div className="text-black h-full">
      <div className="mt-16 grid md:grid-cols-4 md:w-2/3 md:mx-auto mx-10 gap-5">
        {menuItems.map((item) => (
          <FoodCard
            image={item.image}
            title={item.title}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
