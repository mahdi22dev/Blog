import React from "react";
import TagsSkeleton from "../Loading/TagsSkeleton";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";

export default function FooterTags() {
  const { footerTags, loading } = useGlobalContext();
  return (
    <div className=''>
      {loading ? (
        <div className='mt-4 flex flex-wrap md:w-2/3 lg:w-4/4 max-w-max gap-2 py-3'>
          {Array.from({ length: 6 }).map((index) => {
            return <TagsSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className='mt-4 flex flex-wrap md:w-2/3 lg:w-4/4 max-w-max gap-2 py-3'>
          {footerTags.map((tag) => {
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
