import React from "react";
import HeaderTwoMenu from "../layout/header-two/Menu";
import Link from "next/link";

const SitemapPage = ({ params }: any) => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-8 py-16">
      <div className="flex flex-col justify-center">
      <h1 className="mb-6 text-2xl font-semibold">
        Vuzix Corporation SitemapPage
      </h1>
      <p className="mb-4">
        Browse the links below for pages that make up the Vuzix Corporation
        website.
      </p>
      <div className="flex flex-col gap-10">
        {HeaderTwoMenu?.map((menu: any) => (
          <div key={menu.title} className="my-2 flex flex-col gap-2">
            <h2 className="mb-2 text-xl font-bold">{menu.title}</h2>
            {menu.title === "Overview" && (
              <Link
                href={`/${params?.name?.toUpperCase()}`}
                className="hover:text-blue-800 underline hover:no-underline"
              >
                {menu.title}
              </Link>
            )}
            <div className="flex flex-col gap-1">
              {menu?.submenus?.map((subMenu: any, index: any) => (
                <Link
                  href={`/${params?.name?.toUpperCase()}/${menu?.link}/${subMenu?.link}`}
                  key={index}
                  className="hover:text-blue-800 underline hover:no-underline"
                >
                  {subMenu?.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SitemapPage;
