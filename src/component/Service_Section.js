import React from "react";
import ServiceSection_card from "./ServiceSection_card";
import Service_Section1 from "../Assets/Service_Section1.png";
import Service_Section2 from "../Assets/Service_Section2.png";
import Service_Section3 from "../Assets/Service_Section3.png";
import {Container } from "@mui/material";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";

const Service_Section = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center", width:"100vw", backgroundColor:'#f1f1f1'}}>
    <section className="services-section-one"  style={{maxWidth:"1200px", backgroundColor:'#f1f1f1'}}>
      <Container sx={{bgcolor:"#f1f1f1",px:0}}>
        <div className="content-container" style={{backgroundColor:'#f1f1f1'}}>
          <div className="sec-title">
            <div className="inner-title-box">
             
              <p className="rotate-title" style={{color:'#ffffff'}}>
              Services
              </p>
              <p className="sec-service-main-heading" style={{backgroundColor:'#f1f1f1'}}>
              What We Offer At DriverShaab 
              </p>
            </div>
          </div>
          {/* <div className="sec-service-card-container"> */}
          <div className="sec-service-card-container" >
            <ServiceSection_card
              src={Service_Section1}
              alt="OurOffering_img2"
              heading="Verified Drivers at Your Service"
              description="Every DriverShaab member undergoes a thorough background check, including documentation verification, to ensure maximum safety. With our experienced and courteous drivers behind the wheel, you can relax and enjoy your journey."
            />
            <ServiceSection_card
              src={Service_Section2}
              alt="Service_Section2"
              heading="Customized Insurance Policy"
              description="DriverShaab offers insurance policies for you, that can be charged on actuals. We offer up to INR 25,000 in case of any damage that you might have suffered at our hands. All you need to do is share the details and necessary proofs, and you will receive the amount."
            />
            <ServiceSection_card
              src={Service_Section3}
              alt="Service_Section3"
              heading="Postpaid Service"
              description="Our postpaid services ensure you can make full use of them without worrying about immediate payments. At DriverShaab, we have put in place a monthly billing system. Once your invoice is raised, you can make the payment within seven days. "
            />
          </div>
        </div>
      </Container>
    </section>
    </div>
  );
};

export default Service_Section;
