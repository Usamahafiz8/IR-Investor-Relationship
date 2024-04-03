"use client";
import { faqData } from "@/data/faq-data";
import React, { useState } from "react";

const FaqSec = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [active, setactive] = useState<boolean>(true);
  const handleAccordionClick = (id: number) => {
    setActiveItem(id);
    setactive(!active);
  };
  return (
    <>
      <section className="bd-faq-area pt-150 pb-150">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-section__title-wrapper text-center">
                <h2 className="bd-section__title mb-25 ">
                  frequently ask questions
                </h2>
              </div>
            </div>
          </div>
          <div className="bd-faq">
            <div
              className="accordion ryl-accordion-space"
              id="accordionExample"
            >
              <div className="row wow fadeInUp" data-wow-delay=".5s">
                <div className="col-lg-6">
                  {faqData?.slice(0, 3).map((item) => (
                    <div key={item.id} className="accordion-item">
                      <h2
                        onClick={() => handleAccordionClick(item.id)}
                        className="accordion-header"
                      >
                        <button
                          className={`accordion-button ${
                            activeItem === item.id && active ? "collapsed" : " "
                          }`}
                          type="button"
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${
                          activeItem === item.id && active ? "show" : " "
                        }`}
                      >
                        <div className="accordion-body">
                          <p> {item.details} </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-lg-6">
                  {faqData?.slice(3, 6).map((item) => (
                    <div key={item.id} className="accordion-item">
                      <h2
                        onClick={() => handleAccordionClick(item.id)}
                        className="accordion-header"
                      >
                        <button
                          className={`accordion-button ${
                            activeItem === item.id && active ? "collapsed" : " "
                          }`}
                          type="button"
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${
                          activeItem === item.id && active ? "show" : " "
                        }`}
                      >
                        <div className="accordion-body">
                          <p> {item.details} </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSec;
