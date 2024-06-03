import React from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";

export const Hero_Section_Button = ({
  border,
  backgroundColor,
  variant,
  text,
  color,
  onClick
}) => {
  const isDesktop = useMediaQuery("min-width:600px");

  return (
    <Button
      className="sec-hero-btn"
      sx={{
        zIndex:-1,
        border: border,
        color: color,
        gap: "10px",
        backgroundColor: backgroundColor,
        variant: variant,
        borderRadius: "30px",
        fontFamily: "Inter",
        fontSize: "22px",
        px: isDesktop ? "20px" : "10px", 
        py : isDesktop ? "15px":"10px",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: isDesktop ? "24px" : "14px",
        lineHeight: isDesktop ? "29.05px" : "16.94px",
        '&:hover':{
          color:'#fff',
          backgroundColor:'#FB461E'
        },
        textTransform:'none'
      }}
    >
        {text}
    </Button>
  );
};
