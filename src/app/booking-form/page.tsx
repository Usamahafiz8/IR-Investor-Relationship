import BookingFormMain from '@/components/booking-form/BookingFormMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const BookingForm = () => {
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

export default BookingForm;