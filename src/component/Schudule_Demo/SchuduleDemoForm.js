import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Hidden,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ScheduledemoContext } from "../../App";
import { ref, set } from "firebase/database";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { countrycode } from "../../App"; 
import phone from "phone";

const SchuduleDemoForm = () => {
  
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const { scheduledemo, setScheduledemo } = useContext(ScheduledemoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (scheduledemo) {
      document.getElementById("scheduledemo").scrollIntoView();
      window.scrollBy(0, -80);
      setScheduledemo(false);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ccode:'+91',
    contactNo: "",
    city: "",
    state: "",
    additionalInfo: "",
  });

  const handleChange = (event) => {
    if (
      event.target.name == "contactNo" &&
      event.target.value.toString().length > 10
    )
      return;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone(formData.ccode + formData.contactNo).isValid) {
      alert('Enter Valid Contact Number.')
      return;
    }
    if (
      !formData.name &&
      EmailValidator.validate(formData.email) &&
      !formData.contactNo
    ) {
      return;
    }
    const id = Date.now();
    const useref = ref(db, "DemoRequests/" + id);
    set(useref, {
      ...formData,
      timeStamp: new Date().toLocaleString(),
    });
    setFormData({
      name: "",
      email: "",
      ccode:'+91',
      contactNo: "",
      city: "",
      state: "",
      additionalInfo: "",
    });
    navigate("/querysubmit");
  };

  return (
    <Box display={"flex"} justifyContent={"center"} mt={2} id="scheduledemo">
      <Grid container maxWidth={"1200px"}>
        <Grid
          item
          lg={12}
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
                    label="Name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{fontSize: "15px",
                      "& .MuiFormLabel-root": { fontSize: "15px" },
                      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                        fontSize: "15px",
                      },
                    }}
                  />

                  <TextField
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{fontSize: "15px",
                      "& .MuiFormLabel-root": { fontSize: "15px" },
                      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                        fontSize: "15px",
                      },
                    }}
                  />
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    <FormControl sx={{ width: "30%" }}>
                      <InputLabel
                        id="demo-select-small-label3"
                        sx={{ fontSize: "15px" }}
                      >
                        Country Code
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-select-small-label3"
                        id="demo-select-small3"
                        value={formData.ccode}
                        // fullWidth
                        label="Country Code"
                        name="ccode"
                        onChange={handleChange}
                        sx={{ fontSize: "15px" }}
                      >
                        {/* <MenuItem value={''}>{'state'}</MenuItem> */}
                        {countrycode.map((code) => (
                          <MenuItem key={code.code} value={code.code}>
                            {code.code}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      label="Contact No."
                      variant="outlined"
                      required
                      fullWidth
                      type="number"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      sx={{fontSize: "15px",
                        "& .MuiFormLabel-root": { fontSize: "15px" },
                        "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root":
                          {
                            fontSize: "15px",
                          },
                      }}
                    />
                  </Box>
                  <FormControl>
                    <InputLabel
                      id="demo-select-small-label2"
                      sx={{ fontSize: "15px" }}
                    >
                      State
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-select-small-label2"
                      id="demo-select-small2"
                      value={formData.state}
                      fullWidth
                      label="State"
                      name="state"
                      onChange={handleChange}
                      sx={{ fontSize: "15px" }}
                    >
                      {/* <MenuItem value={''}>{'state'}</MenuItem> */}
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    label="City"
                    variant="outlined"
                    required
                    fullWidth
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    sx={{fontSize: "15px",
                      "& .MuiFormLabel-root": { fontSize: "15px" },
                      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                        fontSize: "15px",
                      },
                    }}
                  />

                  <TextField
                    label="your message..."
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    sx={{fontSize: "15px",
                      "& .MuiFormLabel-root": { fontSize: "15px" },
                      "& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
                        fontSize: "15px",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    className="join-as-driver-btn"
                    sx={{ fontSize: "15px", textTransform: "none" }}
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

export default SchuduleDemoForm;
