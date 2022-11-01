import React from "react";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Menu id="home" />
      <Footer />
    </>
  );
}

export default App;
