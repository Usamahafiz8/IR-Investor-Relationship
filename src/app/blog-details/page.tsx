import BlogDetailsMainDynamic from '@/components/blog-details/BlogDetailsMainDynamic';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const StaticBlogDetailsPage = () => {
    const id = 1
    return (
        <>
             <WrapperCommon>
             <main>
                <BlogDetailsMainDynamic id={id}/>
             </main>
            </WrapperCommon>
        </>
    );
};

export default StaticBlogDetailsPage;
