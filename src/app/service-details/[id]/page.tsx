import Preloader from '@/components/common/Preloader';
import ServiceDetailsMainDynamic from '@/components/service-details/ServiceDetailsMainDynamic';
import Features from '@/data/speacialFeaturesSlide';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const ServiceDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
    const id =  params.id
    const featur = Features.find(item=> item.id == id)
    if(!featur){
      return <Preloader />
    }
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

export default ServiceDetailsDynamicPage;