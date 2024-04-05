import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WellcomeAreaSec from "../Home2/WellcomeAreaSec";
import AwardSec from "./AwardSec";
import PricingPlanSec from "../Home-4/PricingPlanSec";
import TestimonailSec from "../Home-3/TestimonailSec";
import HrLine from "../common/HrLine/HrLine";
import ServicesSlideSce from "../Home-4/ServicesSlideSce";
import FaqTwo from "./FaqTwo";
import Brands from "./Brands";

import AnalyticBanner from "./Banner";
import CommonBanner from "../common/Banner";

const AnalyticMain = () => {
  return (
    <>
      <CommonBanner Heading={"Analyst Bios"} />
      {/* <AnalyticBanner /> */}
      {/* <Breadcrumb title="About Us" /> */}
      {/* <WellcomeAreaSec/> */}
      {/* <AwardSec/> */}
      {/* <PricingPlanSec classbg="pricing-plan-area pricing-spacing theme-bg-2" classbgDiv="bd-price-item white-bg"/> */}
      {/* <TestimonailSec/> */}
      {/* <HrLine/> */}
      {/* <ServicesSlideSce customeClass="pt-135"/> */}
      <FaqTwo />
      {/* <Brands bgColor=" " pt="pt-150" pb="pb-150"/> */}
    </>
  );
};

export default AnalyticMain;