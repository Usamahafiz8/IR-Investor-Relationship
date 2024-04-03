"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import roomAndSuites from "@/data/roomAndSuitesData";
import CheckoutBox from "./CheckoutBox";
import Preloader from "../common/Preloader";

const Content = () => {
  const { roomId } = useContext(AppContext) as AppContextType;
  const room = roomAndSuites.find((item) => item.id == roomId);
  if (!room) {
    return <Preloader />
  }
  return (
    <>

      <section className="bd-booking-area x-clip pb-85 mpb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bd-booking-4 mb-65">
                <CheckoutBox />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bd-booking-sidebar-wrap fix mb-35">
                <div className="bd-booking-sidebar mb-45">
                  <div className="bd-booking-sidebar__content">
                    <h3 className="bd-booking-sidebar__title">
                      Booking Details
                    </h3>
                    <p>{room.details}</p>
                  </div>
                </div>
                <div className="bd-booking-sidebar mb-30">
                  <div className="bd-booking-sidebar__content">
                    <h3 className="bd-booking-sidebar__title">Need Any Help</h3>
                    <p>
                      If you need any help to book your room. Our support team
                      is ready for you 24/7 days.
                    </p>
                    <div className="bd-booking-sidebar__contact">
                      <span>
                        Call Us:
                      </span>
                      <Link href="tel:99411123456"> 994 1112 3456</Link>
                    </div>
                  </div>
                </div>
                <div className="bd-booking-sidebar mb-30">
                  <div className="bd-booking-sidebar__content">
                    <h3 className="bd-booking-sidebar__title">
                      Visit Free Tour
                    </h3>
                    <p>
                      We are here for you, visit us for free. We have the best
                      hotel in town. Royel hotel is not only a hotel {`it's`} a
                      kingdom.
                    </p>
                    <div className="bd-booking-side-btn mt-20">
                      <Link href="/contact" className="bd-btn dark-btn">
                        Contact us
                        <span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </span>
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

export default Content;
