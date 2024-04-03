
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import OpeningTime from './OpeningTime';
import FacilitySliderSec from '../Home-4/FacilitySliderSec';
import DeliciasFoodSec from '../Home2/DeliciasFoodSec';
import TestimonailSec from '../Home-3/TestimonailSec';
import FaqTwo from '../about/FaqTwo';
import Brands from '../about/Brands';


const DiningMain = () => {
    return (
        <>
            <Breadcrumb title='Dinning / Resturent'/>
            <OpeningTime/>
            <FacilitySliderSec/>
            <DeliciasFoodSec/>
            <TestimonailSec/>
            <FaqTwo/>
            <Brands bgColor=" " pt="pt-150" pb="pb-150"/>
        </>
    );
};

export default DiningMain;