import { urlFor } from "@/utils/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import AuthorsocialLinks from "../Author/AuthorsocialLinks";

export default function AuthorInfo({ info }) {
  return (
    <div className='relative p-4 mt-3 mx-10 py-20 pt-11 lg:w-auto mb-10 max-w-4xl shadow-md min-w-[50vw] bg-white'>
      <AuthorsocialLinks info={""} />
      <div className='flex justify-center items-start gap-4'>
        <div>
          <Link href={`/author/${info.slug.current}`}>
            <img
              src={urlFor(info?.image).width(85).height(85).url()}
              alt={info.image.alt}
              className='rounded-[100%] hover:scale-110 transition-all duration-300'
            />
          </Link>
        </div>
        <div className=' my-auto'>
          <a
            className='not-prose fancy-link text-3xl text-black hover:text-primary transition-all duration-300 dark:text-white font-extrabold'
            href={`/author/${info.slug.current}`}
          >
            {info.name}
          </a>
          <p className='text-center'>experts</p>
        </div>
      </div>
      <div className='text-center mt-4 mx-auto max-w-[500px]'>
        <PortableText value={info.bio} />
      </div>
      <div className='flex justify-center items-center w-full absolute -bottom-6 '>
        <Link
          href={`/author/${info.slug.current}`}
          className='mt-3 mx-auto btn_animation text-xs'
        >
          <span> View All Articles</span>
        </Link>
      </div>
    </div>
  );
}
