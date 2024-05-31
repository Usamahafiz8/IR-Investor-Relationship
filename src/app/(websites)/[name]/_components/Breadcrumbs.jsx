import React from "react";

const Breadcrumbs = ({
  headerOption = "News & Events",
  tabName = "Overview",
}) => {
  const options = [
    {
      title: "Overview",
      tabs: [],
    },
    {
      title: "News & Events",
      tabs: [
        {
          title: "Overview",
        },
        {
          title: "Press Releases",
        },
        {
          title: "Calendar",
        },
      ],
    },
    {
      title: "Company Info",
      tabs: [
        {
          title: "Overview",
        },
        {
          title: "Shareholders Letter",
        },
        {
          title: "Presentation",
        },
        {
          title: "Executive Team",
        },
        {
          title: "FAQ",
        },
        {
          title: "Company History",
        },
      ],
    },
    {
      title: "Company Info",
      tabs: [
        {
          title: "Overview",
        },
        {
          title: "Financial Results",
        },
        {
          title: "All SEC Fillings",
        },
      ],
    },
    {
      title: "Stock Data",
      tabs: [
        {
          title: "Quotes",
        },
        {
          title: "Charts",
        },
        {
          title: "Hostorical Data",
        },
      ],
    },
    {
      title: "Inverstors Resources",
      tabs: [
        {
          title: "Email Alerts",
        },
        {
          title: "Contacts",
        },
      ],
    },
    {
      title: "Governance",
      tabs: [
        {
          title: "Overview",
        },
        {
          title: "Board of Directors",
        },
        {
          title: "Board Committees",
        },
        {
          title: "Governance Documents",
        },
      ],
    },
  ];
  return (
    options[headerOption]?.tabs.length > 0 && (
      <div className="bg-red-500">
        <div className="flex">
          {options[headerOption]?.tabs?.map((tab, index) => {
            return (
              <div className={`text-white text-center ${tab.title === tabName && 'bg-red-900 px-3 py-2'}`} key={index}>
                {tab.title}
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Breadcrumbs;
