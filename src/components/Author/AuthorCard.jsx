import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import AuthorsocialLinks from "../Post/Author/AuthorsocialLinks";
import { urlFor } from "@/utils/sanity-utils";

export default function AuthorCard({ author }) {
  const info = author[0];
  return (
    <div className='relative p-4 mt-3  py-15 pt-11 lg:w-auto mb-10 max-w-4xl shadow-md min-w-[25vw] bg-white mx-auto'>
      <AuthorsocialLinks info={""} />
      <div className='flex justify-center items-start gap-4'>
        <div>
          <Link href={"/"}>
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
            href={"/"}
          >
            {info.name}
          </a>
          <p className='text-center'>experts</p>
        </div>
      </div>
      <div className='text-center mt-4 mx-auto max-w-[500px]'>
        <PortableText value={info.bio} />
      </div>
    </div>
  );
}
