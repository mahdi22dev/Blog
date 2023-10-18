"use client";
import { navlinks } from "@/config/nav-links";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const { highlight, sethighlight } = useGlobalContext();
  return (
    <div
      className={`hidden md:flex gap-12 md:!relative md:w-full md:max-w-2xl md:h-12 md:min-h-[20px] md:mx-auto bg-white shadow-md rounded md:p-2  md:justify-center md:items-center md:flex-row md:transform-none md:top-0 md:left-0`}
    >
      {navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.link}
            className={`font-medium hover:text-primary transition-all underlineanimation ${
              highlight == link.link && "text-primary"
            }`}
            onClick={() => sethighlight(`/${link.title}`)}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
