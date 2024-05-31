import ServiceMain from '@/components/service/ServiceMain';
import TickerList from '@/components/tickers';
import WrapperCommon from '@/layout/WrapperCommon';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const Ticker = ({ params, searchParams }: any) => {
// const News = async ({ params, searchParams }: any) => {
    // Extract the page number from the searchParams or default to 1 if not provided or invalid
    const currentPage = parseInt(searchParams.page, 10) || 1;
  
  
    // Extract the search query from the searchParams, if available
    const searchvalue = searchParams.search || '';
  
    return (
        <>
            <HeaderTwo />
            <TickerList searchvalue={searchvalue} />
            <Footer customeClass="" />;
        </>
    );
};

export default Ticker;