"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../../../public/assets/img/logo/logo.svg";
import Link from "next/link";
import useScrollDirection from "@/hooks/stacky-header";
import meneTwoData from "@/data/menu-data-2";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
const HeaderFour = () => {
  const {sideMenuOpen,toggleSideMenu} = useContext(AppContext) as AppContextType
  const [menuNum, setmenuNum] = useState<number>(0);
  const scrollDirection = useScrollDirection(null);
  const [active, setactive] = useState<boolean>(true);
  const handleOpenSubmenu = (id:number) => {
    setmenuNum(id)
    setactive(!active)
  };

  return (
    <>
      <div className="main-nav-wrapper">
        <div className={`main-nav-js ${sideMenuOpen ? "show-menu" : " "}`}>
          <div className="mobile-logo-area d-flex justify-content-between align-items-center">
            <div className="header-logo">
              <Link href="/" onClick={toggleSideMenu}>
                <Image
                  alt="image"
                  className="img-fluid"
                  src={logo}
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </div>
            <div className="menu-close-btn" onClick={toggleSideMenu}>
              <i className="fa-thin fa-xmark"></i>
            </div>
          </div>
          <div className="sidebar-menu-area">
            <ul className="menu-list">
              {meneTwoData.map((item) => (
                <li
                  key={item.id}
                  className={`menu-item ${
                    item.hasDropdown === true ? "menu-item-has-children" : " "
                  }`}
                  style={{
                    animation: sideMenuOpen
                      ? "0.4s ease 0.5s 1 normal forwards running navLinkFade"
                      : "",
                  }}
                >
                  <Link
                    href={item.link}
                    className="drop-down"
                    data-hover={item.title}
                    onClick={toggleSideMenu}
                  >
                    {item.title}
                  </Link>
                  {item.pluseInco === true && (
                    <i onClick={()=>handleOpenSubmenu(item.id)} className={`bi fa-light ${menuNum === item.id && active ? "fa-minus" : "fa-plus"}`}></i>
                  )}

                  {item.hasDropdown === true && (
                    <ul className="sub-menu" style={menuNum === item.id && active ? { display: "block" } : { display: "none" }}>
                    {item?.submenus?.map((i, index) => (
                      <li key={index}>
                        <Link onClick={toggleSideMenu} href={i.link}>{i.title}</Link>
                      </li>
                    ))}
                  </ul>
                  
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <header>
        <div className="bd-header transparent-header">
          <div
            className={`bd-header__top ${
              scrollDirection === "down" ? "header-sticky" : " "
            }`}
            id="header-sticky"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="bd-header-top-wrapper d-flex justify-content-between align-items-center">
                    <div className="bd-header-top-left order-2 order-lg-1">
                      <div
                        onClick={toggleSideMenu}
                        className="bd-header-hamburger mobile-menu-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="bd-header__logo order-1 order-lg-2">
                      <Link href="/">
                        <Image
                          src={logo}
                          style={{ width: "100%", height: "100%" }}
                          alt="image not found"
                        />
                      </Link>
                    </div>
                    <div  className="bd-header-top-right d-none d-lg-block order-3 order-lg-3">
                      <div className="bd-header-top__meta">
                        <span>
                          <i className="fa-solid fa-phone"></i> Call Us
                        </span>
                        <Link href="tel:2025550100">202-555-0100</Link>
                      </div>
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

export default HeaderFour;
