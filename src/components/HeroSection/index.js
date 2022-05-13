import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  HeroContainer,
  Herobg,
  HeroContent,
  Heroh1,
  Herop,
  Herobtnwrapper,
  ArrowForward,
  ArrowRight,
  Bubblepic
} from "./heroelement";
import { Button } from "../Buttonelement";
import GlobalStyle from "../../fonts/font";
const HeroSection = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <GlobalStyle />
      <HeroContainer>
        {/* <Bubblepic
          //root
          theme={{
            //stay when mobile
            main: "blue",

            left: "30%",
            bottom: "1%",

            display: "block",
            displaymob: "block",
            delay: "2s",
            width: "100px"
          }}
          src="/assets/images/shutterstock/1.svg"
        />
        <Bubblepic
          theme={{
            main: "blue",

            left: "10%",
            bottom: "6%",

            display: "block",
            displaymob: "none",
            width: "100px",
            delay: "2s"
          }}
          src="/assets/images/shutterstock/2.svg"
        />
        <Bubblepic
          theme={{
            main: "blue",

            left: "20%",
            bottom: "15%",

            display: "block",
            displaymob: "none",
            width: "100px",
            delay: "2s"
          }}
          src="/assets/images/shutterstock/22.svg"
        />
        <Bubblepic
          theme={{
            main: "blue",

            right: "30%",
            bottom: "20%",

            display: "block",
            displaymob: "none",
            width: "80px",
            delay: "2s"
          }}
          src="/assets/images/shutterstock/Untitled design.svg"
        />
        <Bubblepic
          //root
          theme={{
            main: "blue",

            right: "20%",
            rightmob: "30%",
            bottom: "10%",

            display: "block",
            displaymob: "none",
            width: "100px",
            delay: "0.1s"
          }}
          src="/assets/images/shutterstock/22.svg"
        />
        <Bubblepic
          //root
          theme={{
            main: "pink",

            left: "20%",
            display: "block",
            displaymob: "block",

            top: "50%",
            delay: "0.8s",
            width: "50px"
          }}
          src="/assets/images/shutterstock/22.svg"
        />
        <Bubblepic
          //root
          theme={{
            main: "none",

            left: "10%",
            display: "block",
            displaymob: "block",

            bottom: "20%",
            delay: "0.8s",
            width: "50px"
          }}
          src="/assets/images/icons/speechicon.svg"
        />
        <Bubblepic
          theme={{
            main: "pink",

            left: "10%",
            display: "block",
            displaymob: "none",

            top: "20%",
            width: "100px",
            delay: "0.8s"
          }}
          src="/assets/images/shutterstock/22.svg"
        />
        <Bubblepic
          //root
          theme={{
            main: "pink",

            right: "20%",

            bottom: "60%",
            display: "block",
            displaymob: "none",
            width: "70px",
            delay: "0.8s"
          }}
          src="/assets/images/bear3.svg"
        />
        <Bubblepic
          theme={{
            main: "pink",

            right: "5%",

            bottom: "70%",
            width: "100px",
            delay: "0.8s"
          }}
          src="/assets/images/bear3.svg"
        />
        <Bubblepic
          theme={{
            main: "pink",

            right: "5%",

            bottom: "40%",
            width: "60px",
            delay: "0.8s"
          }}
          src="/assets/images/bear3.svg"
        /> */}
        <HeroContent>
          <Heroh1 className="homeopagetitle">KIDS AND CUBS CLINIC </Heroh1>
          <Herop>Speech Pathology</Herop>
          <Herobtnwrapper>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9zM3Zj9q3mdsxXpxO05aG75hRqVVFh9qoSIhwoNujqD29NQ/viewform"
              target="_blank"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Contact us{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Herobtnwrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
