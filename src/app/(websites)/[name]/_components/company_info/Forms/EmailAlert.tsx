"use client";
import React, { useState } from "react";
import { Form, Input, Checkbox, Select, message, Spin } from "antd";

const { Option } = Select;

interface FormValues {
  name: string;
  email: string;
  contactType: string;
  notifications: any;
}

const EmailAlertForm = ({ websiteInfo }: any) => {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);

    const data = {
      name: values?.name,
      email: values?.email,
      contactType: values?.contactType,
      notificationType: values?.notifications,
      websiteID: websiteInfo?.id,
    };

    try {
      const response = await fetch("/api/email-alert", {
        method: "POST",
        body: JSON.stringify(data),
        cache:"no-cache"
      });
      const result = await response.json();
      setLoading(false);
      if (result.status === 409) {
        message.error("Email is already exists");
      } else if (result.status === 200) {
        message.success("Successfully subscribed for alerts");
        form.setFieldsValue({
          name: "",
          email: "",
          contactType: "",
          notifications: "",
        });
      } else {
        message.error(result.message || "Error while signing up");
      }
    } catch (error) {
      setLoading(false);
      message.error("An error occurred");
    }
  };

  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="px-4 ">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="mx-auto max-w-xl"
        >
          <Form.Item
            name="name"
            label="Name:"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email:"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="contactType"
            label="Contact Type:"
            rules={[
              { required: true, message: "Please select your contact type!" },
            ]}
          >
            <Select placeholder="Select a contact type">
              <Option value="individual">Individual Investor</Option>
              <Option value="institutional">Analyst</Option>
              <Option value="broker/investor">Broker/Investment Adviser</Option>
              <Option value="portfolio-manager">Portfolio Manager</Option>
              <Option value="banking/financing">Banker/Financing Sourec</Option>
              <Option value="press/media">Press/Media</Option>
              <Option value="consultant">Consultant</Option>
              <Option value="employee">Employee</Option>
              <Option value="customer/client">Customer/Client</Option>
              <Option value="student">Student</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <p className="ant-form-item-label">CHOOSE NOTIFICATIONS</p>
          <Form.Item name="notifications" className="mt-2">
            <Checkbox.Group style={{ width: "100%" }}>
              <div>
                <Checkbox value="allPressReleases">All Press Releases</Checkbox>
              </div>
              <div>
                <Checkbox value="allSEC">All SEC Filings</Checkbox>
              </div>
              <div>
                <Checkbox value="annualReports">
                  Annual & Quarterly Reports
                </Checkbox>
              </div>
              <div>
                <Checkbox value="currentReports">Current Reports</Checkbox>
              </div>
              <div>
                <Checkbox value="insiderTransactions">
                  Insider Transactions
                </Checkbox>
              </div>
              <div>
                <Checkbox value="proxyInformation">Proxy Information</Checkbox>
              </div>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item>
            <Spin spinning={loading}>
            <button
            disabled={loading}
              className="rounded border px-3 py-1 text-center hover:bg-black hover:text-white"
              type="submit"
            >
              Submit
            </button>
            </Spin>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default EmailAlertForm;
