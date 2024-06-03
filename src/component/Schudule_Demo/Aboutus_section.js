import React, { useRef, useEffect, useState, useContext } from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import line from "../../Assets/images/line.png";
import "../../Animation.css";
import { useNavigate } from "react-router-dom";
import { ScheduledemoContext } from "../../App";

const AboutSection = () => {
  const fleep1Ref = useRef(null);
  const [fleep1Visible, setFleep1Visible] = useState(false);
  const navigate = useNavigate()
  const { scheduledemo, setScheduledemo } = useContext(ScheduledemoContext)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === fleep1Ref.current) {
            setFleep1Visible(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (fleep1Ref.current) {
      observer.observe(fleep1Ref.current);
    }

    return () => {
      if (fleep1Ref.current) {
        observer.unobserve(fleep1Ref.current);
      }
    };
  }, []);

  return (
    <div
    ref={fleep1Ref}
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position:'relative',
        padding:'20px 0'
      }}
    >
      
      <div
        className="aboutus_container"
        style={{ width: "90vw", maxWidth: "1500px" }}
      >
        <div className="aboutus_text_container">
          <div className="aboutus_text_slash">
            <div className="aboutus_blur_heading">About us</div>
            <div className="line_img">
              <img src={line} alt="lineimg" style={{ height: "52px" }} />
            </div>
          </div>

          <div className="aboutus_texts" style={{position:'relative', zIndex:10, backgroundColor:'#fff', marginRight:{lg:'50px', xs:0}}}>
            <div className="aboutus_two_texts">
              <div className="aboutus_heading">We Are Your Trusted Partner for Safe and Reliable Journeys
              </div>

              <div className="text">
                <p>
                You can now drive to work on time, explore the city, or go on a long, hassle-free journey. DriverShaab brings you the power of safe and stress-free travel with our driving solutions. We maintain safety standards and offer reliable solutions to satisfy our customers, making us the go-to choice for travelers.



                </p>
                <p>
                We verify our drivers and ensure only experienced people sit behind the wheel. With 24/7 services and support features, you need not worry about returning from a late-night event or a night trip by road. Our fleet of vehicles are checked and inspected thoroughly. We offer services to B2B and logistics customers. Schedule a demo with us today!
                </p>
              </div>
            </div>
            <div className={`about_us_btn ${fleep1Visible ? 'hero-animation' : ''}`}>
              <a href="#" className="book-btn theme-btn btn-style-three" style={{textTransform:'none'}} onClick={() => {
            setScheduledemo(true)
            navigate('/businesses')
          }}>
                Schedule Demo (B2B)
              </a>
            </div>
          </div>
        </div>

        <div className="aboutus_car_img">
          <img
            src="fleepbackground.png"
            alt=""
            className={`fleepbackground`}
          />
          <img
            src="fleep1.png"
            alt=""
            className={`fleep1 ${fleep1Visible ? "fleep1-animation" : ""
              }`}
          />
          <img
            src="fleep2.png"
            alt=""
            className={`fleep2 ${fleep1Visible ? "fleep2-animation" : ""
              }`}
          />
          <img
            src="fleep3.png"
            alt=""
            className={`fleep3 ${fleep1Visible ? "fleep3-animation" : ""
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

