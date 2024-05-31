"use client"
import MarkdownComponent from '@/components/news/newsDetails/MarkdownComponent';
import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import { Form, Input, Modal, Spin, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";

const CompanyOverViewContent =({ data }: any) => {
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
          content: values.content
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
          content: overviewPageInfo?.attributes?.content
        });
      },[overviewPageInfo?.attributes?.content,form])
    

    return (
        <div className='container my-4'>
            {/* <Modal
        open={showModalContent}
        onCancel={handleCancel}
        title='Company Overview'
        footer={null}
        destroyOnClose={true}
      >
        <div className="flex flex-col items-center gap-4 w-full">

          <Form form={form} className="w-full" onFinish={onFinish}>
            <Form.Item
              name="content"
              label="Content"
              className='mt-5'
            >
              <Input.TextArea rows={8} placeholder="Content" />
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
      </Modal> */}
        <div className='flex items-center justify-between'>
          <span className='font-bold text-2xl text-black'>Company Overview</span>
        </div>
        <div className='my-3'>
        <MarkdownComponent content={websiteInfo?.attributes?.content || ""} />
      
        </div>
      </div>
    );
}

export default CompanyOverViewContent;
