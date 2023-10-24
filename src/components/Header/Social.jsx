import { social_links } from "@/config/social-links";
import React from "react";

export default function Social({ className }) {
  return (
    <div className={`${className}`}>
      {social_links.map((link) => {
        return (
          <a
            key={link.id}
            href={link.link}
            target='_blank'
            className={`cursor-pointer ${
              link.title == "facebook" && "hover:bg-blue-600"
            }
              ${link.title == "twitter" && "hover:bg-blue-400"}
              ${
                link.title == "youtube" && "hover:bg-red-500"
              } p-2 rounded-[100%] transition-colors duration-300`}
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
}
