
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogArea from './BlogArea';
import Brands from '../about/Brands';


const BlogMain = () => {
    return (
        <>
          <Breadcrumb title='Blog'/>
           <BlogArea/>
           <Brands bgColor="theme-bg-2" pt="pt-100" pb="pb-100" />
        </>
    );
};

export default BlogMain;