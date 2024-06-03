import { Button, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Fullscreen, DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const SplashScreen = ({ setSplash }) => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setCount(prevCount => {
  //             const newCount = prevCount + 1;
  //             if (newCount >= 2) {
  //                 clearInterval(intervalId);
  //             }
  //             return newCount;
  //         });
  //     }, 1700);

  //     return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevCount) => {
        const newCount = prevCount + 3;
        if (newCount >= 83) {
          setFlag(true);
        }
        if (newCount >= 100) {
          clearInterval(intervalId);
          setSplash(false);
        }
        return newCount;
      });
    }, 420);

    return () => clearInterval(intervalId);
  }, []);

  const handleSkip = () => {
    setSplash(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <img src={imageSrc} alt={`Splash ${count}`} style={{ maxWidth: '80vw', maxHeight: '60vh' }} /> */}
      {flag ? (
        <img
          src="logodr.png"
          alt="img"
          style={{ width: "80vw", padding: "3.5vw" }}
        />
      ) : (
        <Video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ width: "80vw", pointerEvents: "none" }}
        >
          <source src="onbordingvideo.mp4" type="video/mp4" />
        </Video>
      )}

      <br />
      <br />
      <LinearProgress
        variant="buffer"
        value={progress}
        sx={{
          width: "80vw",
          "& .MuiLinearProgress-bar1Buffer": {
            bgcolor: "#FB561E",
          },
          "& .MuiLinearProgress-bar2Buffer": {
            bgcolor: "#2F2C33",
          },
          p: 0.4,
          borderRadius: 2,
        }}
      />
      <Button
        onClick={handleSkip}
        endIcon={<DoubleArrowIcon />}
        style={{
          position: "fixed",
          top: 10,
          right: 30,
          fontSize: "18px",
          color: "#fff",
          "&:hover": {
            color: "#FB461E",
          },
          textTransform:'none'
        }}
      >
        Skip
      </Button>
    </div>
  );
};

export default SplashScreen;
