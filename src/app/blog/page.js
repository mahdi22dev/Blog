import BlogContent from "@/components/Blog/BlogContent";
export const revalidate = 0;
export default function page() {
  return (
    <main className='w-full min-h-screen'>
      <BlogContent />
    </main>
  );
}
