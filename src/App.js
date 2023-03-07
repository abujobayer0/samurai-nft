import React from "react";
import {
  Faq,
  FeaturedSection,
  Footer,
  HeroSection,
  NavBar,
  NftSection,
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
      <Faq />
      <Footer />
    </>
  );
};

export default App;
