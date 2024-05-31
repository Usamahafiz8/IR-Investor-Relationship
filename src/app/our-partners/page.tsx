import OfferMain from '@/components/offers/OfferMain';
import OurPartnerMain from '@/components/our-partner/OurPartnerMain';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const OurPartner = () => {
    return (
        <>
            <HeaderTwo />
            <OurPartnerMain />
            <Footer customeClass="" />;
            {/* <WrapperCommon>
                <main> 
            <OfferMain/> 
            </WrapperCommon> */}
        </>
    );
};

export default OurPartner;