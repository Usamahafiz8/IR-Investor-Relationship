
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BookingFormSec from './BookingFormSec';
import RoomView from '../Home-4/RoomView';
import FeatureAreaSec from '../Home2/FeatureAreaSec';
const BookingFormMain = () => {
    return (
        <>
            <Breadcrumb title='Booking Form'/>
             <BookingFormSec/>
             <RoomView/>
             <FeatureAreaSec customeCalss='theme-bg-2'/>
        </>
    );
};

export default BookingFormMain;