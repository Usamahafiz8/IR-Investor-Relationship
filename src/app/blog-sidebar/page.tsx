import BlogSidebarMain from '@/components/blog-sidebar/BlogSidebarMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const BlogSideBardPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <BlogSidebarMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default BlogSideBardPage;