import { urlFor } from "@/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default function RecentSmallPost({ post }) {
  return (
    <div className='mx-auto group mb-4 md:mb-auto m-2 w-[100%] md:w-auto mt-4 '>
      <div className='relative w-full h-[27rem] md:h-96 mb-7'>
        <Image
          src={urlFor(post.mainImage).width(500).height(500).url()}
          alt='image'
          fill
          className='rounded-2xl'
          objectFit='cover'
        />
      </div>
      <div color='p-3'>
        <Link
          href={`/tags/${post?.categories?.[0]?.title}`}
          className='uppercase text-primary font-bold hover:text-opacity-80 transition  py-1 px-1 min-w-[50px] text-center '
        >
          {post?.categories?.[0]?.title || "GENERAL"}
        </Link>
        <div className='z-40 pb-5 pl-2 max-w-sm mt-2'>
          <a
            href={`/post/${post.slug}`}
            class='fancy-link leading-9 hover:opacity-90 font-bold text-xl md:text-2xl mt-2 group-hover:bg-[length:100%_3px]
        '
          >
            {post.title}
          </a>
        </div>
      </div>
    </div>
  );
}
