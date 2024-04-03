import React from "react";
import bgImg from "../../../public/assets/img/bg/newsletter.jpg";
const NewsLatterSec = () => {
  return (
    <>
      <section className="bd-newsletter-area">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-newsletter pt-85 pb-85">
                <div
                  className="bd-newsletter__bg"
                  style={{ backgroundImage: `url(${bgImg.src})` }}
                ></div>
                <div className="bd-newsletter__content">
                  <div className="bd-section__title-wrapper is-white text-center">
                    <p className="bd-section__subtitle mb-20">
                      subscribe newsletter
                    </p>
                    <h2 className=" bd-section__title mb-40">
                      get your first trail visit
                    </h2>
                  </div>
                  <div className="bd-newsletter__form">
                    <form action="#">
                      <div className="bd-newsletter__input-wrap">
                        <div className="bd-newsletter__input-icon">
                          <i className="fa-thin fa-envelope"></i>
                        </div>
                        <div className="bd-newsletter__input">
                          <input type="text" placeholder="Enter your email" />
                        </div>
                        <button className="bd-newsletter__submit" type="submit">
                          Subscribe now <i className="fas fa-paper-plane"></i>
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

export default NewsLatterSec;
