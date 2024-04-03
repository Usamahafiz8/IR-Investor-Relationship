"use client"
import Preloader from '@/components/common/Preloader';
import DynamicRoomDetailsMain from '@/components/room-details/DynamicRoomDetailsMain';
import roomAndSuites from '@/data/roomAndSuitesData';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const DynamicRoomDetails = ({ params }: { params: { id: number } }) => {
      const id =  params.id
      const room = roomAndSuites.find(item=> item.id == id)
      if(!room){
        return <Preloader />
      }
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