import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/utils/sanity-utils";
import Profile from "@/components/Post/Author/Profile";
import RecentPosts from "@/components/Post/Recent/RecentPosts";
import Tags from "@/components/Post/Tags";
import Dotted from "@/components/Post/Dotted";
import Share from "@/components/Post/Share";
import NavigateToPosts from "@/components/Post/NavigateToPosts";
import AuthorInfo from "@/components/Post/Author/AuthorInfo";
import RelatedArticles from "@/components/Post/Recent/RelatedArticles";
import ScrollAnimation from "@/components/Post/ScrollAnimation";
import Subscribe from "@/components/Subscribe/Subscribe";
import Comments from "@/components/comments/Comments";

export const revalidate = 604800; // revalidate the data every 10 min
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const query = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
  body,_createdAt,
    author-> {
     image,
     name,
     slug
    }
  }
`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.title,
    openGraph: {
      images: [urlFor(post.mainImage).width(250).width(250).url()],
    },
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const query = `
  *[_type == "post"]{"slug": slug.current}
`;
  const posts = await client.fetch(query);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Home({ params }) {
  const slug = params.slug;
  let post = {};
  try {
    const query = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    categories[]-> {title},
    body,_createdAt,
    author-> {
     image,
     name,
     slug,
     bio
    }
  }
`;
    post = await client.fetch(query, { slug });
    if (!post) {
      return notFound();
    }
  } catch (error) {
    throw new Error(error);
  }

  const imageSrc = urlFor(post.mainImage).url();

  return (
    <>
      <main className="text-black mx-auto w-full flex flex-col lg:flex-row max-w-[85rem] relative">
        <div>
          <ScrollAnimation />
          <article className="mt-3 mx-10 lg:w-auto mb-10 max-w-4xl shadow-md min-w-[50vw]	bg-white">
            <div className="relative h-[60vh] mb-5 block mx-auto">
              <Image
                className=" object-cover saturate-150"
                src={imageSrc}
                alt={post.mainImage.alt}
                fill
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 w-[99%] h-[99%] mx-auto my-auto border-white border-2"></div>
            </div>
            <div class="prose md:prose-lg prose-a:text-primary max-w-4xl mx-auto p-10 pt-1">
              <Profile post={post} />
              <h1 className="text-4xl md:text-6xl font-extrabold text-text">
                {post.title}
              </h1>
              <PortableText value={post.body} />
              {/* small divivder */}
              <div className="w-14 h-1 bg-primary mb-3"></div>
              <Tags tags={post?.categories[0]?.title} />
              <Dotted />
              <Share title={post.title} slug={slug} />
              <Dotted />
              <NavigateToPosts date={post._createdAt} />
            </div>
          </article>
          <AuthorInfo info={post?.author} />
          <Comments slug={slug} post={post} />
          <RelatedArticles />
          <Subscribe />
        </div>
        <RecentPosts />
      </main>
    </>
  );
}
