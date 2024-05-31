import React from "react";
import { getHistoricalData, getWebsite } from "../../utils/strapiApi";
import Quote from "../../_components/stockData/Quote";
import Chart from "../../_components/stockData/Chart";
import HistoricalDataTable from "../../_components/stockData/HistoricalData";

export default async function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const website = await getWebsite(params?.name?.toUpperCase());
  let historicalData;
  if(params?.route === "historical-data"){
    historicalData = await getHistoricalData(website?.data[0]?.attributes?.ticker,website?.data[0]?.attributes?.country)
  }


  return (
    <div className="flex w-full justify-center">

      {params?.route === "quote" && <Quote websiteInfo={website} />}
      {params?.route === "charts" && <Chart websiteInfo={website} />}
      {params?.route === "historical-data" &&<HistoricalDataTable data={historicalData} websiteInfo={website} /> }
    </div>
  );
}
