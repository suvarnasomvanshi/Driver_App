import React, { useState } from "react";
import Schedule_Demo_img from "../../Assets/Schedule_Demo_img.png";
import { Box, TextField, Typography, Button, Hidden } from "@mui/material";

const Schedule_Demo = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactNo: "",
    city: "",
    requirement: "",
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

    <div className="joinasdriver_container">
      <div className="joinasdriver_img">
        <img
          src={Schedule_Demo_img}
          alt="Schedule_Demo"
          className="join-as-driver-img"
        />
      </div>
      <div className="joinasdriver_form_container">
        <div className="joinasdriver_heading">
          <p className="join-as-driver-heading">Schedule a demo with us</p>
          <p className="join-as-driver-sub-heading">
            A At DriverShaab, we provide PAN India level B2B services To corporate
            and logistics companies.
          </p>
        </div>

        <div className="joinasdriver_form">
          <form onSubmit={handleSubmit} className="scheduledemo_form">
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
  )
}

export default Schedule_Demo;











