import Image from 'next/image';
import React from 'react';
import { FaFilePdf, FaFileAlt, FaFileAudio, FaFileCode, FaFileArchive, FaArrowRight } from 'react-icons/fa';

const financialResults = [
  {
    title: 'Earnings Release',
    link: '#',
    formats: [
      { type: 'html', icon: FaFileAlt },
      { type: 'pdf', icon: FaFilePdf }
    ]
  },
  {
    title: 'Earnings Webcast',
    link: '#',
    formats: [
      { type: 'audio', icon: FaFileAudio }
    ]
  },
  {
    title: '10-Q',
    link: '#',
    formats: [
      { type: 'html', icon: FaFileAlt },
      { type: 'pdf', icon: FaFilePdf }
    ]
  },
  {
    title: 'XBRL',
    link: '#',
    formats: [
      { type: 'xsl', icon: FaFileCode },
      { type: 'zip', icon: FaFileArchive }
    ]
  }
];

const FinancialResultsSection = () => {
  return (
    <section className="py-16 px-2 w-full bg-white">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">LATEST FINANCIAL RESULTS</h2>
            <div className="mb-8 text-center">
              <p className="text-gray-600 mt-4">Coming soon!</p>
            </div>
            {/* <div className="mb-8">
              <h3 className="text-2xl font-semibold">Q1 2024</h3>
              <p className="text-gray-600">Quarter Ended Mar 31, 2024</p>
            </div>
            <div className="space-y-4">
              {financialResults.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-lg font-semibold hover:underline">
                    {item.title}
                  </span>
                  <div className="flex space-x-4">
                    {item.formats.map((format, i) => {
                      const Icon = format.icon;
                      return (
                        <span key={i} className="text-gray-600 hover:text-black">
                          <Icon />
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="flex items-center justify-center">
            <div className='max-w-full h-full w-100 bg-red-200'>

            <Image src={"https://d1io3yog0oux5.cloudfront.net/_b2d4384c89ddf33ed811cfc8f3a979f6/vuzix/db/391/2901/image.jpg" || ""} width={500} height={500} alt="Financial Results Image" className="object-contain w-full" />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8">
          <h2 className="text-3xl font-bold mb-4">LATEST ANNUAL FILING</h2>
          <p className="text-gray-600 mb-4">For Fiscal Year Ending Dec 31, 2023</p>
          <span className="inline-flex items-center border border-black px-6 py-2  hover:bg-black hover:text-white">
            VIEW 10-K <FaArrowRight className="ml-2" />
          </span>
        </div>
    
    </section>
  );
};

export default FinancialResultsSection;
