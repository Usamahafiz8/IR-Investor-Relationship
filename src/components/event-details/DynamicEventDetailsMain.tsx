
import { idType } from '@/interFace/interFace';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import GallayRoom from '../room-details/GallayRoom';
import Testimonial from '../room-details/Testimonial';
import EventDetailsSecDynamic from './EventDetailsSecDynamic';


const DynamicEventDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title='Event Details'/>
            <EventDetailsSecDynamic id={id}/>
            <GallayRoom/>
            <Testimonial/>
        </>
    );
};

export default DynamicEventDetailsMain;