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
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1500: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        2560: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {onDisplayDiscounts}
    </Swiper>
  );
};
