"use client";
import React from "react";
import "swiper/css/bundle";
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import blogs from "@/data/blogs-letest-news";
import Image from "next/image";
import Link from "next/link";
const RoyalLatestNewsTwo = () => {
  return (
    <>
      <section className="bd-blog-area pt-150 pb-150">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-section__title-wrapper text-center">
                <h2 className="bd-section__title mb-55">Royel latest news</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className=" bd-blog-active bd-blog-wrap">
                <Swiper
                  modules={[Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
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
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                >
                  {blogs.slice(4, 9).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bd-blog p-relative">
                          <div className="bd-blog__thumb">
                            <Image src={item.img} alt="blog image" />
                          </div>
                          <div className="bd-blog__content-wrap">
                            <div className="bd-blog__content">
                              <div className="bd-blog__content-cat-wrap">
                                <div className="bd-blog__content-cat">
                                  <Link href="/blog">
                                    <i className="fa-solid fa-tag"></i>
                                    {item.tag}
                                  </Link>
                                </div>
                                <div className="bd-blog__meta">
                                  <Link href="/blog">
                                    <span>{item.date}</span>
                                    <span>{item.month}</span>
                                  </Link>
                                </div>
                              </div>
                              <h4 className="bd-blog__title">
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

export default RoyalLatestNewsTwo;
