"use client";
import React from "react";
import startPic from "../../../public/assets/img/icon/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
const TextScroll = () => {
  const scrollTexts = [
    {
      id: 1,
      title: "Relax in our Hotel Resort",
      img: startPic,
    },
    {
      id: 2,
      title: "Luxury rooms",
      img: startPic,
    },
    {
      id: 3,
      title: " rooms",
      img: startPic,
    },
    {
      id: 4,
      title: "Luxury rooms",
      img: startPic,
    },
    {
      id: 5,
      title: "Luxury rooms",
      img: startPic,
    },
    {
      id: 6,
      title: " rooms",
      img: startPic,
    },
  ];
  return (
    <>
      <section className="bd-text__scroll-area pb-55 pt-150 theme-bg-2 fix mpb-75">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-section__title-wrapper text-center">
                <p className="bd-section__subtitle mb-5">Rooms & Suites</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text__scroll wow fadeInUp"
          data-wow-delay=".5s"
        >
          <div className=" bd-text-scroll-wrapper">
            <Swiper
              modules={[Scrollbar, A11y, Autoplay]}
              loop={true}
              freeMode={true}
              slidesPerView="auto"
              allowTouchMove={false}
              centeredSlides={false}
              spaceBetween={30}
              speed={15000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
            >
              {scrollTexts?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bd-text-scroll-line">
                    <h2 className="bd-text-scroll-line__heading">
                      <Link href="/room-one"> {item.title} </Link>
                    </h2>
                    <Image src={item.img} alt="image not found" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextScroll;
