// import React from 'react'
import LoginImg from '../assets/LoginImg.jpg'
export const Login = () => {
  return (
    <div className="h-screen md:w-3/4 my-20 md:mx-auto mx-5">
      <div className="flex md:flex-row flex-col mx-5">
        <img
          src={LoginImg}
          alt=""
          className="md:w-1/2 md:rounded-l rounded-t"
        />
        <form action="" className="md:w-1/2 border md:rounded-r rounded-b md:p-10 p-2 space-y-5 flex flex-col justify-center items-center">
          <div className="md:w-2/3">
            <label htmlFor="" className="text-black font-bold">College Mail</label>
            <input
              type="email"
              placeholder="eg. en20cs30XXXX@medicaps.ac.in"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <div className="md:w-2/3">
            <label htmlFor="" className="text-black font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <button className="bg-black text-white rounded p-2 font-semibold md:w-2/3 w-full">login</button>
          <p className="text-blue-500">Forget Password ?</p>
        </form>
      </div>
    </div>
  );
};
