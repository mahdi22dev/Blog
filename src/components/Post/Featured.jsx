import { urlFor } from "@/utils/sanity-utils";
import Link from "next/link";
import Image from "next/image";

export default function Featured({ post, maxw, width }) {
  console.log(post);
  return (
    <Link
      href={`/post/${post.slug.current}`}
      className={`overflow-hidden relative max-w-[560px] mx-auto rounded-md`}
    >
      <div
        className='w-[400px] md:w-[560px] h-[450px] max-w-[560px] bg-green-500 relative hover:scale-110 hover:opacity- transition-transform duration-500 ease-out '
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
      <div className='z-40 absolute bottom-3 left-3'>
        <p className=' text-white hover:opacity-90 transition font-bold text-2xl'>
          {post.title}
        </p>
        <p className='text-white hover:opacity-90 transition font-thin text-xs mt-2'>
          {post.authorname}
        </p>
      </div>
    </Link>
  );
}
