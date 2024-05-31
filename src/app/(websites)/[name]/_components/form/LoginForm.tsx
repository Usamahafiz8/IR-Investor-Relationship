"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Modal, Form, Input, message, Spin } from "antd";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";

const WebsiteLoginForm = ({ data }: any) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [loginModal, setLoginModal] = useState(false);
    const { loginUserStorage, userEmailStorage, loginUser, UserEmail } = useContext(AppContext) as AppContextType;
    const router = useRouter();
    const [storedWebsiteName, setWebsiteName] = useState<string | null>(null);

    useEffect(() => {
        const storedWebsiteName = localStorage.getItem("websiteName");
        setWebsiteName(storedWebsiteName);
    }, []);
    console.log('-------------------------', storedWebsiteName);

    const onFinish = async (values: any) => {
        setLoading(true);
        let info;

        info = {
            email: values.email,
            password: values.password,
            websiteName: storedWebsiteName,
        };
        const apiResponse = await fetch(`/api/auth/signin`, {
            method: "POST",
            body: JSON.stringify(info),
        });
        const reslut = await apiResponse?.json();

        if (reslut?.status === 401) {
            setLoading(false);
            return message.error("invalid username or password");
        }
        if (reslut?.status === 404) {
            setLoading(false);
            return message.error("user not found");
        }

        if (reslut?.status === 200) {
            loginUserStorage(true);
            userEmailStorage(values.email);

            message.success("Successfully signed in");
            router.push(`/${storedWebsiteName}`);
            return;
        } else {
            setLoading(false);
            return message.error("Error while signing in");
        }
    };

    return (
        <Form form={form} className="w-[70%]" onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "Please input your Password!" },
                ]}
                hasFeedback
            >
                <Input.Password placeholder="Password" />
            </Form.Item>

            <div className="flex flex-col items-center">
                <Spin spinning={loading}>
                    <button
                        type="submit"
                        className="hover:bg-primary hover:text-white bg-white text-darkbg border px-10 py-1 rounded-lg text-small-medium cursor-pointer"
                    >
                        Sign in
                    </button>
                </Spin>
            </div>

            <div className="flex justify-center gap-8 items-center mt-10 my-6 text-primary">

                <div className="flex items-center gap-4">
                    <span>Dont have an account?</span>
                    <span className="cursor-pointer text-base-medium underline" onClick={() => router.push(`/${storedWebsiteName}/signup`)}>Sign Up</span>
                </div>
            </div>
        </Form>
    );
};

export default WebsiteLoginForm;
