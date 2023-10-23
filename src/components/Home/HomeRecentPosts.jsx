import Link from "next/link";
import RecentFirstPost from "./RecentFirstPost";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
export default function HomeRecentPosts({ post }) {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl md:text-2xl lg:text-3xl text-center  mb-3 font-bold border-b-2 border-primary'>
          Recent Articles
        </h2>
        <Link
          href={`/post/blog`}
          className='flex justify-start items-center cursor-pointer gap-2 pr-5 hover:pr-0 hover:scale-110 transition-all duration-500'
        >
          <span className='text-primary text-xl'>View More</span>{" "}
          <BiRightArrowAlt className='text-white bg-primary p-l2' />
        </Link>
      </div>
      <RecentFirstPost post={post} />
    </section>
  );
}
