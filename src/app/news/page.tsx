import AboutMain from '@/components/about/AboutMain';
import AnalyticMain from '@/components/analytict-bios/AnalyticMain';
import NewsMain from '@/components/news/NewsMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const AnalystBios = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                <NewsMain/>
                    {/* <AnalyticMain/> */}
                </main>
            </WrapperCommon>
        </>
    );
};

export default AnalystBios;