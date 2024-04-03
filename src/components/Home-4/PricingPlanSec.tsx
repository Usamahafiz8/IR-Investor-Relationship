"use client"
import React, { useEffect, useState } from "react";
import pricingPlan from "@/data/pricingPlan-data";
import { StaticImageData } from "next/image";
import Link from "next/link";
interface classType{
  classbg:string,
  classbgDiv:string,
}

const PricingPlanSec = ({classbg,classbgDiv}:classType) => {
  const [responsive, setresponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setresponsive(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  interface itemInferFace{
    id: number;
    price: number;
    time: string;
    title: string;
    img: StaticImageData
    itemList: {
        id: number;
        listData: string;
    }[];
    subTitle: string;
    sectionTitle: string;
    details: string;
}
  const [active, setActive] = useState<number>(3)
  const handleActive = (item:itemInferFace) =>{
    setActive(item.id)
  }
  return (
    <>
      <section className={classbg}>
        <div className="container">
          <div className="row-custom wow fadeInUp" data-wow-delay=".5s">
            {pricingPlan?.map((item) => (
              <div key={item.id}  className={`col-custom ${active === item.id ? "active" : " "} ${responsive ? "active": " "}`}>
                <div className="bd-price-item__wrap">
                  <div className={classbgDiv}>
                    <div className="bd-price-item__content">
                      <div onClick={()=>handleActive(item)} className="bd-price-item__icon"></div>
                      <div className="bd-price-item__price">
                        <p>
                          ${item.price} <span>/ {item.time}</span>
                        </p>
                      </div>
                      <h4 className="bd-price-item__title">{item.title}</h4>
                    </div>
                  </div>
                  <div className="bd-price-item-2">
                    <div className="bd-price-item__list-wrap p-relative">
                      <div
                        className="bd-price-item__list-bg"
                        style={{ backgroundImage: `url(${item.img.src})` }}
                      ></div>
                      <div className="bd-price-item__list-icon mb-60">
                        <i className="flaticon-value"></i>
                      </div>
                      <div className="bd-price-item__list">
                        <ul>
                          {item?.itemList?.map((list) => (
                            <li key={list.id}>
                              <i className="flaticon-check-circle"></i>
                              <span> {list.listData} </span>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bd-price-item__list-btn">
                        <Link href="/contact" className="bd-btn">
                          get started
                          <span>
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="bd-price-item__content-2">
                      <div className="bd-section__title-wrapper">
                        <p className="bd-section__subtitle mb-20">
                          
                          {item.subTitle}
                        </p>
                        <h2 className="bd-section__title mb-25">
                          
                          {item.sectionTitle}
                        </h2>
                      </div>
                      <p> {item.details} </p>
                      <div className="bd-price-item__btn mt-35">
                        <Link href="/pricing" className="bd-btn-2">
                          View all package
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlanSec;
