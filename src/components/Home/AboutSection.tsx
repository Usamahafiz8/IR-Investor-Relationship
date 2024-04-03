import Image from "next/image";
import React from "react";
import wellCome_2 from "../../../public/assets/img/bg/welcome-bg-2.jpg";
import wellCome_3 from "../../../public/assets/img/bg/welcome-bg-3.jpg";
import Link from "next/link";
const AboutSection = () => {
  
  return (
    <>
      <section className="bd-about__area pt-150 pb-150 bg-theme-2">
        <div className="container">
          <div
            className="row align-items-center g-4 g-lg-0 mb-5 mb-lg-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-6">
              <div className="section-image about-4__img">
                <Image
                  className="img-full"
                  src={wellCome_2}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-content p-lg-5">
                <div className="bd-section__title-wrapper">
                  <p className="bd-section__subtitle mb-20">About us</p>
                  <h2 className="bd-section__title bd-facility-title mb-30">
                    We have 13+ years of Experience{" "}
                  </h2>
                  <p className="mb-30">
                    The Gage Hotel offers unforgettable food and drink options.
                    A memorable stay with delicious breakfast Join us in
                    celebrating the new year with a little special surprise from
                    our end.
                  </p>
                  <div className="section-btn">
                    <Link href="/about" className="bd-btn theme-btn">
                      About us
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center g-4 g-lg-0 mb-0 mb-lg-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-6 order-lg-2">
              <div className="section-image about-4__img">
                <Image
                  className="img-full"
                  src={wellCome_3}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="section-content p-lg-5">
                <div className="bd-section__title-wrapper">
                  <p className="bd-section__subtitle mb-20">Rooms</p>
                  <h2 className="bd-section__title bd-facility-title mb-30">
                    Experience Luxury at Our Royel Hotel{" "}
                  </h2>
                  <p className="mb-30">
                    The Gage Hotel offers unforgettable food and drink options.
                    A memorable stay with delicious breakfast Join us in
                    celebrating the new year with a little special surprise from
                    our end.
                  </p>
                  <div className="section-btn">
                    <Link href="/room-one" className="bd-btn theme-btn">
                      Choose room{" "}
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
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

export default AboutSection;
