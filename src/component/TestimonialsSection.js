import React from "react";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/color.css";
import BubbleLayout from "./BubbleLayout/BubbleLayout";
import { Grid, useMediaQuery} from "@mui/material";
import line from "../Assets/images/line.png";

const TestimonialsSection = () => {
  
  const isdescktop = useMediaQuery('1000px')
  return (
   
    <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center",position:'relative'}}>
    <div className="aboutus_text_slash" style={{marginRight:'70px',marginLeft:'-80px',display:isdescktop?'block':'none' }}>
            <div className="aboutus_blur_heading">Feedbacks</div>
            <div className="line_img">
              <img src={line} alt="lineimg" style={{ height: "52px" }} />
            </div>
          </div>  
    <BubbleLayout/>  
    
      
    <section className="testimonials-section" style={{maxWidth:"1300px"}}>
      <div className="auto-container">
        <div className="sec-title text-center">
          <h1>Customer Testimonials</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text='"I never imagined my daily commutes could be stress-free until I started using DriverShaab. Their professional drivers and real-time tracking system have completely transformed my travel experiences."'
              imageSrc="image-14.jpg"
              name="Priya S."
              designation="Mumbai"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text='"DriverShaab has been a game-changer for my frequent business trips. The ease of booking, coupled with the impeccable cleanliness of the vehicles, makes every journey a pleasant experience. "'
              imageSrc="image-15.jpg"
              name="Arjun K."
              designation="Bengaluru"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TestimonialBlock
              text='"Experiencing DriverShaab’s round-the-clock customer support firsthand was truly remarkable. There was a time I needed a last-minute ride in the middle of the night, and their team went above and beyond to accommodate my request. "'
              imageSrc="image-16.jpg"
              name="Simran G."
              designation="New Delhi"
            />
          </Grid>
        </Grid>
      </div>
    </section>
    </div>
  );
};

const TestimonialBlock = ({ text, imageSrc, name, designation }) => {
  return (
    <div className="testimonials-block-one">
      <div className="inner-box">
        <div className="text" style={{fontStyle:'italic',height:'330px', overflow:'scroll'}}>{text}</div>
        <div className="author-info">
          {/* <div className="image">
            <img src={imageSrc} alt={name} />
          </div> */}
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
