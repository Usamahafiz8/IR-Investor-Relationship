import React from "react";
import CommonBanner from "../common/Banner";
import NewsAera from "./NewsAera";
import CommonSearch from "../common/search/SearchField";

const NewsMain = ({ currentPage, searchQuery }: any) => {

  return (
    <>
      <CommonBanner Heading={"News"} />
      <div className="bd-blog-3-sidebar-area x-clip pt-50 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-blog-3-sidebar-wrapper mb-60">
                <CommonSearch navigate={'news'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsAera currentPage={currentPage} searchQuery={searchQuery} />
    </>
  );
};

export default NewsMain;
