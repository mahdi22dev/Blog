"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import RecentPostsHeader from "./Recent/RecentPostsHeader";
import RecentDivider from "./Recent/RecentDivider";
import { LiaHashtagSolid } from "react-icons/lia";
import TagsSkeleton from "../Loading/TagsSkeleton";

export default function GlobalTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTags = async () => {
    setLoading(true);
    const query = "*[_type == 'category'] {title,color}";
    const tagslist = await client.fetch(query);
    setTags(tagslist);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchTags();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div className=''>
      <div className='flex justify-start items-center mt-5'>
        <LiaHashtagSolid className='text-3xl' />
        <RecentPostsHeader text={"Tags"} />
      </div>
      <RecentDivider />

      {loading ? (
        <div className='mt-4 flex flex-wrap md:w-2/3 lg:w-4/4 max-w-max gap-2 py-3'>
          {Array.from({ length: 6 }).map((index) => {
            return <TagsSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='mt-4 flex flex-wrap md:w-2/3 lg:w-4/4 max-w-max gap-2 py-3'>
          {tags.map((tag) => {
            const color = (tag?.color || "#873D48").toLowerCase();

            return (
              <Link
                className={`p-1 shadow-md bg-white transition-all hover:scale-110 duration-300`}
                href={`/tags/${tag.title}`}
                key={tag?.color}
              >
                <span style={{ color: `#${color}` }}>#</span> {tag.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
