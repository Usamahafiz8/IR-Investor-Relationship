import ServiceMain from '@/components/service/ServiceMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const ServicePage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <ServiceMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default ServicePage;