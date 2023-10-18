"use client";
import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { useGlobalContext } from "@/context/context";
import Image from "next/image";
import ResNavbar from "./ResNavbar";
export default function Header() {
  const { toggle, setToggle } = useGlobalContext();
  return (
    <div className='w-full flex flex-col justify-center gap-7 min-h-[100px] p-5'>
      <nav className='w-full flex max-w-2xl mx-auto items-center justify-center gap-5'>
        <BiMenuAltLeft
          className='cursor-pointer mt-4 md:mt-14 text-5xl md:hidden hover:text-primary'
          onClick={() => setToggle(!toggle)}
        />
        {/* navbar */}
        <div className='w-full'>
          <Image
            src={"/logo.png"}
            alt='website logo'
            width={150}
            height={100}
            className='mx-auto'
          />
          {/* nav */}
          <Navbar />
          <ResNavbar res={"md:hidden"} />
        </div>
        <Search />
      </nav>
    </div>
  );
}
