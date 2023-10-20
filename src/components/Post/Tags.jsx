import Link from "next/link";
import React from "react";
import { LiaHashtagSolid } from "react-icons/lia";

export default function Tags({ tags }) {
  return (
    <div className='flex justify-start items-center mb-4'>
      <LiaHashtagSolid className='text-[25px]' />
      Tags:{" "}
      <Link
        href={`/tags/${tags}`}
        className='text-primary font-bold ml-1 capitalize hover:opacity-80 transition-all no-underline'
      >
        {tags}
      </Link>
    </div>
  );
}
