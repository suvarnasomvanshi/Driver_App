import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  AlertTitle,
} from "@mui/material";
import { countrycode } from "../App";
import { ref, set } from "firebase/database";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { phone } from "phone";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(phone("+917066994198").isValid);
  }, []);

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

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ccode: "+91",
    contactNo: "",
    city: "",
    state: "",
    additionalInfo: "",
    roles: "",
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
    if (!formData.name && !formData.email && !formData.contactNo) {
      return;
    }
    const id = Date.now();
    const useref = ref(db, "Applications/" + id);
    set(useref, {
      ...formData,
      timeStamp: new Date().toLocaleString(),
    });
    setFormData({
      name: "",
      email: "",
      ccode: "+91",
      contactNo: "",
      city: "",
      state: "",
      additionalInfo: "",
      roles: "",
    });
    navigate("/querysubmit");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={3}
      mb={5}
    >
      <Grid container maxWidth={"1200px"}>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              className="joinasdriver_form_container"
              style={{ width: "90vw", maxWidth: "500px" }}
            >
              <p className="join-as-driver-heading">
                We are glad you wish to join us!
              </p>

              <div className="joinasdriver_form">
                <form
                  onSubmit={handleSubmit}
                  className="scheduledemo_form"
                  style={{ width: "100%" }}
                >
                  <FormControl sx={{ fontSize: "15px" }}>
                    <InputLabel
                      id="demo-select-small-label1"
                      sx={{ fontSize: "15px" }}
                    >
                      Roles
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label1"
                      id="demo-select-small1"
                      label="Roles"
                      value={formData.roles}
                      fullWidth
                      name="roles"
                      onChange={handleChange}
                      required
                      sx={{
                        "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                          fontSize: "35px",
                        },
                        fontSize: "15px",
                      }}
                    >
                      <MenuItem value={"For Driver Partner"}>
                        {"For Driver Partner"}
                      </MenuItem>
                      <MenuItem value={"For Other Roles"}>
                        {"For Other Roles"}
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // variant="outlined"
                    fullWidth
                    sx={{fontSize: "15px",
                      "& .MuiFormLabel-root": { fontSize: "15px" },
                      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                        fontSize: "15px",
                      },
                    }}
                  />

                  <TextField
                    required
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
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
                        // size="small"
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
                    required
                    label="City"
                    variant="outlined"
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
                    required
                    label="your message..."
                    variant="outlined"
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
                    sx={{ fontSize: "14px", textTransform: "none" }}
                  >
                    Submit
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

export default Careers;
