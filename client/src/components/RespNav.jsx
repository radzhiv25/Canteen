// import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

export const RespNav = ({close}) => {
  return (
    <div className="md:hidden viisble">
      <div className="fixed inset-0 top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity"></div>
      <div className="fixed inset-0 top-0 l-0 p-5">
        <div className="w-full bg-white rounded p-5">
          <div className="flex justify-between items-center">
            <h1>Navigation</h1>
            <IoCloseOutline onClick={close} className="text-2xl cursor-pointer hover:rotate-90" />
          </div>
          <div className="mt-5">
            <ul className="block items-center space-y-5 font-medium">
              <li>
                <Link to="/menu">menu</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li className="bg-black hover:bg-white border hover:text-black text-white rounded-md p-2 px-5 cursor-pointer w-max">
                <Link to="/login">login</Link>
              </li>
              <li className="border rounded-md p-2 px-5 hover:text-white hover:bg-black cursor-pointer w-max">
                <Link to="/signup">sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
