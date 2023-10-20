import Link from "next/link";
import React from "react";
import { LiaHashtagSolid } from "react-icons/lia";

export default function Tags({ tags }) {
  return (
    <div className='flex justify-start items-center font-semibold'>
      <LiaHashtagSolid />
      Tags:{" "}
      <Link
        href={`/tags/${tags}`}
        className='text-primary font-bold ml-1 capitalize'
      >
        {tags}
      </Link>
    </div>
  );
}
