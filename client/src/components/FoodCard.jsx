/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
// import BurgerImg from "../assets/burgerImg.avif";

export const FoodCard = (props) => {
  const [count, setCount] = useState(1);

  const addBtn = () => {
    if(count < 5){
      setCount(count + 1)
    }
  }
  const removeBtn = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }
  return (
    <div className="border p-2 rounded">
      <img src={props.image} alt="" className="rounded h-48 w-full" />
      <div className="my-2 flex justify-between items-center">
        <h1 className="lg:text-xl text-md font-semibold">{props.title}</h1>
        <span className="flex border rounded-full py-1 px-2">{props.rating} ⭐️</span>
      </div>
      <div className="py-2 flex justify-between items-center border-t mt-2">
        <p className="font-medium text-lg">Rs {props.price}</p>
        <div className="border flex justify-between items-center w-20 rounded">
          <button onClick={addBtn} className="p-1 border-r">+</button>
          <span className="py-1 px-2">{count}</span>
          <button onClick={removeBtn} className="p-1 border-l">-</button>
        </div>
      </div>
      <button className="border p-2 w-full rounded text-white font-semibold bg-green-600">add to cart</button>
    </div>
  );
};
