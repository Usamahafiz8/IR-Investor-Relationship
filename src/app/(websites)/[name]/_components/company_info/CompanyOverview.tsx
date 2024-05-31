"use client"
import React, { useContext } from 'react';
import MarkdownComponent from '../MarkDownStyle';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';

const  CompanyOverview = () => {

  const {websiteInfo } = useContext(
    AppContext,
  ) as AppContextType;


  return (
    <section className="py-16 bg-white w-full flex items-center justify-center xl:pe-1 lg:w-3/4 max-lg:w-3/4 xl:w-3/4 max-xl:w-3/4 xxl:px-8">
      <div className="px-4 flex flex-col gap-4">
        <span className='text-xl uppercase font-medium'>COMPANY PROFILE</span>
        <MarkdownComponent content={websiteInfo?.attributes?.content || ""} />
      
      </div>
    </section>
  );
};

export default  CompanyOverview;


