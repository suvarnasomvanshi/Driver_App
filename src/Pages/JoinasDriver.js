import React from "react";
import AppSection from "../component/AppSection";
import Footer from "../component/Footer";
import JoinAsDriver_Section from "../component/JoinAsDriver_Section";
import Service_Section from "../component/Service_Section";

const JoinasDriver = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <JoinAsDriver_Section />
      <Service_Section />
      <AppSection />
      <Footer />
    </div>
  );
};

export default JoinasDriver;
