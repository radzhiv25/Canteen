// import React from 'react'
import { useState } from "react";
import LoginImg from '../assets/LoginImg.jpg';
import axios from 'axios';
export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          alert("Success");
        }
        else {
          alert(result.data)
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="h-screen md:w-3/4 md:mx-auto mx-5">
      <div className="flex md:flex-row flex-col my-10 mx-5">
        <img
          src={LoginImg}
          alt=""
          className="md:w-1/2 md:rounded-l rounded-t"
        />
        <form onSubmit={handleSubmit} className="md:w-1/2 border md:rounded-r rounded-b md:p-10 p-2 space-y-5 flex flex-col justify-center items-center">
          <div className="md:w-2/3">
            <label htmlFor="" className="text-black font-bold">College Mail</label>
            <input
              type="email"
              placeholder="eg. en20cs30XXXX@medicaps.ac.in"
              className="p-2 rounded text-black bg-white border outline-none w-full"
              name = "email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:w-2/3">
            <label htmlFor="" className="text-black font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="p-2 rounded text-black bg-white border outline-none w-full"
              name = "password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-black text-white rounded p-2 font-semibold md:w-2/3 w-full">login</button>
          <p className="text-blue-500">Forget Password ?</p>
        </form>
      </div>
    </div>
  );
};
