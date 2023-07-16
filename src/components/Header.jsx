import React from 'react'
import logo from "../images/atlan-blue.svg";

export const Header = () => {
  return (
    <div className="relative w-full flex justify-between items-center h-20
                    border-b-2 border-gray-200 dark:border-darkBorder px-4 md:px-20 mx-auto my-0">
        <div className="text-xl md:text-3xl font-bold">SQL Query App</div>
        <img className='w-24 h-12' src={logo} alt="logo-atlan" />
    </div>
  )
};