import React, { useState } from "react";

import Navbar from "../components/navbar";

import Sidebar from "../components/sidebar";
import HeroSection from "../components/HeroSection";

import InfoSection from "../components/infosection";
import Table from "../components/triagesection";
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

  return <>This is new page</>;
};

export default Home;
