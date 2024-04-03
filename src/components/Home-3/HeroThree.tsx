"use client";
import React, { useState } from "react";
import bgImg from "../../../public/assets/img/bg/hero-bg.jpg";
import NiceSelect from "../common/NiceSelect";
import DatePicker from "react-datepicker";
import { ADULTS, CHILDREN, ROOM } from "@/data/niceSelect-data";
import Link from "next/link";
const HeroThree = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const selectHandler = () => {};
  return (
    <>
      <section className="bd-hero-area">
        <div className="bd-hero-wrap  p-relative fix">
          <div
            className="bd-hero__bg"
            style={{ backgroundImage: `url(${bgImg.src})` }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-hero">
                  <div className="bd-hero__content text-center is-white">
                    <div
                      className="bd-hero__subtitle wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>DEFINITION OF LUXURY MODERN LIVING</span>
                    </div>
                    <div
                      className="bd-hero__title-wrap p-relative wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <h1 className="bd-hero__title">
                        Experience royel
                        <br />
                        service in our royel hotel
                      </h1>
                      <div className="bd-hero__line d-none d-lg-block">
                        <span className="bd-hero__line-1"></span>
                        <span className="bd-hero__line-2"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-booking-form-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-booking__form-wrap mpt-80 mpb-15">
                  <div className="bd-booking__form p-relative">
                    <form action="#">
                      <div className="bd-booking__input-wrap">
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
                        <div className="bd-booking__input-single">
                          <label>Room type</label>
                          <NiceSelect
                            options={ROOM}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Select Subject"
                            className="bd-nice-select"
                          />
                        </div>
                      </div>
                      <div className="bd-booking__submit">
                        <button type="submit">
                          <Link href="/booking-form">
                            CHECK AVAILABILITY
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </Link>
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

export default HeroThree;
