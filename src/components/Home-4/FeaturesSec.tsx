"use client";
import featuresData from "@/data/featureData";
import React, { useState } from "react";
import NiceSelect from "../common/NiceSelect";
import { ADULTS, CHILDREN, LOCATION, ROOMNUM } from "@/data/niceSelect-data";
import DatePicker from "react-datepicker";
import Link from "next/link";

const FeaturesSec = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const selectHandler = () => {};
  return (
    <>
      <div className="bd-feature theme-bg-2 pt-65 p-relative pb-90 mpt-80">
        <div className="bd-booking-form-area">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-booking__form-wrap-2">
                  <div className="bd-booking__form-2 p-relative">
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
                      <div className="bd-booking__submit bd-booking__submit-2">
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

        <div className="container">
          <div className="bd-feature__list pt-145">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-feature__list-content">
                  {featuresData?.map((item) => (
                    <div
                      key={item.id}
                      className="bd-feature__list-item ryl-up-down-anim mb-40"
                    >
                      <i className={item.icons}></i>
                      <p> {item.title} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSec;
