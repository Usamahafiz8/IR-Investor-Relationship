import LoginMain from '@/components/login/LoginMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const LoginPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <LoginMain />
                </main>
            </WrapperCommon>
        </>
    );
};

export default LoginPage;