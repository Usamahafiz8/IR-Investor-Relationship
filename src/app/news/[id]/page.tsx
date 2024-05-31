import Preloader from '@/components/common/Preloader';
import DynamicEventDetailsMain from '@/components/event-details/DynamicEventDetailsMain';
import NewsDetails from '@/components/news/newsDetails';
import events from '@/data/event-data';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const DynamicEventDetailsPage = ({ params }: { params: { id: number } }) => {
    const id = params.id
    return (
        <>
            <HeaderTwo />
            <NewsDetails ID={id} detailof={'News Details'} />
            <Footer customeClass="" />;

        </>
    );
};

export default DynamicEventDetailsPage;