"use client"
import BookingFormMain from '@/components/booking-form/BookingFormMain';
import Preloader from '@/components/common/Preloader';
import { AppContext } from '@/contextApi/AppProvider';
import roomAndSuites from '@/data/roomAndSuitesData';
import { AppContextType } from '@/interFace/interFace';
import WrapperCommon from '@/layout/WrapperCommon';
import React, { useContext,useEffect } from 'react';

const DynamicBookingForm = ({ params }: { params: { id: number } }) => {
    const {setRoomId} = useContext(AppContext) as AppContextType
    const id =  params.id
    useEffect(() => {
        if (setRoomId) {
            setRoomId(id);
        }
    }, [setRoomId, id]);
    const room = roomAndSuites.find(item=> item.id == id)
    if(!room){
      return <Preloader />
    }
    
    return (
        <>
             <WrapperCommon>
                <main>
                    <BookingFormMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default DynamicBookingForm;