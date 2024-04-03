"use client";
import React, { useContext } from "react";
import logo_black from "../../../public/assets/img/logo/logo-black.svg";
import Image from "next/image";
import { AppContext } from "@/contextApi/AppProvider";
import Link from "next/link";
import { AppContextType } from "@/interFace/interFace";
import useScrollDirection from "@/hooks/stacky-header";
const HeaderOne = () => {
  const { toggleSideMenu } = useContext(AppContext) as AppContextType;
  const scrollDirection = useScrollDirection(null);
  return (
    <header>
      <div className="bd-header transparent-header">
        <div
          id="header-sticky"
          className={`bd-header-3 is-transparent p-relative ${
            scrollDirection === "down" ? "header-sticky" : " "
          }`}
        >
          <div className="container">
            <div className="mega-menu-wrapper p-relative">
              <div className="d-flex align-items-center justify-content-between">
                <div className="bd-header__bottom-left bd-header-3__bottom-left d-flex align-items-center">
                  <div className="bd-header__logo">
                    <Link href="/">
                      <Image src={logo_black} alt="image not found" />
                    </Link>
                  </div>
                  <div
                    onClick={toggleSideMenu}
                    className="bd-header-hamburger bd-header-3__hamburger offcanvas-open-btn is-black"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="bd-main-menu d-none d-lg-flex align-items-center is-white">
                  <nav id="mobile-menu-all">
                    <ul>
                      
                    </ul>
                  </nav>
                </div>
                <div className="bd-header__bottom-right d-none d-md-flex justify-content-end align-items-center">
                  <div className="bd-header-top-btn mr-30 d-none d-md-flex">
                    <Link href="/login" className="bd-btn fill-btn">
                      book now
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
