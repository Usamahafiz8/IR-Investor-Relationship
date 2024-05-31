import Image from 'next/image';
import React from 'react';
import MarkdownComponent from '../MarkDownStyle';

const HistorySection = ({companyInfo}:any) => {
  return (
    <section className="py-16 bg-white w-full flex items-center justify-center xl:pe-1 lg:w-3/4 max-lg:w-3/4 xl:w-3/4 max-xl:w-3/4 xxl:px-8">
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">OUR HISTORY</h2>
      <Image
        src={companyInfo?.data[0]?.attributes?.image || "https://d1io3yog0oux5.cloudfront.net/_b2d4384c89ddf33ed811cfc8f3a979f6/vuzix/db/342/2696/background_image.jpg"} // Replace with actual image URL
        alt="Our History"
        width={500} height={500}
        className="w-full mb-4"
      />
      <MarkdownComponent content={companyInfo?.data[0]?.attributes?.history || ""}/>
    </div>
    </section>
  );
};

export default HistorySection;
