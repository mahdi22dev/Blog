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
  const imageSrc = urlFor(post.mainImage).width(1000).height(1000).url();

  return (
    <main className='min-h-screen text-black  mx-auto'>
      <h1 className='text-7xl text-orange-400'>Blog project</h1>
      <div className='mt-10  mx-auto'>
        <div className='relative w-full h-[60vh] mb-5'>
          <Image
            className='rounded-sm object-cover'
            src={imageSrc}
            fill
            priority
          />
        </div>

        <article class='prose lg:prose-xl prose-zinc max-w-4xl mx-auto p-10'>
          <PortableText value={post.body} />
          {/* <MarkDown content={""} /> */}
        </article>
      </div>
    </main>
  );
}
