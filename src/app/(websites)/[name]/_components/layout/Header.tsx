"use client";
import React, { useContext, useState } from "react";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { Modal, Form, Input, message, Spin, Button } from "antd";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";

const WebsiteHeader = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { loginUserStorage, userEmailStorage, loginUser, UserEmail,websiteInfo,updateWebsiteinfo,updatePageName } = useContext(AppContext) as AppContextType
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClaim = async () => {
    setLoading(true);
    const claimInfo = {
      email: email,
      name: name,
      websiteID:websiteInfo.attributes?.website?.data?.id,
    };
console.log(websiteInfo.website);
console.log("sssssssssss",websiteInfo.attributes?.website?.data?.id);

    const apiResponse = await fetch(`/api/claim-website`, {
      method: "POST",
      body: JSON.stringify(claimInfo),
    });
    const result = await apiResponse?.json();

    if (result.status === 409) {
      setLoading(false);
      message.error("You have already claimed this website");
    } else if (result?.status === 200) {
      updateWebsiteinfo(result?.website?.data);
      setLoading(false);
      message.success("Successfully requested for claim");
      setModalVisible(false); // Close modal after successful claim
    } else {
      setLoading(false);
      message.error("Error while requesting for claim");
    }
  };

  const confirmClaim = () => {
    if (!loginUser) {
      // router.push(`/${websiteInfo?.attributes?.name}/signin`);
      setModalVisible(true);
    } else {
      setModalVisible(true);
    }
  };

  const isSignInOrSignUp = pathname === `/${websiteInfo?.attributes?.name}/signin` || pathname === `/${websiteInfo?.attributes?.name}/signup`;

  return (
    <>
      <header className="bg-black text-white shadow-md sticky">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center justify-between w-full ">
            <nav className="hidden md:flex justify-between w-auto items-center space-x-4 font-bold gap-12 text-white">
              {data?.map((item: any, index: any) => (
                <Link className="capitalize" href={`/${websiteInfo?.attributes?.name}/${item?.attributes?.title}`} onClick={()=> updatePageName(item?.attributes?.title)} key={index}>
                  {item?.attributes?.title}
                </Link>
              ))}
            </nav>
            <div className='hidden md:flex'>
              {!isSignInOrSignUp && websiteInfo?.attributes && !websiteInfo?.attributes?.claimed && (
                <Spin spinning={loading} >
                  <Button onClick={confirmClaim} >
                    Claim 
                    {/* <b className='capitalize'>{websiteInfo?.attributes?.name}</b> */}
                  </Button>
                </Spin>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black">
            <nav className="px-2 pt-2 pb-4 space-y-1 flex flex-col items-center">
              {data?.map((item: any, index: any) => (
                <Link href={`/${websiteInfo?.attributes?.name}/${item?.attributes?.title}`} key={index} className="py-2 text-white">
                  {item?.attributes?.title}
                </Link>
              ))}
              {!isSignInOrSignUp && (
                <Spin>
                  <Button onClick={confirmClaim} >
                    Claim
                  </Button>
                  {/* <b className='capitalize'>{websiteInfo?.attributes?.name}</b> */}
                </Spin>
              )}
            </nav>
          </div>
        )}
      </header>
      {/* Modal for claiming */}
      <Modal
        title="Claim Website"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleClaim}>
            Claim
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default WebsiteHeader;
