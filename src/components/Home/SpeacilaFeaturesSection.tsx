"use client";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Features from "@/data/speacialFeaturesSlide";
import Link from "next/link";

type classType = {
  clssOverflow: string;
};

const SpeacilaFeaturesSection = ({ clssOverflow }: classType) => {
  return (
    <>
      <section className="bd-service-area fix pt-135 pb-150">
        <div className="container">
          <div
            className="row align-items-end wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-xl-8 col-lg-8">
              <div className="bd-section__title-wrapper">
                <p className="bd-section__subtitle mb-20">
                  special features & facilities
                </p>
                <h2 className="bd-section__title mb-55  mmb-30">
                  Explore Special Services And Facilities List
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div
                className={`bd-service__pagination-wrap ryl-pagination-end  mb-25`}
              >
                <div
                  className={`bd-service-pagination bd-swiper-pagination ryl-pagination`}
                ></div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className={`bd-service-active ${clssOverflow}`}>
                <Swiper
                  modules={[Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  loop={true}
                  observeParents={true}
                  observer={true}
                  centeredSlides={false}
                  slidesPerGroup={2}
                  breakpoints={{
                    576: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },

                    1200: {
                      slidesPerView: 3,
                    },

                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    el: ".bd-service-pagination",
                    clickable: true,
                  }}
                >
                  {Features.length &&
                    Features.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div>
                          <div className="bd-service">
                            <div
                              className="bd-service__bg"
                              style={{
                                backgroundImage: `url(${item.img.src})`,
                              }}
                            ></div>
                            <div className="bd-service__content">
                              <h4 className="bd-service__title">
                                <Link href={`/service-details/${item.id}`}>
                                  {" "}
                                  {item.title}{" "}
                                </Link>
                              </h4>
                              <span className="bd-service__price">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeacilaFeaturesSection;
