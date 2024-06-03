import React from "react";
import { Box, Typography } from "@mui/material";

const ServiceSection_card = ({ src, alt, heading, description }) => {
  return (
    <>
      <div className="sec-service-card" style={{backgroundColor:'#fff'}}>
        <img src={src} alt={alt} className="sec-service-img" />
        <div className="sec-service-text-div" style={{overflow:'scroll'}}>
        <p className="sec-service-heading" style={{width:'100%',textAlign:'center', fontWeight:550}}>{heading}</p>
        <p className="sec-service-description"
        >
          {description}
        </p>
        </div>
      
      </div>
    </>
  );
};

export default ServiceSection_card;
