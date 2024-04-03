import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ForgotPasswordSection from './ForgotPasswordSection';

const ForgotPasswordMain = () => {
    return (
        <>
            <Breadcrumb title ="Forgot Password"/>
            <ForgotPasswordSection />
        </>
    );
};

export default ForgotPasswordMain;