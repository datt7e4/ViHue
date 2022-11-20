import React from 'react'
import { AppBar, Toolbar, Box, Container, Button } from '@mui/material'

const pagesLeft = ['Home', 'Menu', 'Contact']
// const pagesRight = ["", "How To", "Contact"];
const pagesRight = ['', '', 'Order']

function NavBar() {
  return (
    <AppBar
      position="sticky"
      //Remove Shadow
      elevation={0}
      sx={{ background: 'white' }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            {pagesLeft.map((page) => {
              return (
                <Button
                  key={page}
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    visibility: page === '' ? 'hidden' : 'visible',
                  }}
                  href={
                    `#${page.toLocaleLowerCase()}`
                    // page === "Menu"
                    //   ? `#${page.toLocaleLowerCase()}`
                    //   : ""
                  }
                >
                  {page}
                </Button>
              )
            })}
          </Box>
          <img
            style={{ borderRadius: '50%' }}
            src="./logo.jpg"
            alt="logo"
            width="50"
          />
          <Box>
            {pagesRight.map((page) => {
              return (
                <Button
                  key={page}
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    visibility: page === '' ? 'hidden' : 'visible',
                  }}
                >
                  {page}
                </Button>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <>Hello???</>
  )
}

function handleButtonClick(e) {}

export default NavBar
