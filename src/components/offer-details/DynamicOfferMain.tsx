
import React from 'react';
import OfferDetaiilsSliderSec from './OfferDetaiilsSliderSec';
import GallayRoom from '../room-details/GallayRoom';
import Testimonial from '../room-details/Testimonial';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { idType } from '@/interFace/interFace';
import DynamicOfferDetails from './DynamicOfferDetails';
import offerData from '@/data/offerSlideData';

const DynamicOfferMain = ({id}:idType) => {
    const offer = offerData.find(item=> item.id == id)
    return (
        <>
            <Breadcrumb title={offer?.tags}/>
            <OfferDetaiilsSliderSec/>
            <DynamicOfferDetails id={id}/>
            <GallayRoom/>
            <Testimonial/>
        </>
    );
};

export default DynamicOfferMain;