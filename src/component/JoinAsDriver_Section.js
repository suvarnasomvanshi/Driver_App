import React, { useState } from "react";
import joinDriver from "../Assets/images/joinDriver.png";
import upload_icon from "../Assets/images/upload_icon.png";
import { TextField, Button, Hidden } from "@mui/material";

const JoinAsDriver_Section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    additionalInfo: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
     <div style={{width:"100vw", display:"flex",alignItems:"center", justifyContent:"center"}}>
      <div className="joinasdriver_container" style={{maxWidth:"1200px"}}>
        <div className="joinasdriver_img">
          <img
            src={joinDriver}
            alt="Schedule_Demo"
            className="join-as-driver-img"
          />
        </div>
        <div className="joinasdriver_form_container">
          <div className="joinasdriver_heading">
            <p className="join-as-driver-heading">Join as Driver partner</p>
            <p className="join-as-driver-sub-heading">
              At DriverShaab, we provide PAN India level B2B services to
              corporate and logistics companies.
            </p>
          </div>

          <div className="joinasdriver_form">
            <form onSubmit={handleSubmit} className="form">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Contact No."
                variant="outlined"
                fullWidth
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />

              <TextField
                label="City"
                variant="outlined"
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

              <TextField
                label="Additional Info"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />

              <div className="join-as-driver-upload-container">
                <span>
                  <p className="upload-text">
                    Upload resume
                    <img src={upload_icon} alt="icon" className="upload-icon" />
                  </p>
                </span>
                <span>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      width: "105px",
                      height: "31px",
                      borderRadius: "30px",
                      border: "1px solid #FB561E",
                      color: "#121212",
                      backgroundColor: "#e7ae9f",
                      marginRight: "5px",
                    }}
                  >
                    choose file
                  </Button>
                  <span className="file-choose-text">No file choosen.</span>
                </span>
              </div>
              <Button
                type="submit"
                variant="contained"
                className="join-as-driver-btn"
              >
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default JoinAsDriver_Section;
