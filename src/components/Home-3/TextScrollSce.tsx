"use client";
import Image from "next/image";
import React from "react";
import startImg from "../../../public/assets/img/icon/star.png";
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Link from "next/link";

const TextScrollSce = () => {
  const scrollTextdata = [
    {
      id: 1,
      link: "/room-one",
      thumb: startImg,
      title: "Relax in our Hotel Resort",
    },
    {
      id: 2,
      link: "/room-one",
      thumb: startImg,
      title: "Luxury rooms",
    },
    {
      id: 3,
      link: "/room-one",
      thumb: startImg,
      title: "Relax in our Hotel Resort",
    },
    {
      id: 4,
      link: "/room-one",
      thumb: startImg,
      title: "Explore & experience",
    },
  ];

  return (
    <>
      <section className="bd-text__scroll-area  mb-150 fix">
        <div
          className="text__scroll wow fadeInUp"
          data-wow-delay=".5s"
          dir="ltr"
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
              speed={10000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
            >
              {scrollTextdata?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="bd-text-scroll-line">
                      <h2 className="bd-text-scroll-line__heading">
                        <Link href={`/${item.link}`}> {item.title} </Link>
                      </h2>
                      <Image
                        src={item.thumb}
                        style={{ width: "100%", height: "100%" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>

        <div
          dir="rtl"
          className=" text__scroll wow fadeInUp"
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
              {scrollTextdata?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="bd-text-scroll-line">
                      <h2 className="bd-text-scroll-line__heading">
                        <Link href={`/${item.link}`}> {item.title} </Link>
                      </h2>
                      <Image
                        src={item.thumb}
                        style={{ width: "100%", height: "100%" }}
                        alt="image not found"
                      />
                    </div>
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

export default TextScrollSce;
