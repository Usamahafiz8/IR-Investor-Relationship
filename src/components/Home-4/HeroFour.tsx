"use client";
import React from "react";
import { Navigation, Pagination, A11y, Autoplay,EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import heroFourSD from "@/data/homeFourSlide-data";
import Link from "next/link";
const HeroFour = () => {
  return (
    <>
      <section className="bd-hero-area p-relative fix">
        <div className="bd-hero-active">
            <Swiper
           modules={[Pagination, Navigation, Autoplay, A11y, EffectFade]}
           slidesPerView={1}
           loop={true}
           observeParents={true}
           observer={true}
           autoplay={{
             delay: 8000,
           }}
           effect={"fade"}
              navigation={{
                nextEl: ".bd-hero-next",
                prevEl: ".bd-hero-prev",
              }}
              pagination={{
                el: ".bd-hero-pagination",
                dynamicBullets: false,
                clickable: true,
              }}
            >
              {heroFourSD?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="bd-hero-wrap-2 p-relative">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="bd-hero">
                              <div
                                className="bd-hero__bg bd-hero__bg-2"
                                style={{
                                  backgroundImage: `url(${item.img.src})`,
                                }}
                              ></div>
                              <div className="bd-hero__content bd-hero__content-2 text-center is-white">
                                <div
                                  className="bd-hero__subtitle animate__animated"
                                  data-animation="fadeInUp"
                                  data-delay=".3s"
                                >
                                  <span> {item.subTitle} </span>
                                </div>
                                <div className="bd-hero__title-wrap p-relative">
                                  <h1
                                    className="bd-hero__title mb-70 animate__animated"
                                    data-animation="fadeInUp"
                                    data-delay=".5s"
                                  >
                                    {item.title} <br />
                                    {item.titleBr}
                                  </h1>
                                  <div className="bd-hero__line d-none d-md-block">
                                    <span
                                      className="bd-hero__line-1 animate__animated"
                                      data-animation="fadeInUp"
                                      data-delay=".5s"
                                    ></span>
                                    <span
                                      className="bd-hero__line-2 animate__animated"
                                      data-animation="fadeInUp"
                                      data-delay=".5s"
                                    ></span>
                                  </div>
                                </div>
                                <div
                                  className="bd-hero__btn d-inline-flex animate__animated"
                                  data-animation="fadeInUp"
                                  data-delay=".7s"
                                >
                                  <Link href={`/login`} className="bd-btn">
                                    book now
                                    <span>
                                      <i className="fa-regular fa-arrow-right-long"></i>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="bd-hero__slider-number d-none p-absolute">
                              <span className="current">3</span>
                              <span className="divider">/</span>
                              <span className="total">3</span>
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
              <div className="bd-hero__slider-nav p-relative d-none d-sm-block">
                <div className="bd-hero-pagination bd-swiper-pagination ryl-pagaination-buttom"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFour;
