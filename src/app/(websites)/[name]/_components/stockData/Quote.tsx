"use client";
import React from "react";
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { FundamentalData } from "react-ts-tradingview-widgets";

const Quote = ({ websiteInfo }: any) => {

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:pe-1 xxl:px-8">
      <div className="flex h-full w-full flex-col gap-3 px-4">
        <SymbolOverview
          colorTheme="light"
          autosize
          chartType="candlesticks"
          downColor="#800080"
          borderDownColor="#800080"
          wickDownColor="#800080"
          dateFormat="dd MMM 'yy"
          symbols={[
            [
              `${websiteInfo?.data[0]?.attributes?.exchange}`,
              `${websiteInfo?.data[0]?.attributes?.ticker}`,
            ],
          ]}
        />
        {/* <MiniChart colorTheme="light" width="100%" dateRange="12M"></MiniChart> */}
        <SymbolInfo
          colorTheme="light"
          autosize
          symbol={`${websiteInfo?.data[0]?.attributes?.exchange}:${websiteInfo?.data[0]?.attributes?.ticker}`}
        ></SymbolInfo>

        <FundamentalData
        // autosize
          colorTheme="light"
          height={600}
          width="100%"
          symbol={`${websiteInfo?.data[0]?.attributes?.exchange}:${websiteInfo?.data[0]?.attributes?.ticker}`}
        ></FundamentalData>
      </div>
    </section>
  );
};

export default Quote;
