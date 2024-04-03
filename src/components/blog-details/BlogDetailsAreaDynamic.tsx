import blogs from "@/data/blogs-letest-news";
import BlogSearchTwo from "@/form/BlogSearchTwo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import thumb3 from "../../../public/assets/img/blog/comment-1.png";
import BlogContactForm from "@/form/BlogContactForm";
import DetailsDynamic from "./DetailsDynamic";
import { idType } from "@/interFace/interFace";
import BlogSideLinks from "../common/blogsidebar/BlogSideLinks";

const BlogDetailsAreaDynamic = ({ id }: idType) => {
  const [keyword, setKeyword] = useState(" ");
  const handleSubmit = (keyword: string) => {
    setKeyword(keyword);
  };
  return (
    <>
      <section className="bd-blog-3-details-area x-clip pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bd-blog-3-details-wrapper mb-60">
                <div className="row">
                  <div className="col-12">
                    <DetailsDynamic search={keyword} id={id} />
                    <div className="bd-blog-3-comment-wrap theme-bg-2">
                      <div className="bd-blog-3-comment">
                        <h4 className="bd-blog-3-comment-title mb-30">
                          Comments
                        </h4>
                        <ul>
                          <li>
                            <div className="bd-blog-3-comment-box">
                              <div className="bd-blog-3-comment-info mb-15">
                                <div className="bd-blog-3-comment-thumb-wrap">
                                  <div className="bd-blog-3-comment-thumb">
                                    <Image
                                      src={thumb3}
                                      style={{ width: "100%", height: "100%" }}
                                      alt="img not found!"
                                    />
                                  </div>
                                  <div className="bd-blog-3-comment-author">
                                    <h5>Allen D.</h5>
                                    <span>27 Oct 2023 at 2:09pm</span>
                                  </div>
                                </div>
                                <div className="bd-blog-3-comment-replay-btn">
                                  <Link href="#">
                                    <i className="fa-regular fa-reply"></i>
                                  </Link>
                                </div>
                              </div>
                              <div className="bd-blog-3-comment-text">
                                <p>
                                  The room. And also the stuff were amazing and
                                  friendly. They offered me a whole suit which
                                  was exceeded my expectations. The room was
                                  spacious, you can play cricket.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <BlogContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bd-blog-3-sidebar-wrapper mb-60">
                <div className="bd-blog-3-sidebar mb-50">
                  <h5 className="bd-blog-3-sidebar-title">Search</h5>
                  <div className="bd-blog-3-sidebar-content">
                    <div className="bd-blog-3-search">
                      <BlogSearchTwo
                        keyword={keyword}
                        setKeyword={setKeyword}
                        onSubmit={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
                <div className="bd-blog-3-sidebar mb-50">
                  <h5 className="bd-blog-3-sidebar-title">Latest Blog</h5>
                  <div className="bd-blog-3-latest">
                    <ul>
                      {blogs.slice(7, 10).map((item) => (
                        <li key={item.id}>
                          <div className="bd-blog-3-latest-content">
                            <div className="bd-blog-3-latest-thumb">
                              <Link href={`/blog-details/${item.id}`}>
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "100%" }}
                                  alt="img not found!"
                                />
                              </Link>
                            </div>
                            <div className="bd-blog-3-latest-title-wrap">
                              <h6 className="bd-blog-3-latest-title">
                                <Link href={`/blog-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h6>
                              <div className="bd-blog-3-latest-meta">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>
                                  {item.date} {item.month} 2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BlogSideLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsAreaDynamic;
