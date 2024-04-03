
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import EventSec from './EventSec';
import ServicesSlideSce from '../Home-4/ServicesSlideSce';
import FaqTwo from '../about/FaqTwo';
import Brands from '../about/Brands';
const EventMain = () => {
    return (
        <>
            <Breadcrumb title='Event'/>
            <EventSec/>
            <ServicesSlideSce customeClass=""/>
            <FaqTwo/>
            <Brands bgColor=" " pt="pt-150" pb="pb-150"/>
        </>
    );
};

export default EventMain;