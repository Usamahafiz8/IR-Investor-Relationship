"use client"

import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { getWebsite } from '../utils/strapiApi';
import { useParams } from 'next/navigation';

const GetwebsiteInfo = () => {
  const { websiteInfo, updateWebsiteinfo } = useContext(AppContext) as AppContextType;
  const params = useParams();

  // useEffect(() => {
  //   let isMounted = true; // To handle component unmounting

  //   const fetchWebsiteInfo = async () => {
  //     if (!websiteInfo) {
  //       const paramName = Array.isArray(params?.name) ? params.name[0] : params?.name;
  //       if (typeof paramName === 'string') {
  //         const website = await getWebsite(paramName.toUpperCase());
  //         if (website && isMounted) {
  //           updateWebsiteinfo(website?.data[0]);
  //         }
  //       }
       
  //     }
  //   };

  //   fetchWebsiteInfo();

  //   return () => {
  //     isMounted = false; // Cleanup function to handle component unmount
  //   };
  // }, [websiteInfo, params?.name, updateWebsiteinfo]);

  return (
    <div></div>
  );
};

export default GetwebsiteInfo;
