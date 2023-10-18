"use client";
import { navlinks } from "@/config/nav-links";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export default function ResNavbar({ res }) {
  const { toggle, setToggle } = useGlobalContext();

  return (
    <div
      className={`${res} navbar z-50 ${
        toggle ? "open" : "hide"
      } w-2/4 bg-white shadow-md rounded `}
    >
      {toggle ? (
        <FaWindowClose
          className=' cursor-pointer flex md:hidden hover:text-primary ml-[100%]'
          onClick={() => setToggle(!toggle)}
        />
      ) : null}

      {navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.link}
            className='border border-gray-300 font-medium hover:text-primary transition'
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
