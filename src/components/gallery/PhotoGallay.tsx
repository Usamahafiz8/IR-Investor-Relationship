"use client";
import React from "react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import photoGallaryData from "@/data/photoGallary-data";
import Image from "next/image";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoGallery = () => {
  return (
    <>
      <PhotoProvider>
        <div className="glo-restaurant-gallery pb-150 mpb-50">
          <div className="container">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="15px">
                {photoGallaryData.map((item) => (
                  <PhotoView key={item.id} src={item.img.src}>
                    <div className="grid-item">
                      <div className="glo-gallery-page-thumb">
                        <div className="img-hover">
                          <div className="glo-restaurant-thumb">
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
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </PhotoProvider>
    </>
  );
};

export default PhotoGallery;
