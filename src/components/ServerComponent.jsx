import React from "react";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/image";
import Skeleton from "./Loading/Skeleton";

export default async function ServerComponent() {
  const query =
    '*[_type == "post"]{ _id, title, mainImage, "authorname": author->name }';
  const posts = await client.fetch(query);

  return (
    <div className=''>
      <h1>blog posts</h1>
      <div className='grid grid-cols-3'>
        {posts.map((post) => {
          const imageSrc = urlFor(post.mainImage)
            .width(1000)
            .height(1000)
            .url();

          return (
            <div key={post.title}>
              <p>{post.title}</p>
              <p>author : {post.authorname}</p>
              <Image
                src={imageSrc}
                width={500}
                height={500}
                alt={post.mainImage.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
