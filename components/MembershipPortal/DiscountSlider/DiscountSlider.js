import React,  from "react";
import { DiscountCard } from "../DiscountCard/DiscountCard";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation,  } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

export const DiscountSlider = ({ discounts }) => {
  const onDisplayDiscounts = discounts.map((discount, index) => (
    <SwiperSlide key={index}>
      <DiscountCard discount={discount} index={index} />
    </SwiperSlide>
  ));

  return (

    <Swiper
      navigation={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      speed={800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        2560: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      }}
    >
      {onDisplayDiscounts}
    </Swiper>
  );
};
