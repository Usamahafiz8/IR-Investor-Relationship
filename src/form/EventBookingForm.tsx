import NiceSelect from "@/components/common/NiceSelect";
import { EXTRASERVICE, ROOMNUM } from "@/data/niceSelect-data";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
const EventBookingForm = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const selectHandler = () => {};
  return (
    <>
      <form>
        <div className="bd-booking-3__input-wrap">
          <div className="bd-booking-3__input">
            <label htmlFor="checkIn">CHECK-IN</label>
            <div className="bd-booking-3__input-inner p-relative ryl-block">
              <i className="flaticon-calendar-2 zindex-5"></i>
              <DatePicker
                selected={startDate}
                onChange={(startDate) => setstartDate(startDate as Date)}
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
                className="bd-date-picker"
              />
            </div>
          </div>
          <div className="bd-booking-3__input">
            <label htmlFor="checkOut">CHECK-OUT</label>
            <div className="bd-booking-3__input-inner p-relative ryl-block">
              <i className="flaticon-calendar-2 zindex-5"></i>
              <DatePicker
                selected={endDate}
                onChange={(endDate) => setendDate(endDate as Date)}
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
                className="bd-date-picker"
              />
            </div>
          </div>
          <div className="bd-booking-3__input">
            <label htmlFor="totalGuest">GUESTS</label>
            <NiceSelect
              options={ROOMNUM}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select mb-20"
            />
          </div>
          <div className="bd-booking-3__input">
            <label htmlFor="extraService">EXTRA SERVICE</label>
            <NiceSelect
              options={EXTRASERVICE}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
              className="bd-nice-select"
            />
          </div>
        </div>
        <div className="bd-booking-3__submit mt-65">
          <button type="submit">
            BOOK NOW
            <i className="fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default EventBookingForm;
