import Image from 'next/image';
import React from 'react';
import thumb from "../../../public/assets/img/shape/404.svg"
import Link from 'next/link';
const ErrorContent = () => {
    return (
        <>
            <section className="bd-error-area pt-120 pb-75 fix">
         <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-lg-5">
                  <div className="bd-error-area-wrap mb-50">
                     <div className="bd-section__title-wrapper mb-45">
                        <p className="bd-section__subtitle mb-20">Error 404</p>
                        <h2 className="bd-section__title mb-20">Oops! {`It’s`} Look Like you are Lost</h2>
                        <p>{`We're`} sorry, the page you requested could not be found. {`It's`} possible that the page has
                           been moved, renamed, or deleted.</p>
                     </div>
                     <div className="bd-error-btn">
                        <Link href="/" className="bd-btn dark-btn">
                           back to home <span><i className="fa-regular fa-arrow-right-long"></i></span>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="bd-error-thumb-wrapper mb-50">
                     <div className="bd-error-thumb">
                        <Image src={thumb} style={{ width: "auto", height: "auto" }} alt="img not found!"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default ErrorContent;