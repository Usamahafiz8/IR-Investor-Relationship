import ServiceDetailsMainDynamic from '@/components/service-details/ServiceDetailsMainDynamic';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const ServiceDetailsStaticPage = () => {
    const id:number =  1
    return (
        <>
            <WrapperCommon>
                <main>
                    <ServiceDetailsMainDynamic id={id}/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default ServiceDetailsStaticPage;