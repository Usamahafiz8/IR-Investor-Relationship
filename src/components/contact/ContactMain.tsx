
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactArea from './ContactArea';
import TestimonialSec from '../Home-4/TestimonialSec';
import Brands from '../about/Brands';
const ContactMain = () => {
    return (
        <>
            <Breadcrumb title='Contact Us'/>
            <ContactArea/>
            <TestimonialSec pb='pb-150'/>
            <Brands bgColor='' pt='pt-150' pb='pb-150'/>
        </>
    );
};

export default ContactMain; 