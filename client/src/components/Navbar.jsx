import { Link } from "react-router-dom";
import { RespNav } from "./RespNav";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="lg:w-3/4 lg:mx-auto p-5 text-gray-500 flex items-center justify-between mx-5">
        {/* <h2>menu</h2> */}
      <h1 className="font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-400 bg-clip-text text-transparent text-3xl">
        <Link to="/">
        canteen
        </Link>
      </h1>
      {/* <h2>cart</h2> */}
      <ul className="md:flex space-x-5 items-center font-medium sm:visible hidden">
        <li>
        <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/cart">cart</Link>
        </li>
        <li className="bg-black hover:bg-white border hover:text-black text-white rounded-md p-2 px-5 cursor-pointer">
          <Link to='/login' >login</Link>
        </li>
        <li className="border rounded-md p-2 px-5 hover:text-white hover:bg-black cursor-pointer">
          <Link to='/signup' >sign up</Link>
        </li>
      </ul>
      <div className="border p-2 rounded md:hidden visible shadow-sm">
        <p className="" onClick={() =>setOpen(true)}>Items</p>
      </div>
      {open ? <RespNav close={() => setOpen(false)} />:<></>}
    </nav>
  );
}
