import React from "react";
import AboutSection from "./AboutSection";
import LetestNewsSection from "./LetestNewsSection";
import HomeBanner from "./Banner";
import HeroSection from "./HeroSection";
const HomeMain = () => {
  return (
    <>
    <HeroSection/>
      {/* <HomeBanner /> */}
      <AboutSection />
      <LetestNewsSection />
    </>
  );
};

export default HomeMain;
