"use client";
import React from "react";
import gallaryData from "@/data/gallaryData";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
const GallerySection = () => {
  return (
    <>
      <PhotoProvider>
        <section className="gallery-area pt-150 pb-130">
          <div className="container">
            <div
              className="row align-items-end wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="col-xl-12 col-lg-12">
                <div className="bd-section__title-wrapper text-center">
                  <p className="bd-section__subtitle mb-20">Gallery</p>
                  <h2 className="bd-section__title mb-55 mmb-30">
                    Our Gallery
                  </h2>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".5s">
              <div className="col-xl-12">
                <div className="gallery__img-wrapper">
                  {gallaryData.length > 0 &&
                    gallaryData.slice(0, 9).map((item, index) => (
                      <PhotoView key={item.id} src={item.img.src}>
                        <div className="gallery__img">
                          <div className="glo-gallery-page-thumb" style={{height: "100%" }}>
                            <div className="img-hover" style={{height: "100%" }}>
                              <div className="glo-restaurant-thumb" style={{height: "100%" }}>
                                <Image src={item.img} alt="Image not found" />
                                <div className="glo-restaurant-content">
                                  <Link href="" className="popup-image">
                                    <i className="fal fa-plus"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PhotoView>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PhotoProvider>
    </>
  );
};

export default GallerySection;
