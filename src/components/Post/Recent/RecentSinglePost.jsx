import { urlFor } from "@/utils/sanity-utils";
import { dateFormater } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default async function RecentSinglePost({ post }) {
  const imageSrc = urlFor(post.mainImage).width(300).height(300).url();
  return (
    <div className='w-full '>
      <Link href={`/post/${post.slug.current}`} className='flex gap-2 group '>
        <Image
          src={imageSrc}
          alt={post?.mainimage?.alt || "image"}
          width={100}
          height={100}
          className='rounded-xl max-h-[100px] '
        />
        <div className='font-bold flex gap-1 flex-col'>
          <p className='text-xs opacity-40'>{dateFormater(post._createdAt)}</p>
          <p className='text-[14px] hover:text-primary transition-colors group-hover:text-primary'>
            {post.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
