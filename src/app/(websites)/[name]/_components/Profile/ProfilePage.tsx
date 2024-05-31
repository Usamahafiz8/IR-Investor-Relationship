"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { toURLFriendly } from "../../utils/helper";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import EditProfileForm from "./EditProfileForm";
import { useRouter } from "next/navigation";

const ProfilePage = ({ data }: any) => {
    const router = useRouter();
    const { loginUser, userInfo, updateUserinfo, websiteInfo } = useContext(AppContext) as AppContextType
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!loginUser) {
            router.push("/");
        }
    }, [loginUser, router]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        if (data && !userInfo?.attributes) {
            updateUserinfo(data)
        }

    }, [data, updateUserinfo,userInfo?.attributes])


    return (
        <>
            <section className="pt-10 bg-blueGray-50 relative">
                <div className="w-full px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="relative -top-16">
                                    <Image
                                        src={userInfo?.attributes?.image || "/assets/img/website-images/author.jpg"}
                                        width={150}
                                        height={150}
                                        alt="Picture of the author"
                                        className="shadow-xl rounded-full align-middle border-none relative"
                                    />
                                </div>
                                <div className="absolute top-0 right-0 mt-4 mr-4">
                                    <button onClick={showModal}>
                                        <FiEdit />
                                    </button>
                                </div>
                                <Modal
                                    centered
                                    title="Edit Profile"
                                    open={isModalOpen}
                                    footer={null}
                                    onCancel={handleCancel}
                                    destroyOnClose={true}
                                >
                                    <EditProfileForm
                                        setIsModalOpen={setIsModalOpen}

                                    />
                                </Modal>
                            </div>
                            <div className="text-center relative -top-10">
                                <h3 className="text-[2rem] font-semibold leading-normal capitalize mb-2 text-blueGray-700">
                                    {userInfo?.attributes?.name}
                                </h3>
                            </div>
                            <div className="mb-5">
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 capitalize">
                                    <span className="font-medium">Country:</span> {userInfo?.attributes?.country}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <span className="font-medium">Email:</span> {userInfo?.attributes?.email}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <span className="font-medium">Phone No:</span> {userInfo?.attributes?.phone}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
