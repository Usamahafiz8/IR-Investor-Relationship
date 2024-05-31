"use client";
import React, { useContext, useState } from "react";
import { Modal, Form, Input, message, Spin, Divider } from "antd";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import UserProfile from "./Profile/UserProfile";
import { FaChartLine } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useParams } from "next/navigation";


const LoginForm = ({ data,session }: any) => {
  const [formType, setFormType] = useState("signin");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [loginModal, setLoginModal] = useState(false);
  const {
    loginUserStorage,
    userEmailStorage,
    loginUser,
    UserEmail,
    updateWebsiteinfo,
    websiteInfo,
  } = useContext(AppContext) as AppContextType;
  const params= useParams()

 

  const showModal = (type: any) => {
    setFormType(type);
    setLoginModal(true);
  };

  const handleOk = () => {
    // Submit the form
    setLoginModal(false);
  };

  const handleCancel = () => {
    setLoginModal(false);
    setLoading(false);
    form.setFieldsValue({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    let info;

    if (formType === "signup") {
      info = { ...values, websiteName: data?.attributes?.ticker };

      const apiResponse = await fetch(`/api/auth/signup`, {
        method: "POST",
        body: JSON.stringify(info),
      });

      const reslut = await apiResponse?.json();

      if (reslut?.status === 409) {
        setLoading(false);
        return message.error("email is already exists");
      }

      if (reslut?.status === 200) {
        message.success("Successfully signed up");
        handleCancel();
      } else {
        setLoading(false);
        message.error("Error while signing up");
      }
    } else if (formType === "claim") {
      info = { ...values, websiteID: data?.id };

      const apiResponse = await fetch(`/api/claim-website`, {
        method: "POST",
        body: JSON.stringify(info),
      });

      const reslut = await apiResponse?.json();

      if (reslut?.status === 409) {
        setLoading(false);
        return message.error("email is already exists");
      }

      if (reslut?.status === 200) {
        message.success("Successfully requested for claim");
        console.log(reslut);
        updateWebsiteinfo(reslut?.website?.data);
        handleCancel();
      } else {
        setLoading(false);
        message.error("Error while requesting for claim");
      }
    } else {
      info = {
        email: values?.email,
        password: values?.password,
        websiteName: data?.attributes?.ticker,
      };
      const apiResponse = await signIn("credentials",{
        email: values?.email,
        password: values?.password,
        websiteName: data?.attributes?.ticker,
        redirect: false
    })
    
      const reslut:any = apiResponse;

      if (reslut?.status === 401) {
        setLoading(false);
        return message.error("invalid username or password");
      }
      if (reslut?.status === 404) {
        setLoading(false);
        return message.error("user not found");
      }

      if (reslut?.status === 200) {
        // router.push(reslut?.url)
        window?.location?.reload();
        loginUserStorage(true);
        userEmailStorage(values.email);

        message.success("Successfully signed in");
        return handleCancel();
      } else {
        setLoading(false);
        return message.error("Error while signing in");
      }
    }
  };

  return (
    <>
      {!websiteInfo?.attributes?.claimed ? (
        <Spin spinning={loading}>
          <span
            className="text-base-medium max-content relative cursor-pointer border flex items-center gap-2 px-2 py-1 uppercase hover:bg-white hover:text-black rounded-md"
            onClick={() => showModal("claim")}
          >
            Claim <span><FaChartLine /></span>
          </span>
        </Spin>
        // @ts-ignore
      ) : session?.isLogin && session?.ticker === params?.name?.toLocaleUpperCase() ? (
        <UserProfile session={session} />
       
      ) : (
        <div className="flex items-center gap-5">
        <span
          className="text-base-medium max-content relative cursor-pointer uppercase"
          onClick={() => showModal("signin")}
        >
          Sign in
        </span>
      </div>
      )}
      <Modal
        open={loginModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mb-3 mt-9 flex w-full flex-col items-center justify-center gap-3 text-center capitalize">
            {/* <span className="flex text-xl font-medium">{formType === "claim" ? "Claim Request" : formType}</span>  */}
            <span className="text-xl font-medium">
              {websiteInfo?.attributes?.name} ({websiteInfo?.attributes?.ticker}
              )
            </span>
          </div>

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

            {formType === "claim" && (
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
            )}

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* {formType === "signup" && (
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            )} */}

            <div className="flex flex-col items-center">
              <Spin spinning={loading}>
                <button
                  type="submit"
                  className=" cursor-pointer rounded-lg border bg-white px-10 py-1 hover:!bg-black hover:text-white hover:font-medium"
                >
                  {formType === "signin" ? "Sign in" : "Claim"}
                </button>
              </Spin>
            </div>

            {/* <div className="flex justify-center gap-8 items-center mt-10 my-6 text-primary">
              {formType === "signin" ? (
                <div className="flex items-center gap-4">
                  <span>Dont have an account?</span>
                  <span className="cursor-pointer text-base-medium underline" onClick={() => showModal("signup")}>Sign Up</span>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <span>Already have an account?</span>
                  <span className="cursor-pointer text-base-medium underline" onClick={() => showModal("signin")}>Sign In</span>
                </div>
              )}
            </div> */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default LoginForm;