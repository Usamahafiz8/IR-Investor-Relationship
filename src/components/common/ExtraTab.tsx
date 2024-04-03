import foodData from '@/data/foodMenudata';
import React, { useState } from 'react';
import { TabList, Tab, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ExtraTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState<any>(foodData[0]);

  const handleTabChange = (item: any) => {
    setActiveTab(item.id);
    setContent(item);
  };

  return (
    <Tabs>
      <div>
        <TabList>
          {foodData.length &&
            foodData.map((item) => (
              <Tab onClick={() => handleTabChange(item)} key={item.id}>
                {item.title}
              </Tab>
            ))}
        </TabList>
      </div>

      {foodData.length &&
        foodData.map((item) => (
          <TabPanel key={item.id}>
            {content && (
              <>
              <h1 style={{ color: 'red' }}>{content.title}</h1>
              <p> {content.subTitle} </p>
              <p> {content.price} </p>
              </>
              
            )}
          </TabPanel>
        ))}
    </Tabs>
  );
};

export default ExtraTab;
