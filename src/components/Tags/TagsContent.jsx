"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "../Loading/Skeleton";
import Featured from "../Home/Featured";
import { Initialtags, Paginationtags } from "@/server-actions/serverfunctions";

let start = 0;
let end = 5;

const TagsContent = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [showMore, setShowMore] = useState(true);

  const PaginationFetch = async (start, end) => {
    setPaginationLoading(true);
    const posts = await Paginationtags(id, start, end);
    const oldData = [...data, ...posts];
    setData(oldData);
    if (posts.length == 0) {
      setShowMore(false);
    }
    setPaginationLoading(false);
  };

  const fetchClient = async () => {
    setLoading(true);
    const posts = await Initialtags(id);
    setData(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div className='pb-28'>
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
                key={post.slug}
                post={post}
                width={""}
                maxw={""}
                className={"m-2 w-[90%] min-[1440px]:w-96"}
              />
            );
          })}
        </div>
      )}
      {paginationLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-3 w-full h-full max-w-7xl mx-auto'>
          {Array.from({ length: 6 }).map((index) => {
            return <Skeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='flex justify-center items-center w-full absolute bottom-30 my-5'>
          {showMore ? (
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
          ) : (
            <p>no more posts to show</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TagsContent;
