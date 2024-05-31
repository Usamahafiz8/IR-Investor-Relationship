"use client"

import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import HeaderTwoMenu from "./Menu";
import React, { useContext } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useLocation } from 'react-use';

const BannerSection = () => {
  const { pageName } = useContext(AppContext) as AppContextType

  const location = useLocation()
  // const params=useParams()
  const name= HeaderTwoMenu.find((item) => item.link === pageName)
  
  
  interface ImageMap {
    [key: string]: string;
  }
  
  const Images: ImageMap = {
    "/": "/assets/img/website-images/overview-image.jpg",
    "news-events": "/assets/img/website-images/news-event-image.jpg",
    "company-info": "/assets/img/website-images/company-info.jpg",
    "reports-filing": "/assets/img/website-images/reports-filling.jpg",
    "stock-data": "/assets/img/website-images/stock-data-image.jpg",
    "investor-resources": "/assets/img/website-images/invest-resourses-image.jpg",
    "governance": "/assets/img/website-images/governance-image.jpg",
    "privacy-policy": "/assets/img/website-images/privacy-policy-image.jpg",
    "disclaimer": "/assets/img/website-images/privacy-policy-image.jpg",
    "sitemap": "/assets/img/website-images/privacy-policy-image.jpg",
  };
  

  const getBackgroundImage = (pageName: string): string => {
    // Use the pageName to fetch the corresponding image URL, or use a default image if not found
    return `url(${Images[pageName] || Images["/"]})`;
  };
  

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(pageName || ""),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: pageName === "/" ? '55vh':'35vh',
    width: '100%',
  };




  return (
    <div className={`text-white relative max-md:justify-center h-full flex ${pageName === "/" ? 'justify-center  text-center' : ""} max-lg:p-20 lg:p-20 max-md:p-16 p-32 w-full`} style={backgroundStyle}>
     {pageName === "/" ? <div className="flex flex-col justify-start max-md:w-full w-1/2 shadow-md">
    <span className="max-lg:text-xl lg:text-xl text-3xl font-bold max-lg:mb-1 lg:mb-1 mb-3 text-white">KEEP UP TO DATE AND</span>
    <span className="max-lg:text-xl lg:text-xl text-3xl font-bold max-lg:mb-1 lg:mb-1 mb-3 text-white">STAY INFORMED</span>
    <p className="max-lg:mb-2 lg:mb-2 xl:mb-5 max-xl:mb-5 text-white text-lg">Sign up for email alerts to receive company updates including press releases, filings and special announcements straight to your inbox.</p>
    <div className="max-lg:mt-1 lg:mt-1 mt-4 flex justify-center items-center">
      <button
        type="submit"
        className="group bg-transparent hover:!bg-white hover:!text-black text-white border border-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors duration-300"
      >
        SIGN UP TODAY
      </button>
    </div>
      </div> :<div className="flexh-full">
    <div className='flex items-start p-4 min-w-max xxl:m-20 lg:p-8 xl:p-12 text-white text-3xl font-bold w-full capitalize'>
      {location?.pathname?.split('/')?.filter(Boolean)[1]?.replace(/-/g, " ") || "Overview"}
    </div>
  </div>}
  </div>
  );
};

export default BannerSection;
