import { urlFor } from "@/utils/sanity-utils";
import { dateFormater } from "@/utils/utils";
import Link from "next/link";
import React from "react";

export default function RecentFirstPost({ post }) {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`overflow-hidden relative mx-auto group max-w-[80%] md:max-w-4xl shadow-md mb-4 md:mb-auto hover:brightness-95 `}
    >
      <div
        className={`h-[450px] relative transition-transform duration-500 ease-out rounded-2xl`}
        style={{
          backgroundImage: `url('${urlFor(post.mainImage)
            .width(750)
            .height(750)
            .url()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%) saturate(200%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group"></div>
      </div>
      <Link
        href={`/tags/${post?.categories?.[0]?.title}`}
        className="absolute top-3 left-3 uppercase text-white hover:opacity-90 transition bg-primary py-1 px-1 min-w-[50px] text-center"
      >
        {post?.categories?.[0]?.title || "GENERAL"}
      </Link>
      <div className="z-40 absolute bottom-3 left-3 pb-5 pl-2 ">
        <a
          href={`/post/${post.slug.current}`}
          class="fancy-link leading-9 text-white hover:opacity-90 font-bold text-2xl md:text-4xl mt-2 group-hover:bg-[length:100%_3px]
        "
        >
          {post.title}
        </a>
        <p className="text-white hover:opacity-90 transition font-thin text-xs mt-2">
          {post.authorname} <span className="mx-2">-</span>{" "}
          {dateFormater(post._createdAt)}
        </p>
      </div>
    </Link>
  );
}
