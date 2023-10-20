"use client";
import { social_share } from "@/config/social -share";
import { notifySuccess } from "@/utils/toast";
import { Generatesharelink } from "@/utils/utils";
import React from "react";
import {} from "react-icons/ai";
import { AiOutlineShareAlt, AiOutlineCopy } from "react-icons/ai";

const copy = {
  id: 5,
  title: "copy",
  bgcolor: "hover:bg-blue-500",
  icon: <AiOutlineCopy className='text-white text-2xl' />,
};

export default function Share({ title, slug }) {
  return (
    <div className='p-1 flex justify-between items-center'>
      <div className='flex justify-center items-center gap-2 max-h-[50px]'>
        <AiOutlineShareAlt className='text-[28px] gap-2' />
        <p>Share</p>
      </div>
      <div className='flex flex-wrap sm:flex-nowrap w-3/4 justify-end '>
        {social_share.map((link) => {
          const sharlink = Generatesharelink(link, title, slug);
          return (
            <a
              key={link.id}
              href={sharlink}
              target='_blank'
              rel='noopener noreferrer'
              className={`cursor-pointer ml-2 transition-all duration-500 hover:opacity-70  p-2 rounded-[100%]
              ${link.title == "facebook" && "bg-blue-700"}
              ${link.title == "twitter" && "bg-blue-400 hover:opacity-80"}
              ${link.title == "whatsApp" && "bg-green-500 hover:opacity-80"}
              ${link.title == "linkedin" && "bg-blue-500 hover:opacity-80"}
              ${link.title == "email" && "bg-black"} 
             `}
            >
              {link.icon}
            </a>
          );
        })}
        <button
          className='cursor-pointer ml-2 transition-all duration-500 hover:opacity-70 p-2 rounded-[100%] bg-black '
          onClick={() => {
            navigator.clipboard.writeText(
              `https://blog-website-m.vercel.app/post/${slug}`
            );
            notifySuccess("link copied to your clipboard");
          }}
        >
          {copy.icon}
        </button>
      </div>
    </div>
  );
}
