"use client";

import SearchResults from "@/components/Search/SearchResults";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  return (
    <main className='w-full min-h-screen relative max-w-7xl mx-auto'>
      <p className='text-start ml-7 my-10 text-2xl'>
        Search Results for:{" "}
        <span className='text-primary font-semibold'>{search} 'add icon'</span>
      </p>
      <SearchResults />
    </main>
  );
}
