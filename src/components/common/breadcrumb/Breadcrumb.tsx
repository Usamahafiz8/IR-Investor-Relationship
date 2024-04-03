import React from 'react';
import Link from 'next/link';
import imgBreadcamb from "../../../../public/assets/img/breadcrumb/breadcrumb-bg.png"
import Image from 'next/image';

interface PropsData{
   title:string | undefined
}

const Breadcrumb = ({ title}:PropsData) => {
  return (
    <>
    <section className="bd-breadcrumb-area p-relative">
         <div className="bd-breadcrumb__wrapper">
            <div className="container">
               <div className="row justify-content-center wow">
                  <div className="col-xl-10">
                     <div className="bd-breadcrumb d-flex align-items-center justify-content-center">
                        <div className="bd-breadcrumb__thumb">
                           <Image src={imgBreadcamb}  alt="breadcrumb img"/>
                        </div>
                        <div className="bd-breadcrumb__content text-center">
                           <h1 className="bd-breadcrumb__title mb-20"> {title} </h1>
                           <div className="bd-breadcrumb__list">
                              <span><Link href="/">home</Link></span>
                              <span> {title} </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Breadcrumb;