"use client";
import React from "react";
import amenitiesSlide from "@/data/amenitiesSlides";
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from "next/image";
import Link from "next/link";
const AmenitiesSection = () => {
  return (
    <section className="amenities-area pt-150 pb-150">
      <div className="container">
        <div className="row justify-content-center wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-8">
            <div className="bd-section__title-wrapper text-center">
              <p className="bd-section__subtitle mb-20">book now</p>
              <h2 className="bd-section__title mb-75 mbs-30">
                Welcome To royel palace Hotel
                <br /> Book Your Stay Today.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-amenities-slider-two wow fadeInUp" data-wow-delay=".5s">
        <div className="amenities-slider-two-wrapper">
          <Swiper 
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            loop={true}
            observeParents= {true}
            observer= {true}
            centeredSlides= {false}
            breakpoints={{
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 1.5
                },
                991: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 3
                },
                1400: {
                    slidesPerView: 3
                }
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            navigation={{
                nextEl: '.bd-amenities-slider-two-next',
                prevEl: '.bd-amenities-slider-two-prev'
            }}>
            {amenitiesSlide.length &&
              amenitiesSlide.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="amenities__box">
                    <div className="amenities__img">
                      <Link href={`/room-details/${item.id}`}>
                        <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="image not found" />
                      </Link>
                    </div>
                    <div className="amenities__desc style-2">
                      <h4 className="amenities__title bg-theme-1 px-3">
                        <Link href={`/room-details/${item.id}`}>{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="bd-amenities-slider-two-nav mt-75 mts-30 wow fadeInUp" data-wow-delay=".5s">
        <div className="bd-amenities-slider-two-prev square-nav is-black">
          <i className="fa-light fa-angle-left"></i>
        </div>
        <div className="bd-amenities-slider-two-next square-nav is-black">
          <i className="fa-light fa-angle-right"></i>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
