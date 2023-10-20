import { social_share } from "@/config/social -share";
import { Generatesharelink } from "@/utils/utils";
import React from "react";
import {} from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function Share({ title }) {
  return (
    <div className='p-1 flex justify-between items-center'>
      <div className='flex justify-center items-center gap-2 max-h-[50px]'>
        <AiOutlineShareAlt className='text-[28px] gap-2' />
        <p>Share</p>
      </div>
      <div className='flex flex-wrap sm:flex-nowrap w-3/4 justify-end '>
        {social_share.map((link) => {
          const sharlink = Generatesharelink(link, title);
          return (
            <a
              key={link.id}
              href={sharlink}
              target='_blank'
              rel='noopener noreferrer'
              className={`cursor-pointer ml-2 transition-all duration-500 hover:opacity-70
              ${link.title == "facebook" && "bg-blue-700"}
              ${link.title == "twitter" && "bg-blue-400 hover:opacity-80"}
              ${link.title == "whatsApp" && "bg-green-500 hover:opacity-80"}
              ${link.title == "linkedin" && "bg-blue-500 hover:opacity-80"}
              ${link.title == "email" && "bg-black"} 
              p-2 rounded-[100%] transition-colors duration-300`}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
