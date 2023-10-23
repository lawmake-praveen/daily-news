import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperForFour = (props) => {
  const breakPoints = {
    200: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  return (
    props?.data?.length > 0 && (
      <div className="swiper-for-4">
        <>
          <h1 className="heading">{props.heading}</h1>
          <Swiper
            className="mySwiper"
            spaceBetween={20}
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={4}
            autoplay={{ delay: 4000 }}
            loop={true}
            navigation={true}
            breakpoints={breakPoints}
          >
            {props?.data?.map((article, index) => {
              return (
                <SwiperSlide className="my-slide" key={index}>
                  <Link
                    className="link-to-article"
                    to={`/details/${article?.title}`}
                    state={{ article }}
                  >
                    <img src={article?.urlToImage} />
                    <div className="content">
                      <h2 className="news-heading">{article?.title}</h2>
                      <p className="news-content">{article?.description}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    )
  );
};

export default SwiperForFour;
