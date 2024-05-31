"use client";
import Image from "next/image";
import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import blogs from "@/data/blogs-letest-news";
import Link from "next/link";
const CustomSwiper = ({blog}:any) => {
  return (
    <>
      <section>
        <div className="container">

          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-blog-2-active">
             
             
                <Swiper
                  modules={[Navigation, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  loop={true}
                  observeParents={true}
                  observer={true}
                  breakpoints={{
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  navigation={{
                    nextEl: ".bd-blog-2-next",
                    prevEl: ".bd-blog-2-prev",
                  }}
                >
                  {blog.length &&
                    blog.slice(0, 6).map((item:any) => (
                      <SwiperSlide key={item.id}>
                        <div>
                          <div className="bd-blog-4 d-flex align-items-end bg-gray-300">
                            <div className="bd-blog-4__thumb">
                              {/* <Image
                                src={item.img}
                                style={{ width: "100%", height: "100%" }}
                                alt="image not found"
                              /> */}
                            </div>
                            <div className="bd-blog-4__content">
                              <div className="bd-blog-4__meta">
                                <Link href={`/blog-details/${item.id}`}>
                                  {item.date}
                                  <br />
                                  {item.month}
                                </Link>
                              </div>
                              <h4 className="bd-blog-4__title">
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
            <div
              className="bd-blog-2-nav mt-75 mts-30 wow royal-custome-margin fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="bd-blog-2-prev square-nav is-black">
                <i className="fa-light fa-angle-left"></i>
              </div>
              <div className="bd-blog-2-next square-nav is-black">
                <i className="fa-light fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomSwiper;
