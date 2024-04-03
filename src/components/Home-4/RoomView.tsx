"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import thumb1 from "../../../public/assets/img/room/room-view-1.jpg";
import thumb2 from "../../../public/assets/img/room/room-view-2.jpg";
import thumb3 from "../../../public/assets/img/room/room-view-3.jpg";
import thumb4 from "../../../public/assets/img/room/room-view-4.jpg";
import thumb5 from "../../../public/assets/img/room/room-view-5.jpg";
import thumb6 from "../../../public/assets/img/room/room-view-6.jpg";

const RoomView = () => {
  const roomviewTab = [
    "Queen Deluxe",
    "Junior Suites",
    "Master Suite",
    "Suites",
    "Deluxe",
    "Superior",
  ];

  const sliderData = [
    {
      id: 1,
      price: 399,
      time: "NIGHT",
      img: thumb1,
    },
    {
      id: 2,
      price: 185,
      time: "NIGHT",
      img: thumb2,
    },
    {
      id: 3,
      price: 256,
      time: "NIGHT",
      img: thumb3,
    },
    {
      id: 4,
      price: 399,
      time: "NIGHT",
      img: thumb4,
    },
    {
      id: 5,
      price: 357,
      time: "NIGHT",
      img: thumb5,
    },
    {
      id: 6,
      price: 385,
      time: "NIGHT",
      img: thumb6,
    },
  ];

  const totalSlides = sliderData?.length || 0;

  return (
    <>
      <div
        className="bd-roomview-area-2 p-relative wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div className=" bd-roomview-active paralax-bg">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            loop={true}
            observeParents={true}
            observer={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".bd-roomview-next",
              prevEl: ".bd-roomview-prev",
            }}
            pagination={{
              el: ".bd-roomview__pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${roomviewTab[index]}</span>`;
              },
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
          >
            {sliderData?.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div>
                  <div className="bd-roomview__slider-wrap p-relative">
                    <div
                      className="bd-roomview__bg-2"
                      style={{ backgroundImage: `url(${item.img.src})` }}
                    ></div>
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="bd-roomview__content-2">
                            <div className="bd-roomview__price-wrap d-flex justify-content-center">
                              <div className="bd-roomview__price mt-65">
                                <p>
                                  <span>${item.price} </span>/<br />
                                  {item.time}
                                </p>
                              </div>
                            </div>
                            <div className="bd-roomview__slider-number d-inline-flex p-absolute">
                              <span className="current">{index + 1}</span>
                              <span className="divider">/</span>
                              <span className="total">{totalSlides}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bd-roomview__pagination-wrap ryl-review-bottom">
                <div
                  className="bd-roomview__pagination wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-roomview__line">
          <span className="bd-roomview__line-1"></span>
          <span className="bd-roomview__line-2"></span>
        </div>
        <div className="bd-swiper-navigation">
          <button className="bd-roomview-prev">
            <i className="fa-regular fa-arrow-left"></i>
          </button>
          <button className="bd-roomview-next">
            <i className="fa-regular fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomView;
