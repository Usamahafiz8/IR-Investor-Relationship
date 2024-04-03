import BlogMain from '@/components/blog/BlogMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const BlogPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <BlogMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default BlogPage;