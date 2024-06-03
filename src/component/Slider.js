import React from "react";
import Slider from "react-slick";
import { Box, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b2b1 from "../Assets/images/b2b1.png";
import b2b2 from "../Assets/images/b2b2.png";
import b2b3 from "../Assets/images/b2b3.png";
import '../Animation.css'
const styles = {
  container: {
    padding: "0 20px",
    margin: '10px'
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    padding: "10px 30px 20px 15px",
    maxWidth: '400px'
  },
  image: {
    maxWidth: '90vw'
  },
  background1: {
    background: "#f9e1d9",
  },
  background2: {
    background: "#F4F8FF",
  },
};

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideContents = [
    {
      image: b2b1,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background1,
    },
    {
      image: b2b2,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background2,
    },
    {
      image: b2b3,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background1,
    },
  ];

  return (
    <div className="slider-container" style={{width:'90vw',margin:'0 5vw'}}>
      <Slider {...settings}>
        {slideContents.map((slide, index) => (
          <div key={index}>
            <Box sx={{width:'100%'}}>
                <img src={slide.image} alt="img" style={styles.image} />
              <Box sx={{width:'90vw', ...styles.descriptionContainer, ...slide.backgroundStyle}}>
                <Typography >{slide.heading}</Typography>
                <Typography >{slide.description}</Typography>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
