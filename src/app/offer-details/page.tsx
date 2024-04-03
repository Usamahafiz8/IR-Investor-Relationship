
import DynamicOfferMain from '@/components/offer-details/DynamicOfferMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const OfferDetails = () => {
    const id:number = 1
    return (
        <>
            <WrapperCommon>
                <main>
                   <DynamicOfferMain id={id}/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default OfferDetails;