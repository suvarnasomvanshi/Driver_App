import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useNavigate } from 'react-router-dom';

const SubmitedQuery = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },[])
    return (
        <Box sx={{
            // backgroundImage: "url(" + "missionback.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            p: 4,
        }}>
            <Box sx={{ maxWidth: '1300px', minHeight: '100vh', display: "flex", flexDirection: 'column', justifyContent: 'space-between', pb: 25 }}>
                <Box >
                    <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 700, fontSize: '70px', lineHeight: '42px', color: '#FB561E' }}>Done! <img src="greencheck.png" alt="green tick" style={{ height: '60px' }} /> </Typography>
                    <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 500, fontSize: '28px', lineHeight: '26px' }}>
                      One step forword to get the right Driver with DriverShaab.
                    </Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '22px', lineHeight: '26px', mb: 3, }}>
                    One of our Team member will get back to you shortly. <br />
                    Feel free to drop an email to <span style={{ color: '#FB561E' }} onClick={()=> window.location.href = 'mailto:info@drivershaab.com'}> info@drivershaab.com</span> if you have any additional queries.
                </Typography>
                <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '20px', lineHeight: '26px', }}>
                    To receive latest updates from DriverShaab, be sure to follow us on:
                    <Box sx={{display:'flex', alignItems:'center',gap:1,fontSize:'17px',mt:1}}>
                        <a href="https://www.linkedin.com/company/drivershaab/" style={{display:'flex', alignItems:'center'}}>
                      <LinkedInIcon sx={{color:'blue', fontSize:35}}/> Linkedin </a>
                        <a href="https://www.facebook.com/drivershaabApp/" style={{display:'flex', alignItems:'center'}}><FacebookIcon sx={{color:'#0101ff', fontSize:35, ml:2}}/> Facebook </a>
                        <a href="https://twitter.com/DriverShaab" style={{display:'flex', alignItems:'center'}}><TwitterIcon sx={{color:'blue', fontSize:35, ml:2}}/> Twitter</a>
                    </Box></Typography>

                <Button sx={{
                    bgcolor: '#FB561E', color: '#fff', px: 3, fontSize: { lg: '16px', xs: '16px' }, fontFamily: 'Inter', fontWeight: 500, '&:hover': {
                        color: '#fff',
                        backgroundColor: '#FB461E'
                    }, textTransform: 'none',width:'270px'
                }} startIcon={<ArrowCircleLeftOutlinedIcon/>} onClick={()=> navigate(-1)}>Go Back to DriverShaab</Button>
            </Box>
        </Box>
    )
}

export default SubmitedQuery