"use client"
import { idType } from '@/interFace/interFace';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogDetailsAreaDynamic from './BlogDetailsAreaDynamic';
const BlogDetailsMainDynamic = ({id}:idType) => {
    
    return (
        <>
            <Breadcrumb title='Blog Details'/>
            <BlogDetailsAreaDynamic id={id}/>
        </>
    );
};

export default BlogDetailsMainDynamic;