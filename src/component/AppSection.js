import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';



import '../Assets/css/responsive.css'
import { useNavigate } from 'react-router-dom';

const AppSection = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate()

  return (
    <>
      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container style={{ maxWidth: "1200px" }}>
          <Grid item lg={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'start', p: 4, gap: 3 }}>

            <Typography sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '28px', lineHeight: '42px' }}>DRIVERSHAAB APP IS LIVE, DOWNLOAD IT NOW!</Typography>

            <Typography sx={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '15px', lineHeight: '0px', color: '#FB561E', mb: 1 }}>Choose your platform and get started</Typography>

            <Typography sx={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', lineHeight: '27px', my: 2 }}>Experience the future of transportation at your fingertips! With the Drivershaab app officially launched, seamless rides and dependable service are just a tap away. Join us in revolutionizing travel with a focus on safety, reliability, and driver empowerment. Don't wait – download the app now and embark on a journey where convenience meets peace of mind.</Typography>

            <Box sx={{ display: 'flex', flexDirection: isDesktop? "row":'column', gap: 2, color: '#FB561E', alignItems: 'start', justifyContent: 'start', marginX: 'auto' }}>
              <Box onClick={()=> window.open('https://play.google.com/store/apps/details?id=com.drivershaabb2b&pcampaignid=web_share')} sx={{ borderRadius: 13, px: 3, py: 1, border: '2px solid #FB561E', display: 'flex', gap: 2, color: '#FB561E', alignItems: 'center', cursor: 'pointer' }}>
                <AdbIcon sx={{ height: '51px', fontSize: 50 }} /> <Box>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '27px' }}>Download for</Typography>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '24px', lineHeight: '36px' }}>Android</Typography>
                </Box>
              </Box>
              <Box onClick={()=> window.open('https://apps.apple.com/in/app/drivershaab-driver-booking-app/id1554256913')} sx={{ borderRadius: 13, px: 3, py: 1, border: '2px solid #FB561E', display: 'flex', gap: 2, color: '#FB561E', alignItems: 'center', cursor: 'pointer' }}>
                <AppleIcon sx={{ height: '51px', fontSize: 50 }} /> <Box>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '27px' }}>Download for</Typography>
                  <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '24px', lineHeight: '36px' }}>Apple IOS</Typography>
                </Box>
              </Box>
            </Box>


          </Grid>

          {isDesktop && (
            <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: { lg: 'end', xs: 'center' } }}>
              <img src="Frame 3914.png" alt="" />
            </Grid>

          )}


        </Grid>
      </div>
    </>
  );
};

export default AppSection;