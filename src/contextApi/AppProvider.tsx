"use client";
import React, { createContext, useState } from "react";
import { AppContextType } from "@/interFace/interFace";
import { useLocalStorage } from "usehooks-ts";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useLocalStorage("isLoginUser",null);
  const [UserEmail, setUserEmail] = useLocalStorage("UserEmail", null);
  const [websiteName, setWebsiteName] = useLocalStorage("websiteName", null);
  const [websiteInfo, setWebsiteInfo] = useState<any>({});
  const [userInfo, setUserInfo] = useState<any>({});
  const [overviewPageInfo, setOverviewPageInfo] = useState<any>({});
  const [roomId, setRoomId] = useState<number>(1);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [tabName, setTabName] = useState("");
  const [pageName, setPageName] = useState("");
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
const loginUserStorage =(value:any)=>{
setLoginUser(value)
}
const userEmailStorage =(email:any)=>{
  setUserEmail(email);
}
const updateWebsiteinfo = (value:any)=>{
  setWebsiteInfo(value)
  setWebsiteName(value?.attributes?.name)
}
const updateUserinfo = (value:any)=>{
  setUserInfo(value)
}
const updateOverviewPageInfo = (value:any)=>{
  setOverviewPageInfo(value)
}
const updateTabName = (value:any)=>{
  setTabName(value)
}
const updatePageName = (value:any)=>{
  setPageName(value)
}

  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    roomId,
    setRoomId,
    loginUser,
    loginUserStorage,
    UserEmail,
    userEmailStorage,
    websiteInfo,
    setWebsiteInfo,
    updateWebsiteinfo,
    updateOverviewPageInfo,
    overviewPageInfo,
    tabName,
    setTabName,
    updateTabName,
    pageName,
    setPageName,
    updatePageName,
    websiteName,
    userInfo,
    updateUserinfo
  };

  return (
  <>
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  </>
  );
};

export default AppProvider;
