import React, { useState } from "react";

import Navbar from "../components/navbar";

import Sidebar from "../components/sidebar";
import HeroSection from "../components/HeroSection";

import InfoSection from "../components/infosection";
import Table from "../components/triagesection";
import Footer from "../components/footer";
import {
  homeObjOne,
  homeObjtwo,
  homeObjthree
} from "../components/infosection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Navbar toggle={toggle} />
      <HeroSection />
      <Table></Table>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <InfoSection {...homeObjthree} />
      <Footer></Footer>
    </>
  );
};

export default Home;
