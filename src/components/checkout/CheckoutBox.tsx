import React, { useContext, useState } from "react";
import HrLine from "../common/HrLine/HrLine";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import roomAndSuites from "@/data/roomAndSuitesData";
import DatePicker from "react-datepicker";
import Link from "next/link";
import { paymentMethod } from "@/data/payment-confirm";
import Preloader from "../common/Preloader";
const CheckoutBox = () => {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  const { roomId } = useContext(AppContext) as AppContextType;
  const room = roomAndSuites.find((item) => item.id == roomId);
  const [active, setactive] = useState(1);

  const handleActive = (id: number) => {
    setactive(id);
  };

  if (!room) {
    return <Preloader />
  }

  return (
    <div className="checkout_box">
      <h2 className="text-center">Confirm and payment </h2>
      <br />
      <HrLine />
      <br />

      <h3>Your trip</h3>
      <div className="bd-booking-4__form">
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue={room.title} readOnly />
        </div>
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue={`price $ ${room.price}`} readOnly />
        </div>
      </div>

      {/* === */}

      <h3>Pay with</h3>

      <div>
        {paymentMethod.map((item) => (
          <button
            onClick={() => handleActive(item.id)}
            key={item.id}
            className={`payment_btn mb-2 d-inline-block ${
              active === item.id ? "ryl-active2" : " "
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/*  */}

     {
        active === 1 &&  <>
        <label htmlFor="" className="mb-2 d-inline-block">
          {" "}
          Card number{" "} 
        </label>

        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue="111 112 222 999" />
        </div>
        <label htmlFor="" className="mb-2 d-inline-block">
          {" "}
          Card holder{" "}
        </label>
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue="JOHN DOE" />
        </div>

        <div className="bd-booking-4__form">
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
          <div className="bd-booking-4__input mb-15">
            <input type="text" placeholder="CSV" readOnly />
          </div>
        </div>

        <label htmlFor="" className="mb-2 d-inline-block">
          Message For Author
        </label>
        <div className="bd-booking-4__input message mb-30">
          <textarea
            name="message"
            placeholder="Write a few sentences about yourself."
          ></textarea>
        </div>
      </>
     }
     {
        active === 2 &&  <>
        <label htmlFor="" className="mb-2 d-inline-block">
          {" "}
          Email{" "} 
        </label>

        <div className="bd-booking-4__input mb-15">
          <input type="email" defaultValue="Enter Your Email" />
        </div>
        <label htmlFor="" className="mb-2 d-inline-block">
          {" "}
          password{" "}
        </label>
        <div className="bd-booking-4__input mb-15">
          <input type="text" defaultValue="Enter Your Password" />
        </div>

        <label htmlFor="" className="mb-2 d-inline-block">
          Message For Author
        </label>
        <div className="bd-booking-4__input message mb-30">
          <textarea
            name="message"
            placeholder="Write a few sentences about yourself."
          ></textarea>
        </div>
      </>
     }

      <div className="bd-booking-side-btn mt-20">
        <Link href={`/succss/${roomId}`} className="bd-btn dark-btn">
          Confirm And Pay
          <span>
            <i className="fa-regular fa-arrow-right-long"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutBox;
