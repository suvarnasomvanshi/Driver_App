import React, { useEffect } from "react";
import Video from "../../component/Video";
import B2bDriverServices from "../../component/B2bDriverServices";
import Schedule_Demo from "../../component/Schudule_Demo/Schedule_Demo";
import AppSection from "../../component/AppSection";
import Footer from "../../component/Footer";
import SchuduleDemoForm from "../../component/Schudule_Demo/SchuduleDemoForm";
import { Grid } from "@mui/material";
const Businesses = () => {
  
  return (
    <div
      style={{
        marginTop: "50px",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <div >
        <Video />
      </div>
      <div style={{
        maxWidth:'1200px'
      }}>
        {" "}
        <B2bDriverServices />
      </div>
      
     
      <div style={{
        // maxWidth:'1200px'
      }}>
        <SchuduleDemoForm />
      </div>
      <div style={{
      }}>
        <AppSection />
      </div>
      <br />
    </div>
  );
};

export default Businesses;
