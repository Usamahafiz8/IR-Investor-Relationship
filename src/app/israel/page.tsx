import IsraelMain from '@/components/Israel/IsraelMain';
import NewsMain from '@/components/news/NewsMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const Israel = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                {/* <NewsMain/> */}
                <IsraelMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default Israel;