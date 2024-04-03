import NiceSelect from "@/components/common/NiceSelect";
import Preloader from "@/components/common/Preloader";
import { AppContext } from "@/contextApi/AppProvider";
import { ADULTS, CHILDREN, ROOMS, ROOMTYPE } from "@/data/niceSelect-data";
import roomAndSuites from "@/data/roomAndSuitesData";
import { AppContextType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
const BookingForm = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const { roomId } = useContext(AppContext) as AppContextType;
  const room = roomAndSuites.find((item) => item.id == roomId);
  if (!room) {
    return <Preloader />;
  }
  const selectHandler = () => {};
  return (
    <>
      <form action="#">
        <div className="bd-booking-4__form">
          <div className="bd-booking-4__input mb-15">
            <input type="text" defaultValue={room.title} readOnly />
          </div>
          <div className="bd-booking-4__input mb-15">
            <input
              type="text"
              defaultValue={`price $ ${room.price}`}
              readOnly
            />
          </div>
          <div className="bd-booking-4__input mb-15">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="bd-booking-4__input mb-15">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="bd-booking-4__input mb-15">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="bd-booking-4__input mb-15">
            <input type="email" placeholder="Phone Number" />
          </div>
          <div className="bd-booking-4__input p-relative mb-15">
            <NiceSelect
              options={ADULTS}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select"
            />
          </div>
          <div className="bd-booking-4__input p-relative mb-15">
            <NiceSelect
              options={CHILDREN}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select"
            />
          </div>
          <div className="bd-booking-4__input p-relative mb-15">
            <NiceSelect
              options={ROOMS}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select"
            />
          </div>
          <div className="bd-booking-4__input p-relative mb-15">
            <NiceSelect
              options={ROOMTYPE}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select"
            />
          </div>
          <div className="bd-booking-4__input mb-15 ryl-block">
            <i className="flaticon-calendar-2 zindex-5"></i>
            <DatePicker
              selected={startDate}
              onChange={(startDate) => setstartDate(startDate as Date)}
              onCalendarClose={handleCalendarClose}
              onCalendarOpen={handleCalendarOpen}
              className="bd-date-picker"
            />
          </div>
          <div className="bd-booking-4__input mb-15 ryl-block">
            <i className="flaticon-calendar-2 zindex-5"></i>
            <DatePicker
              selected={endDate}
              onChange={(endDate) => setendDate(endDate as Date)}
              onCalendarClose={handleCalendarClose}
              onCalendarOpen={handleCalendarOpen}
              className="bd-date-picker bd-booking__input-date"
            />
          </div>
          <div className="bd-booking-4__input message mb-30">
            <textarea
              name="message"
              placeholder="Special Requirements"
            ></textarea>
          </div>
          <div className="glo-booking-btn">
            <Link
              href={`/checkout/${roomId}`}
              className="bd-btn dark-btn"
              type="submit"
            >
              CheckOut{" "}
              <span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
