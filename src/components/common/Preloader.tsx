import Image from "next/image";
import React from "react";
import preloaderImg from "../../../public/assets/img/logo/preloader.png";
const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="preloader">
          <div className="preloader-thumb-wrap">
            <div className="preloader-thumb">
              <div className="preloader-border"></div>
              <Image src={preloaderImg} alt="img not found!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
