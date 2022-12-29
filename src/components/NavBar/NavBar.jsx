import React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import "./NavBar.css";
import RightNav from "./RightNav";

function NavBar({ isEnglish, setIsEnglish }) {
  return (
    <AppBar
      position="sticky"
      //Remove Shadow
      elevation={0}
      sx={{ background: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
          className="toolbar"
        >
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src="./logo.jpg"
              alt="logo"
              width="50"
            />
          </div>
          <div>
            <RightNav isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
