import React from "react";
import {
  getCompanyExecutiveTeam,
  getCompanyFAQ,
  getCompanyInfo,
  getWebsite,
  getWebsitePresentation,
} from "../../utils/strapiApi";
import CompanyOverview from "../../_components/company_info/CompanyOverview";
import Presentations from "../../_components/company_info/Presentatoin";
import CompanyHistory from "../../_components/company_info/CompanyHistory";
import FAQSection from "../../_components/company_info/FAQ";
import ExecutiveTeam from "../../_components/company_info/ExecutiveTeam";


export default async function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  console.log(params);
  console.log(searchParams);

  const website = await getWebsite(params?.name?.toUpperCase());
  let presentations,companyFAQS,companyExecutiveMembers;

  const companyInfo = await getCompanyInfo(params?.name?.toLocaleUpperCase());

  if (params?.route === "presentations") {
    presentations = await getWebsitePresentation(
      params?.name?.toLocaleUpperCase(),
      searchParams?.page || 1,
      2,
    );
  }

  if (params?.route === "FAQ") {
    companyFAQS = await getCompanyFAQ(
      params?.name?.toLocaleUpperCase()
    );
  }
  if (params?.route === "executive-team") {
    companyExecutiveMembers = await getCompanyExecutiveTeam(
      params?.name?.toLocaleUpperCase(),
      searchParams?.page || 1,
      10,
    );
  }


  return (
    <div className="flex w-full justify-center">
      {params?.route === "overview" && ( <CompanyOverview />)}
      {params?.route === "shareholder-letter" && (
        <div className="flex h-screen justify-start p-4 text-center text-xl font-medium">
          Please check back soon for updates.
        </div>
      )}

      {params?.route === "presentations" && <Presentations presentations={presentations} />}
      {params?.route === "company-history" && <CompanyHistory companyInfo={companyInfo} />}
      {params?.route === "FAQ" && <FAQSection FAQ={companyFAQS} />}
      {params?.route === "executive-team" && <ExecutiveTeam teamMembers={companyExecutiveMembers} />}
    </div>
  );
}
