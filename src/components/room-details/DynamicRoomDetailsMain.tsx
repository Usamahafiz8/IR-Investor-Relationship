"use client"
import React from 'react';
import { idType } from '@/interFace/interFace';
import GallayRoom from './GallayRoom';
import Testimonial from './Testimonial';
import Rooms from './Rooms';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DynamicDetails from './DynamicDetails';

const DynamicRoomDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title ="Queen Deluxe Room"/>
            <DynamicDetails id={id}/>
            <GallayRoom/>
            <Testimonial/>
            <Rooms/>
        </>
    );
};

export default DynamicRoomDetailsMain;