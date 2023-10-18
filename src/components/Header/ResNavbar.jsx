"use client";
import { navlinks } from "@/config/nav-links";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { social_links } from "@/config/social-links";
export default function ResNavbar({ res }) {
  const { toggle, setToggle } = useGlobalContext();

  return (
    <div
      className={`${res} navbar z-50 ${
        toggle ? "open" : "hide"
      } w-full bg-primary shadow-md rounded `}
    >
      {toggle ? (
        <IoClose
          className='text-4xl cursor-pointer flex md:hidden text-white hover:opacity-50 absolute top-5 left-2/4'
          onClick={() => setToggle(!toggle)}
        />
      ) : null}

      {navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.link}
            className='p-3 font-medium text-white hover:opacity-50 transition text-left'
          >
            {link.title}
          </Link>
        );
      })}

      <div className='p-3 flex gap-2 justify-center items-center'>
        {social_links.map((link) => {
          return (
            <a
              href={link.link}
              target='_blank'
              className={`cursor-pointer ${
                link.title == "facebook" && "hover:bg-blue-600"
              }
              ${link.title == "twitter" && "hover:bg-blue-400"}
              ${
                link.title == "youtube" && "hover:bg-red-500"
              } p-2 rounded-[100%]`}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
