import React from "react";

const Skeleton = () => {
  return (
    <div className='relative m-2 w-[90%] min-[1440px]:w-96 bg-white h-96 animate-pulse mx-auto'>
      <div className='animate-pulse flex space-x-4 p-2'>
        <div className='h-8 w-16 bg-slate-200 rounded absolute top-3 left-3'></div>
        <div className='h-2 w-3/4 mx-auto bg-slate-200 rounded absolute bottom-10 left-8'></div>
        <div className='w-3/4 mx-auto absolute bottom-2 left-8 flex'>
          <div className='h-2 w-1/4 bg-slate-200 '></div>
          <div>-</div>
          <div className='h-2 w-2/4 bg-slate-200 '></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
