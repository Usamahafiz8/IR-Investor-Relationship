
import RoomOneMain from '@/components/room-1/RoomOneMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const RoomOne = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <RoomOneMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default RoomOne;