"use client";
import React from "react";
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./home.css";
import 'swiper/css/bundle';
import headerBg from "../../../public/assets/img/banner/HomePageBanner.jpg";

const content = [
  { heading: "HTCR: HeartCore Announces Sale of $9.0 Million in Go IPO Client Warrants.", date: "April 02, 2024", textColor: "white" },
  { heading: "SLRX Pursues Important Goal", date: "April 02, 2024", textColor: "white" },
  { heading: "MIRA Making Strides Toward Breakthrough Treatment", date: "April 02, 2024", textColor: "white" }
];

const StaticBanner = () => {
  return (
    <section className="home-banner">
      <div className="container" >
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{ delay: 3000 }}
          style={{ textAlign: "center", }}

          loop={true}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <div style={{
                display: 'flex', justifyContent: "center"
              }}>
                <div className="text-center" style={{ color: item.textColor, width: "90%", marginTop: '16px' }}>
                  <i className="block text-lg md:text-2xl font-semibold">{item.heading}</i>
                  <br />
                  <b className="block text-md md:text-lg">{item.date}</b>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StaticBanner;
