import React from "react";
import { FeaturedSection, HeroSection, NavBar, NftSection } from "./components";
import CurrencySection from "./components/currencySection";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <NftSection />
      <CurrencySection />
    </>
  );
};

export default App;
