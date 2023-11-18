/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import BurgerImg from '../assets/burgerImg.avif'
export const FoodCard = (props) => {
  const [count, setCount] = useState(false);
  return (
    <div className="border p-2 rounded">
      <h1 className="text-2xl font-semibold">{props.title}</h1>
      <img src={BurgerImg} alt="" className="rounded"/>
      <div className="py-2 flex justify-between items-center">
      <p className="font-medium text-lg">Rs {props.price}</p>
      <button
        className="p-2 text-white bg-green-600 rounded"
        onClick={() => setCount(count + 1)}
      >
        Add to cart <span>{count}</span>
      </button>
      </div>
    </div>
  );
};
