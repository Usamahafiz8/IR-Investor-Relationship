"use client"
import React, { useState } from "react";
import bgImage from "../../../public/assets/img/bg/reel-bg.jpg";
import real from "../../../public/assets/img/shape/reel.png";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const RealSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <div
        className="bd-reel-area p-relative wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div
          className="bd-reel__bg"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        <div className="bd-reel__play-btn">
          <div className="bd-reel-play-thumb">
            <Image
              src={real}
              style={{ width: "100%", height: "100%" }}
              alt="reel"
            />
          </div>
          <Link
            href=""
            onClick={() => {
              openVideoModal();
            }}
            className="popup-video"
          >
            <i className="fa-sharp fa-solid fa-play"></i>
          </Link>
        </div>
      </div>
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

export default RealSec;
