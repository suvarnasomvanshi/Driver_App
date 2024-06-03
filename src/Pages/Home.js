import React, { useState } from "react";
import Hero_Section from "../component/Hero_Section";
import NumberSection from "../component/NumberSection";
import AboutSection from "../component/Schudule_Demo/Aboutus_section";
import FeatureSection from "../component/FeaturesSection";
import BookDemo_Section from "../component/BookDemo_Section";
import Service_Section from "../component/Service_Section";
import AppSection from "../component/AppSection";
import TestimonialsSection from "../component/TestimonialsSection";
import TeamSection from "../component/TeamSection";
import ContactSection from "../component/ContactSection";
import FaqSection from "../component/FaqSection";
import Location from "../component/Location"
import MissionVision from "../component/MissionVision";
import OurCustomer from "../component/OurCustomer";



const Home = () => {
   return (
    <div>
      <Hero_Section />
      <NumberSection />
      <AboutSection />
      <FeatureSection />
      <BookDemo_Section />
      <Service_Section />
      <Location />
      <TeamSection />
      <MissionVision/>
      <AppSection />
      <OurCustomer/>
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
    </div>
  );
};

export default Home;
