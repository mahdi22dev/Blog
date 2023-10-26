"use client";
import { DiscussionEmbed } from "disqus-react";

export default function Comments({ post, slug }) {
  const disqusShortname = "daily-life";
  const disqusConfig = {
    url: `http://localhost:3000/${slug}`,
    identifier: post._id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div className='p-4 mt-3 mx-10 py-20 pt-11 lg:w-auto mb-10 max-w-4xl shadow-md min-w-[50vw] bg-white'>
      <p className='text-2xl text-center w-full font-bold'>Comments</p>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
}
