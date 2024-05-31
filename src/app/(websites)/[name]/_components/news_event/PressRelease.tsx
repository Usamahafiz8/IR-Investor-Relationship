'use client'
import React, { useState } from 'react';
import { FaRss } from 'react-icons/fa';
import Pagination from '../Pagination';
import Link from 'next/link';

const newsItems = [
  {
    date: 'May 14, 2024 9:30 am EDT',
    title: 'Garmin Collaborates with LTRY to Develop Next Generation Nano-Imprinted Waveguide with microLED based Display Systems',
    category: 'Business',
    year: 2024,
    link: '#'
  },
  {
    date: 'May 10, 2024 8:00 am EDT',
    title: 'LTRY to Bring New Low Cost, Full Color Waveguides to Display Week 2024',
    category: 'Technology',
    year: 2024,
    link: '#'
  },
  {
    date: 'May 9, 2024 4:00 pm EDT',
    title: 'LTRY Reports First Quarter 2024 Results',
    category: 'Finance',
    year: 2024,
    link: '#'
  },
  {
    date: 'May 2, 2024 11:30 am EDT',
    title: 'LTRY Schedules Conference Call to Discuss First Quarter 2024 Financial Results and Business Update',
    category: 'Conference',
    year: 2024,
    link: '#'
  },
  {
    date: 'Apr 9, 2023 9:15 am EDT',
    title: 'LTRY Schedules Conference Call to Discuss Fourth Quarter and Full Year 2023 Financial Results and Business Update',
    category: 'Conference',
    year: 2023,
    link: '#'
  },
  {
    date: 'Apr 8, 2023 8:45 am EDT',
    title: 'LTRY Commences Online Sales of Its MicroLED Binocular Waveguide Smart Safety Glasses',
    category: 'Technology',
    year: 2023,
    link: '#'
  }
];


const ITEMS_PER_PAGE = 4;


const PressRelease = ({newsPosts,pageCount}:any) => {

    const [selectedYear, setSelectedYear] = useState('All Years');
    const [selectedCategory, setSelectedCategory] = useState('All Releases');
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(event.target.value);
      setCurrentPage(1); // Reset to first page
    };
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(event.target.value);
      setCurrentPage(1); // Reset to first page
    };
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const filteredNewsItems = newsItems.filter(item => {
      const yearMatch = selectedYear === 'All Years' || item.year.toString() === selectedYear;
      const categoryMatch = selectedCategory === 'All Releases' || item.category === selectedCategory;
      return yearMatch && categoryMatch;
    });
  
    // @ts-ignore
    const uniqueYears = [...new Set(newsItems.map(item => item.year.toString()))];
    const totalPages = Math.ceil(newsPosts.data.length / ITEMS_PER_PAGE);
    const paginatedItems = filteredNewsItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  


    return (
      <section className="w-full flex items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
        <div className="px-4 ">
          {/* <div className="flex space-x-4 mb-8">
            <select value={selectedYear} onChange={handleYearChange} className="border p-2">
              <option>All Years</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select value={selectedCategory} onChange={handleCategoryChange} className="border p-2">
              <option>All Releases</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Conference">Conference</option>
            </select>
          </div> */}
          <div className="flex flex-col gap-3">
            {newsPosts?.data?.length > 0 && newsPosts?.data?.map((news: any, index: any) => {
              const formattedDate = new Date(
                news?.attributes?.createdAt,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                // <Link href={`${pageCount ? "?page=" + pageCount + "&" : "?"}details=${news?.attributes?.title?.replace(/ /g, "-")}/${news?.id}`} key={index} className="border-b pb-4">
                <Link href={`?details=${news?.attributes?.title?.replace(/ /g, "-")}`} key={index} className="border-b pb-4 flex flex-col gap-2">
                  <span className="block text-gray-600">
                    {formattedDate || "-"}
                  </span>
                  <span className="text-lg font-semibold hover:underline">
                    {news?.attributes?.title || "-"}
                  </span>
                  <span className="text-sm">
                    {news?.attributes?.description || "-"}
                  </span>
                </Link>
              );
            })}
              {newsPosts?.data?.length === 0 && <div className='pt-20 text-md '  >
      Please check back soon for updates.
    </div> }
          </div>
          <div className="flex justify-between items-center mt-8">
            {/* <div>
              <button 
                className={`p-2 ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`} 
                disabled={currentPage === 1} 
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              {Array.from({ length: newsPosts?.meta?.pagination?.pageCount }, (_, i) => (
                <button 
                  key={i} 
                  className={`p-2 mx-1 ${currentPage === i + 1 ? 'text-black font-bold' : 'text-black'}`} 
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                className={`p-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`} 
                disabled={currentPage === totalPages} 
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div> */}
            <Pagination totalPages={newsPosts?.meta?.pagination?.pageCount} />
            <span className="flex items-center text-black hover:underline">
              News RSS <FaRss className="ml-2" />
            </span>
          </div>
        </div>
      </section>
    );
  };

export default PressRelease;
