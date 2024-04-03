"use client";
import React from "react";
import thumb1 from "../../../public/assets/img/testimonials/user-2.jpg";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import testimonials from "@/data/testimonal-home-4-data";
const Testimonial = () => {
  return (
    <>
      <section className="bd-testimonial-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="bd-section__title-wrapper text-center">
                <p className="bd-section__subtitle mb-20">
                  awesome review from guests
                </p>
                <h2 className="bd-section__title mb-55 ">
                  royel guest feedback
                </h2>
              </div>
            </div>
          </div>
          <div className="bd-testimonial-3 pb-150">
            <div className="row">
              <div className="col-lg-4">
                <div className="bd-testimonial-3__thumb">
                  <Image
                    src={thumb1}
                    alt="image not found"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="bd-testimonial-3__slider p-relative">
                  <div className="bd-testimonial-active">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={0}
                      loop={true}
                      observeParents={true}
                      observer={true}
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
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                      }}
                      pagination={{
                        el: ".bd-testimonial-pagination",
                        clickable: true,
                      }}
                    >
                      {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div>
                            <div className="bd-testimonial-3__content">
                              <h4 className="bd-testimonial-3__title mb-20">
                                {item.subTitle}
                              </h4>
                              <p> {item.details} </p>
                              <h5 className="bd-testimonial-3__client mt-35 mb-45">
                                {item.title}
                              </h5>
                              <div className="bd-testimonial-2__rating d-flex mb-10">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="bd-testimonial-3__pagination bd-testimonial-pagination bd-swiper-pagination ryl-pagination-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
