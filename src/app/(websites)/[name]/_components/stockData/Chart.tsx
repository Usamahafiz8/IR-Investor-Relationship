"use client";
import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Chart = ({ websiteInfo }: any) => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:pe-1 xxl:px-8">
      <div className="flex h-full w-full flex-col gap-3 px-4">
        <AdvancedRealTimeChart theme="light" autosize symbol={`${websiteInfo?.data[0]?.attributes?.exchange}:${websiteInfo?.data[0]?.attributes?.ticker}`}></AdvancedRealTimeChart>
      </div>
    </section>
  );
};

export default Chart;
