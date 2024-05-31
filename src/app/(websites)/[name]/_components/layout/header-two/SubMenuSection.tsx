"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import HeaderTwoMenu from "./Menu";
import { AppContext } from "@/contextApi/AppProvider";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { AppContextType } from "@/interFace/interFace";

const SubMenuSection = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pageName, tabName, updateTabName,websiteInfo } = useContext(
    AppContext,
  ) as AppContextType;
  const menuOption = HeaderTwoMenu.find((item) => item.link === pageName);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    menuOption?.submenus && (
      <div className=" flex flex-col w-full text-white">
        <div className="flex w-full bg-red-600 max-md:hidden items-center justify-center">
          {menuOption &&
            menuOption?.submenus?.map((menu) => (
              <Link
                key={menu.title}
                href={`/${websiteInfo?.attributes?.ticker}/${menuOption.link}/${menu.link}`}
              >
                <div
                  className={`p-3 hover:bg-red-700 ${tabName === menu.link ? "bg-red-900" : ""}`}
                  onClick={() => updateTabName(menu.link)}
                >
                  {menu.title}
                </div>
              </Link>
            ))}
        </div>
        <div className="w-full max-md:flex hidden  items-center justify-center gap-3 bg-black text-white py-2 ">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
          <span className="capitalize">{tabName}</span>
        </div>
        {isMobileMenuOpen && (
          <div className="hidden w-full flex-col bg-red-600 max-md:block p-2">
            {menuOption &&
              menuOption?.submenus?.map((menu) => (
                <Link
                  key={menu.title}
                  href={`/${websiteInfo?.attributes?.ticker}/${menuOption.link}/${menu.link}`}
                >
                  <div
                    className={`p-3 hover:bg-red-700 ${tabName === menu.link ? "bg-red-900" : ""}`}
                    onClick={() => updateTabName(menu.link)}
                  >
                    {menu.title}
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    )
  );
};

export default SubMenuSection;
