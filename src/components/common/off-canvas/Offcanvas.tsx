"use client";

import React, { useContext } from "react";
import logo from "../../../../public/assets/img/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./MobileMenu";
const OffCanvasMain = () => {
  const { sideMenuOpen, toggleSideMenu } = useContext(AppContext) as AppContextType
  return (
    <>
      <div className={`offcanvas__area ${sideMenuOpen ? "offcanvas-opened" : " "}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" style={{
                    width:"60px",
                    height:"60px"
                  }} />
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
                    <MobileMenu />
                  </ul>
                </nav>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div onClick={toggleSideMenu} className={`body-overlay ${sideMenuOpen ? "opened" : " "}`}></div>
    </>
  );
};

export default OffCanvasMain;
