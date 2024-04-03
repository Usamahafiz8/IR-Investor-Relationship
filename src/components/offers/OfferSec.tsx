import offerData from '@/data/offerSlideData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OfferSec = () => {
   return (
      <>
         <section className="bd-offer-area pb-120">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".5s">
                  {
                     offerData.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                           <div className="bd-offer mb-30">
                              <div className="bd-offer__thumb p-relative">
                                 <Image src={item.img} alt="image not found" />
                                 <div className="bd-offer__meta">
                                    <span> {item.offer} </span>
                                 </div>
                                 <div className="bd-offer__content-visble">
                                    <h4 className="bd-offer__title-2"><Link href={`/offer-details/${item.id}`}> {item.tags}</Link></h4>
                                 </div>
                                 <div className="bd-offer__content">
                                    <h4 className="bd-offer__title"><Link href={`/offer-details/${item.id}`}>{item.tags}</Link></h4>
                                    <p> {item.title}
                                    </p>
                                    <div className="bd-offer__btn">
                                       <Link href={`/booking-form/${item.id}`}>Book Now<i className="fa-regular fa-angle-right"></i></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default OfferSec;