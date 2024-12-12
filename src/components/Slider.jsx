import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider({ images }) {
    console.log(images)
  return (
    <>
      <section className="wrapper-slider z-50 ">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={3}
            slidesPerView={"auto"}
            spaceBetween={40}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".forward",
              prevEl: ".backward",
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {images?.map((img,i) => (
              <SwiperSlide>
                <img src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </section>
    </>
  );
}
{
  /*  */
}
