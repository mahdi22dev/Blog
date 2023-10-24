"use client";
import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { useGlobalContext } from "@/context/context";
import ResNavbar from "./ResNavbar";
import Link from "next/link";
export default function Header() {
  const { toggle, setToggle } = useGlobalContext();
  return (
    <div className='w-full flex flex-col justify-center gap-7 min-h-[100px] p-5'>
      <nav className='w-full flex max-w-2xl mx-auto items-center justify-center gap-5'>
        <BiMenuAltLeft
          className='cursor-pointer mt-4 md:mt-14 text-5xl md:hidden hover:text-primary hover:scale-125 transition-transform duration-300'
          onClick={() => setToggle(!toggle)}
        />
        <div className='w-full'>
          <Link
            href={"/"}
            className='text-5xl font-bold w-full text-center mb-4 uppercase'
          >
            <p className='text-5xl font-bold w-full text-center mb-4 uppercase'>
              <span className='text-primary'> D</span>aily Life
            </p>
          </Link>
          <Navbar />
          <ResNavbar res={"md:hidden"} />
        </div>
        <Search />
      </nav>
    </div>
  );
}
