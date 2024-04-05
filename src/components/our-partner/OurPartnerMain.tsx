import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BookingRoomSec from '../room-2/BookingRoomSec';
import FacilitysOneSec from '../Home-3/FacilitysOneSec';
import PricingPlanSec from '../Home-4/PricingPlanSec';
import LatestNewsSec from '../Home-4/LatestNewsSec';
import OfferSec from './OfferSec';
import CommonBanner from '../common/Banner';

const OurPartnerMain = () => {
    return (
        <>
        <CommonBanner Heading={"Our Partners"}/>
            <OfferSec />
            
        </>
    );
};

export default OurPartnerMain;