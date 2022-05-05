import React from "react";
import { Button } from "../Buttonelement";

import {
  InfoContainer,
  Infowrapper,
  Inforow,
  Column1,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  BtnWrap
} from "./components";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
  buttonlabel
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Infowrapper>
          <Inforow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topline}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonlabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </Inforow>
        </Infowrapper>
      </InfoContainer>
    </>
  );
};
export default InfoSection;
