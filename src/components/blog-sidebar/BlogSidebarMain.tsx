
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogArea from './BlogArea';

const BlogSidebarMain = () => {
    return (
        <>
            <Breadcrumb title='Blog With Sidebar'/>
            <BlogArea/>
        </>
    );
};

export default BlogSidebarMain;