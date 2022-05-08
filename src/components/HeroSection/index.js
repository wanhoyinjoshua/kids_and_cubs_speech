import React, { useState } from "react";
import {
  HeroContainer,
  Herobg,
  HeroContent,
  Heroh1,
  Herop,
  Herobtnwrapper,
  ArrowForward,
  ArrowRight
} from "./heroelement";
import { Button } from "../Buttonelement";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <Herobg></Herobg>
          <Heroh1>Kids and cubs Clinic </Heroh1>
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
