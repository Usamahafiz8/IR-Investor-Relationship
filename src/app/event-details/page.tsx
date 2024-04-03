
import DynamicEventDetailsMain from '@/components/event-details/DynamicEventDetailsMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const EventDetailsDefault = () => {
   const id:number = 1
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

export default EventDetailsDefault;