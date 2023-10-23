import React from "react";
import { client } from "../../../../sanity/lib/client";
import AuthorCard from "@/components/Author/AuthorCard";
import TagsContent from "@/components/Tags/TagsContent";
import Dotted from "@/components/Post/Dotted";

export default async function page({ params }) {
  const authorSlug = params.slug;
  const query = `*[_type == "author" && slug.current == $authorSlug]`;
  const author = await client.fetch(query, { authorSlug });
  return (
    <main className='min-h-screen w-full'>
      <AuthorCard author={author} />
      <Dotted />
      <TagsContent id={author[0]._id} />
    </main>
  );
}
