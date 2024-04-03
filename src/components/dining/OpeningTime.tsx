"use client"
import React,{useState} from 'react';
import bgImg from "../../../public/assets/img/bg/restaurant-bg.jpg"
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
const OpeningTime = () => {
   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => {
     setIsOpen((prevIsOpen) => !prevIsOpen);
   };
    return (
        <>
           <section className="bd-restaurant-opening-area p-relative">
         <div className="bd-restaurant-opening__bg" style={{ backgroundImage: `url(${bgImg.src})`}}></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="bd-restaurant-opening__content pt-150 pb-150 wow fadeInUp" data-wow-delay=".5s">
                     <div className="bd-restaurant-opening__video-btn mb-40">
                        <Link href="" onClick={() => {
                          openVideoModal()
                        }} className="popup-video"><i
                              className="fa-sharp fa-solid fa-play"></i></Link>
                     </div>
                     <div className="bd-section__title-wrapper is-white">
                        <p className="bd-section__subtitle mb-20">find desire foods</p>
                        <h2 className="bd-section__title mb-40">Fine Dining in royel palace
                        </h2>
                     </div>
                     <div className="bd-restaurant-opening__btn">
                        <Link href="/booking-form" className="bd-btn">book our hotel now<span><i
                                 className="fa-regular fa-arrow-right-long"></i></span></Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="bd-restaurant-opening theme-bg-2 pt-120 pb-120 wow fadeInUp" data-wow-delay=".5s">
                     <div className="bd-restaurant-opening__content-2">
                        <h3 className="bd-restaurant-opening__title mb-30">opening Hours</h3>
                        <div className="bd-restaurant-opening__list">
                           <ul>
                              <li>
                                 <span><i className="flaticon-check-circle"></i>Breakfast</span>
                                 <span><i className="flaticon-check-circle"></i>7am - 11am</span>
                              </li>
                              <li>
                                 <span><i className="flaticon-check-circle"></i>All day dining</span>
                                 <span><i className="flaticon-check-circle"></i>12am - 12pm</span>
                              </li>
                              <li>
                                 <span><i className="flaticon-check-circle"></i>Afternoon tea</span>
                                 <span><i className="flaticon-check-circle"></i>2:30pm - 4:30pm</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> 

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="4K6Sh1tsAW4"
        onClose={() => {
          openVideoModal();
        }}
      />
        </>
    );
};

export default OpeningTime;