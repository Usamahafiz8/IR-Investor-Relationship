"use client"
import React, { useState } from "react";
import bgImg from "../../../public/assets/img/bg/room-view.jpg";
import Link from "next/link";
import roomdetails from "@/data/roomDetailsdata";
import ModalVideo from "react-modal-video";
const RoomViewSec = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  return (
    <>
      <section className="bd-roomview-area">
        <div
          className="bd-roomview__bg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        >
          <div className="bd-roomview__btn">
            <Link
            href=""
              onClick={() => {
                openVideoModal();
              }}
              className="popup-video"
            >
              <i className="flaticon-rotation"></i>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-5 col-lg-6">
              <div
                className="bd-roomview__content pt-150 pb-140 wow fadeInRight"
                data-wow-delay=".5s"
              >
                <div className="bd-section__title-wrapper is-white">
                  <h2 className="bd-section__title mb-65 mmb-25">
                    Luxury Comfort delux Rooms & Suites
                  </h2>
                </div>
                <div className="bd-roomview__list">
                  <ul>
                    {
                        roomdetails?.map((item)=>(
                            <li key={item.id}>
                      <Link href={`/room-details/${item.id}`}>
                        {item.title}
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </Link>
                    </li>
                        ))
                    }
                  </ul>
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

export default RoomViewSec;
