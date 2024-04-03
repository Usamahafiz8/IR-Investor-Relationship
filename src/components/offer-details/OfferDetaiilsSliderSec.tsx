"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import thumb1 from "../../../public/assets/img/offer/details-1.jpg";
import thumb2 from "../../../public/assets/img/offer/details-2.jpg";
import thumb3 from "../../../public/assets/img/offer/details-3.jpg";
import Image from "next/image";
const OfferDetaiilsSliderSec = () => {
  const offerDetails = [
    {
      id: 1,
      img: thumb1,
    },
    {
      id: 2,
      img: thumb2,
    },
    {
      id: 3,
      img: thumb3,
    },
    {
      id: 4,
      img: thumb1,
    },
    {
      id: 5,
      img: thumb2,
    },
    {
      id: 6,
      img: thumb3,
    },
  ];

  return (
    <>
      <div className="bd-offer-details-area fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="bd-offer-details__wrap p-relative">
                <div className=" bd-offer-details-active mb-65 ryl-overflow-none">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    loop={true}
                    observeParents={true}
                    observer={true}
                    centeredSlides={true}
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
                    navigation={{
                      nextEl: ".bd-offerdetails-next",
                      prevEl: ".bd-offerdetails-prev",
                    }}
                  >
                    {offerDetails.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div>
                          <div className="bd-offer-details__thumb">
                            <Image
                              src={item.img}
                              style={{ width: "100%", height: "auto" }}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="bd-offer-navigation">
                  <button className="bd-offerdetails-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>
                  <button className="bd-offerdetails-next">
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferDetaiilsSliderSec;
