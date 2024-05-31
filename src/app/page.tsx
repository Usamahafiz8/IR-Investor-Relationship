import React from "react";
import HomeMain from "@/components/Home/HomeMain";
import WrapperCommon from "@/layout/WrapperCommon";
import HeaderTwo from "@/layout/header/HeaderTwo";
import Footer from "@/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <HeaderTwo />
      <HomeMain />
      <Footer customeClass="" />;
    </>
  );
};

export default Home;
