
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SpeacilaFeaturesSection from '../Home/SpeacilaFeaturesSection';
import Testimonial from '../room-details/Testimonial';
import ServiceDescriptionDynamic from './ServiceDescriptionDynamic';
import { idType } from '@/interFace/interFace';
import ServiceWlcSecDynamic from './ServiceWlcSecDynamic';
const ServiceDetailsMainDynamic = ({id}:idType) => {
    return (
        <>
          <Breadcrumb title='Services Details'/>
            <ServiceWlcSecDynamic id={id}/>
            <ServiceDescriptionDynamic id={id}/>
            <SpeacilaFeaturesSection clssOverflow="ryl-overflow-none"/>
            <Testimonial/>  
        </>
    );
};

export default ServiceDetailsMainDynamic;