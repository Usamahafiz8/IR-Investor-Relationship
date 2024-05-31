
import React from "react";
import { getAllReports } from "@/utils/strapiApi";
import HomeBanner from "./Banner";
import StaticBanner from "./StaticHero";


const HeroSection = async () => {
    const Reports = await getAllReports(1, 10, '');

    
    if (Reports) {

        return (<div>
            <HomeBanner  reports={Reports.data}/>
        </div>)
    } else {
        return (<div>
            <StaticBanner />
        </div>)
    }

};

export default HeroSection;
