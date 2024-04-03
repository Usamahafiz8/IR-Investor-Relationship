import ForgotPasswordMain from '@/components/forgotPassword/ForgotPasswordMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const ForgotPasswordPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <ForgotPasswordMain />
                </main>
            </WrapperCommon>
        </>
    );
};

export default ForgotPasswordPage;