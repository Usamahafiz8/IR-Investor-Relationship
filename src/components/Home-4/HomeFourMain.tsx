
import React from 'react';
import HeroFour from './HeroFour';
import WellcomeAreaSec from '../Home2/WellcomeAreaSec';
import TextScroll from './TextScroll';
import RoomView from './RoomView';
import FeaturesSec from './FeaturesSec';
import FacilitySliderSec from './FacilitySliderSec';
import ServicesSlideSce from './ServicesSlideSce';
import BookNowSec from './BookNowSec';
import PricingPlanSec from './PricingPlanSec';
import TestimonialSec from './TestimonialSec';
import NewsLatterSec from './NewsLatterSec';
import LatestNewsSec from './LatestNewsSec';
import HrLine from '../common/HrLine/HrLine';
const HomeFourMain = () => {
    return (
        <>
            <HeroFour/>
            <WellcomeAreaSec/>
            <TextScroll/>
            <RoomView/>
            <FeaturesSec/>
            <FacilitySliderSec/>
            <HrLine/>
            <ServicesSlideSce customeClass="pt-135"/>
            <BookNowSec/>
            <PricingPlanSec classbg="pricing-plan-area pricing-spacing" classbgDiv="bd-price-item"/>
            <TestimonialSec pb=' '/>
            <NewsLatterSec/>
            <LatestNewsSec/>
        </>
    );
};

export default HomeFourMain;