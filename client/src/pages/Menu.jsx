// import React from 'react'

import { FoodCard } from "../components/FoodCard"

export const Menu = () => {
  return (
    <div className='text-black h-screen'>
      <div className="mt-16 grid grid-cols-4 w-2/3 mx-auto gap-5">
        <FoodCard title='Burger' price='40' />
        <FoodCard title='Burger' price='40' />
        <FoodCard title='Burger' price='40' />
        <FoodCard title='Burger' price='40' />
        <FoodCard title='Burger' price='40' />
        <FoodCard title='Burger' price='40' />
      </div>
    </div>
  )
}
