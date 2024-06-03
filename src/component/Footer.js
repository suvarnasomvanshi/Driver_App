import React, { useContext } from "react";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/style.css";
import "../Assets/css/color.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ScheduledemoContext } from "../App";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ bgcolor: "#212121", pt: 2.5 }}>
        <footer className="customfooter">
          <div className="auto-container">
            {/* Widgets Section */}
            <div className="widgets-section">
              <div className="row clearfix">
                {/* Column */}
                <div className="column col-lg-3 col-md-6">
                  <div className="widget links-widget">
                    <div className="widget-content ms-lg-4">
                      <h3 style={{ color: "white" }}>Customer App</h3>
                      <img
                        src="GooglePlay.png"
                        style={{ marginTop: "20px" }}
                      ></img>
                      <img
                        src="AppStore.png"
                        style={{ marginLeft: "-68px", marginTop: "20px" }}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="column col-lg-3 col-md-6">
                  <div className="widget links-widget">
                    <div className="widget-content ms-lg-4">
                      <h3 style={{ color: "white" }}>Driver Partner App</h3>
                      <img
                        src="element.png"
                        style={{ marginTop: "20px" }}
                      ></img>
                      <img
                        src="element.png"
                        style={{ marginTop: "20px" }}
                      ></img>
                    </div>
                  </div>
                </div>

                {/* Column */}
                <div className="column col-lg-3 col-md-6">
                  <div className="widget links-widget">
                    <div className="widget-content ms-lg-4">
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/");
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a onClick={() => {
                              navigate("/aboutus");
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}>About Us</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/careers");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>Careers</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/inidividual");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>For Individuals</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/businesses");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>For Businesses</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/contactus");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column */}
                <div className="column col-lg-3 col-md-6">
                  <div className="widget about-widget">
                    <ul className="social-links">
                      <li>
                        <a href="https://twitter.com/DriverShaab">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/drivershaabApp/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/drivershaab/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/drive.rshaab/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column */}
                <div className="column col-lg-3 col-md-6">
                  <div className="widget contact-widget">
                    <div className="widget-content">
                      <div className="text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            *{/* Footer Bottom */}
          </div>
        </footer>
      </Box>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text" style={{ textAlign: "center" }}>
                @copyright <br />
                {/* SATADRU TECHNOLOGIES PRIVATE LIMITED{" "} */}
                © 2023 Satadru Technologies PVT LTD. All right reserved.
              </div>
            </div>
            <div className="logo">
              <img src="unnamed.png" alt="" style={{ height: "60px" }} />
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a onClick={() => {
                            navigate("/termandcondition");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>Terms & Condition</a>
                </li>
                <li>
                  <a onClick={() => {
                            navigate("/refundpolicy");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}> Refund Policy</a>
                </li>
                <li>
                  <a onClick={() => {
                            navigate("/privacypolicy");
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}>Privacy Policy</a>
                </li>
                {/* <li>
                  <a>Help</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
