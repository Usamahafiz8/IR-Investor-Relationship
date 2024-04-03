"use client";
import Image from "next/image";
import React, { useState } from "react";
import videothumb from "../../../public/assets/img/welcome/welcome.jpg";
import videobg from "../../../public/assets/img/bg/welcome-bg.jpg";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const WellcomeAreaSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <section className="bd-welcome-area theme-bg-2 fix p-relative pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="bd-welcome bg-white pt-140 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="bd-welcome__content mb-65 mmb-35">
                  <div className="bd-welcome__subtitle  mb-35">
                    <p className="hero__text_animation">
                      <span>5 STAR</span> HOTEL IN DUBAI, UAE
                    </p>
                  </div>
                  <div className="bd-section__title-wrapper ">
                    <h2 className="bd-section__title mb-30">
                      welcome to the
                      <br />
                      hotel royel palace
                    </h2>
                  </div>
                  <p>
                    The Gage Hotel offers unforgettable food and drink options.
                    Enjoy dinner at the award-winning
                  </p>
                </div>
                <div className="bd-welcome__thumb mmb-80 transform-none">
                  <Image
                    src={videothumb}
                    style={{ width: "100%", height: "100%" }}
                    alt="welcome thumb"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bd-welcome__bg"
                style={{ backgroundImage: `url(${videobg.src})` }}
              >
                <div className="bd-welcome__right p-relative">
                  <div
                    className="bd-welcome__video-btn-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <button
                      className="popup-video"
                      onClick={() => {
                        openVideoModal();
                      }}
                    >
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </button>
                  </div>
                  <div
                    className="bd-welcome__meta-wrap wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="bd-welcome__meta">
                      <span>+76</span>
                      <p>
                        <Link href="/room-one">Big suites</Link>
                      </p>
                    </div>
                    <div className="bd-welcome__meta-2">
                      <div className="bd-welcome__meta-content">
                        <span>Reservation</span>
                        <Link href="tel:23650003">(91) 2365 0003</Link>
                      </div>
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

export default WellcomeAreaSec;
