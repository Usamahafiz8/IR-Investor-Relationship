import Image from 'next/image';
import React from 'react';
import thumb1 from "../../../public/assets/img/service/3.jpg"
const ServiceItro = () => {
    return (
        <>
            <div className="service-intro-area pt-20 fix pb-140 p-relative">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="service-intro-wrapper">
                     <div className="row wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-xxl-7 col-xl-">
                           <div className="bd-section__title-wrapper ">
                              <h2 className="bd-section__title mb-30">Pushing the work <br/> and the world
                                 forward</h2>
                           </div>
                        </div>
                     </div>
                     <div className="service-intro-thumb include-bg wow fadeInUp" data-wow-delay=".5s">
                        <Image src={thumb1} style={{ width: "100%", height: "120%" }} alt="image not found"/>
                     </div>
                     <div className="service-intro-box d-flex justify-content-xl-end mt-70 wow fadeInUp"
                        data-wow-delay=".5s">
                        <div className="service-intro-text ">
                           <p className="line__subtitle mb-30">Since 1988</p>
                           <p className="section-intro-paragraph">We partner with content-driven tech startups to make
                              them
                              independent of their IT and empower them with a future-proof and scalable website.
                              agenzia
                              is the leading 3PL operator of the entire Central Asia, and the largest operator of
                              the
                              network of industrial logistic parks.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default ServiceItro;