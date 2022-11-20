import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import './App.css'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import { Divider, IconButton, Box } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import FacebookIcon from '@mui/icons-material/Facebook'

const PHONE_NUMBER = '(206) 353-6122'
const PHONE_LINK = `tel:${PHONE_NUMBER}`
const MESS_LINK = `sms:${PHONE_NUMBER}`
const FACEBOOK_LINK = 'https://www.facebook.com/chu.choa.102361'

function App() {
  return (
    <>
      <Box sx={{ position: 'fixed', bottom: '10%', left: '85%' }}>
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
      </Box>

      <NavBar />
      <Hero />
      <Menu id="home" />
      <Divider />
      <Footer />
    </>
  )
}

export default App
