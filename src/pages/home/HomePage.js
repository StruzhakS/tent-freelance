import FindUs from 'components/findUs/FindUs';
import HeroComponent from 'components/heroComponent/HeroComponent';
import HowWeWork from 'components/howWeWork/HowWeWork';
import Lots from 'components/lots/Lots';
import UniqueCategories from 'components/uniqueCategories/UniqueCategories';
import UniqueOffers from 'components/uniqueOffers/UniqueOffers';
import VideoTutorials from 'components/videoTutorials/VideoTutorials';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <HowWeWork />
      <UniqueCategories />
      <UniqueOffers />
      <VideoTutorials />
      <Lots />
      <FindUs/>
    </>
  );
};

export default HomePage;
