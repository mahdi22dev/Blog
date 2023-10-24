"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import {
  EffectCreative,
  Mousewheel,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import SliderSinglePost from "./SliderSinglePost";
const Slider = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div className='w-full h-[50vh] mb-10'>
        <Swiper
          direction={"horizontal"}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[
            Mousewheel,
            Navigation,
            Pagination,
            EffectCreative,
            Autoplay,
          ]}
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
