import React from "react";

import "./home.css"; // Assuming you have your custom styles in home.css


const data = [
  {
    heading: "Our Mission",
    description: "Zacks Small Cap Research coverage specifically looks to focus on small and micro-cap companies that are under followed or under valued by Wall Street."
  },
  {
    heading: "Our Process",
    description: "The Zacks Small-Cap analyst team has an average of 20 years' experience in the investment field. We conduct significant due diligence in an effort to maintain the highest quality small-cap universe."
  },
  {
    heading: "Our Valuations",
    description: "Zacks SCR is a division of Zacks Investment Research (ZIR). ZIR is our parent company and also the parent company of Zacks.com."
  }
];

const AboutSection = () => {
  return (
    <>
      <section className="bd-about__area pt-150 pb-150" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.5))", height: "75vh", color: "white" }}>
        <div className="container">
          <div className="about-items">
            {data.map((item, index) => (
              <div key={index} className="about-item">
                <div className="module_item-title--grow-underline"> {/* Add class for underline growth */}
                  {item.heading}
                </div>
                <div className="about-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
