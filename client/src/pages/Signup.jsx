// import React from 'react'
import SignUpImg from '../assets/SignUpImg.jpg'
export const Signup = () => {
  return (
    <div className="h-screen md:w-3/4 my-20 md:mx-auto mx-5">
      <div className="flex md:flex-row flex-col mx-5">
        <img
          src={SignUpImg}
          alt=""
          className="md:w-1/2 rounded-l"
        />
        <form action="" className="md:p-10 p-3 flex flex-col items-center md:w-1/2 border rounded-r space-y-5">
          <div className="md:w-2/3 w-full">
            <label htmlFor="" className="text-black font-bold">
              Enrollment
            </label>
            <br />
            <input
              type="text"
              placeholder="eg. EN20CS30XXXX"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <label htmlFor="" className="text-black font-bold">
              Name
            </label>
            <br />
            <input
              type="text"
              placeholder="eg. John doe"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <label htmlFor="" className="text-black font-bold">
              College Email
            </label>
            <br />
            <input
              type="email"
              placeholder="eg. en20cs30XXXX@medicaps.ac.in"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <label htmlFor="" className="text-black font-bold">
              Password 
            </label>
            <br />
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="p-2 rounded text-white bg-white border outline-none w-full"
            />
          </div>
          <button className="text-white bg-black md:w-2/3 w-full p-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
