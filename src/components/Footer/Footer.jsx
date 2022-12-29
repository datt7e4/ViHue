import React from "react";
import { Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import "./Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../../App";
const PHONE_NUMBER = "(206) 353-6122";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;
const FACEBOOK_LINK = "https://www.facebook.com/chu.choa.102361";

function Footer() {
  const isEnglish = useContext(LanguageContext);
  return (
    <div
      id={isEnglish ? "contact" : "lien-he"}
      align="center"
      className="footer"
    >
      <Typography fontSize={18}>
        {isEnglish ? `Phone: ` : `Số Điện Thoại: `}
        {PHONE_NUMBER}
      </Typography>
      <div className="contact-info"></div>

      <Typography fontSize={18} marginTop="1rem">
        Copyright © 2022 All Rights Reserved.
      </Typography>
    </div>
  );
}

export default Footer;
