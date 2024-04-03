
import React from "react";
import HeroSection from "./HeroSection";
import FeatureArea from "./FeatureArea"
import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import RoomSuiteSection from "./RoomSuiteSection";
import SpeacilaFeaturesSection from "./SpeacilaFeaturesSection";
import FeedBackSection from "./FeedBackSection";
import OffersSection from "./OffersSection";
import LetestNewsSection from "./LetestNewsSection";
import GallarySection from "./GallarySection";
const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <FeatureArea/>
      <AboutSection/>
      <AmenitiesSection/>
      <RoomSuiteSection/>
      <SpeacilaFeaturesSection clssOverflow=" "/>
      <FeedBackSection/>
      <GallarySection/>
      <OffersSection/>
      <LetestNewsSection/>
    </>
  );
};

export default HomeMain;
