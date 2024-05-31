"use client";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { Form, Input, Modal, Spin, message } from "antd";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

const OverviewDescription = ({ data }: any) => {
  const {websiteInfo,updateWebsiteinfo } = useContext(
    AppContext,
  ) as AppContextType;
  const [showModalContent, setShowModalContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleShowModal = () => {
    setShowModalContent(true);
  };

  const handleCancel = () => {
    setLoading(false);
    setShowModalContent(false);
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    const content = {
      ...values
    };
    let info = {
      content: content,
      id: websiteInfo?.id,
    };
    const apiResponse = await fetch(`/api/update-website`, {
      method: "POST",
      body: JSON.stringify(info),
    });
    const reslut = await apiResponse?.json();

    if (reslut?.status === 200) {
      updateWebsiteinfo(reslut?.updateResponse?.data);
      message.success("updated content successfully");
      return handleCancel();
    } else {
      setLoading(false);
      return message.error("Error while updating content");
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      description: websiteInfo?.attributes?.description,
      image: websiteInfo?.attributes?.image,
    });
  }, [websiteInfo?.attributes,form]);

  return (
    <section className="bg-gray-100 py-12">
      {/* <Modal
        open={showModalContent}
        onCancel={handleCancel}
        title="Company Overview"
        footer={null}
        destroyOnClose={true}
      >
        <div className="flex w-full flex-col items-center gap-4">
          <Form form={form} className="w-full" onFinish={onFinish}>

            <Form.Item name="description" label="Description" className="mt-5">
              <Input.TextArea rows={8} placeholder="Enter description" />
            </Form.Item>

            <Form.Item name="image" className="mt-5" label="Image">
              <Input placeholder="Enter Image URL" />
            </Form.Item>

            <div className="flex flex-col items-center">
              <Spin spinning={loading}>
                <button
                  type="submit"
                  className="text-darkbg text-small-medium cursor-pointer rounded-lg border bg-white px-10 py-1 hover:bg-primary hover:text-white"
                >
                  Update
                </button>
              </Spin>
            </div>
          </Form>
        </div>
      </Modal> */}
      <div className="group container relative mx-auto flex items-center justify-between gap-8 px-4 group-hover:shadow-lg lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:w-1/2 ">
          <h2 className="mb-4 text-4xl font-bold capitalize ">
            {websiteInfo?.attributes?.title}
          </h2>
          <p className="leading-relaxed text-gray-700">
            {websiteInfo?.attributes?.description}
          </p>
        </div>
       {websiteInfo?.attributes?.image && <div className="lg:w-1/2">
          <Image
            src={websiteInfo?.attributes?.image || ""}
            alt="Overview"
            className="rounded-md shadow-lg "
           width={500}
           height={500}
          />
        </div>}
       {/* {websiteInfo?.attributes?.claimed && <span
          className="absolute right-0  top-1 mr-2 hidden rounded-full  border-2 border-black p-2 group-hover:block group-hover:shadow-md"
          onClick={handleShowModal}
        >
          <MdModeEditOutline />
        </span>} */}
      </div>
    </section>
  );
};

export default OverviewDescription;
