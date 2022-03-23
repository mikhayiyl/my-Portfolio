import React, { useState } from "react";
import Footer from "../component/Footer/Index";
import { homeObjone } from "../component/InfoSection/Data";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar/Index";
import HeroSection from "./../component/HeroSection/Index";
import InfoSection from "../component/InfoSection/Index";
import Skills from "./../component/Skills/Index";
import Projects from "./../component/Projects/Index";
import ContactPage from "./../component/ContactPage/index";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <InfoSection {...homeObjone} />
      <Skills />
      <Projects />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Home;
