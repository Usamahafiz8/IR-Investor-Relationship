import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BookingRoomSec from '../room-2/BookingRoomSec';
import FacilitysOneSec from '../Home-3/FacilitysOneSec';
import PricingPlanSec from '../Home-4/PricingPlanSec';
import LatestNewsSec from '../Home-4/LatestNewsSec';
import OfferSec from './OfferSec';

const OfferMain = () => {
    return (
        <>
            <Breadcrumb title ="Promotions & Offers"/>
            <OfferSec />
            <BookingRoomSec/>
            <FacilitysOneSec/>
            <PricingPlanSec classbg="pricing-plan-area pricing-spacing theme-bg-2" classbgDiv="bd-price-item white-bg"/>
            <LatestNewsSec/>
        </>
    );
};

export default OfferMain;