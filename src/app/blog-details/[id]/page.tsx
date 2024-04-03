
import BlogDetailsMainDynamic from '@/components/blog-details/BlogDetailsMainDynamic';
import Preloader from '@/components/common/Preloader';
import blogs from '@/data/blogs-letest-news';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const DynamicBlogDetailsPage = ({ params }: { params: { id: number } }) => {
    const id = params.id
    const blog = blogs.find(item=> item.id == id)
    if(!blog){
      return <Preloader />
    }
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

export default DynamicBlogDetailsPage;