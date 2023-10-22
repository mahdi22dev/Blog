import TagsContent from "@/components/Tags/TagsContent";
import React from "react";
import { client } from "../../../../sanity/lib/client";

export default async function page({ params }) {
  const title = params.id;
  const query = `*[_type == "category" && title == $title]  {_id}`;
  const posts = await client.fetch(query, { title });
  return (
    <main className='min-h-screen w-full '>
      <h2 className='w-full text-center text-4xl my-4 uppercase text-primary'>
        # {title}
      </h2>
      <TagsContent tag={posts[0]._id} />
    </main>
  );
}
