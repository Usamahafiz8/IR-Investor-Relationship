"use client";
import React, { useState } from "react";
import TopSection from "./TopSection";
import MenuSection from "./MenuSection";
import BannerSection from "./BannerSection";
import SubMenuSection from "./SubMenuSection";

const MainHeaderTwo = () => {
  return (
    <div className="relative">
      <TopSection />
      <MenuSection />
    </div>
  );
};

export default MainHeaderTwo;
