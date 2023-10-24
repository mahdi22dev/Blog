"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import SliderSinglePost from "./SliderSinglePost";
const Slider = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div className='w-full h-[50vh] mb-10'>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          effect='cards'
          navigation={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className='mySwiper swiper-slide max-w-6xl'
        >
          {posts.map((post) => {
            return (
              <SwiperSlide className='bg-red-500'>
                {<SliderSinglePost key={post.slug} post={post} />}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
