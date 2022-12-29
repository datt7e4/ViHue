import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { getMenuData, getMenuDescription } from "../constants/menu";
import "./Menu.css";
import { menuDescriptionConst } from "../constants/constant";

function Menu() {
  const isEnglish = useContext(LanguageContext);
  const menu_data = getMenuData(isEnglish);
  const menu_description = getMenuDescription(isEnglish);

  return (
    <Container id={isEnglish ? "menu" : "thu-don"} align="center" maxWidth="xl">
      <Typography variant="h3" sx={{ margin: "2rem" }}>
        Menu
      </Typography>
      <Typography>{menu_description}</Typography>
      <Grid container marginTop="3rem" marginBottom="3rem">
        {menu_data.map((item) => {
          return (
            <Grid
              key={item.title}
              marginBottom="3rem"
              item
              xs={12}
              // sm={6}
              // md={4}
              // lg={3}
            >
              <img
                // style={{ borderRadius: "50%" }}
                src={item.img_src}
                alt="logo"
                className="menu-img"
                // width={'50%'}
              />
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2">{item.item_price}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Menu;
