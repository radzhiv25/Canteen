import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="md:w-3/4 mx-auto p-5 text-gray-500 flex items-center justify-between">
        <h2>menu</h2>
      <h1 className="font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-400 bg-clip-text text-transparent text-3xl">
        <Link to="/">
        yarn canteen
        </Link>
      </h1>
      <h2>cart</h2>
      {/* <ul className="md:flex space-x-5 font-medium md:visible hidden">
        <li>
        <Link to="/menu">menu</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/cart">cart</Link>
        </li>
      </ul> */}

    </nav>
  );
}
