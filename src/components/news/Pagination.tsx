import React from "react";
import Link from "next/link";

const Pagination = ({ totalPages, currentPage }: any) => {
  // Generate an array of page numbers from 1 to totalPages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bd-blog-pagination pt-20">
        <div className="row">
                  <div className="col-12">
                    <div className="bd-blog-pagination pt-20">
                      <ul className="justify-content-center">
                        <li><Link className="next page-numbers" href="#">
                          <i className="fa-sharp fa-solid fa-angle-left"></i>
                        </Link>
                        </li>
                        <li><span aria-current="page" className="page-numbers current">01</span></li>
                        <li><Link className="page-numbers" href="#">02</Link></li>
                        
                        <li><Link className="page-numbers" href="#">...</Link></li>
                        
                        <li><Link className="page-numbers" href="#">08</Link></li>
                        <li><Link className="page-numbers" href="#">09</Link></li>
                        <li><Link className="next page-numbers" href="#">
                          <i className="fa-sharp fa-solid fa-angle-right"></i>
                        </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
      <ul className="justify-content-center">
        <li>
          {/* Link to navigate to the previous page */}
          <Link href={`/?page=${currentPage - 1}`}>
            {/* <a className="next page-numbers"> */}
              <i className="fa-sharp fa-solid fa-angle-left"></i>
            {/* </a> */}
          </Link>

        </li>
        {/* Map through the pages array and create a link for each page */}
        {pages.map((page) => (
          <li key={page}>
            {/* Highlight the current page */}
            {currentPage === page ? (
              <span aria-current="page" className="page-numbers current">
                {page}
              </span>
            ) : (
              <Link href={`/?page=${page}`}>
                {/* <a className="page-numbers">
                    </a> */}
                    {page}
              </Link>
            )}
          </li>
        ))}
        <li>
          {/* Link to navigate to the next page */}
          <Link href={`/?page=${currentPage + 1}`}>
            {/* <a className="next page-numbers"> */}
              <i className="fa-sharp fa-solid fa-angle-right"></i>
            {/* </a> */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
