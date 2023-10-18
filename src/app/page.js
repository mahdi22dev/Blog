import React from "react";
import { client } from "../../sanity/lib/client";
import Featured from "@/components/Post/Featured";

export default async function page() {
  const query = `*[_type == "post"] { _id, title, mainImage, categories[]-> { title}, slug, _createdAt ,"authorname": author->name } | order(_createdAt desc) [0..2]`;
  const posts = await client.fetch(query);

  return (
    <main className='mx-auto w-full max-w-7xl p-3'>
      {/* featured */}
      <section className='mx-auto flex flex-col md:flex-row p-3 max-w-6xl gap-1'>
        <Featured
          post={posts[0]}
          width={"w-[80vw] md:w-[600px]"}
          maxw={"md:max-w-[600px] max-w-[560px]"}
        />
        <Featured
          post={posts[1]}
          width={"w-[80vw] md:w-[460px]"}
          maxw={"max-w-[560px]"}
        />
        <Featured
          post={posts[2]}
          width={"w-[80vw] md:w-[460px]"}
          maxw={"max-w-[560px]"}
        />
      </section>
    </main>
  );
}
