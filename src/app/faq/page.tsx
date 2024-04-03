import FaqMain from '@/components/faq/FaqMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const FaqPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <FaqMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default FaqPage;