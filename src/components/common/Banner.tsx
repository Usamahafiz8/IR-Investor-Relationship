import React from "react";
import 'swiper/css/bundle';
import "./banner.css"

interface CommonBannerProps {
    Heading: any;
}

const CommonBanner: React.FC<CommonBannerProps> = ({ Heading }) => {
    return (
        <section className="home-banner">
            <div>
                <div className="banner_heading">
                    {Heading}
                </div>
            </div>
        </section>
    );
};

export default CommonBanner;
