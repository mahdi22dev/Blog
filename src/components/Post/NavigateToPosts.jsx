import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default async function NavigateToPosts({ date }) {
  const query = '*[_type == "post"]{ _id, title, "slug":slug.current }[0..1]';

  const posts = await client.fetch(query);
  const post1 = posts[0];
  const post2 = posts[0];
  return (
    <div className='w-full mt-5 py-1 flex justify-between max-h-20 text-base gap-3 not-prose '>
      <Link
        href={`/post/${post1.slug}`}
        className='w-2/4 text-black hover:text-primary transition-all duration-500 no-underline'
      >
        <p className='flex justify-start items-center font-semibold'>
          <FaAngleLeft />
          Newer
        </p>
        <p>{post1.title}</p>
      </Link>
      <Link
        href={`/post/${post2.slug}`}
        className='w-2/4 text-right text-black hover:text-primary transition-all duration-500 no-underline'
      >
        <p className='flex justify-end items-center font-semibold'>
          Older
          <FaAngleRight />
        </p>
        <p>{post2.title}</p>
      </Link>
    </div>
  );
}
