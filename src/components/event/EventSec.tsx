import events from '@/data/event-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventSec = () => {
    return (
        <>
            <section className="bd-event-area bg-grey-4 pb-90">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".5s">
               {
                events?.map((item)=>(
                    <div key={item.id} className="col-xl-4 col-md-6">
                    <div className="bd-event-item pb-60">
                       <Link href={`/event-details/${item.id}`}>
                          <div className="bd-event-thumb img-hover overlay">
                             <Image style={{ width: "auto", height: "100%" }} src={item.img} alt="img not found"/>
                          </div>
                       </Link>
                       <div className="bd-event-content static">
                          <span className="bd-event-date">{item.date}</span>
                          <h3 className="bd-event-title"><Link href={`/event-details/${item.id}`}> {item.title} </Link></h3>
                          <p className="bd-event-desc"> {item.details} </p>
                          <div className="bd-event-btn">
                             <Link href={`/event-details/${item.id}`} className="bd-btn-2">View more<i
                                   className="fa-regular fa-arrow-right-long"></i></Link>
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

export default EventSec;