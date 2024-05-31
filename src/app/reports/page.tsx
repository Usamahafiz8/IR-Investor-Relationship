import ReportsMain from '@/components/reports/ReportsMain';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import React from 'react';

const Reports = async ({ params, searchParams }: any) => {
  // Extract the page number from the searchParams or default to 1 if not provided or invalid
  const currentPage = parseInt(searchParams.page, 10) || 1;


  // Extract the search query from the searchParams, if available
  const searchQuery = searchParams.search || '';


  return (
    <>
      <HeaderTwo />
      <ReportsMain currentPage={currentPage} searchQuery={searchQuery} />
      <Footer customeClass="" />;
    </>
  );
};

export default Reports;
