
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PricingPlanSec from '../Home-4/PricingPlanSec';
import SpeacilaFeaturesSection from '../Home/SpeacilaFeaturesSection';
const PricingMain = () => {
    return (
        <>
           <Breadcrumb title='Pricing Plan'/> 
           <PricingPlanSec classbg="pricing-plan-area pricing-spacing theme-bg-2" classbgDiv="bd-price-item white-bg"/>
           <SpeacilaFeaturesSection clssOverflow="ryl-overflow-none"/>
        </>
    );
};

export default PricingMain;