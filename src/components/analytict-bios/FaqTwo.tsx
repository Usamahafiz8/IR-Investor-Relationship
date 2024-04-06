'use client'
import { analystData } from "@/data/analyst-data";
import { analystInterface } from "@/interFace/interFace";
import React, { useState } from "react";

const FaqTwo: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [active, setActive] = useState<boolean>(true);

  const handleAccordionClick = (id: number) => {
    setActiveItem(id);
    setActive(!active);
  };

  return (
    <>
      <section className="bd-faq-area pt-50 pb-150 p-relative">
        <div className="container">
          <div className="bd-faq-2 accordion ryl-accordion-space" id="accordionExample">
            <div className="wow fadeInUp" data-wow-delay=".5s">
              {analystData.map((item: analystInterface) => (
                <div key={item.id} className="accordion-item">
                  <h2
                    onClick={() => handleAccordionClick(item.id)}
                    className="accordion-header"
                  >
                    <button
                      className={`accordion-button ${activeItem === item.id && active ? "collapsed" : ""}`}
                      type="button"
                    >
                      {/* {item.title} */}
                      &nbsp; {item.name} {/* Displaying position */}
                    </button>
                  </h2>
                  
                  <div className={`accordion-collapse collapse ${activeItem === item.id && active ? "show" : ""}`}>
                    <div className="accordion-body">
                      <h6>{item.position}</h6>
                    <p>
                    {item.experience}
                  </p>
                      {/* Iterate over details and display each */}
                      {item.sectorsCovered.map((detail: string, index: number) => (
                        <p className="" key={index}>{detail}</p>
                      ))}
                      {/* <p><b>Education:</b> {item.education}</p> 
                      <p><b>Certifications:</b> {item.certifications.join(", ")}</p>  */}
                      {item?.socialMedia && 
                      <span className="badge text-bg-primary">Follow {item.socialMedia}</span>} {/* Display social media */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqTwo;
