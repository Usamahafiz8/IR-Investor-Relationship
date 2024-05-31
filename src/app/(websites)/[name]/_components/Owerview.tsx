"use client";
import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import Image from "next/image";

const OverviewSection = ({ data }: any) => {
    const { websiteInfo,pageName,updatePageName, updateTabName } = useContext(AppContext) as AppContextType

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: websiteInfo?.attributes?.title || "",
        description: websiteInfo?.attributes?.description || "",
        image: websiteInfo?.attributes?.image || "",
    });

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = () => {
        // Handle form submission logic here
        console.log("Updated Data:", formData);
        setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section className="py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-8">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-4 capitalize">{websiteInfo?.attributes?.title || ""}</h2>
                    <p className="text-gray-700 leading-relaxed">{websiteInfo?.attributes?.description || ""}</p>
                    {/* <Button type="primary" onClick={handleEditClick}>
                        Edit
                    </Button> */}
                </div>
                <div className="lg:w-1/2">
                    <Image
                    width={500}
                    height={500}
                        src={websiteInfo?.attributes?.image || ""}
                        alt="Overview"
                        className="rounded-md shadow-lg"
                       
                    />
                </div>
            </div>
            <div className="container mt-8 flex justify-start gap-2">
                    <Link href="#" className="flex items-center border border-black px-6 py-2  hover:bg-black hover:text-white">
                        VIEW TEAM MANAGEMENT <FaArrowRight className="ml-2" />
                    </Link>
                    <Link href="#" className="flex items-center border border-black px-6 py-2  hover:bg-black hover:text-white">
                        VIEW BOARD OF DIRECTORS <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            {/* <Modal title="Edit Overview" visible={isModalOpen} onCancel={handleCancel} onOk={handleFormSubmit}>
                <Form layout="vertical">
                    <Form.Item label="Title">
                        <Input name="title" value={formData.title} onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input.TextArea name="description" value={formData.description} onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item label="Image URL">
                        <Input name="image" value={formData.image} onChange={handleInputChange} />
                    </Form.Item>
                </Form>
            </Modal> */}
        </section>
    );
};

export default OverviewSection;
