import React from "react";
import Search from "./Search";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className='w-full flex flex-col justify-center gap-7 min-h-[200px] p-5'>
      <nav className='w-full flex max-w-2xl mx-auto items-center justify-center gap-5'>
        {/* navbar */}
        <div className='w-full'>
          <h1 className='mx-auto text-primary text-center mb-0 md:mb-10'>
            Logo
          </h1>
          {/* nav */}
          <Navbar />
        </div>
        <Search />
      </nav>
    </div>
  );
}
