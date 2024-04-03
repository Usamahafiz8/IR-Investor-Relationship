
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RoomAndSuitsSec from '../Home2/RoomAndSuitsSec';
import FacilitysOneSec from '../Home-3/FacilitysOneSec';
import PricingPlanSec from '../Home-4/PricingPlanSec';
import FeatureAreaSec from '../Home2/FeatureAreaSec';

const RoomOneMain = () => {
    return (
        <>
            <Breadcrumb title='Room & Suites'/>
            <RoomAndSuitsSec title=' ' sectionTitle=' '/>
            <FacilitysOneSec/>
            <PricingPlanSec classbg="pricing-plan-area pricing-spacing theme-bg-2" classbgDiv="bd-price-item white-bg"/>
            <FeatureAreaSec customeCalss=' '/>
        </>
    );
};

export default RoomOneMain;