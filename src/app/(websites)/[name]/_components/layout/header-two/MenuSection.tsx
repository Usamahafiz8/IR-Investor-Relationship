"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import HeaderTwoMenu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useLocation } from "react-use";

const MenuSection = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const params: any = useParams();

  const {
    websiteInfo,
    pageName,
    updatePageName,
    updateTabName,
    updateWebsiteinfo,
  } = useContext(AppContext) as AppContextType;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!params?.route) {
      updatePageName("/");
      updateTabName("overview");
    } else {
      updatePageName(location?.pathname?.split("/")?.filter(Boolean)[1]);
      updateTabName(params?.route);
    }
  }, [
    websiteInfo,
    params,
    updatePageName,
    updateTabName,
    updateWebsiteinfo,
    location?.pathname,
  ]);

  useEffect(() => {
    async function getWebsiteData() {
      const info = {
        websiteName: params?.name,
      };

      const website = await fetch("/api/get-website", {
        method: "POST",
        body: JSON.stringify(info),
      });

      if (website) {
        const websiteData = await website.json();
        await updateWebsiteinfo(websiteData.response.data[0]);
      }
    }

    if (
      params?.name &&
      websiteInfo?.attributes?.ticker != params?.name?.toLocaleUpperCase()
    ) {
      getWebsiteData();
    }
  }, [params?.name, websiteInfo?.attributes, updateWebsiteinfo]);

  return (
    <div className="flex justify-center border-t border-gray-600 bg-[#1c1d1d] py-4 text-white">
      <div className="mx-3 flex w-full items-center justify-between py-1 xl:w-10/12 xxl:w-3/4 xxl:px-8">
        <Link
          href={`/${websiteInfo?.attributes?.ticker}`}
          onClick={() => updatePageName("/")}
          className="text-3xl font-bold uppercase"
        >
          {params?.name || websiteInfo?.attributes?.ticker || ""}
        </Link>
        <div className="">
          <button
            onClick={toggleMobileMenu}
            className="hidden focus:outline-none max-lg:block"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
          <nav className={` flex w-4/5 gap-3 max-lg:hidden`}>
            {HeaderTwoMenu?.map((menu, index) => (
              <div key={menu.title} className="group relative">
                <Link
                  href={
                    menu.title == "Overview"
                      ? `/${websiteInfo?.attributes?.ticker}`
                      : `/${websiteInfo?.attributes?.ticker}/${menu.link}/${menu?.submenus && menu?.submenus[0]?.link}`
                  }
                >
                  <div
                    className={`px-2  text-white ${pageName === menu.link ? "border-b border-white" : ""}`}
                    onClick={() => {
                      updateTabName(menu?.submenus && menu?.submenus[0]?.link);
                      updatePageName(menu?.link);
                    }}
                  >
                    <div className="min-w-max  text-[14px] font-medium">
                      {menu.title}
                    </div>
                  </div>
                </Link>
                {menu.submenus && (
                  <div
                    className={`absolute left-0 top-full hidden bg-[#1c1d1d] pt-3 group-hover:block ${index === HeaderTwoMenu?.length - 1 ? "left-auto right-1" : ""}`}
                  >
                    {menu.submenus.map((submenu, index) => (
                      <Link
                        href={`/${websiteInfo?.attributes?.ticker}/${menu.link}/${submenu.link}`}
                        onClick={() => {
                          updatePageName(menu.link);
                          updateTabName(submenu.link);
                        }}
                        key={index}
                      >
                        <div className="block min-w-max px-4 py-3 text-sm text-white hover:bg-red-500">
                          {submenu.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 translate-x-0 transform transition-transform"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-3/4 min-w-max max-w-xs bg-red-600 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* ////small screen */}

            <nav className="hidden h-full flex-col overflow-y-auto max-lg:block">
              {HeaderTwoMenu.map((menu) => (
                <div key={menu.title} className="border-b border-white py-2">
                  <Link
                    href={
                      menu.link == "overview "
                        ? `/${websiteInfo?.attributes?.ticker}`
                        : `/${websiteInfo?.attributes?.ticker}/${menu.link}/${menu?.submenus && menu?.submenus[0]?.link}`
                    }
                  >
                    <div
                      className={`px-3 py-2 text-white ${pageName === menu.title ? "border-b border-white" : ""}`}
                      onClick={() => {
                        updateTabName(
                          menu?.submenus && menu?.submenus[0]?.link,
                        );
                        updatePageName(menu?.link);
                      }}
                    >
                      <div className="pb-2">{menu.title}</div>
                    </div>
                  </Link>
                  {menu.submenus &&
                    menu.submenus.map((submenu, index) => (
                      <Link
                        href={`/${websiteInfo?.attributes?.ticker}/${menu.link}/${submenu.link}`}
                        onClick={() => {
                          updatePageName(menu.link);
                          updateTabName(submenu.link);
                        }}
                        key={index}
                      >
                        <div className="block min-w-max px-4 py-2 text-sm text-white hover:bg-red-500">
                          {submenu.title}
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSection;
