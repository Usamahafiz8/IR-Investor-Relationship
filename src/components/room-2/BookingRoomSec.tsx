"use client";
import React, { useState } from "react";
import bgImage from "../../../public/assets/img/bg/booking-bg.jpg";
import { ADULTS, CHILDREN, LOCATION, ROOMNUM } from "@/data/niceSelect-data";
import NiceSelect from "../common/NiceSelect";
import DatePicker from "react-datepicker";
import Link from "next/link";
const BookingRoomSec = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const selectHandler = () => {};
  return (
    <>
      <section className="bd-booking-area p-relative pt-150 pb-150">
        <div
          className="bd-booking__bg"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        <div className="bd-booking-form-area-2">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center is-white">
                  <p className="bd-section__subtitle mb-20">
                    find desire rooms
                  </p>
                  <h2 className="bd-section__title mb-55">search your rooms</h2>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-booking__form-wrap-2">
                  <div className="bd-booking__form-2 is-dark p-relative">
                    <form action="#">
                      <div className="bd-booking__input-wrap-2">
                        <div className="bd-booking__input location">
                          <label>LOCATION</label>
                          <div className="bd-booking__input-inner bd-booking__select location">
                            <NiceSelect
                              options={LOCATION}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="Select Subject"
                              className="bd-nice-select"
                            />
                          </div>
                        </div>
                        <div className="bd-booking__input">
                          <label>Check in / out</label>
                          <div className="bd-booking__input-inner">
                            <div className="bd-booking__input-date">
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
                            <div className="bd-booking__input-date text-xl-end">
                              <DatePicker
                                selected={endDate}
                                onChange={(endDate) =>
                                  setendDate(endDate as Date)
                                }
                                onCalendarClose={handleCalendarClose}
                                onCalendarOpen={handleCalendarOpen}
                                className="bd-date-picker bd-booking__input-date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bd-booking__input">
                          <label>GUESTS</label>
                          <div className="bd-booking__input-inner bd-booking__select">
                            <NiceSelect
                              options={ADULTS}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="Select Subject"
                              className="bd-nice-select"
                            />
                            <NiceSelect
                              options={CHILDREN}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name="Select Subject"
                              className="bd-nice-select"
                            />
                          </div>
                        </div>
                        <div className="bd-booking__input-single room-input">
                          <label>Rooms</label>
                          <NiceSelect
                            options={ROOMNUM}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Select Subject"
                            className="bd-nice-select"
                          />
                        </div>
                      </div>
                      <div className="bd-booking__submit bd-booking__submit-2 is-dark">
                        <button type="submit">
                          <Link href="/booking-form"><i className="fa-regular fa-arrow-right-long"></i></Link>
                        </button>
                      </div>
                    </form>
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

export default BookingRoomSec;
