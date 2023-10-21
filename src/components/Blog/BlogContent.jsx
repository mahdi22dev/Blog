"use client";
import React, { Suspense, useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Skeleton from "../Loading/Skeleton";
import BlogsinglePost from "./BlogsinglePost";
import Featured from "../Home/Featured";
import Button from "../ui/Button";

const BlogContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fetch posts from Sanity.io
  const fetchClient = async () => {
    setLoading(true);
    const query =
      '*[_type == "post"]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[0..5]';
    const posts = await client.fetch(query);
    setData(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div className=''>
      {loading ? (
        <div className='grid grid-cols-3 '>
          {Array.from({ length: 6 }).map((index) => {
            return <Skeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full max-w-7xl mx-auto'>
          {data.map((post) => {
            return (
              <Featured
                post={post}
                width={""}
                maxw={""}
                className={"m-2 w-[90%] lg:w-96"}
              />
            );
          })}
        </div>
      )}
      <Button
        text={"load more"}
        className={"mt-3 mx-auto btn_animation text-xs"}
      />
    </div>
  );
};

export default BlogContent;
