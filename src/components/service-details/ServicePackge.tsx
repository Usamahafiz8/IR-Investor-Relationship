"use client";
import SidebarBookingForm from "@/form/SidebarBookingForm";
import React from "react";
const ServicePackge = () => {
  return (
    <>
      <div className="bd-booking-3 bg-white">
        <div className="bd-booking-3__content">
          <h3 className="bd-booking-3__title mb-35">Reserve Your Room</h3>
          <div className="bd-booking-3__price">
            <p>
              <i className="flaticon-group"></i>
              <span>For 2 Adults</span>
            </p>
            <p>
              <span>
                <del>$299</del>$199
              </span>
              / NIGHT
            </p>
          </div>
          <div className="bd-booking-3__tax">
            <p>
              <span>
                <i className="fa-light fa-times"></i> Non-Refundable
              </span>
              +$49 taxes & fees
            </p>
          </div>
        </div>

        <div className="bd-booking-3__form">
          <SidebarBookingForm/>
        </div>
      </div>
    </>
  );
};

export default ServicePackge;
