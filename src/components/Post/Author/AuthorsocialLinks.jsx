"use client";
import { author_social } from "@/config/author-social";
import { Tooltip } from "react-tooltip";
export default function AuthorsocialLinks({ info }) {
  return (
    <div className='flex gap-1 absolute top-3 right-3'>
      {author_social.map((icon) => {
        return (
          <>
            <Tooltip id='my-tooltip' className='bg-primary' />
            <a
              key={icon.id}
              data-tooltip-id='my-tooltip'
              data-tooltip-content={icon.title}
              className={`cursor-pointer ml-2 transition-all duration-500 hover:opacity-70 p-2 rounded-[100%] ${
                icon.title == "facebook" && "bg-blue-700"
              }
              ${icon.title == "twitter" && "bg-blue-400 hover:opacity-80"}
              ${icon.title == "website" && "bg-black hover:opacity-80"} `}
            >
              {icon.icon}
            </a>
          </>
        );
      })}
    </div>
  );
}
