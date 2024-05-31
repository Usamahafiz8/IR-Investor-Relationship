"use client"
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useContext } from 'react';

const NewsEvents = () => {

  const { websiteInfo,pageName,updatePageName, updateTabName } = useContext(AppContext) as AppContextType

  const recentNews = [
    {
      date: 'May 14, 2024 9:30am EDT',
      title: 'Garmin Collaborates with LTRY to Develop Next Generation Nano-Imprinted Waveguide with microLED based Display Systems',
    },
    {
      date: 'May 10, 2024 8:00am EDT',
      title: 'LTRY to Bring New Low Cost, Full Color Waveguides to Display Week 2024',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Jun 13, 2024 10:30 am EDT',
      title: '2024 Annual Meeting of Stockholders',
    },
  ];

  const latestPresentation = [
    {
      date: 'Apr 15, 2024',
      title: 'Earnings Presentation April 2024',
    },
  ];

  return (
    <div>
      {/* Red Banner */}
      {/* <div className='h-16 bg-red-600'></div> */}

      {/* News and Events Section */}
      <div className='container mx-auto my-4 px-4'>
        {/* Recent News */}
        <div className='mb-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>RECENT NEWS</h2>
            <a href="#" className='text-gray-600 hover:underline'>
              VIEW ALL NEWS &#8594;
            </a>
          </div>
          {recentNews.map((item, index) => (
            <div key={index} className='my-4'>
              <div className='text-gray-600'>{item.date}</div>
              <div className='text-black text-xl'>
                <a href='#' className='hover:underline'>
                  {item.title}
                </a>
              </div>
              {index < recentNews.length - 1 && <hr className='my-4' />}
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className='mb-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>UPCOMING EVENTS</h2>
            <a href='#' className='text-gray-600 hover:underline'>
              VIEW ALL EVENTS &#8594;
            </a>
          </div>
          {upcomingEvents.map((item, index) => (
            <div key={index} className='my-4'>
              <div className='text-gray-600'>{item.date}</div>
              <div className='text-black text-xl'>
                <a href='#' className='hover:underline'>
                  {item.title}
                </a>
              </div>
              {index < upcomingEvents.length - 1 && <hr className='my-4' />}
            </div>
          ))}
        </div>

        {/* Latest Presentation */}
        <div className='mb-8'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>LATEST PRESENTATION</h2>
            <a href='#' className='text-gray-600 hover:underline'>
              VIEW ALL PRESENTATIONS &#8594;
            </a>
          </div>
          {latestPresentation.map((item, index) => (
            <div key={index} className='my-4'>
              <div className='text-gray-600'>{item.date}</div>
              <div className='text-black text-xl'>
                <a href='#' className='hover:underline'>
                  {item.title}
                </a>
              </div>
              {index < latestPresentation.length - 1 && <hr className='my-4' />}
            </div>
          ))}
        </div>

        {/* Email Alerts */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold'>EMAIL ALERTS</h2>
          <p className='my-4 text-gray-600'>
            Sign up for email alerts for Press Releases & SEC Filings
          </p>
          <button className='px-4 py-2 border rounded-full text-black hover:bg-gray-200'>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
