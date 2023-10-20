import React from "react";
import RecentDivider from "./RecentDivider";
import RecentSinglePost from "./RecentSinglePost";
import { client } from "../../../sanity/lib/client";
import GlobalTags from "./GlobalTags";
import RecentPostsHeader from "./RecentPostsHeader";

export default async function RecentPosts() {
  let posts = [];
  try {
    const query = `*[_type == "post"] { _id, title, mainImage, categories[]-> {title}, slug, _createdAt ,"authorname": author->name } | order(_createdAt desc) [0..4]`;
    posts = await client.fetch(query);
  } catch (error) {
    throw new Error(error);
  }
  return (
    <aside className='w-1/4 mt-3 hidden lg:block h-full mr-3 sticky top-3'>
      <RecentPostsHeader text={"Recent Articles"} />
      <RecentDivider />
      <div className='flex justify-start items-center flex-col gap-4 mt-8'>
        {posts.map((post) => {
          return <RecentSinglePost key={post._id} post={post} />;
        })}
      </div>
      <GlobalTags />
    </aside>
  );
}
