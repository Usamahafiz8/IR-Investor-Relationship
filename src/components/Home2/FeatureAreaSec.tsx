import featuresData from "@/data/featureData";
import React from "react";

interface classType{
  customeCalss:string
}
const FeatureAreaSec = ({customeCalss}:classType) => {
  return (
    <>
      <div className={`bd-feature pt-145  p-relative pb-90 mpt-80 ${customeCalss}`}>
        <div className="container">
          <div className="bd-feature__list pt-0">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-12">
                <div className="bd-feature__list-content">
                  {featuresData.length &&
                    featuresData.map((item) => (
                      <div
                        key={item.id}
                        className="bd-feature__list-item ryl-up-down-anim mb-40"
                      >
                        <i className={item.icons}></i>
                        <p> {item.title} </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureAreaSec;
