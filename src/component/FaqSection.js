import React, { useState } from "react";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/color.css";
import line from "../Assets/images/line.png";
import { useMediaQuery } from "@mui/material";

const AccordionBlock = ({ title, content, isActive, onClick }) => (
  <li className={`accordion block ${isActive ? "active-block" : ""}`}>
    <div
      className={`acc-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ fontWeight: 700, paddingLeft:'60px' }}
    >
      <div className="icon-outer">
        <span className={`far fa-angle-down`}></span>
      </div>
      {title}
    </div>
    <div
      className={`acc-content ${isActive ? "current" : ""}`}
      style={{ backgroundColor: "#FFF2EE" }}
    >
      <div className="content">
        <div className="text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </li>
);

const FaqSection = () => {
  const isdescktop = useMediaQuery("(max-width:1000px))");
  console.log(isdescktop);
  const [active, setActive] = useState("First");

  const handleAccordionClick = (accordionKey) => {
    setActive(accordionKey);
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="aboutus_text_slash"
        style={{
          marginRight: "70px",
          marginLeft: "-80px",
          display: isdescktop ? "block" : "none",
        }}
      >
        <div className="aboutus_blur_heading">Feedbacks</div>
        <div className="line_img">
          <img src={line} alt="lineimg" style={{ height: "52px" }} />
        </div>
      </div>
      <section className="faq-section" style={{ maxWidth: "1200px" }}>
        <div className="auto-container">
          <div className="text-center mb-4">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="col-lg-12">
            <ul className="accordion-box">
              <AccordionBlock
                onClick={() => handleAccordionClick("First")}
                title="Can I schedule a ride in advance with DriverShaab?"
                content="Yes, absolutely! DriverShaab allows you to schedule rides in advance. When booking, choose the 'Schedule Ride' option, select your desired date and time, and we'll take care of the rest. Planning has never been easier!"
                isActive={active === "First"}
              />
              <AccordionBlock
                onClick={() => handleAccordionClick("Second")}
                title="What if I need to cancel or modify my booking?"
                content="We understand that plans can change. You can cancel or modify your booking directly through the DriverShaab app. Please refer to our cancellation policy for details on any applicable charges. If you encounter any issues or need assistance, our 24/7 customer support is here to help."
                isActive={active === "Second"}
              />
              <AccordionBlock
                onClick={() => handleAccordionClick("Third")}
                title="How do I know which driver will be coming?"
                content="Once your booking is confirmed, the app will provide you with the details of your assigned driver, including their name, photo, vehicle type, and registration number. This information ensures transparency and peace of mind for your upcoming journey with DriverShaab."
                isActive={active === "Third"}
              />
              <AccordionBlock
                onClick={() => handleAccordionClick("Fourth")}
                title="How do I pay for my DriverShaab ride?"
                content="Paying for your DriverShaab ride is convenient and hassle-free. Once you've booked your ride, you can choose your preferred payment method through the app. We accept many options, including credit/debit cards, mobile wallets, and cash."
                isActive={active === "Fourth"}
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
