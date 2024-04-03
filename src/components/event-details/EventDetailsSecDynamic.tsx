"use client"
import React from "react";
import thumb2 from "../../../public/assets/img/event/event-5.jpg";
import thumb3 from "../../../public/assets/img/event/event-6.jpg";
import Image from "next/image";
import { idType } from "@/interFace/interFace";
import events from "@/data/event-data";
import eventFlows from "@/data/event-flow-data";
import Link from "next/link";
import EventBookingForm from "@/form/EventBookingForm";
const EventDetailsSecDynamic = ({ id }: idType) => {
  const event = events.find((item) => item.id == id);
  return (
    <>
      <section className="gl-event-details-area x-clip pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="bd-event-details-wrapper mb-45">
                <div className="bd-event-details-thumb img-hover mb-50 revealed">
                  <Image
                    src={event?.img}
                    style={{ width: "auto", height: "100%" }}
                    alt="event img"
                  />
                </div>
                <div className="bd-event-details-content mb-50">
                  <h3 className="bd-event-details-title  mb-30">
                    {" "}
                    {event?.title}{" "}
                  </h3>
                  <p className="bd-event-details-desc mb-50">
                    {" "}
                    {event?.description}{" "}
                  </p>
                  <div className="bd-event-details-imagbox">
                    <div className="bd-event-thumb img-hover mb-30">
                      <Image
                        src={thumb2}
                        style={{ width: "auto", height: "100%" }}
                        alt="image not found"
                      />
                    </div>
                    <div className="bd-event-thumb img-hover mb-30">
                      <Image
                        src={thumb3}
                        style={{ width: "auto", height: "100%" }}
                        alt="image not found"
                      />
                    </div>
                  </div>
                  <p className="bd-event-details-desc mb-50">
                    {" "}
                    {event?.descriptionTwo}
                  </p>

                  <div className="bd-event-details__widget pb-30 mb-50">
                    <h4 className="bd-event-details__widget-title mb-20">
                      Popular Event Flow
                    </h4>
                    <div className="bd-event-details__list mb-15">
                      <ul>
                        {eventFlows.map((item) => (
                          <li key={item.id}>
                            <i className="flaticon-check-circle"></i>{" "}
                            {item.title}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <ul className="bd-event-details-info-list">
                    <li className="">
                      <div className="icon">
                        <i className="far fa-clock"></i>
                      </div>
                      <div className="content">
                        <small className="event-title">Event Time</small>
                        <h4 className="event-date">7.00 pm - 12.00 pm</h4>
                      </div>
                    </li>
                    <li className="">
                      <div className="icon">
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <div className="content">
                        <small className="event-title">Event Date</small>
                        <h4 className="event-date">25 December, 2023</h4>
                      </div>
                    </li>
                    <li className="">
                      <div className="icon">
                        <i className="far fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <small className="event-title">Event Location</small>
                        <h4 className="event-date">Glorio Restaurant</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bd-event-line mb-50"></div>
                <div className="bd-event-social d-flex flex-wrap align-items-center">
                  <h4 className="mb-10">Share with:</h4>
                  <ul className="mb-10">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bd-sidebar__wrap">
                <div className="bd-booking-3 mb-40">
                  <div className="bd-booking-3__content">
                    <h3 className="bd-booking-3__title mb-35">
                      Reserve Your Seat
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
                        / Program
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
                <div className="bd-booking-3-info mb-40">
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

export default EventDetailsSecDynamic;
