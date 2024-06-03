import React from "react";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { CountUp } from 'use-count-up';

const NumberSection = () => {

  const container_styles={
    backgroundColor:"#F1F1F1",
    height:{md:'213px'},
    padding:{ 
      xs: ['6px', '26px', '6px', '26px'],  
      md: ['64px', '24px', '64px', '24px'],}
  }
  const wrapper_Styles={
    display: 'flex', 
    flexDirection: 'column',
     alignContent: 'center', 
     justifyContent: 'center',
     textAlign:"center"
  }
  const number_Styles = {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: {
      xs: "16px",
      sm: "40px",
    },
    lineHeight: {
      xs:'24px',
      sm:'60px',
    },
    textAlign:'center'
  };

  const text_Styles = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: {
      xs: "8px",
      sm: "14px",
    },
    lineHeight: {
      xs:'12px',
      sm:'21px',
    },
    textAlign:'center',
    color:"#FB561E"
  };

  return (
    <Box sx={{display:'flex', justifyContent:'center', bgcolor:'#f1f1f1',py:3}}  position={'relative'} zIndex={2}>
    <Grid container sx={container_styles} maxWidth={'1400px'}>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item  sx={number_Styles}><CountUp isCounting end={8000} duration={5} />+</Grid>
        <Grid item sx={text_Styles}>Driver Partners</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={500} duration={7} />K+</Grid>
        <Grid item sx={text_Styles}>Trips covered</Grid>
      </Grid>
      <Grid item xs={12} md={2.25}  sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={100} duration={9} />+</Grid>
        <Grid item sx={text_Styles}>Happy B2B Customers</Grid>
      </Grid>
      <Grid item xs={6} md={2.25} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={22} duration={10} /></Grid>
        <Grid item sx={text_Styles}>Cities Covered</Grid>
      </Grid>
      <Grid item xs={6} md={3} sx={wrapper_Styles}>
        <Grid item sx={number_Styles}><CountUp isCounting end={1} duration={11} />Million Km's</Grid>
        <Grid item sx={text_Styles}>Distance Travelled</Grid>
      </Grid>
    </Grid>
    </Box>
  );
};

export default NumberSection;

