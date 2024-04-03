"use client";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import "swiper/css/bundle";
import offerData from "@/data/offerSlideData";
import Link from "next/link";
const OffersSection = () => {
  return (
    <>
      <section className="bd-offer-area pt-150 pb-150 theme-bg-2">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-md-8">
              <div className="bd-section__title-wrapper">
                <p className="bd-section__subtitle mb-20">Offers</p>
                <h2 className="bd-section__title mb-55  mmb-30">
                  The royel Limited Period Offer
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bd-offer-slider-nav mb-50 d-flex justify-content-md-end">
                <div className="bd-offer-slider-prev square-nav">
                  <i className="fa-light fa-angle-left"></i>
                </div>
                <div className="bd-offer-slider-next square-nav">
                  <i className="fa-light fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className=" bd-offer-active mmt-20">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  loop={false}
                  observeParents={true}
                  observer={true}
                  centeredSlides={false}
                  slidesPerGroup={2}
                  breakpoints={{
                    576: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  navigation={{
                    nextEl: ".bd-offer-slider-next",
                    prevEl: ".bd-offer-slider-prev",
                  }}
                  pagination={{
                    el: ".bd-offer-pagination",
                    clickable: true,
                  }}
                >
                  {offerData.length &&
                    offerData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div>
                          <div className="bd-offer">
                            <div className="bd-offer__thumb p-relative">
                              <Image
                                src={item.img}
                                style={{ width: "100%", height: "100%" }}
                                alt="image not found"
                              />
                              <div className="bd-offer__meta">
                                <span> {item.offer} </span>
                              </div>
                              <div className="bd-offer__content-visble">
                                <h4 className="bd-offer__title-2">
                                  <Link href={`/offer-details/${item.id}`}>
                                    {item.tags}
                                  </Link>
                                </h4>
                              </div>
                              <div className="bd-offer__content">
                                <h4 className="bd-offer__title">
                                  <Link href={`/offer-details/${item.id}`}>
                                    {item.tags}
                                  </Link>
                                </h4>
                                <p>
                                  The Gage Hotel offers unforgettable food and
                                  drink options. A memorable stay with delicious
                                </p>
                                <div className="bd-offer__btn">
                                  <Link href={`/booking-form/${item.id}`}>
                                    Book Now
                                    <i className="fa-regular fa-angle-right"></i>
                                  </Link>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersSection;
