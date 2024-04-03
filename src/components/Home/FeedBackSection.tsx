"use client";
import Image from "next/image";
import React from "react";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import backgorund from "../../../public/assets/img/bg/award.jpg";
import feedBacks from "@/data/feedbackSlideData";

const FeedBackSection = () => {
  return (
    <>
      <section className="bd-testimonial-4__area pt-150 pb-150 p-relative">
        <div
          className="bd-testimonial-4__bg"
          style={{ backgroundImage: `url(${backgorund.src})` }}
        ></div>
        <div className="container">
          <div
            className="row align-items-end wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-xl-12 col-lg-12">
              <div className="bd-section__title-wrapper text-center is-white">
                <p className="bd-section__subtitle mb-20">Feedback</p>
                <h2 className=" bd-section__title mb-55 mmb-30">
                  What our customers are saying
                </h2>
              </div>
            </div>
          </div>
          <div
            className="bd-testimonial-4-active wow fadeInUp"
            data-wow-delay=".5s"
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={false}
              slidesPerGroup={2}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },

                1200: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              pagination={{
                el: ".bd-testimonial-4-pagination",
                clickable: true,
              }}
            >
              {feedBacks.length &&
                feedBacks.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div className="bd-testimonial-4">
                        <div className="bd-testimonial-4__content">
                          <div className="bd-testimonial-4__quote">
                            <i className="flaticon-quote"></i>
                          </div>
                          <p>{item.title}</p>
                          <div className="bd-testimonial-4__rating d-flex justify-content-center">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="bd-testimonial-4__quote-2">
                            <i className="flaticon-quote"></i>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="bd-testimonial-4__thumb">
                              <Image
                                src={item.img}
                                style={{ width: "100%", height: "100%" }}
                                alt="image not found"
                              />
                            </div>
                            <div className="bd-testimonial-4__client">
                              <h5 className="bd-testimonial-4__client-name">
                                {item.claintName}
                              </h5>
                              <span className="bd-testimonial-4__client-position">
                                {item.address}
                              </span>
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

export default FeedBackSection;
