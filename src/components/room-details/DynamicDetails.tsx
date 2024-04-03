import React from "react";
import thumb2 from "../../../public/assets/img/room/details-2.jpg";
import thumb3 from "../../../public/assets/img/room/details-3.jpg";
import Image from "next/image";
import { fadeUpTitle } from "@/data/room-details-static-data";
import RoomFacilities from "./RoomFacilities";
import { idType } from "@/interFace/interFace";
import roomAndSuites from "@/data/roomAndSuitesData";
import Link from "next/link";
const DynamicDetails = ({ id }: idType) => {
  const room = roomAndSuites.find((item) => item.id == id);

  return (
    <>
      <section className="bd-room-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="bd-room-details__wrap mb-60">
                <div className="bd-room-details__thumb-wrap mb-10">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="bd-room-details__thumb mb-30 is-lg">
                        <Image
                          src={room?.img}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bd-room-details__thumb mb-30">
                        <Image
                          src={thumb2}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                      <div className="bd-room-details__thumb mb-30">
                        <Image
                          src={thumb3}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bd-room-details__content mb-75">
                  <h3 className="bd-room-details__title  mb-30">
                    
                    {room?.title}
                  </h3>
                  {fadeUpTitle?.map((item) => (
                    <p key={item.id} className="bdFadeUp">
                      
                      {item.title}
                    </p>
                  ))}

                  {/* facilitys */}
                  <RoomFacilities />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="bd-sidebar__wrap mb-60">
                <div className="bd-booking-3 mb-40 ">
                  <div className="bd-booking-3__content">
                    <h3 className="bd-booking-3__title mb-15">
                      Queen Deluxe...
                    </h3>
                    <div className="bd-booking-3__price">
                      <p>
                        <i className="flaticon-group"></i>
                        <span>For 2 Adults</span>
                      </p>
                      <p>
                        <span>${room?.price}</span>/{room?.time}
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
                  <div className="bd-booking-3__list">
                    <ul>
                      <li>
                        <i className="flaticon-check-circle"></i>1 King bed or 2
                        Twin Bed(s)
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>538 sq.ft
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>Garden View
                      </li>
                    </ul>
                  </div>
                  <div className="bd-booking-3__submit mt-15">
                  <button type='button'><Link href={`/booking-form/${room?.id}`}>BOOK NOW <i className="fa-regular fa-arrow-right-long"></i></Link></button>
                  </div>
                </div>
                <div className="bd-booking-3-info ">
                  <h3 className="bd-booking-3__title">Extra Services</h3>
                  <div className="bd-booking-3__list">
                    <ul>
                      <li>
                        <i className="flaticon-check-circle"></i>Room Cleaning
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>Evening Party
                        Manage
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>Iron & loundry
                      </li>
                      <li>
                        <i className="flaticon-check-circle"></i>Spa & Message
                      </li>
                    </ul>
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

export default DynamicDetails;
