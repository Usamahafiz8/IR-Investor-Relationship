import NewsMain from '@/components/news/NewsMain';
import Footer from '@/layout/footer/Footer';
import HeaderTwo from '@/layout/header/HeaderTwo';
import { getAllNews } from '@/utils/strapiApi';
import React from 'react';

const News = async ({ params, searchParams }: any) => {
  // Extract the page number from the searchParams or default to 1 if not provided or invalid
  const currentPage = parseInt(searchParams.page, 10) || 1;


  // Extract the search query from the searchParams, if available
  const searchQuery = searchParams.search || '';


  return (
    <>
      <HeaderTwo />
      {/* Pass newsData as a separate prop */}
      <NewsMain currentPage={currentPage} searchQuery={searchQuery}  />
      <Footer customeClass="" />;
    </>
  );
};

export default News;
