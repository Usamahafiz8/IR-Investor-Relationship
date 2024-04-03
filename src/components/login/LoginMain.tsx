import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import LoginSection from './LoginSection';

const LoginMain = () => {
    return (
        <>
            <Breadcrumb title ="Login"/>
            <LoginSection />
        </>
    );
};

export default LoginMain;