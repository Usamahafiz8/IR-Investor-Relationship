
import CommonBanner from '@/components/common/Banner';
import RoomOneMain from '@/components/room-1/RoomOneMain';
import PremiumSubscribe from '@/components/subscribe/PremiumSubscribePage';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';
import StripeProvider from '@/contextApi/StripProvider';

const Subscribe = () => {
    return (
            <StripeProvider>

                <HeaderTwo />
                <CommonBanner Heading={'Investor Radar Premium'} />
                <div className='container pt-16 pb-16'>
                    <PremiumSubscribe />
                </div>
                <Footer customeClass="" />
            </StripeProvider>
        
    );
};

export default Subscribe;