import React, { useState } from "react";
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import { ref, set } from "firebase/database";
import { db } from "../firebase.config";
import GoogleMapcom from "./GoogleMapcom";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const submit = (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      return;
    }
    const id = Date.now();
    const useref = ref(db, "Querys/" + id);
    set(useref, {
      name,
      email,
      message,
      timeStamp: new Date().toLocaleString(),
    });
    setEmail("");
    setMessage("");
    setName("");
    navigate("/querysubmit");

    console.log("succsesfull");
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      console.log("Copied!");
    } catch (err) {
      console.log("Failed to copy!");
    }
  };
  return (
    <>
      {/* Page Title */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <section className="page-title" style={{ maxWidth: "1200px" }}>
          <div className="auto-container">
            <h1>CONTACT US</h1>
            <div className="bread-crumb-outer">
              <ul className="bread-crumb clearfix">
                {/* <li><a href="index.html">Home</a></li> */}
                <li className="contact_subheading">
                  Let us know how we can help
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}

        {/* Contact Section */}
        <div className="contact-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Map Side */}
              <div className="map-column column col-lg-5 col-md-5 col-sm-12 col-xs-12">
                {/* Map Section */}
                <section className="map-section">
                  <div className="address_container">
                    <div className="address-text">
                      <div className="heading_img_container">
                        <img
                          src="entypo_address.png"
                          alt="Address Icon"
                          className="contactus_img"
                        />
                        <p className="contactus_address_heading">Head Office</p>
                      </div>

                      <p className="contactus_address">
                        Satadru Technologies Private Limited <br />
                        42/132/A New Ballygunge Road, <br />
                        New Kasba Police Station <br />
                        Kolkata, India 700039
                      </p>
                    </div>

                    <div className="address-text">
                      <div className="heading_img_container">
                        <img src="email.png" className="contactus_img" />
                        <p className="contactus_address_heading">Email Id </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          className="contactus_address"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            window.open(
                              isMobileDevice()
                                ? "mailto:info@drivershaab.com"
                                : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@drivershaab.com"
                            )
                          }
                        >
                          info@drivershaab.com{" "}
                        </p>
                        <IconButton
                          sx={{ mt: -1}}
                          onClick={() =>
                            copyToClipBoard("info@drivershaab.com")
                          }
                        >
                          <ContentCopyIcon sx={{fontSize:'13px' }} />
                        </IconButton>
                      </div>
                    </div>
                    <div className="address_text">
                      <div className="heading_img_container">
                        <img src="phone.png" className="contactus_img" />
                        <p className="contactus_address_heading">Contact No.</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          className="contactus_address"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            (window.location.href = "tel:+91 8929000462")
                          }
                        >
                          8929000462
                        </p>
                        <IconButton
                          sx={{ mt: -1}}
                          onClick={() => copyToClipBoard("8929000462")}
                        >
                          <ContentCopyIcon sx={{fontSize:'13px' }} />
                        </IconButton>
                      </div>
                    </div>
                  </div>

                  {/* Map Content */}
                </section>
              </div>

              {/* Form Column */}
              <div className="form-column column col-lg-7 col-md-7 col-sm-12 col-xs-12">
                {/* Contact Form */}
                <div className="contact-form">
                  {/* Contact Form */}
                  <form id="contact-form" method="post" onSubmit={submit}>
                    <div className="row clearfix">
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input
                          style={{ fontSize: "18px" }}
                          type="text"
                          name="username"
                          placeholder="Name *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input
                          style={{ fontSize: "18px" }}
                          type="email"
                          name="email"
                          placeholder="Email *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea
                          name="message"
                          required
                          placeholder="Message"
                          style={{
                            fontSize: "18px",
                            borderRadius: "10px",
                          }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                        <button
                          className="contactus-btn-style-one"
                          type="submit"
                          name="submit-form"
                          // style={{paddingBottom:20}}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </div>
        </div>
        <GoogleMapcom />
        {/* End Contact Section */}
      </div>
    </>
  );
};

export default ContactSection;
