import React from "react";
import {
  DemoBtn,
  Faq,
  FeaturedSection,
  Footer,
  HeroSection,
  NavBar,
  NftSection,
  RoadMap,
  Tokenomics,
} from "./components";
import CurrencySection from "./components/currencySection";
import Test from "./test";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <NftSection />
      <CurrencySection />
      <RoadMap />
      <Tokenomics />
      <Faq />
      <DemoBtn />
      <Footer />
    </>
  );
};

export default App;
