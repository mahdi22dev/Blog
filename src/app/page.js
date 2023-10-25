import React from "react";
import { client } from "../../sanity/lib/client";
import Featured from "@/components/Home/Featured";
import OurTags from "@/components/Home/OurTags";
import HomeRecentPosts from "@/components/Home/HomeRecentPosts";
import RecentSmallPost from "@/components/Home/RecentSmallPost";
import Link from "next/link";
import Slider from "@/components/Home/Slider";
import SectionHeader from "@/components/Home/SectionHeader";
import Subscribe from "@/components/Subscribe/Subscribe";

export default async function page() {
  const query = `*[_type == "post"] { _id, title, mainImage, categories[]-> { title}, "slug":slug.current, _createdAt ,"authorname": author->name } | order(_createdAt desc) [0..15]`;
  const posts = await client.fetch(query);
  const startIndex = 4;
  const slicedPosts = posts.slice(startIndex);
  const sliderPosts = posts.slice(13);
  return (
    <main className='mx-auto w-full max-w-7xl p-3 min-h-screen'>
      <section className='mx-auto flex flex-col md:flex-row p-3 max-w-6xl gap-1 mb-10 overflow-hidden'>
        <Featured
          post={posts[0]}
          width={"w-[80vw] md:w-[600px]"}
          maxw={"md:max-w-[600px] max-w-[560px]"}
        />
        <Featured
          post={posts[1]}
          width={"w-[80vw] md:w-[460px]"}
          maxw={"max-w-[560px]"}
        />
        <Featured
          post={posts[2]}
          width={"w-[80vw] md:w-[460px]"}
          maxw={"max-w-[560px]"}
        />
      </section>
      <OurTags />
      <SectionHeader text={"Most Viewd "} subtext={"View More"} />
      <Slider posts={sliderPosts} />
      <HomeRecentPosts post={posts[3]} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 max-w-6xl mx-auto mb-10'>
        {slicedPosts.map((post) => {
          return <RecentSmallPost key={post.title} post={post} />;
        })}
      </div>
      <Link href={"/blog"}>
        <button className='mt-3 mb-10 mx-auto btn_animation text-xs'>
          <span>View All Posts</span>
        </button>
      </Link>
      <Subscribe />
    </main>
  );
}
