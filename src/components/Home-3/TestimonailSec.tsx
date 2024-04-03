"use client";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
const TestimonailSec = () => {
  const testimonialData = [
    {
      id: 1,
      subText:
        "This is one of the best decisions we have ever made. We bought a house but gained a family who supports",
      clainName: "elden smith",
      title: "Residence Owner",
    },
    {
      id: 2,
      subText:
        "The best hotel I’ve ever been privileged enough to stay at. Gorgeous building, and it only gets more breath taking.",
      clainName: "Jhon Wick",
      title: "Product Designer",
    },
  ];
  return (
    <>
      <section className="bd-testimonial-area pt-135 pb-145">
        <div className="container">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-md-10">
              <div className="bd-testimonial-active">
                <Swiper
                  modules={[Pagination, Scrollbar, A11y, Autoplay]}
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
                  {testimonialData?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div>
                        <div className="bd-testimonial text-center">
                          <div className="bd-testimonial__content">
                            <div className="bd-testimonial__quote">
                              <i className="flaticon-quote"></i>
                            </div>
                            <p>{item.subText}</p>
                            <div className="bd-testimonial__quote-2">
                              <i className="flaticon-quote"></i>
                            </div>
                            <div className="bd-testimonial__client">
                              <h5 className="bd-testimonial__client-name">
                                {item.clainName}
                              </h5>
                              <span>( {item.title} )</span>
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

export default TestimonailSec;
