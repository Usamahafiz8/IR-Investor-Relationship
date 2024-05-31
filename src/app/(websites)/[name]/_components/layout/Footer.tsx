"use client"
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useContext } from 'react';

const WebsiteFooter = () => {

  
  const {
    websiteInfo,
    pageName
  } = useContext(AppContext) as AppContextType;
  return (
    <footer className='w-full px-2'>
      {/* Email Alerts Section */}
      <div className="bg-red-600 w-full flex justify-center">
      <div className=" flex flex-col items-center justify-between gap-4 p-4 text-white w-full lg:flex-row px-10 lg:mx-3 max-xl:w-10/12 xl:pe-1 xxl:w-3/4 xxl:px-8">
    


        {/* <div className=" container text-white p-4 flex justify-between items-center 
        md:flex-col
        sm:flex-col
        lg:flex-row

        ">
          <div className="flex items-center
          justify-center
          md:flex-col
        sm:flex-col
        gap-4">
            <span className="font-bold">Email Alerts</span>
            <span className="ml-4">Join the newsletter to get the latest on Vuzix</span>
          </div>
          <button className=" border border-white px-6 py-2  hover:bg-white hover:text-red-600">
            SIGN UP
          </button>
        </div> */}

  
          <div className="flex items-center
          justify-center
          flex-col
          lg:flex-row
          gap-2">
            <span className="font-bold">Email Alerts</span>
            <span className="text-center text-sm">Join the newsletter to get the latest</span>
          </div>
          <button className=" border border-white px-6 py-2  hover:bg-white hover:text-red-600">
            SIGN UP
          </button>
     

     
        </div>
        </div>
      <div className=' flex bg-white justify-center lg:justify-between flex-col  text-black p-4 w-full '>
          {/* <button className=" border border-black px-6 py-2  hover:bg-black hover:text-white lg:h-12">
            CONTACT US
          </button> */}
   
        <div className="w-full">
          <div className=" flex flex-col text-left">
            <h4 className="font-bold">LEGAL</h4>
            <div className="flex items-center justify-between w-full px-2 my-1">
            <ul className="list-none text-xs">
              <li>
                <Link href={`/${websiteInfo?.attributes?.ticker}/privacy-policy`}>
               Privacy Policy
              </Link>
               </li>
              <li>
              <Link href={`/${websiteInfo?.attributes?.ticker}/disclaimer`}>
                Disclaimer
                </Link>
                </li>
              <li>
              <Link href={`/${websiteInfo?.attributes?.ticker}/sitemap`}>
                
                Sitemap
                </Link>
                </li>
            </ul>
          <div className="text-right">
            <Link href={`/${websiteInfo?.attributes?.ticker}`} className="text-xs hover:text-blue-600">
              &copy; 2024 {websiteInfo?.attributes?.name}.
            </Link>
          </div>
          </div>
            </div>


        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;











