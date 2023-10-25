"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Skeleton from "../Loading/Skeleton";
import Featured from "../Home/Featured";
import { useSearchParams } from "next/navigation";
import { LiaSearchSolid } from "react-icons/lia";

let start = 0;
let end = 5;

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [showMore, setShowMore] = useState(true);

  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  console.log(search);

  const PaginationFetch = async (start, end) => {
    setPaginationLoading(true);
    const query =
      '*[_type == "post" && title match $search]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[$start..$end]';
    const posts = await client.fetch(query, { search, start, end });
    const oldData = [...data, ...posts];
    setData(oldData);
    if (posts.length == 0) {
      setShowMore(false);
    }
    setPaginationLoading(false);
  };

  const fetchClient = async () => {
    setLoading(true);
    const query =
      '*[_type == "post" && title match $search]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[0..5]';
    const posts = await client.fetch(query, { search });
    setData(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchClient();
  }, [search]);

  if (data.length == 0) {
    return (
      !loading && (
        <div className='w-full h-full max-w-7xl mx-auto flex justify-center items-center'>
          no result matching your term found
        </div>
      )
    );
  }

  return (
    <>
      {" "}
      <p className='text-start ml-7 my-10 text-2xl flex gap-2 items-center justify-start'>
        <LiaSearchSolid /> Search Results for:
        <span className='text-primary font-semibold flex gap-2'>{search}</span>
      </p>
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
          <div className='flex justify-center items-center w-full absolute bottom-2'>
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
    </>
  );
};

export default SearchResults;
