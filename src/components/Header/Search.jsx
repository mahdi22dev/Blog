"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <div className='flex justify-center items-center w-14 h-12 md:w-16 md:h-14 bg-primary rounded-full cursor-pointer shadow-md  hover:opacity-80 transition mt-4 md:mt-[135px] hover:scale-110 group'>
      <FaSearch className='cursor-pointer text-white group-hover:scale-110' />
    </div>
  );
}
