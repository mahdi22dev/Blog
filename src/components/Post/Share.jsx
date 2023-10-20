import { social_share } from "@/config/social -share";
import { Generatesharelink } from "@/utils/utils";
import React from "react";
import {} from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
export default function Share() {
  return (
    <div className='py-3 flex justify-between items-center'>
      <AiOutlineShareAlt className='text-[28px] gap-2' />
      <div className='flex '>
        {social_share.map((link) => {
          const sharlink = Generatesharelink(link.title);
          return (
            <a
              href={sharlink}
              target='_blank'
              className={`cursor-pointer ml-2 transition-all duration-500 hover:opacity-70 ${
                link.title == "facebook" && "bg-blue-700 "
              }
              ${link.title == "twitter" && "bg-blue-400 hover:opacity-80"}
              ${link.title == "whatsApp" && "bg-green-500 hover:opacity-80"}
               ${link.title == "linkedin" && "bg-blue-500 hover:opacity-80"}
               ${
                 link.title == "email" && "bg-black"
               } p-2 rounded-[100%] transition-colors duration-300`}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
