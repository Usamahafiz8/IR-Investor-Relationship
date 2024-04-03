import DiningMain from '@/components/dining/DiningMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const DiningPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <DiningMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default DiningPage;