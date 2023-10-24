"use client";
import { useGlobalContext } from "@/context/context";
import RelatedArticlesSingle from "../Post/RelatedArticlesSingle";
export default function FooterLatest() {
  const { footerLatest, loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div className='lg:w-auto mb-1 max-w-4xl min-w-full'>
          <div className='grid grid-cols-1 py-2 gap-4 mt-3 '>
            {footerLatest.map((post) => {
              return <RelatedArticlesSingle key={post.slug} post={post} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
