import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
// import MarkDown from "@/components/MarkDown";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/utils/sanity-utils";

export default async function Home({ params }) {
  const slug = params.slug;
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });
  console.log(post);
  if (!post) {
    return notFound();
  }
  const imageSrc = urlFor(post.mainImage).url();

  return (
    <main className=' text-black  mx-auto  w-full'>
      <div className='mt-10  mx-auto'>
        <div className='w-full bg-white'>
          <div className='relative  h-[60vh] mb-5 block max-w-7xl mx-auto'>
            <Image
              className='rounded-sm  object-cover'
              src={imageSrc}
              alt={post.mainImage.alt}
              fill
              priority
            />
          </div>
        </div>
        <article class='prose lg:prose-xl prose-zinc max-w-4xl mx-auto p-10'>
          <h1 className='text-4xl md:text-6xl font-bold '>{post.title}</h1>
          <PortableText value={post.body} />
          {/* <MarkDown content={""} /> */}
        </article>
      </div>
    </main>
  );
}
