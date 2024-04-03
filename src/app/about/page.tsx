import AboutMain from '@/components/about/AboutMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <AboutMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default AboutPage;