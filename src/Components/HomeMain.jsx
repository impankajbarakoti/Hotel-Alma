import React from "react";
import HeroSection from "./HeroSection";
import Section from "./Section";
import AlmarisIntroBlock from "./AlmarisIntroBlock";
import FacilitiesSection from "./FacilitiesSection";
import VL from "./Vl";
import TestimonialSection from "./TestimonialSection.JSX";
import RoomsSection from "./RoomsSection";
import SpecialOffersSection from "./SpecialOffersSection";
import InstagramFeedSection from "./InstagramFeedSection";

const HomeMain = () => {
  return (
    <div>
      <HeroSection />
      <Section />
      <AlmarisIntroBlock />
      <FacilitiesSection />     
      <VL />
      <TestimonialSection />
      <RoomsSection />
      <SpecialOffersSection />
      <InstagramFeedSection/>
    </div>
  );
};

export default HomeMain;
