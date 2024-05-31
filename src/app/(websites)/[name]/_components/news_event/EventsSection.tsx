import React from 'react';
import { FaArrowRight, FaRss } from 'react-icons/fa';
import Pagination from '../Pagination';
import Link from 'next/link';


const EventsSection = ({data}:any) => {

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
            {data?.data?.length > 0 && data?.data?.map((news: any, index: any) => {
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
            {data?.data?.length === 0 && <div className='pt-20 text-md'  >
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
              {Array.from({ length: data?.meta?.pagination?.pageCount }, (_, i) => (
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
            <Pagination totalPages={data?.meta?.pagination?.pageCount} />
            <span className="flex items-center text-black hover:underline">
              News RSS <FaRss className="ml-2" />
            </span>
          </div>
        </div>
      </section>
    );
};

export default EventsSection;
