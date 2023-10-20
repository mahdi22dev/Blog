import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
// import MarkDown from "@/components/MarkDown";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/utils/sanity-utils";
import Profile from "@/components/Post/Profile";
import RecentPosts from "@/components/Post/RecentPosts";
import Tags from "@/components/Post/Tags";
import Dotted from "@/components/Post/Dotted";

export default async function Home({ params }) {
  const slug = params.slug;

  const query = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
  body,_createdAt,
    author-> {
     image,
     name,
     slug
    }
  }
`;
  const post = await client.fetch(query, { slug });
  if (!post) {
    return notFound();
  }
  const imageSrc = urlFor(post.mainImage).url();

  return (
    <main className=' text-black mx-auto w-full flex flex-col lg:flex-row max-w-[85rem]'>
      <article className='mt-3 mx-10 lg:w-auto mb-10 max-w-4xl shadow-md min-w-[50vw]	bg-white'>
        <div className='relative h-[60vh] mb-5 block mx-auto'>
          <Image
            className=' object-cover saturate-150'
            src={imageSrc}
            alt={post.mainImage.alt}
            fill
            priority
          />
          <div className='absolute bottom-0 left-0 right-0 top-0 w-[99%] h-[99%] mx-auto my-auto border-white border-2 z-[1000]'></div>
        </div>

        <div class='prose md:prose-lg prose-a:text-primary max-w-4xl mx-auto p-10 pt-1'>
          <Profile post={post} />
          <h1 className='text-4xl md:text-6xl font-extrabold text-text'>
            {post.title}
          </h1>
          <PortableText value={post.body} />
          {/* small divivder */}
          <div className='w-14 h-1 bg-primary mb-3'></div>
          <Tags tags={"office"} />
          <Dotted />
          <div>share</div>
          <Dotted />
        </div>
      </article>

      <RecentPosts />
    </main>
  );
}
