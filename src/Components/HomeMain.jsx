import React from "react";
import HeroSection from "./HeroSection";
import Section from "./Section";
import AlmarisIntroBlock from "./AlmarisIntroBlock";
import FacilitiesSection from "./FacilitiesSection";
import VL from "./Vl";
import TestimonialSection2 from "./TestimonialSection2";
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
      <TestimonialSection2/>
      <RoomsSection />
      <SpecialOffersSection />
      <InstagramFeedSection/>
    </div>
  );
};

export default HomeMain;
