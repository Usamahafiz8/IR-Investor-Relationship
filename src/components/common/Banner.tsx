import React from "react";
import 'swiper/css/bundle';

interface CommonBannerProps {
    Heading: any;
}

const CommonBanner = ({ Heading }: CommonBannerProps) => {
    return (
        <section className=" bg-gradient-to-b from-gray-600 bg-opacity-50 to-black bg-cover h-[50vh]">
            <div className="container">

                <div className="container  flex justify-start items-end p-16 h-[50vh] text-white text-4xl md:text-6xl font-semibold leading-tight ">
                    {Heading}
                </div>
            </div>

        </section>
    );
};

export default CommonBanner;
