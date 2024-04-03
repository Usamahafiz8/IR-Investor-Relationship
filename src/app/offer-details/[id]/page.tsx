
import Preloader from '@/components/common/Preloader';
import DynamicOfferMain from '@/components/offer-details/DynamicOfferMain';
import offerData from '@/data/offerSlideData';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const OfferDetailsDynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id
  const offer = offerData.find(item=> item.id == id)
  if(!offer){
    return <Preloader />
  }
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

export default OfferDetailsDynamicPage;