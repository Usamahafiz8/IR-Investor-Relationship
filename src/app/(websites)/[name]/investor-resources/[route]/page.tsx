import React from "react";
import EmailAlertForm from "../../_components/company_info/Forms/EmailAlert";
import { getWebsite } from "../../utils/strapiApi";
import Contacts from "../../_components/investor_resources/Contacts";


export default async function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
 

  const website = await getWebsite(params?.name?.toUpperCase());


  return (
    <div className="flex w-full justify-center">
      {params?.route === "email" && <EmailAlertForm websiteInfo={website?.data[0]} />}
      {params?.route === "contacts" && <Contacts data={website.data[0]} />}
    </div>
  );
}
