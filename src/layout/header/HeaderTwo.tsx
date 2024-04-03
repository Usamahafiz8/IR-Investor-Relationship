"use client"
import React, { useContext } from "react";
import logo from "../../../public/assets/img/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import useScrollDirection from "@/hooks/stacky-header";
import Menu from "./Menu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
const HeaderTwo = () => {
  const {toggleSideMenu} = useContext(AppContext) as AppContextType
  const scrollDirection = useScrollDirection(null)
  
  return (
    <>
      <header>
        <div className="bd-header transparent-header">
          <div id="header-sticky" className={`bd-header-3 is-transparent ${
            scrollDirection === "down" ? "header-sticky" : " "
          }`}>
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bd-header__bottom-left">
                    <div className="bd-header__logo">
                      <Link href="/">
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          src={logo}
                          alt="image not found"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="bd-main-menu d-none d-lg-flex align-items-center is-white">
                    <nav id="mobile-menu">
                      <ul>
                        <Menu/>
                      </ul>
                    </nav>
                  </div>
                  <div className="bd-header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="bd-header-top-btn mr-30 d-none d-xl-flex">
                      <Link href="/login" className="bd-btn fill-btn">
                        book now
                        <span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </div>
                    <div onClick={toggleSideMenu} className="bd-header-hamburger offcanvas-open-btn d-xl-none">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
