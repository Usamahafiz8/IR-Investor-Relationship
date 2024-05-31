"use client"
import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";




const Pagination = ({ totalPages }:any) => {
  const router = useRouter();
  const pathname = usePathname();
  const paginationRef = useRef<HTMLDivElement>(null);
  const [visibleButtons, setVisibleButtons] = useState<number>(8);
  const search = useSearchParams();
  const currentPage = Number(search?.get("page")) || 1;

  useEffect(() => {
    const updateVisibleButtons = (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      const containerWidth = entry.contentRect.width;
      const buttonWidth = 40; // Adjust this width as necessary
      const newVisibleButtons = Math.floor(containerWidth / buttonWidth);
      setVisibleButtons(newVisibleButtons);
    };
  
    const resizeObserver = new ResizeObserver(updateVisibleButtons);
    const currentPaginationRef = paginationRef.current; // Capture the current ref value
  
    if (currentPaginationRef) {
      resizeObserver.observe(currentPaginationRef);
    }
  
    return () => {
      if (currentPaginationRef) {
        resizeObserver.unobserve(currentPaginationRef);
      }
    };
  }, []);
  

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}/?page=${newPage}`);
  };

  const handlePrevClick = () => {
    handlePageChange(Math.max(1, currentPage - 1));
  };

  const handleNextClick = () => {
    handlePageChange(Math.min(totalPages, currentPage + 1));
  };

  // Calculate start and end pages
  let startPage = Math.max(1, currentPage - Math.floor(visibleButtons / 2));
  let endPage = Math.min(totalPages, startPage + visibleButtons - 1);

  // Ensure the range adjusts when the endPage goes beyond totalPages
  if (endPage > totalPages) {
    startPage = Math.max(1, totalPages - visibleButtons + 1);
    endPage = totalPages;
  }

  // Ensure the range adjusts when startPage is less than 1
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(visibleButtons, totalPages);
  }
  const pageRange = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div
      ref={paginationRef}
      className="flex items-center justify-center my-4 space-x-1"
    >
      {currentPage > 1 && (
        <>
          <div
            className="w-5 h-8 p-3 border border-solid border-gray-300 rounded cursor-pointer mx-1 flex items-center justify-center"
            onClick={handlePrevClick}
          >
            &lt;
          </div>
          <div
            className="w-5 h-8 p-3 border border-solid border-gray-300 rounded cursor-pointer mx-1 flex items-center justify-center"
            onClick={() =>
              handlePageChange(currentPage - 1 > 1 ? currentPage - 2 : 1)
            }
          >
            &lt;&lt;
          </div>
        </>
      )}
      {pageRange.map((pageNumber: number) => (
        <Link
          href={`${pathname}/?page=${pageNumber}`}
          key={pageNumber}
          className={`w-6 h-8 p-3 border border-solid border-gray-300 rounded gap-3 flex items-center justify-center cursor-pointer ${
            pageNumber === currentPage
              ? "bg-[#1c1d1d] text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Link>
      ))}
      {currentPage < totalPages && (
        <>
          <div
            className="w-5 h-8 p-3 border border-solid border-gray-300 rounded cursor-pointer mx-1 flex items-center justify-center"
            onClick={handleNextClick}
          >
            &gt;
          </div>
          <div
            className="w-5 h-8 p-3 border border-solid border-gray-300 rounded cursor-pointer mx-1 flex items-center justify-center"
            onClick={() =>
              handlePageChange(
                currentPage + 1 < totalPages ? currentPage + 2 : totalPages
              )
            }
          >
            &gt;&gt;
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
