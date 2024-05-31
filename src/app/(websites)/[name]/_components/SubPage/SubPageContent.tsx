"use client";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import React, { useContext, useEffect } from "react";
// import NewsOverview from "../news/NewsOverview"
import NewsOverview from "../news_event/Overview";
import PressRelease from "../news_event/PressRelease";
import IRCalendar from "../news_event/EventsSection";
import CompanyOverview from "../company_info/CompanyOverview";
import ShareHoldersLetter from "../company_info/ShareHoldersLetter";
import Presentations from "../company_info/Presentatoin";
import ExecutiveTeam from "../company_info/ExecutiveTeam";
import FAQSection from "../company_info/FAQ";
import HistorySection from "../company_info/CompanyHistory";
import { useParams } from "next/navigation";

const SubPageContent = ({ TabName = "" }: any) => {
  const {
    updateTabName,
    pageName,
    tabName,
    websiteInfo,
    websiteName,
    updateWebsiteinfo,
    updatePageName,
  } = useContext(AppContext) as AppContextType;

  const params = useParams();

  useEffect(() => {
    if (websiteInfo?.attribute && TabName.length > 0) {
      updateTabName(TabName);
    }
  }, [TabName,websiteInfo?.attribute,updateTabName]);

  useEffect(() => {
    if (params && (!pageName || tabName)) {
      updateTabName(params?.subpage);
      updatePageName(params?.websiteIndividualRoute);
    }
  }, [params, tabName, pageName,updatePageName,updateTabName]);

  useEffect(() => {

    async function getWebsiteData() {
        const info = {
          websiteName: websiteName,
        };
        const website = await fetch("/api/get-website", {
          method: "POST",
          body: JSON.stringify(info),
        });

        if (website) {
          const websiteData = await website.json();
          await updateWebsiteinfo(websiteData.response.data[0]);
        }
      
    }
    
if(websiteName && !websiteInfo?.attributes){
  getWebsiteData();
}
  }, [websiteName, websiteInfo?.attributes,updateWebsiteinfo]);

  return (
    <div className=" flex justify-center w-full">
      {/* /////////////////// news & Events ////////////////// */}

      {pageName === "news-events" &&
        ((tabName == "overview" && <NewsOverview />) ||
          (tabName == "press-releases" && <PressRelease />) ||
          (tabName == "ir-calendar" && <IRCalendar />))}

      {pageName === "Company-info" &&
        ((tabName == "overview" && <CompanyOverview />) ||
          (tabName == "shareholder-letter" && <ShareHoldersLetter />) ||
          (tabName == "presentations" && <Presentations />) ||
          (tabName == "executive-team" && <ExecutiveTeam />) ||
          (tabName == "FAQ" && <FAQSection />) ||
          (tabName == "Company-history" && <HistorySection />))}
    </div>
  );
};

export default SubPageContent;
