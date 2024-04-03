import foodData from "@/data/foodMenudata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
type FoodSlidersCompProps = {
  findTabs: string | undefined;
};
const FoodSlidersComp: React.FC<FoodSlidersCompProps> = ({ findTabs }) => {
  const filteredData = foodData.filter((item) => findTabs === item.category);
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
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
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3.1,
          },
          1400: {
            slidesPerView: 4.3,
          },
          1700: {
            slidesPerView: 5.3,
          },
        }}
        navigation={{
          nextEl: ".bd-foodmenu-next",
          prevEl: ".bd-foodmenu-prev",
        }}
      >
        {filteredData.length
          ? filteredData.map((item) => (
              <SwiperSlide key={item.id}>
                  <div className="bd-foodmenu__item">
                    <div className="bd-foodmenu__item-thumb mb-30">
                      <Link href={`/service-details/${item.id}`}>
                        <Image
                          src={item.img}
                          style={{ width: "100%", height: "100%" }}
                          alt="foodmenu image"
                        />
                      </Link>
                    </div>
                    <div className="bd-foodmenu__item-content">
                      <h3 className="bd-foodmenu__item-title mb-10">
                        <Link href={`/service-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p> {item.subTitle} </p>
                      <div className="bd-foodmenu__item-price mt-35">
                        <span> {item.price}$</span>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            ))
          : foodData.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                  <div className="bd-foodmenu__item">
                    <div className="bd-foodmenu__item-thumb mb-30">
                      <Link href="/service-details">
                        <Image
                          src={item.img}
                          style={{ width: "100%", height: "100%" }}
                          alt="foodmenu image"
                        />
                      </Link>
                    </div>
                    <div className="bd-foodmenu__item-content">
                      <h3 className="bd-foodmenu__item-title mb-10">
                        <Link href="/service-details">{item.title}</Link>
                      </h3>
                      <p> {item.subTitle} </p>
                      <div className="bd-foodmenu__item-price mt-35">
                        <span> {item.price}$</span>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default FoodSlidersComp;
