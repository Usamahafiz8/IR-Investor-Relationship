"use client"
import React, { useContext } from "react";
import Link from "next/link";
import LoginForm from "../../LoginForm";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";

const TopSection = ({session}:any) => {
  const { websiteInfo } = useContext(AppContext) as AppContextType

  return (
    <div className="flex justify-center bg-[#1c1d1d] py-3 text-white">
      <div className="flex w-full mx-3 items-center justify-between lg:mx-3 xl:w-10/12 xl:pe-1 xxl:w-3/4 xxl:px-8">
        <Link href={'/'} className="text-[16px]">Investor Radar</Link>
        <LoginForm data={websiteInfo} session={session} />
      </div>
    </div>
  );
};

export default TopSection;
