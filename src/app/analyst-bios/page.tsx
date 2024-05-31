import AboutMain from '@/components/about/AboutMain';
import AnalyticMain from '@/components/analytict-bios/AnalyticMain';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import MainLayout from '@/layout/mainLayout';
import React from 'react';

const AnalystBios = () => {
    return (
        <>
            <MainLayout>
                <AnalyticMain />
            </MainLayout>
        </>
    );
};

export default AnalystBios;