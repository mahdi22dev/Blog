"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity-utils";
import { client } from "../../../sanity/lib/client";
import Skeleton from "../Loading/Skeleton";

const BlogContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fetch posts from Sanity.io
  const fetchClient = async () => {
    setLoading(true);
    const query =
      '*[_type == "post"]{ _id, title, mainImage, "authorname": author->name }';
    const posts = await client.fetch(query);
    setData(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div className=''>
      <h1>blog posts</h1>
      {loading ? (
        <div className='grid grid-cols-3 gap-3'>
          {Array.from({ length: 6 }).map((index) => {
            return <Skeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='grid grid-cols-3'>
          {data.map((post) => {
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
      )}
    </div>
  );
};

export default BlogContent;
