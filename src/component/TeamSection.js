import React, { useContext, useEffect } from "react";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/color.css";
import BubbleLayout from "./BubbleLayout/BubbleLayout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { ScheduledemoContext } from "../App";

// function isMobileDevice() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// }
const TeamSection = () => {
  const navigate = useNavigate()
  const { scheduledemo, setScheduledemo } = useContext(ScheduledemoContext)
  useEffect(() => {
    if (scheduledemo) {
      document.getElementById("ourteam").scrollIntoView();
      window.scrollBy(0, -85);
      setScheduledemo(false);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <section
          className="our-team-section style-two"
          max-width="1200px"
          style={{ zIndex: 2 }}
        >
          <div className="auto-container">
            <div className="sec-title text-center" id="ourteam">
              <h2>Meet Our Experts</h2>
              {/* <div className="image-container text-center">

              </div> */}
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`col-lg-2 col-md-4 col-xs-6 team-block-one `}
                >
                  <div className="frame">
                    <div className="inner-box">
                      <div className="image img_hover_3">
                        {/* <Avatar src={member.imageSrc} sx={{ height: '160px', width: '160px' }} /> */}
                        <img
                          src={member.imageSrc}
                          alt={member.name}
                          // style={{ width: "100%" }}
                        />
                      </div>
                      <div className="lower-content">
                        <div className="name">{member.name}</div>
                        <div className="designation">{member.designation}</div>
                        <ul className="social-links">
                          {member.socialLinks.map((link, i) => (
                            <li key={`socialLinks${Math.random()}`}>
                              <Tooltip title={link.icon == 'MailOutlineIcon'? link.url.split(':')[1] : link.url}> 
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {link.icon === "LinkedInIcon" && (
                                  <LinkedInIcon sx={{ fontSize: "20px" }} />
                                )}
                                {link.icon === "MailOutlineIcon" && (
                                  <MailOutlineIcon sx={{ fontSize: "20px" }} />
                                )}
                                {link.icon === "FacebookIcon" && (
                                  <FacebookIcon sx={{ fontSize: "20px" }} />
                                )}
                              </a></Tooltip>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BubbleLayout />
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Arunesh Beri",
    designation: "CTO",
    imageSrc: "aruneshberi.jpeg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/arunesh-beri/",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:arunesh.beri@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // { url: '#', icon: 'FacebookIcon'},
    ],
  },
  {
    name: "Neha Shaikh",
    designation: "Head of Procurement",
    imageSrc: "nehaupdated.jpg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/neha-shaikh-8294b1b8/",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:neha.shaikh@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // { url: '#', icon: 'FacebookIcon'},
    ],
  },
  {
    name: "Arpit Sinha",
    designation: "Head of Supply",
    imageSrc: "apritupdated.jpg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/arpit-sinha-60593834",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:arpit.sinha@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // {    url: '#', icon: 'FacebookIcon' }
    ],
  },
  {
    name: "James Joy",
    designation: "Head of Operations",
    imageSrc: "jamesh.jpg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/james-joy-a77358241",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:James.joy@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // { url: '#', icon: 'FacebookIcon' }
    ],
  },
  {
    name: "Poulami Chatterjee",
    designation: "Head of Marketing",
    imageSrc: "poulami.jpg",
    socialLinks: [
      {
        url: "http://www.linkedin.com/in/poulami-chatterjee-b16292174",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:Poulami.chatterjee@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // { url: '#', icon: 'FacebookIcon' }
    ],
  },
  {
    name: "Anchal Negi",
    designation: "Recruiter at DriverShaab",
    imageSrc: "anchal.jpg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/anchal-negi-155562260/",
        icon: "LinkedInIcon",
      },
      {
        url:  "mailto:Anchal.negi@drivershaab.com",
        icon: "MailOutlineIcon",
      },
      // { url: '#', icon: 'FacebookIcon' }
    ],
  },
];

export default TeamSection;
