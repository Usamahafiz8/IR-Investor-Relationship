"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { toURLFriendly } from "../../utils/helper";
import { IoPersonOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { Dropdown, Space } from "antd";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import TextEditorModal from "../Editor/Editor";
import { signOut } from "next-auth/react";

interface UserData {
  attributes: {
    image: string;
    name: string;
    email: string;
  };
}

const UserProfile = ({session}:any) => {
  const {
    websiteInfo,
    loginUserStorage,
    userEmailStorage,
  } = useContext(AppContext) as AppContextType;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      const body = JSON.stringify({
        email: session?.email,
        websiteName: websiteInfo?.attributes?.ticker,
      });

      const response = await fetch("/api/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (response.ok) {
        const result = await response.json();
        setUserData(result?.data.data[0]);
      } else {
        console.log("Response not OK:", response.statusText);
      }
    };

    if (session?.isLogin && websiteInfo?.attributes?.ticker === session?.ticker) {
      fetchData();
    }
  }, [websiteInfo?.attributes?.ticker,session?.isLogin,session?.email,session?.ticker]);

  const items = [
    {
      key: "1",
      label: (
        <Link
          href={`/${websiteInfo?.attributes?.ticker}/profile/${toURLFriendly(
            userData?.attributes?.name,
          )}?email=${userData?.attributes?.email}`}
          className="flex items-center gap-3 p-2"
        >
          <IoPersonOutline />
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <button
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="flex items-center gap-3 p-2"
        >
          <MdOutlineContentPasteGo />
          Update Overview
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button
          className=" flex items-center gap-3 p-2"
          onClick={() => {
            loginUserStorage(false);
            userEmailStorage(null);
            signOut()
          }}
        >
          <IoLogOutOutline />
          Logout
        </button>
      ),
    },
  ];

  const onClose = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <TextEditorModal
        visible={isModalOpen}
        onClose={onClose}
        initialMarkdown={websiteInfo?.attributes?.content || ""}
      />

      <Dropdown menu={{ items }}>
        <Space>
          <div className="relative flex cursor-pointer items-center gap-3">
            <Image
              src={
                userData?.attributes?.image ||
                "/assets/img/website-images/author.jpg"
              }
              width={50}
              height={50}
              alt="Picture of the author"
              className=" rounded-full"
            />
            <span>{userData?.attributes?.name}</span>
          </div>
          <IoChevronDownOutline />
        </Space>
      </Dropdown>
    </>
  );
};

export default UserProfile;
