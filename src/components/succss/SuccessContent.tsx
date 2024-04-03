"use client";
import { AppContext } from "@/contextApi/AppProvider";
import roomAndSuites from "@/data/roomAndSuitesData";
import { AppContextType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useContext } from "react";
import Preloader from "../common/Preloader";

const SuccessContent = () => {
  const { roomId } = useContext(AppContext) as AppContextType;

  const room = roomAndSuites?.find((item) => item?.id == roomId);
  if (!room) {
    return <Preloader />;
  }

  return (
    <>
      <section className="bd-success-area p-relative theme-bg-2 pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="bd-sucess-main">
                <div className="bd-sucess-thanks">
                  <div className="bd-section__title-wrapper text-center">
                    <i className="fa-regular fa-check"></i>
                    <h2 className="bd-section__title">Thank You For Your Booking! </h2>
                    <p className="bd-section__subtitle">your Booking has been recived</p>
                  </div>
                  <div className="bd-sucess-thanks-info">
                    <ul>
                      <li>
                        <span><strong>Customer Name :</strong></span>
                        <span>Steve Smith</span>
                      </li>
                      <li>
                        <span><strong>Mobile No :</strong></span>
                        <span>(406) 555-0120</span>
                      </li>
                      <li>
                        <span><strong>Package :</strong></span>
                        <span><Link href={`/room-details/${room.id}`}>{room.title}</Link></span>
                      </li>
                      <li>
                        <span><strong>Payment Amount :</strong></span>
                        <span>${room.price}</span>
                      </li>
                      <li>
                        <span><strong>Transactions ID :</strong></span>
                        <span>CDFF123476359</span>
                      </li>
                      <li>
                        <span><strong>Date :</strong></span>
                        <span>22-12-2023</span>
                      </li>
                      <li>
                        <span><strong>Mode of Payment :</strong></span>
                        <span>Credit Card</span>
                      </li>
                      <li>
                        <span><strong>Transaction Status :</strong></span>
                        <span>Success</span>
                      </li>
                    </ul>
                    <div className="bd-btn fill-btn text-center">
                      <Link href="/room-one">
                        Make another Booking
                        <span><i className="fa-regular fa-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessContent;
