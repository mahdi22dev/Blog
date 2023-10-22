"use client";
import { urlFor } from "@/utils/sanity-utils";
import { dateFormater } from "@/utils/utils";
import Link from "next/link";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

export default function Profile({ post }) {
  return (
    <div className='flex justify-start items-center gap-5'>
      <Tooltip id='my-tooltip' />
      <div className='flex justify-start items-center gap-2'>
        <img
          src={urlFor(post.author.image).width(50).height(50).url()}
          alt={post.author.image.alt}
          className='rounded-[100%] w-11 h-11'
        />
        <p className='text-xs text-black  dark:text-white font-medium '>
          <Link className='not-prose hover:text-primary transition' href={"/"}>
            {post.author.name}
          </Link>{" "}
          -- {dateFormater(post.createdAt)}
        </p>
      </div>
      <div className='flex items-center gap-2 text-base'>
        <p>8 min</p>
        {
          <AiOutlineFieldTime
            data-tooltip-id='my-tooltip'
            data-tooltip-content={"readtime"}
            className=''
          />
        }
      </div>
    </div>
  );
}
