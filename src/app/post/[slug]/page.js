import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
// import MarkDown from "@/components/MarkDown";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/utils/sanity-utils";
import Profile from "@/components/Post/Profile";
import RecentPosts from "@/components/Post/RecentPosts";

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
  console.log(post);
  if (!post) {
    return notFound();
  }
  const imageSrc = urlFor(post.mainImage).url();

  return (
    <main className=' text-black mx-auto w-full flex flex-col lg:flex-row max-w-7xl'>
      <article className='mt-3 mx-10 mb-10 max-w-4xl shadow-md min-w-[50vw]	bg-white'>
        <div className='relative h-[60vh] mb-5 block mx-auto'>
          <Image
            className='rounded-t-lg object-cover saturate-150'
            src={imageSrc}
            alt={post.mainImage.alt}
            fill
            priority
          />
        </div>

        <div class='prose md:prose-lg prose-a:text-primary max-w-4xl mx-auto p-10 pt-1'>
          <Profile post={post} />
          <h1 className='text-4xl md:text-6xl font-extrabold text-text'>
            {post.title}
          </h1>
          <PortableText value={post.body} />
        </div>
      </article>
      <RecentPosts />
    </main>
  );
}
