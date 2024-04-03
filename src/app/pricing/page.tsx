import PricingMain from '@/components/pricing/PricingMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const PricingPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <PricingMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default PricingPage;