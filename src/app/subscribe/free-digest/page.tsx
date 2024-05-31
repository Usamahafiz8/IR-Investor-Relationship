
import CommonBanner from '@/components/common/Banner';
import RoomOneMain from '@/components/room-1/RoomOneMain';
import FreeSubscribe from '@/components/subscribe/FreeSubscribePage';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const Subscribe = () => {
    return (
        <>
            <HeaderTwo />
            <CommonBanner Heading={'Free Digest'} />
            <div className='container pt-16 pb-16'>
                <FreeSubscribe />
            </div>
            <Footer customeClass="" />
        </>
    );
};

export default Subscribe;