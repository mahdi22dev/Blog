import Link from "next/link";
import Image from "next/image";
import { dateFormater } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";

export default function RelatedArticlesSingle({ post }) {
  const imageSrc = urlFor(post.mainImage).url();
  return (
    <div className=''>
      <Link
        href={`/post/${post.slug.current}`}
        className='flex gap-2 group m-2 bg-white py-4 pl-2 pr-4 h-32'
      >
        <Image
          src={imageSrc}
          alt={post?.mainimage?.alt || "image"}
          width={100}
          height={100}
          className='rounded-md max-h-[100px] mr-2 hover:scale-110 transition-all '
        />
        <div className='font-bold flex gap-1 justify-between flex-col'>
          <p className='text-[14px] hover:text-primary transition-colors group-hover:text-primary'>
            {post.title}
          </p>
          <p className='text-xs opacity-40'>{dateFormater(post._createdAt)}</p>
        </div>
      </Link>
    </div>
  );
}
