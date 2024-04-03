"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroImg from "../../../public/assets/img/bg/room-view.jpg";
import DatePicker from "react-datepicker";
import Link from "next/link";
const HeroSection: React.FC = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  return (
    <>
      <section className="bd-hero__halfim-wrapper p-relative">
        <div className="container bd-hero__halfim-container">
          <div className="row">
            <div className="col-xl-6">
              <div className="bd-hero__halfim-content mb-60">
                <div
                  className="bd-section__title-wrapper wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h2 className="bd-section__title bd-hero__halfim-title mb-30">
                    welcome to the
                    <br />
                    hotel royel palace
                  </h2>
                </div>
                <p className=" wow fadeInUp" data-wow-delay=".7s">
                  The Gage Hotel offers unforgettable food and drink options.
                  Enjoy dinner at the award-winning
                </p>
                <div
                  className="bd-booking__form-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <form action="#">
                    <div className="bd-booking__input">
                      <div className="bd-booking__input-date">
                        <label>Check in</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(startDate) =>
                            setstartDate(startDate as Date)
                          }
                          onCalendarClose={handleCalendarClose}
                          onCalendarOpen={handleCalendarOpen}
                          className="bd-date-picker"
                        />
                      </div>
                    </div>
                    <div className="bd-booking__input">
                      <div className="bd-booking__input-date">
                        <label>Check out</label>
                        <DatePicker
                          selected={endDate}
                          onChange={(endDate) => setendDate(endDate as Date)}
                          onCalendarClose={handleCalendarClose}
                          onCalendarOpen={handleCalendarOpen}
                          className="bd-date-picker"
                        />
                      </div>
                    </div>
                    <div className="bd-booking__input">
                      <div className="bd-booking__input-person">
                        <label>Number of person</label>
                        <input type="text" className="" defaultValue="2" />
                      </div>
                    </div>
                    <div className="bd-booking__submit-3">
                    <Link href="/booking-form">
                    <button type="submit" className="bd-btn fill-btn">
                        Book the room
                        <span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </span>
                      </button>
                      </Link>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="bd-hero__halfim-img">
                <Image src={heroImg} alt="image not found" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
