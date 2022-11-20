import React from 'react'
import { Container, Grid, ThemeProvider, Typography } from '@mui/material'
import { menu_data } from './data'
import './Menu.css'

function Menu() {
  return (
    <Container id="menu" align="center" maxWidth="xl">
      <Typography variant="h3" sx={{ margin: '2rem' }}>
        Menu
      </Typography>
      <Typography>FREE SHIP OVERNIGHT TỪ 45 CÂY TRỞ LÊN</Typography>
      <Typography>TẶNG 50GR TÔM KHÔ USA TỪ 70 CÂY TRỞ LÊN</Typography>
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
          )
        })}
      </Grid>
    </Container>
  )
}

export default Menu
