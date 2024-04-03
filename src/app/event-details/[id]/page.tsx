import Preloader from '@/components/common/Preloader';
import DynamicEventDetailsMain from '@/components/event-details/DynamicEventDetailsMain';
import events from '@/data/event-data';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const DynamicEventDetailsPage = ({ params }: { params: { id: number } }) => {
    const id =  params.id
    const event = events.find(item=> item.id == id)
    if(!event){
      return <Preloader />
    }
    return (
        <>
            <WrapperCommon>
                <main>
                   <DynamicEventDetailsMain id={id}/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default DynamicEventDetailsPage;