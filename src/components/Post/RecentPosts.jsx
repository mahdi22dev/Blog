import React from "react";
import RecentDivider from "./RecentDivider";
import RecentSinglePost from "./RecentSinglePost";
import { client } from "../../../sanity/lib/client";

export default async function RecentPosts() {
  let posts = [];
  try {
    const query = `*[_type == "post"] { _id, title, mainImage, categories[]-> { title}, slug, _createdAt ,"authorname": author->name } | order(_createdAt desc) [0..4]`;
    posts = await client.fetch(query);
    console.log(posts);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  return (
    <aside className='w-1/4 mt-3 hidden md:block h-full mr-3 sticky top-3'>
      <h3 className='font-bold text-2xl'>Recent Articles</h3>
      <RecentDivider />
      <div className='flex justify-start items-center flex-col gap-3 mt-3'>
        {posts.map((post) => {
          return <RecentSinglePost key={post._id} post={post} />;
        })}
      </div>
    </aside>
  );
}
