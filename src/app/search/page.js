"use client";

import SearchResults from "@/components/Search/SearchResults";
import { useSearchParams } from "next/navigation";
import { LiaSearchSolid } from "react-icons/lia";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  return (
    <main className='w-full min-h-screen relative max-w-7xl mx-auto'>
      <p className='text-start ml-7 my-10 text-2xl flex gap-2 items-center justify-start'>
        <LiaSearchSolid /> Search Results for:
        <span className='text-primary font-semibold flex gap-2'>{search}</span>
      </p>
      <SearchResults />
    </main>
  );
}
