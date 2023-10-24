import RecentFirstPost from "./RecentFirstPost";
import SectionHeader from "./SectionHeader";
export default function HomeRecentPosts({ post }) {
  return (
    <section className='max-w-6xl mx-auto mt-5'>
      <SectionHeader text={"Recent Articles"} subtext={"View More"} />
      <RecentFirstPost post={post} />
    </section>
  );
}
