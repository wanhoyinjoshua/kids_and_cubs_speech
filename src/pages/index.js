import React, { useState, useRef } from "react";

import Navbar from "../components/navbar";

import Sidebar from "../components/sidebar";
import HeroSection from "../components/HeroSection";

import InfoSection from "../components/infosection";
import Table from "../components/triagesection";
import Footer from "../components/footer";

import "../App.css";
import {
  homeObjOne,
  homeObjtwo,
  homeObjthree
} from "../components/infosection/data";

import ReactDOM from "react-dom";

import Accordion from "../components/accordian";

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
      <div className="App">
        <div className="Ourservices">Our Services</div>
        <Accordion title="What is your return policy?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion>
        <Accordion title="What is your return policy?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion>
      </div>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjtwo} />
      <InfoSection {...homeObjthree} />
      <Footer></Footer>
    </>
  );
};

export default Home;
