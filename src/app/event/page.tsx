import EventMain from '@/components/event/EventMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const Eventpage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <EventMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default Eventpage;