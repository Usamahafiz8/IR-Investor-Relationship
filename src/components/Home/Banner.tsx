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

const HomeBanner = ({ reports }: any) => {

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
          {reports?.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div style={{
                display: 'flex', justifyContent: "center"
              }}>
                <div style={{ color: 'white', width: "75%", marginTop: '16px', textAlign: 'center' }}>
                  <i className="block text-lg md:text-2xl font-semibold">
                    {item?.attributes?.website?.data?.attributes?.ticker} : &nbsp;
                    {item?.attributes?.title}
                  </i>
                  <br />
                  <span className="block text-sm md:text-lg  ">
                    {new Date(item?.attributes?.publishedAt).toLocaleDateString()}

                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
