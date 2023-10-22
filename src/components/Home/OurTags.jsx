import { client } from "../../../sanity/lib/client";
import OurtagsSingle from "./OurtagsSingle";

export default async function OurTags() {
  const query = `*[_type == "category"]  {title,mainImage}`;
  const posts = await client.fetch(query);

  return (
    <section className='max-w-6xl mx-auto flex flex-col items-center p-3 mb-10 '>
      <h2 className='text-2xl md:text-2xl lg:text-3xl text-center  mb-3 font-bold border-b-2 border-primary'>
        Our Tags
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3'>
        {posts.map((post) => {
          return <OurtagsSingle key={post.title} post={post} />;
        })}
      </div>
    </section>
  );
}
