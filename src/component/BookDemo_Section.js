import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import BookDemo_img from "../Assets/BookDemo_img.png";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import { useNavigate } from "react-router-dom";
import { ScheduledemoContext } from "../App";

const BookDemo_Section = () => {
  const navigate = useNavigate()
  const {scheduledemo, setScheduledemo} = useContext(ScheduledemoContext)
  return (
    <>
      {/* <div style={{display:"flex", alignItems:"center", justifyContent:"center",width:"100vw"}}> */}
      <section className="cta-two">
        <div className="auto-container">
          <h4>
            Friendly & Patient <br /> Qualified Driver's
          </h4>
          <div className="link-btn" onClick={() => {
            setScheduledemo(true)
            navigate('/businesses')
          }}>
            <a className="theme-btn btn-style-one" >
              Book Demo
            </a>
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default BookDemo_Section;
