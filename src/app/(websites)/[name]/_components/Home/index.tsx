"use client"
import React, { useContext, useEffect } from 'react';
import NewsAera from '../Posts/NewsAera';
import Banner from '../Banner';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import OverviewDescription from '../OwerviewDescription';
import CompanyOverViewContent from '../CompanyOverViewContent';
import LatestNewsSection from './LatestNews';
import PresentationsAndEventsSection from './PresentationsAndEventsSection';
import FinancialResultsSection from './FinancialResultsSection';
import EmailSection from './Email';
import StockInfoSection from './StockInfoSection';
import IRContactsSection from './IRContactsSection';
import OverviewSection from '../Owerview';


const Home= ({websiteNews,websiteInfo,presesntations,events,tickerDetail}:any) => {

  return (
    <div className='min-h-screen flex flex-col max-lg:w-full items-center justify-between py-1 xl:w-10/12 xxl:w-3/4 '>
      <LatestNewsSection data={websiteNews} websiteInfo={websiteInfo} />
      <PresentationsAndEventsSection websiteInfo={websiteInfo} presentations={presesntations} events={events} />
      <FinancialResultsSection/>
      <EmailSection/>
      {/* <OverviewDescription /> */}
    {tickerDetail && <StockInfoSection stockInfo={tickerDetail} />}
      {/* <IRContactsSection/> */}
      {/* <Banner Heading={'Overview '} /> */}
      <CompanyOverViewContent/>
    </div>
  );
}

export default Home;
