import React from "react";
import {
  DemoBtn,
  Faq,
  FeaturedSection,
  Footer,
  HeroSection,
  NavBar,
  NftSection,
  Tokenomics,
} from "./components";
import CurrencySection from "./components/currencySection";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <NftSection />
      <CurrencySection />
      <Tokenomics />
      <Faq />
      <Footer />
      <DemoBtn />
    </>
  );
};

export default App;
