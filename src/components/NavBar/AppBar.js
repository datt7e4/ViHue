import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.jpg";
// import { useNavigate } from "react-router-dom";

const pages = ["Home", "Menu", "Order", "How To", "Contact"];
const pagesRoute = ["home", "menu", "order", "howto", "contact"];
const NAME = "Vị Huế";
const settings = ["Logout"];

const handleMouseEnter = (e) => {
  e.target.style.color = "#FF7B00";
};
const handleMouseLeave = (e) => {
  e.target.style.color = "black";
};

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        // #001529, #E2E2E2
        background: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopNavBar />
          <MobileNavBar />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  id={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

const MobileNavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const navigate = useNavigate();

  const handleNavMenu = (page) => {
    //this is to solve the menu icon close bug, since close outside of
    //a button will get error 404
    if (typeof page === "string" || page instanceof String)
      // navigate(`/${page}`);
      setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          // color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page, index) => (
            <MenuItem
              key={page}
              component={Link}
              onClick={() => handleNavMenu(pagesRoute[index])}
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Link href="/" sx={{ display: { xs: "flex", md: "none" } }}>
        <img style={{ borderRadius: "50%" }} src={logo} alt="logo" width="40" />
      </Link>
      <Typography
        variant="h6"
        noWrap
        component="a"
        marginLeft="20px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "inherit",
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
        }}
      >
        {NAME}
      </Typography>
    </>
  );
};

const DesktopNavBar = () => {
  // const navigate = useNavigate();

  const handleNavMenu = (page) => {
    // navigate(`/${page}`);
  };
  return (
    <>
      <Link href="/" sx={{ display: { xs: "none", md: "flex" } }}>
        <img style={{ borderRadius: "50%" }} src={logo} alt="logo" width="40" />
      </Link>
      <Typography
        variant="h6"
        noWrap
        component="a"
        marginLeft="20px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "inherit",
          fontWeight: 700,
          // letterSpacing: ".3rem",
          color: "black",
          textDecoration: "none",
        }}
      >
        {NAME}
      </Typography>
      <Box
        sx={{
          justifyContent: "flex-end",
          flexGrow: 1,

          display: { xs: "none", md: "flex" },
        }}
      >
        {pages.map((page, index) => (
          <Button
            key={page}
            onClick={() => handleNavMenu(pagesRoute[index])}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              my: 2,
              color: "black",
              display: "block",
              fontFamily: "inherit",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};
