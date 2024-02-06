import { urlFor } from "@/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurtagsSingle({ post }) {
  const imageSrc = urlFor(post.mainImage).width(250).height(250).url();
  return (
    <Link
      href={`/tags/${post.title}`}
      className="relative h-64 mb-5 block mx-auto max-w-[80%] md:max-w-full w-full group"
    >
      <Image
        className="object-cover saturate-150 brightness-[80%] group-hover:brightness-[65%] transition duration-300"
        src={imageSrc}
        alt={post.mainImage.alt || "image tag"}
        fill
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 w-[85%] h-[85%] mx-auto my-auto border-white border-2 flex justify-center items-center text-3xl text-white uppercase ">
        <p className="group-hover:scale-110 group-hover:font-bold transition-all">
          {post.title}
        </p>
      </div>
    </Link>
  );
}
