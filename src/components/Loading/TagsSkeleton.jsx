import React from "react";

export default function TagsSkeleton() {
  return (
    <div className='w-14 h-9 p-1 shadow-md bg-white animate-pulse flex items-center justify-center gap-1'>
      <p className='text-slate-200 rounded-full'>#</p>
      <p className='bg-slate-200 h-2 w-10 rounded-full'></p>
    </div>
  );
}
