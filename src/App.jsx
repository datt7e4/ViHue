import React from "react";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { Divider, IconButton, Box } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { createContext } from "react";
import { pagesRightRouteConst } from "./components/constants/constant";

const PHONE_NUMBER = "(206) 353-6122";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;
const MESS_LINK = `sms:${PHONE_NUMBER}`;
const FACEBOOK_LINK = "https://www.facebook.com/chu.choa.102361";
export const LanguageContext = createContext();

function App() {
  const [isEnglish, setIsEnglish] = React.useState(false);

  return (
    <LanguageContext.Provider value={isEnglish}>
      <Box sx={{ position: "fixed", bottom: "10%", left: "85%" }}>
        <IconButton
          color="inherit"
          size="medium"
          href={PHONE_LINK}
          sx={{ backgroundColor: "white" }}
        >
          <LocalPhoneIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          size="medium"
          target="_blank"
          sx={{ backgroundColor: "white" }}
          href={FACEBOOK_LINK}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Box>

      <NavBar setIsEnglish={setIsEnglish} isEnglish={isEnglish} />
      <Hero />
      <Menu id={isEnglish ? "home" : "trang-chu"} />
      <Divider />
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
