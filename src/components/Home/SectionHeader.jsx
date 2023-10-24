import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
export default function SectionHeader({ text, subtext }) {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
      <h2 className='text-2xl md:text-2xl lg:text-3xl text-center  mb-3 font-bold border-b-2 border-primary'>
        {text}
      </h2>
      <Link
        href={`/post/blog`}
        className='flex justify-start items-center cursor-pointer gap-2 pr-5 hover:pr-0 hover:scale-110 transition-all duration-500'
      >
        <span className='text-primary text-xl'>{subtext}</span>{" "}
        <BiRightArrowAlt className='text-white bg-primary p-l2' />
      </Link>
    </div>
  );
}
