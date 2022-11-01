import React from "react";
import { Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";

const PHONE_NUMBER = "555-5555";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;
const FACEBOOK_LINK = "https://www.facebook.com/chu.choa.102361";

function Footer() {
  return (
    <div id="contact" align="center" className="footer">
      <Typography fontSize={18}>Phone: {PHONE_NUMBER}</Typography>
      <div className="contact-info">
        <IconButton color="inherit" size="medium" href={PHONE_LINK}>
          <LocalPhoneIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          size="medium"
          target="_blank"
          href={FACEBOOK_LINK}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </div>

      <Typography fontSize={18}>
        Copyright © 2022 All Rights Reserved.
      </Typography>
    </div>
  );
}

export default Footer;
