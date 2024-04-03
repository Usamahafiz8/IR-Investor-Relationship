import facilityOne from '@/data/facilitysSecOneData';
import React from 'react';
import facilyimg from "../../../public/assets/img/bg/facility-bg.png"
import maskImg from "../../../public/assets/img/mask/mask-2.png"
import facilityTwo from "../../../public/assets/img/facility/facility-1.jpg"
import Image from 'next/image';

const FacilitysOneSec = () => {
    return (
        <>
            <section className="bd-facility-area">
         <div className="bd-facility-area-wrap pt-150 pb-70">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-12">
                     <div className="bd-section__title-wrapper text-center">
                        <h2 className="bd-section__title mb-55">
                           royel awesome facilities
                        </h2>
                     </div>
                  </div>
               </div>
               <div className="row align-items-center wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-xl-4 col-lg-4">
                     <div className="bd-facility mb-60">
                        <ul>
                           {
                            facilityOne?.slice(0,3)?.map((item)=>(
                                <li key={item.id}>
                              <div className="bd-facility__content">
                                 <h4 className="bd-facility__title"> {item.title} </h4>
                                 <p> {item.subtitle} </p>
                              </div>
                           </li>
                            ))
                           }
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                     <div className="bd-facility__thumb-wrap p-relative mb-60">
                        <div className="bd-facility__bg">
                           <Image src={facilyimg} style={{ width: "100%", height: "auto" }} alt="image not found"/>
                        </div>
                        <div className="bd-facility__thumb" data-mask={maskImg}>
                           <Image src={facilityTwo} style={{ width: "100%", height: "auto" }} alt="image not found"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 d-flex justify-content-xl-end">
                     <div className="bd-facility mb-60">
                        <ul>
                           
                        {
                            facilityOne?.slice(4,7)?.map((item)=>(
                                <li key={item.id}>
                              <div className="bd-facility__content">
                                 <h4 className="bd-facility__title"> {item.title} </h4>
                                 <p> {item.subtitle} </p>
                              </div>
                           </li>
                            ))
                           }

                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
        </>
    );
};

export default FacilitysOneSec;