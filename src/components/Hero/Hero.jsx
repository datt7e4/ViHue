import { Button, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { getPageDescription } from "../constants/constant";
import BackgroundDiv from "./BackgroundDiv";
import "./Hero.css";
import { theme } from "./style";
import { LanguageContext } from "../../App";

function Hero() {
  const isEnglish = useContext(LanguageContext);
  const description = getPageDescription(isEnglish);
  return (
    <ThemeProvider theme={theme}>
      <div className="container" id={isEnglish ? "home" : "trang-chu"}>
        <BackgroundDiv image="./images/hero-background.jpg" />
        {/* <BackgroundDiv image="./images/banh-loc.jpg" /> */}
        {/* <BackgroundDiv image="./images/banh-loc.jpg" /> */}

        <Box className="center" align="center">
          <Typography variant="h2">
            {isEnglish ? "Bo Banh Loc" : "Bơ Bánh Lọc"}
          </Typography>
          <br />
          <Typography variant="body1">{description}</Typography>
          <br />
          {/* <Button sx={{ textTransform: 'none' }}>Order Here</Button> */}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Hero;
