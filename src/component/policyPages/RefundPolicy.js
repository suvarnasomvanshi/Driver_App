import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "#FAFAFA" }}>
      <Box
        sx={{
          maxWidth: "1300px",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "26px",
            color: "#FB561E",
          }}
        >
          Refund and Cancellation Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "26px",
            mb: 3,
          }}
        >
          Our focus is complete customer satisfaction. In the event, if you are
          displeased/not fulfilment with the services provided, we will refund
          back the money within 5 business days with Terms & Conditions applied
          along with provided the reasons are genuine and proved after
          investigation from DriverShaab. Please read the fine prints of each
          deal before taking the services.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "26px",
            color: "#FB561E",
          }}
        >
          Cancellation Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "26px",
            mb: 3,
          }}
        >
          If the customer changes its mind for the services taken, we will not
          be liable to cancel the service. Before processing any refund, we
          reserve the right to make best effort to complete the service. In
          case, of non completion of services post receipt of refund request, a
          cancellation fee of 100% + earned fee + fee paid to government or any
          third party + Technical cost would be applicable.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "26px",
            color: "#FB561E",
          }}
        >
          Refund Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "26px",
            mb: 3,
          }}
        >
          We will refund the money only in case we fail to provide service to
          our customers from our end post our internal investigation. Applicant
          need to apply for the same via email at{" "}
          <a href="mailto:support@drivershaab.com">support@drivershaab.com</a>
          <br />
          Refund will not be provided to the user, once it is earned by the
          company, because of the time and energy invested by our manpower for
          their work done, which is not returnable. So basically, all the
          processing fees, payment gateway charges, Technical charges, admin
          fees, and cost of resources for the work done, will be deducted. In
          short, further, we can’t refund any money which is paid to government
          bodies, such as filing fees or taxes, or to other third parties with a
          role in processing your order.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "26px",
            color: "#FB561E",
          }}
        >
          Ungovernable Factors
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "26px",
            mb: 3,
          }}
        >
          The result of a particular process/service cannot be guaranteed as the
          same involves dependency on Governing Authorities related to the said
          service. This further implies that rejections/ approvals /responses by
          Govt Authorities or technical issues with Government sites including
          Government backlogs etc. are not within the purview of Online Legal
          India. These may lead to unexpected delays before completion of the
          process and factors like these are outside our control hence not
          eligible for refund.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "26px",
            color: "#FB561E",
          }}
        >
          Force Majeure
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "26px",
            mb: 3,
          }}
        >
          DriverShaab ( SATADRU TECHNOLOGIES PRIVATE LIMITED) will not be
          considered responsible if there is a breach of its satisfaction
          guarantee policy or default under any terms of service, and shall not
          be liable to the Client for any cessation, interruption, or delay in
          the performance of its obligations by reason of earthquake, on road
          accident or any kind of accident that took place in transit of
          vehicle, flood, fire, storm, lightning, drought, landslide, hurricane,
          cyclone, typhoon, tornado, natural disaster, act of God or the public
          enemy, epidemic, famine or plague, action of a court or public
          authority, change in law, explosion, war, terrorism, armed conflict,
          labour strike, lockout, boycott or similar event beyond our reasonable
          control, whether foreseen or unforeseen (each a “Force Majeure
          Event”).
        </Typography>
      </Box>
    </Box>
  );
};

export default RefundPolicy;
