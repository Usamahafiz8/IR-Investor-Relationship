"use client";
import React from 'react';
import { Pagination, Autoplay, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroSlideHome2 from '@/data/heroSlideHome-data';
import "swiper/css/bundle";
import Link from 'next/link';
const HeroSectionHome2: React.FC = () => {
  const totalSlides = heroSlideHome2?.length || 0;
  return (
    <section className="bd-hero-area p-relative fix">
      <div className="bd-hero-active">
        <Swiper
          modules={[Pagination, Autoplay, A11y, EffectFade]}
          slidesPerView={1}
          loop={true}
          observeParents={true}
          observer={true}
          autoplay={{
            delay: 8000,
          }}
          effect={"fade"}
          pagination={{
            el: '.bd-hero-pagination',
            clickable: true,
          }}

        >
          {heroSlideHome2.length &&
            heroSlideHome2.map((item,index) => (
              <SwiperSlide key={item.id}>
                <div className="bd-hero-wrap-2 p-relative">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="bd-hero">
                          <div className="bd-hero__bg bd-hero__bg-3" style={{ backgroundImage: `url(${item.img.src})`}}></div>
                          <div className="bd-hero__content bd-hero__content-3 is-white">
                            <div
                              className="bd-hero__subtitle animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".3s"
                            >
                              <span> {item.subTitle} </span>
                            </div>
                            <div
                              className="bd-hero__title-wrap p-relative"
                            >
                              <h1
                                className="bd-hero__title mb-70 animate__animated"
                                data-animation="fadeInUp"
                                data-delay=".5s"
                              >
                                {item.title} <br /> {item.titleBr}
                              </h1>
                            </div>
                            <div
                              className="bd-hero__btn d-inline-flex animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <Link href="/room-one" className="bd-btn">
                                Check Availability
                                <span>
                                  <i className="fa-regular fa-arrow-right-long"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="bd-hero__slider-number d-none d-lg-inline-flex p-absolute">
                          <span className="current">{index + 1}</span>
                          <span className="divider">/</span>
                          <span className="total">{totalSlides}</span>
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
  );
};

export default HeroSectionHome2;
