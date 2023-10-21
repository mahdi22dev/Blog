"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Skeleton from "../Loading/Skeleton";
import Featured from "../Home/Featured";

let start = 0;
let end = 5;

const BlogContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const PaginationFetch = async (start, end) => {
    console.log(start, end);
    const query =
      '*[_type == "post"]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[$start..$end]';
    const posts = await client.fetch(query, { start, end });
    const oldData = [...data, ...posts];
    setData(oldData);
    console.log(posts);
  };

  const fetchClient = async () => {
    setLoading(true);
    const query =
      '*[_type == "post"]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[0..5]';
    const posts = await client.fetch(query);
    setData(posts);
    console.log(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div className='pb-20'>
      {loading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-3 w-full h-full max-w-7xl mx-auto'>
          {Array.from({ length: 6 }).map((index) => {
            return <Skeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-3 w-full h-full max-w-7xl mx-auto'>
          {data.map((post) => {
            return (
              <Featured
                post={post}
                width={""}
                maxw={""}
                className={"m-2 w-[90%] min-[1440px]:w-96"}
              />
            );
          })}
        </div>
      )}
      <div className='flex justify-center items-center w-full absolute bottom-2'>
        <button
          onClick={() => {
            end = end + 6;
            start = start + 6;
            PaginationFetch(start, end);
          }}
          href={"/author"}
          className='mt-3 mx-auto btn_animation text-xs'
        >
          <span>Load More</span>
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
