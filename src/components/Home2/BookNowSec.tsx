"use client";
import Image from "next/image";
import React from "react";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import amenitiesSlide from "@/data/amenitiesSlides";
import Link from "next/link";
const BookNowSec = () => {
  return (
    <>
      <section className="amenities-area pt-150 pb-150">
        <div className="container">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            <div className="col-lg-8">
              <div className="bd-section__title-wrapper text-center">
                <p className="bd-section__subtitle mb-20">book now</p>
                <h2 className=" bd-section__title mb-75 mbs-30">
                  Welcome To royel palace Hotel
                  <br /> Book Your Stay Today.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="bd-amenities-slider wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="amenities-slider-wrapper">
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                loop={false}
                observeParents={true}
                observer={true}
                centeredSlides={false}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2.5,
                  },
                  1700: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{
                  nextEl: ".bd-amenities-slider-next",
                  prevEl: ".bd-amenities-slider-prev",
                }}
              >
                {amenitiesSlide.length &&
                  amenitiesSlide.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div>
                        <div className="amenities__box">
                          <div className="amenities__img">
                            <Link href={`/room-details/${item.id}`}>
                              <Image
                                src={item.img}
                                style={{ width: "100%", height: "auto" }}
                                alt="image not found"
                              />
                            </Link>
                          </div>
                          <div className="amenities__desc">
                            <h4 className="amenities__title">
                              <Link href={`/room-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h4>
                            <p className="amenities__meta-desc">
                              {item.description}
                            </p>
                            <div className="amenities__btn mt-35">
                              <Link href={`/room-details/${item.id}`} className="bd-btn-2">
                                See Details
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div
            className="bd-amenities-slider-nav mt-50 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="bd-amenities-slider-prev square-nav">
              <i className="fa-light fa-angle-left"></i>
            </div>
            <div className="bd-amenities-slider-next square-nav">
              <i className="fa-light fa-angle-right"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowSec;
