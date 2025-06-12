import React from "react";
import HowItWorksSection from "../components/Home-page/HowItWorksSection";
import SimulationCategoriesSection from "../components/Home-page/SimulationCategoriesSection";
import FeaturedSimulationsSection from "../components/Home-page/FeaturedSimulationsSection";
import TestimonialsSection from "../components/Home-page/TestimonialsSection";
import FinalCTASection from "../components/Home-page/FinalCTASection";
import Hero from "../components/Hero";

const HomePage = () => (
  <div>
    <Hero/>
    <HowItWorksSection />
    <SimulationCategoriesSection />
    <FeaturedSimulationsSection />
    <TestimonialsSection />
    <FinalCTASection />
  </div>
);

export default HomePage;
