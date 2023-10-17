import React from "react";
import { client } from "../../sanity/lib/client";
import Featured from "@/components/Post/Featured";

export default async function page() {
  const query = `*[_type == "post"] { _id, title, mainImage, slug,"authorname": author->name } | order(_createdAt desc) [0..2]`;
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <main className='mx-auto w-full  max-w-7xl p-3'>
      {/* featured */}
      <section className='mx-auto flex flex-col md:flex-row p-3 max-w-4xl gap-1'>
        <Featured post={posts[0]} />

        <div className=' w-96 md:w-72 h-96 bg-red-500 mx-auto'>second post</div>
        <div className='w-96 md:w-72 h-96 bg-blue-500 mx-auto'>third post</div>
      </section>
    </main>
  );
}
