"use client";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../../public/assets/img/logo/investor-radar-logo.png";
import Image from "next/image";
import Link from "next/link";
import useScrollDirection from "@/hooks/stacky-header";
import Menu from "./Menu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import { usePathname } from "next/navigation";
import OffCanvasMain from "@/components/common/off-canvas/Offcanvas";

const HeaderTwo = () => {
  const pathName = usePathname();
  const { toggleSideMenu } = useContext(AppContext) as AppContextType;
  const scrollDirection = useScrollDirection(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="bd-header transparent-header">
          <div
            id="header-sticky"
            className={`bd-header-3 is-transparent ${
              scrollDirection === "down" ? "header-sticky" : " "
            }`}
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bd-header__bottom-left">
                    <div className="bd-header__logo">
                      <Link href="/">
                        <Image
                          style={{ width: "30%", height: "30%" }}
                          src={logo}
                          alt="image not found"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="bd-main-menu d-none d-lg-flex align-items-center is-white">
                    <nav id="mobile-menu">
                      <ul>
                        <Menu />
                      </ul>
                    </nav>
                  </div>
                  <div className="bd-header__bottom-right d-flex justify-content-end align-items-center">
                    <div
                      onClick={toggleSideMenu}
                      className="bd-header-hamburger offcanvas-open-btn d-xl-none"
                    >
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
      {isMobile && <OffCanvasMain />}
    </>
  );
};

export default HeaderTwo;
