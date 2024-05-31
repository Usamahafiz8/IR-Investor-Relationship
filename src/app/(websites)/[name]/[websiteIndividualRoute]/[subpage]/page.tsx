import React from 'react';
import SubPageContent from '../../_components/SubPage/SubPageContent'

interface PageProps {
  params: { subpage: string };
  searchParams: { filter: string };
}

export default function Page({ params, searchParams }: PageProps) {

  return (
    <div>
      <SubPageContent tabName={params?.subpage || "overview"} />
    </div>
  );
}
