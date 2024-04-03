"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Blogs from './Blogs';
import BlogSearchFrom from '@/form/BlogSearchFrom';

const BlogArea:React.FC = () => {
    const [keyword, setKeyword] = useState(" ")
    const handleSubmit = (keyword: string) => {
        setKeyword(keyword)
      };
    return (
        <>
            <section className="bd-blog-3-area pb-150">
         <div className="container">
            <div className="bd-blog-3-menu-wrapper">
               <div className="row align-items-end">
                  <div className="col-xxl-6 col-xl-5 col-lg-4">
                     <div className="bd-blog-3-search mb-60">
                        <BlogSearchFrom keyword={keyword} setKeyword={setKeyword} onSubmit={handleSubmit}/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <Blogs start={2} end={11} search={keyword} customeClass='col-xl-4 col-lg-6 col-md-6'/>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="bd-blog-pagination pt-20">
                     <ul className="justify-content-center">
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
      </section>
        </>
    );
};

export default BlogArea;