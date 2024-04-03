import React from 'react';
import logo from "../../../public/assets/img/logo/logo.svg"
import Image from 'next/image';
import Link from 'next/link';
const FooterTwo = () => {
    return (
        <>
            <footer>
      <div className="bd-footer-area">
         <div className="bd-footer-wrapper p-relative pt-140">
            <div className="container">
               <div className="bd-footer-top">
                  <div className="row align-items-center">
                     <div className="col-xl-4 col-lg-5">
                        <div className="bd-footer-top__widget-1 mb-40">
                           <div className="bd-footer__logo mb-15">
                              <Link href="/"> <Image src={logo} style={{ width: "100%", height: "auto" }} alt="img not found!"/></Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-7">
                        <div className="bd-footer-top__widget-2 mb-40">
                           <div className="bd-footer__widget-content is-white mb-40">
                              <p>Whether you are at home or away, world-class Four Seasons property management
                                 protects,
                                 secures and maintains your residence for you.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-8">
                        <div className="bd-footer-newsletter p-relative z-index-1 mb-40">
                           <div className="bd-footer-newsletter__form">
                              <form action="#">
                                 <div className="bd-footer-newsletter__input">
                                    <input type="text" placeholder="Your Email"/>
                                    <button type="submit">subscribe now <i
                                          className="fa-regular fa-arrow-right-long"></i></button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="bd-footer-line">
                        <hr/>
                     </div>
                  </div>
               </div>
               <div className="bd-footer pt-45 p-relative">
                  <div className="row">
                     <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="bd-footer__widget bd-footer__widget-1 mb-50">
                           <div className="bd-footer__widget-content">
                              <h4 className="bd-footer__widget-title mb-15">Contact us</h4>
                              <p className="mb-30">Via Giovanni Augustariccio, 33<br/>
                                 Amalfi, 84011 SA, Dubai, UAE</p>
                              <div className="bd-footer__meta mb-25">
                                 <Link href="tel:9123650003">(+91) 2365
                                    0003</Link>
                              </div>
                              <div className="bd-footer__meta">
                                 <Link href="mailto:info@theroyelpalace.com"><span>info@theroyelpalace.com</span></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="bd-footer__widget bd-footer__widget-2 mb-50">
                           <div className="bd-footer__widget-content">
                              <h4 className="bd-footer__widget-title mb-15">Rooms</h4>
                              <div className="bd-footer__list mb-35">
                                 <ul>
                                    <li><Link href="/">Overview</Link></li>
                                    <li><Link href="/room-one">Deluxe Sea View</Link></li>
                                    <li><Link href="/room-two">Superior</Link></li>
                                 </ul>
                              </div>
                              <h4 className="bd-footer__widget-title mb-15">Suites</h4>
                              <div className="bd-footer__list">
                                 <ul>
                                    <li><Link href="/">Overview</Link></li>
                                    <li><Link href="/blog">Junior Corner</Link></li>
                                    <li><Link href="/blog-classic">Executive</Link></li>
                                    <li><Link href="/service">Premium Pool</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="bd-footer__widget bd-footer__widget-3 mb-50">
                           <div className="bd-footer-widget__content">
                              <h4 className="bd-footer__widget-title mb-15">Useful Link</h4>
                              <div className="bd-footer__list mb-35">
                                 <ul>
                                 <li><Link href="/">Overview</Link></li>
                                    <li><Link href="/room-one">Deluxe Sea View</Link></li>
                                    <li><Link href="/room-two">Superior</Link></li>
                                 </ul>
                              </div>
                              <h4 className="bd-footer__widget-title mb-15">Follow us</h4>
                              <div className="bd-footer__list">
                                 
                                 <div className="bd-footer__social-wrapper">
                                    <div className="bd-footer__social">
                                       <Link href="https://www.facebook.com/" target="_blank"><i
                                             className="fa-brands fa-facebook-f"></i></Link>
                                    </div>
                                    <div className="bd-footer__social">
                                       <Link href="https://twitter.com/" target="_blank"><i
                                             className="fa-brands fa-twitter"></i></Link>
                                    </div>
                                    <div className="bd-footer__social">
                                       <Link href="https://youtube.com/" target="_blank"><i
                                             className="fa-brands fa-youtube"></i></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="bd-footer-line">
                        <hr/>
                     </div>
                  </div>
               </div>
               <div className="bd-footer__copyright pt-15 pb-35">
                  <div className="bd-footer__copyright-wrap d-flex justify-content-center">
                     <div className="bd-footer__copyright-text">
                        <p>&copy; 2023 <Link href="https://themeforest.net/user/bdevs/portfolio" rel="nofollow">BDevs</Link>
                           All Rights Reserved
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
        </>
    );
};

export default FooterTwo;