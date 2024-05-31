import React from "react";
import CommonBanner from "../common/Banner";
import ReportsAera from "./ReportsAera";
import CommonSearch from "../common/search/SearchField";

const ReportsMain = ({ currentPage, searchQuery }: any) => {

  return (
    <>
      <CommonBanner Heading={"Research Reports"} />
      <div className="bd-blog-3-sidebar-area x-clip pt-50 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-blog-3-sidebar-wrapper mb-60">
                <CommonSearch navigate={'reports'} />

              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportsAera currentPage={currentPage} searchQuery={searchQuery} />
    </>
  );
};

export default ReportsMain;
