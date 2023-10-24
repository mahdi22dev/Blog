import Link from "next/link";
import Image from "next/image";
import { dateFormater } from "@/utils/utils";
import { urlFor } from "@/utils/sanity-utils";

export default function RelatedArticlesSingle({ post }) {
  const imageSrc = urlFor(post.mainImage).url();
  return (
    <div className=''>
      <Link
        href={`/post/${post.slug}`}
        className='flex gap-2 group m-2 bg-white h-24 shadow-md hover:shadow-lg'
      >
        <div className='w-1/4 min-w-[100px] max-w-[125px] relative'>
          <Image
            src={imageSrc}
            alt={post?.mainimage?.alt || "image"}
            fill
            className='rounded-md max-h-[100px] mr-2 hover:scale-110 transition-all '
          />
        </div>
        <div className='font-bold flex gap-1 justify-between flex-col py-4 pl-2 pr-4'>
          <a className='text-[clamp(11px,1vw,14px)] hover:text-primary transition-colors group-hover:text-primary '>
            {post.title}
          </a>
          <p className='text-[clamp(9px,0.8vw,12px)] opacity-40'>
            {dateFormater(post._createdAt)}
          </p>
        </div>
      </Link>
    </div>
  );
}
