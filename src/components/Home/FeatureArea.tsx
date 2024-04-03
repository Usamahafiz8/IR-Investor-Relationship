import React from "react";
import featuresData from "@/data/featureData";

const FeatureArea = () => {
 
  return (
    <div className="bd-feature bg-common-black pt-145 p-relative pb-90 mpt-80">
      <div className="container">
        <div className="bd-feature__list pt-0">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-feature__list-content">
                {featuresData.map((feature) => (
                  <div
                    key={feature.id}
                    className="bd-feature__list-item ryl-up-down-anim mb-40 is-white"
                  >
                    <i className={feature.icons}></i>
                    <p>{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
