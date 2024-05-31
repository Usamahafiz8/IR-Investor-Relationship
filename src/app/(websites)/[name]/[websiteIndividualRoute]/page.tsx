import React from 'react';
import SignUpPage from '../signup/pages';
import SignInPage from '../signin/pages';
import OverviewSection from '../_components/OwerviewDescription';
import Banner from '../_components/Banner';
import SubPageContent from '../_components/SubPage/SubPageContent';

export default function Page({ params }: { params: { websiteIndividualRoute: string } }) {
  console.log(params)

  return (
    <div className='w-full flex justify-center' >
     <SubPageContent tabName="Overview" />

    </div>
  );
}
