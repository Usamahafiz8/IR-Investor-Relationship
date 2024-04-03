"use client"
import featuresData from "@/data/featureData";
import React, { useState } from "react";
import featuTwo from "../../../public/assets/img/features/2.jpg";
import bgImg from "../../../public/assets/img/mask/mask-1.png";
import videoBg from "../../../public/assets/img/bg/vide-bg.jpg";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const WellComeTwoSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <section className="bd-welcome-area pt-150 pb-80">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-xl-6">
              <div className="bd-welcome-2 wow fadeInLeft" data-wow-delay=".5s">
                <div className="bd-welcome__content-2">
                  <div className="bd-welcome__video-area  mb-45">
                    <div className="bd-welcome__video">
                      <div
                        className="bd-welcome__video-bg"
                        style={{ backgroundImage: `url(${videoBg.src})` }}
                      ></div>
                      <div className="bd-welcome__video-btn icon-white">
                        <button
                          onClick={() => {
                            openVideoModal();
                          }}
                          className="popup-video"
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                    <p>
                      Our adults-only paradise features thatched roof bungalows,
                      inspired by British West Indies design, and with a careful
                      nod
                    </p>
                  </div>
                  <div className="bd-section__title-wrapper">
                    <h2 className="bd-section__title mb-65">
                      welcome to the hotel the royel palace
                    </h2>
                  </div>
                  <div className="bd-welcome__list">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="bd-welcome__list-content">
                          {featuresData?.map((item) => (
                            <div
                              key={item.id}
                              className="bd-welcome__list-item ryl-up-down-anim mb-40"
                            >
                              <i className={item.icons}></i>
                              <p> {item.title} </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="bd-welcome__list-thumb-wrap d-flex justify-content-center justify-content-md-end">
                          <div
                            className="bd-welcome__list-thumb-musk"
                            data-mask={bgImg}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="bd-welcome__thumb-wrap-2 p-relative wow fadeInRight"
                data-wow-delay=".7s"
              >
                <div className="bd-welcome__thumb-2">
                  <Image
                    src={featuTwo}
                    style={{ width: "100%", height: "100%" }}
                    alt="image not found"
                  />
                </div>
                <div
                  className="bd-welcome__meta-wrap-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="bd-welcome__meta-2">
                    <div className="bd-welcome__meta-icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="bd-welcome__meta-content">
                      <span>Reservation</span>
                      <Link href="#">+91 2365 0003</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="4K6Sh1tsAW4"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default WellComeTwoSec;
