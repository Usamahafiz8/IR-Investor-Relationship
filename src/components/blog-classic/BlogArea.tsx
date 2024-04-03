"use client"
import blogs from '@/data/blogs-letest-news';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Blogs from './Blogs';
import BlogSearchTwo from '@/form/BlogSearchTwo';
import BlogSideLinks from '../common/blogsidebar/BlogSideLinks';

const BlogArea: React.FC = () => {
   const [keyword, setKeyword] = useState(" ")
   const handleSubmit = (keyword: string) => {
      setKeyword(keyword)
   };
   return (
      <>
         <section className="bd-blog-3-sidebar-area x-clip pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="bd-blog-3-sidebar-wrapper mb-60">
                        <div className="row">

                           <Blogs search={keyword} />

                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="bd-blog-pagination pt-10">
                                 <ul>
                                    <li><span aria-current="page" className="page-numbers current">01</span></li>
                                    <li><Link className="page-numbers" href="#">02</Link></li>
                                    <li><Link className="next page-numbers" href="#">
                                       <i className="fa-sharp fa-solid fa-angle-right"></i>
                                    </Link>
                                    </li>
                                 </ul>
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
                                 <BlogSearchTwo keyword={keyword} setKeyword={setKeyword} onSubmit={handleSubmit} />
                              </div>
                           </div>
                        </div>
                        <div className="bd-blog-3-sidebar mb-50">
                           <h5 className="bd-blog-3-sidebar-title">Latest Blog</h5>
                           <div className="bd-blog-3-latest">
                              <ul>

                                 {
                                    blogs.slice(7, 10).map((item) => (
                                       <li key={item.id}>
                                          <div className="bd-blog-3-latest-content">
                                             <div className="bd-blog-3-latest-thumb">
                                                <Link href={`/blog-details/${item.id}`}> <Image src={item.img} style={{ width: "100%", height: "100%" }}
                                                   alt="img not found!" /></Link>
                                             </div>
                                             <div className="bd-blog-3-latest-title-wrap">
                                                <h6 className="bd-blog-3-latest-title"><Link href={`/blog-details/${item.id}`}> {item.title} </Link></h6>
                                                <div className="bd-blog-3-latest-meta">
                                                   <i className="fa-solid fa-calendar-days"></i><span> {item.date}  {item.month} 2023</span>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                    ))
                                 }

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

export default BlogArea;