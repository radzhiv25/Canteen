/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
// import BurgerImg from "../assets/burgerImg.avif";

export const FoodCard = (props) => {
  const [count, setCount] = useState(false);

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
      <img src={props.image} alt="" className="rounded" />
      <div className="my-2 flex justify-between items-center">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <span className="flex border rounded-full p-1">{props.rating} <p className="ml-1 border-l px-1">Rating</p></span>
      </div>
      <div className="py-2 flex justify-between items-center border-t mt-2">
        <p className="font-medium text-lg">Rs {props.price}</p>
        <div className="">
          <button onClick={addBtn}>+</button>
          <span>{count}</span>
          <button onClick={removeBtn}>-</button>
        </div>
      </div>
    </div>
  );
};
