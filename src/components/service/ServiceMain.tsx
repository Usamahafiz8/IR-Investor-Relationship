
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceItro from './ServiceItro';
import FeatureAreaSec from '../Home2/FeatureAreaSec';
import ServicesSlideSce from '../Home-4/ServicesSlideSce';
import DeliciasFoodSec from '../Home2/DeliciasFoodSec';
import TestimonailSec from '../Home-3/TestimonailSec';

const ServiceMain = () => {
    return (
        <>
            <Breadcrumb title='Our Services'/>
            <ServiceItro/>
            <FeatureAreaSec customeCalss='theme-bg-2'/>
            <ServicesSlideSce customeClass="pt-135"/>
            <DeliciasFoodSec/>
            <TestimonailSec/>
        </>
    );
};

export default ServiceMain;