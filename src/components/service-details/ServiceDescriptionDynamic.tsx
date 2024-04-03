import { fadeUpTitle } from '@/data/room-details-static-data';
import React from 'react';
import facilityOne from '@/data/facilitysSecOneData';
import Link from 'next/link';
import ServiceFacility from './ServiceFacility';
import { idType } from '@/interFace/interFace';
import Features from '@/data/speacialFeaturesSlide';
import ServicePackge from './ServicePackge';

const ServiceDescriptionDynamic = ({id}:idType) => {
  const feature = Features.find(item=> item.id == id)
  
    return (
        <>
            <section className="bd-service-details-area x-clip theme-bg-2 pt-140 pb-105 mpb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="bd-service-details__wrap">
                     <div className="bd-service-details__content mb-40">
                        <h3 className="bd-service-details__title mb-30"> {feature?.title} </h3>
                        {
                            fadeUpTitle?.slice(0,2)?.map((item)=>(
                                <p key={item.id} className="bdFadeUp"> {item.title}  </p>
                            ))
                        }
                       
                        <ServiceFacility/>
                       
                        {
                            fadeUpTitle?.slice(0,1)?.map((item)=>(
                                <p key={item.id} className="bdFadeUp"> {item.title}  </p>
                            ))
                        }
                     </div>
                     <div className="bd-service-details__widget border-0 mb-60">
                        <h4 className="bd-service-details__widget-title mb-10">House Rules</h4>
                        <div className="bd-service-details__list-2">
                           <ul>
                              <li>-Pets are allowed with a fee.</li>
                              <li>-Check-in time from 3 PM, check-out by 1 PM.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-sidebar__wrap">
                     <div className="bd-booking-3  mb-30 border-0">
                        <div className="bd-booking-3-info bg-white">
                           <h3 className="bd-booking-3__title">More Services</h3>
                           <div className="bd-booking-3__list">
                              <ul>
                                {
                                    facilityOne?.slice(1,7)?.map((item)=>(
                                        <li key={item.id}><i className="flaticon-check-circle"></i><Link href={`/service-details/${item.id}`}> {item.title} </Link></li>
                                    ))
                                }
                                
                              </ul>
                           </div>
                        </div>
                     </div>
                     <ServicePackge/>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default ServiceDescriptionDynamic;