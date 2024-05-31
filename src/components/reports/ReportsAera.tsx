import React from "react";
import Link from "next/link";
import { getAllReports } from "../../utils/strapiApi";

const ReportsAera = async ({ currentPage, searchQuery }: any) => {
  const reportsData = await getAllReports(currentPage, 10, searchQuery);

  const totalPages = reportsData ? reportsData.meta.pagination.pageCount : 0;

  if (!reportsData) {
    return (
      <h6 className="container text-center w-full p-24">
        Loading...
      </h6>
    );
  }

  if (reportsData.data.length === 0) {
    return (
      <h6 className="container text-center w-full p-24">
        No News data Found!
      </h6>
    );
  }

  const renderPageNumbers = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages <= 5) {
      return pages.map((page) => (
        <li key={page}>
          {currentPage === page ? (
            <span className="page-numbers current">{page}</span>
          ) : (
            <Link href={`/reports/?page=${page}`} className="page-numbers">
              {page}
            </Link>
          )}
        </li>
      ));
    } else {
      const firstPage = currentPage > 2 ? currentPage - 2 : 1;
      const lastPage = currentPage < totalPages - 2 ? currentPage + 2 : totalPages;
      const pageNumbers = [];
      if (currentPage > 3) {
        pageNumbers.push(
          <li key={1}>
            <Link className="next page-numbers" href={`/reports/?page=${1}`}>
              {1}
            </Link>
          </li>
        );
        pageNumbers.push(<li key="ellipsis-prev"><span>...</span></li>);
      }
      for (let i = firstPage; i <= lastPage; i++) {
        pageNumbers.push(
          <li key={i}>
            {currentPage === i ? (
              <span aria-current="page" className="page-numbers current">
                {i}
              </span>
            ) : (
              <Link className="next page-numbers" href={`/reports/?page=${i}`}>
                {i}
              </Link>
            )}
          </li>
        );
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push(<li key="ellipsis-next"><span>...</span></li>);
        pageNumbers.push(
          <li key={totalPages}>
            <Link className="next page-numbers" href={`/reports/?page=${totalPages}`}>
              {totalPages}
            </Link>
          </li>
        );
      }
      return pageNumbers;
    }
  };


  return (
    <section className="bd-blog-3-sidebar-area x-clip  pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bd-blog-3-sidebar-wrapper mb-60">
              {/* <div className="bd-blog-3-sidebar mb-50">
                <h5 className="bd-blog-3-sidebar-title">Search</h5>
                <div className="bd-blog-3-sidebar-content">
                  <div className="bd-blog-3-search">
                    <SearchNews  />
                  </div>
                </div>
              </div> */}
              <div className="bd-blog-3-sidebar mb-50">
                <h5 className="bd-blog-3-sidebar-title">Latest News</h5>
                <div className="bd-blog-3-latest">
                  <ul>
                    {reportsData.data.map((item: any) => (
                      <li key={item.id}>
                        <div className="bd-blog-3-latest-content">
                          <div className="bd-blog-3-latest-title-wrap">
                            <div className="bd-blog-3-latest-meta">
                              <i className="fa-solid fa-calendar-days"></i>
                              <span>
                                {new Date(item.attributes.publishedAt).toDateString()}
                              </span>
                            </div>
                            <h6 className="bd-blog-3-latest-title">
                              <Link href={`/reports/${item.id}`}>
                                {item.attributes.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="row">
                  <div className="col-12">
                    <div className="bd-blog-pagination pt-20">
                      <ul className="justify-content-center">
                        <li>
                          <Link className="next page-numbers" href={`/reports/?page=${currentPage - 1}`}>
                            <i className="fa-sharp fa-solid fa-angle-left"></i>
                          </Link>
                        </li>
                        {renderPageNumbers()}
                        <li>
                          <Link className="next page-numbers" href={`/reports/?page=${currentPage + 1}`}>
                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsAera;



