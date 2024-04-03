"use client";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import gallaryData from "@/data/gallaryData";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Link from "next/link";

const GallayRoom = () => {
  return (
    <>
      <PhotoProvider>
        <section className="bd-gallery-area pb-135 pt-60">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-8 col-lg-8">
                <div className="bd-section__title-wrapper ">
                  <p className="bd-section__subtitle mb-20">awesome moments</p>
                  <h2 className="bd-section__title mb-55">Photos by Guests</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bd-gallery-active">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={false}
              breakpoints={{
                576: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.1,
                },
                992: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 3.6,
                },
                1400: {
                  slidesPerView: 4.6,
                },
                1600: {
                  slidesPerView: 5.6,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{
                el: ".bd-gallery-pagination",
                clickable: true,
              }}
            >
              {gallaryData.slice(9, 17).map((item) => (
                <SwiperSlide key={item.id}>
                  <PhotoView src={item.img.src}>
                    <div className="gallery__img">
                      <div className="glo-gallery-page-thumb fix">
                        <div className="img-hover">
                          <div className="glo-restaurant-thumb">
                            <Image src={item.img} alt="Image not found" />
                            <div className="glo-restaurant-content">
                              <Link href="" className="popup-image">
                                <i className="fal fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PhotoView>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </PhotoProvider>
    </>
  );
};

export default GallayRoom;
