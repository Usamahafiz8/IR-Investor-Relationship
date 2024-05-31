
import CommonBanner from '@/components/common/Banner';
import SubscrptionConformation from '@/components/subscribe/Conformation';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const Subscribe = ({searchParams}:any) => {

    // Extract the search query from the searchParams, if available
    const customerID = searchParams.customerID || '';
  
  
    return (
        <>
            <HeaderTwo />
            <CommonBanner Heading={'Conformation'} />
            <div className='container pt-16 pb-16'>
                <SubscrptionConformation customerID={customerID}/>
            </div>
            <Footer customeClass="" />
        </>
    );
};

export default Subscribe;