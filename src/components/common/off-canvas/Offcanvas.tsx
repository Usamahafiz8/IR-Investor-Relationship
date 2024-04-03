"use client";

import React,{useContext} from "react";
import logo from "../../../../public/assets/img/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./MobileMenu";
const OffCanvasMain = () => {
  const {sideMenuOpen,toggleSideMenu} = useContext(AppContext) as AppContextType
  return (
    <>
      <div className={`offcanvas__area ${sideMenuOpen ? "offcanvas-opened" : " "}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button onClick={toggleSideMenu} className="offcanvas__close-btn">
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-0">
              <form action="#">
                <button type="submit">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button>
                <input type="text" placeholder="Search here" />
              </form>
            </div>
            <div className="mobile-menu-all fix mt-40 mean-container">
              <div className="mean-bar">
               <nav className="mean-nav">
                 <ul>
                 <MobileMenu/>
                 </ul>
               </nav>
              </div>
            </div>
            <div className="offcanvas__about mt-30 mb-30">
              <h4>About Royel Hotel</h4>
              <p>
                Experience legendary service in the heart of royel. The new
                generation of luxury. A Haven of Comfort and Elegance in royel
              </p>
            </div>
            <div className="offcanvas__contact mt-30 mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >
                      <i className="fal fa-map-marker-alt"></i>
                    </Link>
                  </div>
                  <div className="offcanvas__contact-text">
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >
                      12/A, Mirnada City Tower, NYC
                    </Link>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <Link href="tel:+088889797697">
                      <i className="far fa-phone"></i>
                    </Link>
                  </div>
                  <div className="offcanvas__contact-text">
                    <Link href="tel:+088889797697">088889797697</Link>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <Link href="mailto:support@gmail.com">
                      <i className="fal fa-envelope"></i>
                    </Link>
                  </div>
                  <div className="offcanvas__contact-text">
                    <Link href="mailto:support@gmail.com">
                      support@mail.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.youtube.com/">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div onClick={toggleSideMenu} className={`body-overlay ${sideMenuOpen ? "opened" : " "}`}></div>
    </>
  );
};

export default OffCanvasMain;
