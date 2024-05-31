import React from "react";
import blogs from "@/data/blogs-letest-news";
import Link from "next/link";
import HomeCustomSwiper from "./CustomSwiperHome";
import { getAllNews } from "@/utils/strapiApi";

const LetestNewsSection = async () => {
  const blogData = await getAllNews(1, 10, '');

  if (!blogData) {

    return (
      <>
        <section className="bd-blog-area pt-150 pb-150">
          <div className="container text-center">
            We are sorry, but We are working to provide you the latest news
          </div>
        </section>
      </>
    )
  }

  //     
  return (
    <>
      <section className="bd-blog-area pt-150 pb-150">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-md-8">
              <div className="bd-section__title-wrapper ">
                {/* <p className="bd-section__subtitle mb-20">News & Reports</p> */}
                <h3 className=" mb-55 mmb-10">
                  Our latest news
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bd-blog__btn mb-55">
                <Link href="/news" className="bd-btn-2">
                  View all News
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="bd-blog-2-active">
                <HomeCustomSwiper blog={blogData.data} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LetestNewsSection;
