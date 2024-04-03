import SignUpMain from '@/components/signup/SignUpMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const SignUpPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <SignUpMain />
                </main>
            </WrapperCommon>
        </>
    );
};

export default SignUpPage;