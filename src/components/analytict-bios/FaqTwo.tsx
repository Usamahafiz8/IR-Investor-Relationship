// import { analystData } from "@/data/analyst-data";
// import { analystInterface } from "@/interFace/interFace";
import React from "react";
import AnalyticsItem from "./AnalyticsItem";
import { getAnalyst } from "@/utils/strapiApi";

const FaqTwo = async () => {

const AnalystData = await getAnalyst()
  console.log('alalyst');
  
  return (
    <>
      <section className="bd-faq-area pt-50 pb-150 p-relative">
        <div className="container">
          <div className="bd-faq-2 accordion ryl-accordion-space" id="accordionExample">
            <div className="wow fadeInUp" data-wow-delay=".5s">
              {AnalystData?.map((item: any, index:any) => <AnalyticsItem key={index} item={item.attributes} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqTwo;
