import React, { useContext, useEffect, useRef, useState } from "react";
import driver from "../Assets/driver.png";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Hero_Section_Button } from "./Hero_Section_Button";
import { useNavigate } from "react-router-dom";
import "../Animation.css";
import { ScheduledemoContext } from "../App";

const Hero_Section = () => {
  const navigate = useNavigate();
  const { scheduledemo, setScheduledemo } = useContext(ScheduledemoContext);

  const scrollEffect = useRef(null);
  const [scrollflag, setScrollflag] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === scrollEffect.current) {
            setScrollflag(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (scrollEffect.current) {
      observer.observe(scrollEffect.current);
    }

    return () => {
      if (scrollEffect.current) {
        observer.unobserve(scrollEffect.current);
      }
    };
  }, []);

  return (
    <div className="sec-hero" style={{ zIndex: -1 }} ref={scrollEffect}>
      <div
        className={`sec-hero-text-container-text hero-animation`}
        style={{ maxWidth: "1300px" }}
      >
        <h1 className="sec-hero-heading">
          India's Premier Driver Service Network
        </h1>

        <p className="sec-hero-description">
          DriverShaab is a cutting-edge driver service platform that provide
          services to different businesses/Logistics companies as well as
          individual car owners with a wide range of Driver Partners. Experience
          the difference with India's most extensive network of driving
          professionals.
        </p>
      </div>
      <div className={`sec-hero-btn-div hero-animation`} style={{ zIndex: 0 }}>
        <Button
          className="sec-hero-btn"
          sx={{
            zIndex: -1,
            // border: border,
            color: "#FFFFFF",
            gap: "10px",
            backgroundColor: "#FB561E",
            variant: "filled",
            borderRadius: "30px",
            fontFamily: "Inter",
            fontSize: "22px",
            px: { lg: "20px", xs: "10px" },
            py: { lg: "15px", xs: "10px" },
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: { lg: "18px", xs: "14px" },
            "&:hover": {
              color: "#fff",
              backgroundColor: "#FB461E",
            },
            textTransform: "none",
          }}
          onClick={() => {
            setScheduledemo(true);
            navigate("/businesses");
          }}
        >
          Schedule Demo (B2B)
        </Button>

        <Button
          className="sec-hero-btn"
          variant="outlined"
          sx={{
            zIndex: -1,
            border: "3px solid #FB561E",
            // color: "#FB561E",
            // gap: "10px",
            // backgroundColor: '#FB561E',

            color: "#fff",
            backgroundColor: "#FB561E",
            borderRadius: "30px",
            fontFamily: "Inter",
            fontSize: "22px",
            px: { lg: "20px", xs: "10px" },
            py: { lg: "15px", xs: "10px" },
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: { lg: "18px", xs: "14px" },
            "&:hover": {
              color: "#fff",
              backgroundColor: "#FB461E",
            },
            textTransform: "none",
            animation: "blinking 1s infinite",
            "@keyframes blinking": {
              "0%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
          }}
          onClick={() => {
            navigate("/careers");
          }}
        >
          Join as Driver Partner
        </Button>
      </div>
    </div>
  );
};

export default Hero_Section;
