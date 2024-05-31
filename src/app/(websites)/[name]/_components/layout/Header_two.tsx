import React from "react";
import MainHeaderTwo from "./header-two/Index";
import TopSection from "./header-two/TopSection";
import MenuSection from "./header-two/MenuSection";

const HeaderTwo = ({session}:any) => {
  return (
    <div>
      <TopSection session={session} />
      <MenuSection />
    </div>
  );
};

export default HeaderTwo;
