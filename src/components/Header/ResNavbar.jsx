"use client";
import { navlinks } from "@/config/nav-links";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { social_links } from "@/config/social-links";
import Social from "./Social";
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
          className='hover:rotate-180 hover:scale-125 transition-all text-4xl cursor-pointer flex md:hidden text-white hover:opacity-50 absolute top-5 left-2/4'
          onClick={() => setToggle(!toggle)}
        />
      ) : null}

      {navlinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.link}
            className='p-3 pl-8 font-medium text-white hover:opacity-70 hover:pl-14 transition-[padding] duration-500 text-left resnavbaranimation showastick bg-primary'
            onClick={() => setToggle(!toggle)}
          >
            {link.title}
          </Link>
        );
      })}

      <Social className={"p-3 flex gap-2 justify-center items-center"} />
    </div>
  );
}
