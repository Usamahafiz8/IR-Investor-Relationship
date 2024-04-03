import GallaryMain from '@/components/gallery/GallaryMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';

const GallayPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <GallaryMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default GallayPage;