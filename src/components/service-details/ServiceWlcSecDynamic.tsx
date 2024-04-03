"use client";
import React, { useState } from "react";
import bgImg from "../../../public/assets/img/bg/welcome-bg-3.jpg";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { idType } from "@/interFace/interFace";
import Features from "@/data/speacialFeaturesSlide";
const ServiceWlcSecDynamic = ({ id }: idType) => {
  const feature = Features.find((item) => item.id == id);
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <section className="bd-welcome-area theme-bg-2 fix p-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="bd-welcome__bg bg-left"
                style={{ backgroundImage: `url(${bgImg.src})` }}
              >
                <div className="bd-welcome__right p-relative">
                  <div className="bd-welcome__video-btn-2">
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
              </div>
            </div>
            <div className="col-lg-8">
              <div className="bd-welcome bg-white pt-120">
                <div className="bd-welcome__content mb-65 mmb-50">
                  <div className="bd-welcome__subtitle text-uppercase  mb-35">
                    <p className="hero__text_animation">
                      Ultimate hotel experience
                    </p>
                  </div>
                  <div className="bd-section__title-wrapper ">
                    <h2 className="bd-section__title mb-30">
                      Best Hotel service in
                      <br />
                      royel palace
                    </h2>
                  </div>
                  <p>
                    The Gage Hotel offers unforgettable food and drink options.
                    Enjoy dinner at the award-winning
                  </p>
                </div>
                <div className="bd-welcome__thumb transform-none">
                  <Image
                    src={feature?.img}
                    style={{ width: "100%", height: "100%" }}
                    alt="welcome"
                  />
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

export default ServiceWlcSecDynamic;
