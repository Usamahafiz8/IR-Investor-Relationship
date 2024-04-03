import React from "react";
import HomeMain from "@/components/Home/HomeMain";
import WrapperCommon from "@/layout/WrapperCommon";

const Home = () => {
  return (
    <>
      <WrapperCommon>
        <main>
          <HomeMain />
        </main>
      </WrapperCommon>
    </>
  );
};

export default Home;
