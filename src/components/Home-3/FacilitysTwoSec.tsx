import Image from 'next/image';
import React from 'react';
import imgTwo from "../../../public/assets/img/facility/facility-3.jpg"
import imgOne from "../../../public/assets/img/facility/facility-2.jpg"
import Link from 'next/link';

const FacilitysTwoSec = () => {
    return (
        <>
             <section className="bd-facility-area-2 section_spacing">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="bd-facility-2 wow fadeInUp" data-wow-delay=".5s">
                     <div className="bd-facility-2__content mb-65">
                        <div className="bd-facility-2__thumb mb-75 mmb-60">
                           <Image src={imgOne} style={{ width: "100%", height: "110%" }} alt="facility"/>
                        </div>
                        <div className="bd-section__title-wrapper">
                           <h2 className="bd-section__title mb-25 bd-facility-title  mmb-15"><Link
                                 href="/service-details">Visit the Bar & Restaurant</Link></h2>
                        </div>
                        <p><span>The three floors of the hotel contain 227 stylish and luxurious rooms made for an
                              indulgent holiday, including 12 sumptuous suites with a sea view.</span></p>
                        <p>The Gage Hotel offers unforgettable food and drink options. A memorable stay with
                           delicious
                           breakfast Join us in celebrating the new year with a little special surprise from </p>
                        <div className="bd-facility-2__list">
                           <ul>
                              <li><i className="flaticon-check-circle"></i><span>Chinese Food</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Italian Food</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Japanese Food</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Indian Food</span></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="bd-facility-2 d-flex flex-column wow fadeInUp" data-wow-delay=".7s">
                     <div className="bd-facility-2__content order-2 order-lg-1 mb-65 mmb-35">
                        <div className="bd-section__title-wrapper">
                           <h2 className="bd-section__title mb-25 bd-facility-title mt-30 "><Link
                                 href="/service-details">the spa & fitness centre</Link></h2>
                        </div>
                        <p><span>The three floors of the hotel contain 227 stylish and luxurious rooms made for an
                              indulgent holiday, including 12 sumptuous suites with a sea view.</span></p>
                        <p>The Gage Hotel offers unforgettable food and drink options. A memorable stay with
                           delicious
                           breakfast Join us in celebrating the new year with a little special surprise from </p>
                        <div className="bd-facility-2__list">
                           <ul>
                              <li><i className="flaticon-check-circle"></i><span>GYM</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Yoga</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Kubra asan</span></li>
                              <li><i className="flaticon-check-circle"></i><span>Shoulder Stand</span></li>
                           </ul>
                        </div>
                     </div>
                     <div className="bd-facility-2__thumb order-1 order-lg-2 mb-45 mmb-25">
                        <Image src={imgTwo} style={{ width: "100%", height: "110%" }} alt="facility"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default FacilitysTwoSec;