"use client";
import React, { useState } from "react";
import bgImg from "../../../public/assets/img/bg/foodmenu-bg.jpg";
import FoodSlidersComp from "./FoodSlidersComp";
import { TabList, Tab, TabPanel, Tabs } from "react-tabs";
import tabContent from "@/data/tabContent";
const DeliciasFoodSec = () => {
  interface iDataType {
    id: number;
    category: string;
  }

  const [activeTab, setActiveTab] = useState(1);
  const [findTabs, setfindTabs] = useState<string | undefined>();
  const handleTabChange = (item: iDataType) => {
    setActiveTab(item.id);
    setfindTabs(item.category);
  };
  return (
    <Tabs>
      <section className="bd-foodmenu-area p-relative pt-150 pb-150">
        <div
          className="bd-foodmenu__bg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="container">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <div className="bd-section__title-wrapper is-white text-center">
                <p className="bd-section__subtitle mb-20">food menus</p>
                <h2 className="bd-section__title mb-35">
                  Delicious Food Forever
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-foodmenu__tab">
          <TabList>
            <div className="container">
              <div className="row wow fadeInUp" data-wow-delay=".5s">
                <div className="col-12">
                  <ul className="nav nav-tabs royel-mb-65 mb-65">
                    {tabContent.length &&
                      tabContent.map((item) => (
                        <Tab
                          onClick={() => handleTabChange(item)}
                          className="nav-item"
                          key={item.id}
                        >
                          <button
                            className={`nav-link ${
                              activeTab === item.id ? "active" : " "
                            }`}
                          >
                            {item.category}
                          </button>
                        </Tab>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabList>
          <div className="tab-content wow fadeInUp" data-wow-delay=".5s">
            {tabContent.length &&
              tabContent.map((item) => (
                <TabPanel key={item.id}>
                  <div
                    className={`tab-pane fade ${
                      activeTab === item.id ? "show active" : " "
                    }`}
                  >
                    <div className="bd-foodmenu">
                      <div className="bd-foodmenu-active">
                        <FoodSlidersComp findTabs={findTabs} />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
          </div>
        </div>
      </section>
    </Tabs>
  );
};

export default DeliciasFoodSec;
