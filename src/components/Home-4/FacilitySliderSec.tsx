"use client";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import slideImgOne from "../../../public/assets/img/shape/facility-slide-1.png";
import slideImgTwo from "../../../public/assets/img/shape/facility-slide-2.png";
import Image from "next/image";
import SlideData from "@/data/facilily-home-4-slide-data";
import Link from "next/link";

const FacilitySliderSec = () => {
  return (
    <>
      <section className="bd-facility-slider-area pt-150 pb-75 p-relative fix">
        <div className="bd-facility-side__shape-wrap">
          <div className="bd-facility-side__shape-1">
            <Image src={slideImgOne} alt="image not found" />
          </div>
          <div className="bd-facility-side__shape-2">
            <Image src={slideImgTwo} alt="image not found" />
          </div>
        </div>
        <div className="bd-facility-slider__wrap p-relative">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-facility-slider__nav-wrap p-relative">
                  <div className="bd-facility-slider__nav">
                    <div className="bd-facility-slider__paginaton"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bd-facility-active">
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              loop={true}
              observeParents={true}
              observer={true}
              pagination={{
                el: ".bd-facility-slider__paginaton",
                type: "fraction",
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
              {SlideData?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="container">
                      <div
                        className="row align-items-center wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="col-lg-6">
                          <div className="bd-facility-slider__thumb-wrap mb-60">
                            <div className="bd-facility-slider__thumb">
                              <Image
                                src={item.imgOne}
                                alt="image not found"
                                style={{ width: "100%", height: "100%" }}
                              />
                            </div>
                            <div className="bd-facility-slider__thumb-2 text-end">
                              <Image
                                src={item.imgTwo}
                                alt="image not found"
                                style={{ width: "100%", height: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="bd-facility-2__content">
                            <div className="bd-section__title-wrapper">
                              <span className="bd-section__subtitle mb-20">
                                {item.title}
                              </span>
                              <h2 className="bd-section__title bd-facility-title mb-30">
                                <Link href="/service-details">
                                  {item.sectionTitle}
                                </Link>
                              </h2>
                            </div>
                            <p>
                              <span>{item.sectionsubTitle}</span>
                            </p>
                            <p>{item.details}</p>
                            <div className="bd-facility-2__list mb-65">
                              <ul>
                                <li>
                                  <i className="flaticon-check-circle"></i>
                                  <span>swimming pool</span>
                                </li>
                                <li>
                                  <i className="flaticon-check-circle"></i>
                                  <span>Entertaiment</span>
                                </li>
                                <li>
                                  <i className="flaticon-check-circle"></i>
                                  <span>party Club</span>
                                </li>
                                <li>
                                  <i className="flaticon-check-circle"></i>
                                  <span>Health Checkup</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bd-facility-slider__btn">
                              <Link
                                href="/service-details"
                                className="bd-btn-2"
                              >
                                read more
                                <i className="fa-regular fa-arrow-right-long"></i>
                              </Link>
                              <div className="bd-facility-slider__btn-shape d-none d-lg-block">
                                <Image
                                  src={item.imgThree}
                                  alt="image not found"
                                  style={{ width: "100%", height: "100%" }}
                                />
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
        </div>
      </section>
    </>
  );
};

export default FacilitySliderSec;
