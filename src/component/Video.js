import React from "react";
import YoutubeVideo from "../Assets/images/YoutubeVideo.png";
import '../App.css'
const Video = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <div style={{ height: "113px", width: "100%" }}>
          <p
            style={{
              fontWeight: "500",
              fontFamily: "Inter",
              fontSize: "32px",
              lineHeight: "38.4px",
              textAlign: "center",
            }}
          >
            How Businesses can use Drivershaab app
          </p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pNoCQPEvHdk?si=MmH4ROFyAl5ndseZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
          style={{
            maxWidth:'1200px' , marginBottom:'50px', borderRadius:'10px'}} className="ytvideo"></iframe>
        
      </div>
      
    </div>
  );
};

export default Video;
