
import BlogClassicMain from '@/components/blog-classic/BlogClassicMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const BlogClassicPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <BlogClassicMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default BlogClassicPage;