import brands from "@/data/brand-data";
import Image from "next/image";
import React from "react";
interface bgColorType {
  bgColor:string;
  pt:string;
  pb:string;
}
const Brands = ({bgColor,pt,pb}:bgColorType) => {
  return (
    <>
      <div className={`bd-brand-area ${pt} ${pb} ${bgColor}`}>
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-12">
              <div className="d-flex justify-content-between bd-brand__thumb-wrap">
                {brands?.map((item) => (
                  <div key={item.id} className="bd-brand__thumb text-center">
                    <Image
                      src={item.img}
                      style={{ width: "auto", height: "auto" }}
                      alt="brand image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
