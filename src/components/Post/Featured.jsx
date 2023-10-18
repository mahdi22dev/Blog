"use client";
import { urlFor } from "@/utils/sanity-utils";
import { dateFormater } from "@/utils/utils";
import Link from "next/link";

export default function Featured({ post, maxw, width }) {
  return (
    <Link
      href={`/post/${post.slug.current}`}
      className={`overflow-hidden relative ${maxw} mx-auto rounded-md`}
    >
      <div
        className={`${width} ${maxw} h-[450px] bg-green-500 relative hover:scale-110 hover:opacity- transition-transform duration-500 ease-out`}
        style={{
          backgroundImage: `url('${urlFor(post.mainImage)
            .width(500)
            .height(500)
            .url()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: " saturate(200%)",
        }}
      >
        {/* Dark overlay on hover */}
        <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-25'></div>
      </div>
      <Link
        href={"/"}
        className='absolute top-3 left-3 uppercase text-white hover:opacity-90 transition bg-primary py-1 px-1 min-w-[50px] text-center'
      >
        {post.categories[0].title}
      </Link>
      <div className='z-40 absolute bottom-3 left-3 pb-5 pl-2 '>
        <p
          class='leading-9 text-white hover:opacity-90  font-bold text-2xl mt-2 bg-gradient-to-r from-red-200 via-red-200 to-red-200 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500
        '
        >
          {post.title}
        </p>

        <p className='text-white hover:opacity-90 transition font-thin text-xs mt-2'>
          {post.authorname} <span className='mx-2'>-</span>{" "}
          {dateFormater(post._createdAt)}
        </p>
      </div>
    </Link>
  );
}
