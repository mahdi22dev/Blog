import { navlinks } from "@/config/nav-links";
import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className='hidden md:flex justify-center items-center gap-12 max-w-2xl h-12 mx-auto p-2 bg-white shadow-md rounded'>
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
