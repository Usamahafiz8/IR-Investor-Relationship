"use client"
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { Form, Input, Modal, Spin, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import 'swiper/css/bundle';


const Banner = () => {
  const { updateOverviewPageInfo,overviewPageInfo,websiteInfo } = useContext(AppContext) as AppContextType
  const [showModalContent,setShowModalContent] =useState(false)
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleShowModal=()=>{
      setShowModalContent(true)
  }

  const handleCancel = ()=> {
    setLoading(false);
      setShowModalContent(false)
  }

  const onFinish = async (values:any) => {
      setLoading(true);
      const content={
        ...values
      }
      let info = {
          content: content,
          id: overviewPageInfo?.id,
        };
        const apiResponse = await fetch(`/api/update-page`, {
          method: "POST",
          body: JSON.stringify(info),
        });
        const reslut = await apiResponse?.json();

        if (reslut?.status === 200) {
          updateOverviewPageInfo(reslut?.updateResponse?.data)
          message.success("updated content successfully");
          return handleCancel();
        } else {
          setLoading(false);
          return message.error("Error while updating content");
        }
      
    };

    useEffect(()=>{
      form.setFieldsValue({
        title: overviewPageInfo?.attributes?.title
      });
    },[overviewPageInfo?.attributes?.title,form])
  

  return (
    <section className=" flex justify-center relative group group-hover:shadow-lg items-center bg-gray-200 bg-cover bg-center h-[20vh] md:h-[20vh] xl:h-[20vh]" 
    style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," }}>
       <Modal
        open={showModalContent}
        onCancel={handleCancel}
        title='Company Overview'
        footer={null}
        destroyOnClose={true}
      >
        <div className="flex flex-col items-center gap-4 w-full">

          <Form form={form} className="w-full" onFinish={onFinish}>
            <Form.Item
              name="title"
              label="Title"
              className='mt-5'
            >
              <Input placeholder="Enter Title" />
            </Form.Item>


            <div className="flex flex-col items-center">
              <Spin spinning={loading}>
                <button
                  type="submit"
                  className="hover:bg-primary hover:text-white bg-white text-darkbg border px-10 py-1 rounded-lg text-small-medium cursor-pointer"
                >
                  Update
                </button>
              </Spin>
            </div>
          </Form>
        </div>
      </Modal>
      <div>
          <p className='text-centertext-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium capitalize '>{overviewPageInfo?.attributes?.title}</p>
        {websiteInfo?.attributes?.claimed &&  <span className='hidden group-hover:shadow-md  group-hover:block absolute top-1 right-0  mr-2 p-2 border-2 border-black rounded-full' onClick={handleShowModal}>
            <MdModeEditOutline />
          </span>}
        </div>
    </section>
  );
};

export default Banner;
