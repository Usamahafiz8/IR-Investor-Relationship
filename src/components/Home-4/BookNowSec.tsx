import React from "react";
import bgImg from "../../../public/assets/img/bg/booknow-bg.jpg";
import Link from "next/link";

const BookNowSec = () => {
  return (
    <>
      <section className="bd-booknow-area p-relative pt-150 pb-150">
        <div
          className="bd-booknow__bg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-booknow__content">
                <div className="bd-section__title-wrapper is-white  text-center">
                  <p className="bd-section__subtitle mb-20">book now</p>
                  <h2 className=" bd-section__title mb-75 mbs-30">
                    Welcome To royel palace Hotel
                    <br /> Book Your Stay Today.
                  </h2>
                </div>
                <div className="bd-booknow__btn">
                  <Link href="/booking-form" className="bd-btn">
                    Book your room{" "}
                    <span>
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowSec;
