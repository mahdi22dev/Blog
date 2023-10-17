import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className='w-full flex flex-col justify-center gap-7 min-h-[180px] p-5'>
      <h1 className='mx-auto text-primary'>Logo</h1>
      <Navbar />
    </div>
  );
}
