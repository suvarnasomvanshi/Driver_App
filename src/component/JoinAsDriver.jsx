import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Hidden,
  Grid,
} from "@mui/material";
import "../App.css";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const JoinAsDriver = () => {
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
    <Box display={"flex"} justifyContent={"center"} my={2}>
      <Grid container maxWidth={"1200px"}>
        <Grid
          item
          lg={6}
          xs={0}
          display={{ lg: "flex", xs: "none" }}
          justifyContent={"center"}
        >
          <img src="scheduledemo.png" alt="" />
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          display={"flex"}
          justifyContent={{ lg: "end", xs: "center" }}
          alignItems={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              width: "90vw",
              maxWidth: "500px",
            }}
          >
            <div className="joinasdriver_form_container">
              <div className="joinasdriver_heading">
                <p className="join-as-driver-heading">
                  Schedule a demo with us
                </p>
                <p className="join-as-driver-sub-heading">
                  A At DriverShaab, we provide PAN India level B2B services To
                  corporate and logistics companies.
                </p>
              </div>

              <div className="joinasdriver_form">
                <form
                  onSubmit={handleSubmit}
                  className="scheduledemo_form"
                  style={{ width: "100%" }}
                >
                  <TextField
                    label="Your Full Name"
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
                    rows={3}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <TextField
                    label="Contact No."
                    variant="outlined"
                    fullWidth
                    rows={3}
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />

                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    rows={3}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />

                  <TextField
                    label="Additional Info"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                  <Box sx={{display:'flex', justifyContent:'space-between', fontFamily:'Inter', fontSize:'13px'}}>
                   <span>Upload resume <FileUploadIcon/></span> <input type="file" style={{width:'200px'}}/>
                  </Box>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinAsDriver;
