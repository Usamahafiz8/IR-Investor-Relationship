"use client"
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { Spin, message, Form, Input, Button, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";


const EditProfileForm = ({ setIsModalOpen}:any) => {

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { updateUserinfo,userInfo} = useContext(AppContext) as AppContextType

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        id: userInfo.id,
        name: userInfo?.attributes?.name,
        email: userInfo?.attributes?.email,
        country: userInfo?.attributes?.country,
        phone: userInfo?.attributes?.phone,
      });
    }
  }, [userInfo, form]);
  

  const handleSubmit = async (values:any) => {
    setLoading(true);

    try {
      const response = await fetch("/api/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          id:userInfo?.id
        }),
      });
      const responseData = await response.json();

      if (response.ok) {
        message.success("User updated successfully");
         updateUserinfo(responseData?.userData?.data)
         setLoading(false)
         setIsModalOpen(false)
      } else {
        setLoading(false);
        message.error("Error while updating user");
        console.error("Error updating user");
      }
    } catch (error) {
      setLoading(false);
      message.error("Error while updating user");
      console.error("Error updating user", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg">
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}>
          <Input disabled />
        </Form.Item>
        <Form.Item name="country" label="Country" rules={[{ required: true, message: "Please input your country!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: "Please input your phone number!" }]}>
          <Input />
        </Form.Item>
        <div className="flex justify-end">
          <button onClick={handleCancel} className="hover:bg-black hover:text-white border rounded-md px-3 py-2 my-2 font-medium text-base ml-2 uppercase">
            Cancel
          </button>
          <Spin spinning={loading}>
            <button type="submit" className="hover:bg-black hover:text-white border rounded-md px-3 py-2 my-2 font-medium text-base ml-2 uppercase">
              Submit
            </button>
          </Spin>
        </div>
      </Form>
    </div>
  );
};

export default EditProfileForm;
