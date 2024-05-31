
import React from 'react';
import HeroSectionHome2 from './HeroSectionHome2';
import FeatureAreaSec from './FeatureAreaSec';
import WellcomeAreaSec from './WellcomeAreaSec';
import RoomAndSuitsSec from './RoomAndSuitsSec';
import BookNowSec from './BookNowSec';
import DeliciasFoodSec from './DeliciasFoodSec';

const HomeTwoMain = () => {
    return (
        <>
          <HeroSectionHome2/>
          <FeatureAreaSec customeCalss='theme-bg-2'/>
          <WellcomeAreaSec/>
          <RoomAndSuitsSec title='Rooms' sectionTitle='Our Rooms & Suites'/>
          <BookNowSec/>
          <DeliciasFoodSec/>         
        </>
    );
};

export default HomeTwoMain;