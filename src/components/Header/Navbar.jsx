"use client";
import { navlinks } from "@/config/nav-links";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  return (
    <div
      className={` md:flex hidden gap-12 z-50 w-2/4 md:!relative md:w-full md:max-w-2xl md:h-12 md:min-h-[20px] md:mx-auto bg-white shadow-md rounded md:p-2  md:justify-center md:items-center md:flex-row md:transform-none md:top-0 md:left-0`}
    >
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
