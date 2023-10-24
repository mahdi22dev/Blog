import { useGlobalContext } from "@/context/context";
import RelatedArticlesSingle from "../Post/RelatedArticlesSingle";
export default function FooterLatest() {
  const {} = useGlobalContext();
  return (
    <div className='p-4 mt-3 mx-10 py-10 pt-11 lg:w-auto mb-1 max-w-4xl min-w-[50vw]	'>
      <div className='flex justify-between items-center gap-3'>
        <h2 className='font-bold w-1/4 [font-size:_clamp(14px,2.5vw,25px)]'>
          Related Articles
        </h2>
        <div className='w-3/4 h-[1.5px] bg-primary '></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-4 mt-3 '>
        {footerLatest.map((post) => {
          return <RelatedArticlesSingle key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
}
