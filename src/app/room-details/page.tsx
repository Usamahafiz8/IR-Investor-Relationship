"use client"
import DynamicRoomDetailsMain from '@/components/room-details/DynamicRoomDetailsMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const DynamicRoomDetails = () => {
      const id:number =  1
    return (
        <>
           <WrapperCommon>
            <main>
                <DynamicRoomDetailsMain id={id}/>
            </main>
           </WrapperCommon>
        </>
    );
};

export default DynamicRoomDetails;