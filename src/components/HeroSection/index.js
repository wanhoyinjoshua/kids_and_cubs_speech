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
          <Heroh1>Kids and cubs </Heroh1>
          <Herop>Speech Pathology Clinic</Herop>
          <Herobtnwrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Herobtnwrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
