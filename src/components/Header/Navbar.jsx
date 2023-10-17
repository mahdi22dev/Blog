"use client";
import { navlinks } from "@/config/nav-links";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const { toggle, setToggle } = useGlobalContext();

  return (
    <div
      className={`${
        toggle ? "open" : "hide"
      }  w-2/4 md:!relative md:w-full md:max-w-2xl md:h-12 md:min-h-[20px] md:mx-auto bg-white shadow-md rounded md:p-2 md:flex md:justify-center md:items-center md:flex-row md:transform-none md:top-0 md:left-0`}
    >
      {toggle ? (
        <FaWindowClose
          className='center-close-open cursor-pointer flex md:hidden'
          onClick={() => setToggle(!toggle)}
        />
      ) : null}

      {navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.link}
            className='font-medium hover:text-primary transition'
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
