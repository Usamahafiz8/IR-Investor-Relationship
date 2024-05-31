
import CommonBanner from '@/components/common/Banner';
import RoomOneMain from '@/components/room-1/RoomOneMain';
import PremiumSubscribe from '@/components/subscribe/PremiumSubscribePage';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const Subscribe = () => {
    return (
        <>
            <HeaderTwo />
            <CommonBanner Heading={'Subscribe'} />
            <div className='container pt-16 pb-16'>
                <PremiumSubscribe />
            </div>
            <Footer customeClass="" />
        </>
    );
};

export default Subscribe;