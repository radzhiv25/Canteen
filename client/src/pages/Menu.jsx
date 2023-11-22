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
      title: "Chai",
      rating: "4.5",
      price: "50",
    },
    {
      image: "../src/assets/MenuItems/chole-bhature.jpg",
      title: "Chole Bhature",
      rating: "4.5",
      price: "50",
    },
    {
      image: "../src/assets/MenuItems/Aloo-paratha.jpg",
      title: "Aloo Paratha",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/maggi.avif",
      title: "Maggi",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/poha.avif",
      title: "Poha",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/pav-bhaji.png",
      title: "Pav Bhaji",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/french-fries.jpeg",
      title: "French Fries",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/chole-tikki.jpg",
      title: "Chole Tikki",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/sandwich.jpg",
      title: "Sandwich",
      rating: "4.5",
      price: "50",
    },{
      image: "../src/assets/MenuItems/noodles.jpg",
      title: "Noodles",
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
