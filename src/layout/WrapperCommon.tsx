"use client";
import React, { useEffect } from "react";
import OffCanvasMain from "@/components/common/off-canvas/Offcanvas";
import FooterTwo from "./footer/FooterTwo";
import HearderThree from "./header/HearderThree";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
import { animationCreate } from "@/utils/utils";
import Preloader from "@/utils/Preloader";
import useLoading from "@/hooks/useLoading";
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import HeaderFour from "./header/HeaderFour";
import Footer from "./footer/Footer";
import FooterThree from "./footer/FooterThree";
interface WrapperProps {
  children: React.ReactNode;
}
const WrapperCommon: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  const isLoading = useLoading(true, 100);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <BacktoTop />
          <HeaderTwo />
          {children}
          {/* <FooterThree /> */}

          {/* {(() => {
            switch (pathName) {
              case "/":
                return <HearderThree />;
              case "/home-two":
                return <HeaderTwo />;
              case "/home-four":
                return <HeaderFour />;
              default:
                return <HearderThree />;
            }
          })()} */}
          {/* <Footer customeClass="bd-footer bg-theme-2" />; */}
          {/* <FooterThree />; */}
          {/* <FooterTwo />; */}
          <Footer customeClass="bd-footer footer-bg" />;

          {/* {(() => {
            switch (pathName) {
              case "/":
                return 
              case "/home-two":
                return
              case "/home-four":
                return 
              default:
                return 
            }
          })()} */}

          {(pathName !== "/home-four" || window.innerWidth < 991) && (
            <OffCanvasMain />
          )}
        </>
      )}
    </>
  );
};

export default WrapperCommon;
