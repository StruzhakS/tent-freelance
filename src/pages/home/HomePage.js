import HeroComponent from 'components/heroComponent/HeroComponent';
import HowWeWork from 'components/howWeWork/HowWeWork';
import UniqueOffers from 'components/uniqueOffers/UniqueOffers';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <HowWeWork />
      <UniqueOffers/>
    </>
  );
};

export default HomePage;
