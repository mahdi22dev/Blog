import React from "react";
import { client } from "../../../sanity/lib/client";

export default async function RelatedArticles() {
  const query = '*[_type == "post"]{ _id, title, "slug":slug.current }[0..3]';

  const posts = await client.fetch(query);
  return (
    <div className='p-4 mt-3 mx-10 py-20 pt-11 lg:w-auto mb-10 max-w-4xl min-w-[50vw]	'>
      <div className='flex justify-between items-center gap-3'>
        <h2 className='font-bold w-1/4 [font-size:_clamp(14px,2.5vw,25px)]'>
          Related Articles
        </h2>
        <div className='w-3/4 h-[1.5px] bg-primary'>
          {posts.map((post) => {
            return <p>{post.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
