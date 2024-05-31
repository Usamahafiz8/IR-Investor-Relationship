import React from "react";

const StockInfoSection = ({ stockInfo }: any) => {
  const formatNumber = (num: any) => {
    if (num && num >= 1e9) {
      return `${(num / 1e9).toFixed(1)}B`;
    } else if (num >= 1e6) {
      return `${(num / 1e6).toFixed(1)}M`;
    } else if (num >= 1e3) {
      return `${(num / 1e3).toFixed(1)}k`;
    } else {
      return String(num);
    }
  };
  const formattedDate = (dateString: any) => {
    const date = new Date(dateString)?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };

  return (
    <section className="flex w-full flex-col items-center justify-center bg-gray-100 px-2 py-8">
      <div className="mb-4 text-gray-600">
        {formattedDate(stockInfo.date) || stockInfo.date}
      </div>
      <div className="grid gap-4 max-xxl:grid-cols-8 max-lg:grid-cols-6 max-md:grid-cols-2 xxl:grid-cols-8 ">
        <div>
          <div className="text-gray-600">Market/Symbol</div>
          <div className="font-semibold text-black">{stockInfo?.code}</div>
        </div>
        <div>
          <div className="text-gray-600">Open</div>
          <div className="font-semibold text-black">${stockInfo?.open}</div>
        </div>
        <div>
          <div className="text-gray-600">Close</div>
          <div className="font-semibold text-black">${stockInfo?.close}</div>
        </div>
        <div>
          <div className="text-gray-600">High</div>
          <div className="font-semibold text-black">${stockInfo?.high}</div>
        </div>
        <div>
          <div className="text-gray-600">Low</div>
          <div className="font-semibold text-black">${stockInfo?.low}</div>
        </div>
        <div>
          <div className="text-gray-600">Change</div>
          <div className="font-semibold text-black">${stockInfo?.change}</div>
        </div>
        <div>
          <div className="text-gray-600">Volume</div>
          <div className="font-semibold text-black">
            {formatNumber(stockInfo?.volume) || ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockInfoSection;
