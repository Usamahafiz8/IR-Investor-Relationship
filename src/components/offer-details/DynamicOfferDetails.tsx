"use client";
import offerData from "@/data/offerSlideData";
import { fadeUpTitle, roomsFacilitys } from "@/data/room-details-static-data";
import { idType } from "@/interFace/interFace";
import React from "react";
import EventBookingForm from "@/form/EventBookingForm";
const DynamicOfferDetails = ({ id }: idType) => {
  const offer = offerData.find((item) => item.id == id);
  return (
    <>
      <section className="bd-offer-details-area x-clip">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bd-offer-details__wrap">
                <div className="bd-offer-details__content mb-75">
                  <h3 className="bd-offer-details__title  mb-30">
                    
                    {offer?.title}
                  </h3>
                  {fadeUpTitle.slice(0, 2).map((item) => (
                    <p key={item.id} className="bdFadeUp">
                      
                      {item.title}
                    </p>
                  ))}

                  {roomsFacilitys.slice(0, 2).map((item) => (
                    <div
                      key={item.id}
                      className={`bd-offer-details__widget pb-30 mb-30 ${
                        item.id === 1 ? "mt-65" : " "
                      }`}
                    >
                      <h4 className="bd-offer-details__widget-title mb-20">
                        
                        {item.title}
                      </h4>
                      <div className="bd-offer-details__list">
                        <ul>
                          {item.features.map((list) => (
                            <li key={list.id}>
                              <i className="flaticon-check-circle"></i>
                              {list.feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  {fadeUpTitle.slice(2, 3).map((item) => (
                    <p key={item.id} className="bdFadeUp">
                      
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="bd-offer-details__widget border-0 mt-60 mb-40">
                  <h4 className="bd-offer-details__widget-title mb-30">
                    House Rules
                  </h4>
                  <div className="bd-offer-details__list-2">
                    <ul>
                      <li>-Pets are allowed with a fee.</li>
                      <li>-Check-in time from 3 PM, check-out by 1 PM.</li>
                    </ul>
                  </div>
                </div>
                <div className="bd-offer-details__widget pb-45 mb-45">
                  <h4 className="bd-offer-details__widget-title mb-30">
                    Cancellation
                  </h4>
                  {fadeUpTitle.slice(1, 2).map((item) => (
                    <p key={item.id}> {item.title} </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bd-sidebar__wrap mmt-30">
                <div className="bd-booking-3">
                  <div className="bd-booking-3__content">
                    <h3 className="bd-booking-3__title mb-35">
                      Reserve Your Room
                    </h3>
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
                  <EventBookingForm/>
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

export default DynamicOfferDetails;
