"use client";
import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import blogs from "@/data/blogs-letest-news";
import Image from "next/image";
import Link from "next/link";
const LatestNewsSec = () => {
  return (
    <>
      <section className="bd-blog-area pt-150 pb-150">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-md-8">
              <div className="bd-section__title-wrapper ">
                <p className="bd-section__subtitle mb-20">News & Blog</p>
                <h2 className=" bd-section__title mb-55 mmb-10">
                  Royel latest news
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bd-blog__btn mb-55">
                <Link href="/blog-classic" className="bd-btn-2">
                  View all blog
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-blog-2-active">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  loop={true}
                  observeParents={true}
                  observer={true}
                  centeredSlides={false}
                  breakpoints={{
                    576: {
                      slidesPerView: 1,
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
                  }}
                  navigation={{
                    nextEl: ".bd-blog-2-next",
                    prevEl: ".bd-blog-2-prev",
                  }}
                >
                  {blogs?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div>
                        <div className="bd-blog-2 d-flex align-items-end">
                          <div className="bd-blog-2__thumb">
                            <Image src={item.img} alt="image not found" />
                          </div>
                          <div className="bd-blog-2__content">
                            <div className="bd-blog-2__meta">
                              <Link href={`/blog-details/${item.id}`}>
                                {item.date}
                                <br />
                                {item.month}
                              </Link>
                            </div>
                            <h4 className="bd-blog-2__title">
                              <Link href={`/blog-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h4>
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

export default LatestNewsSec;
