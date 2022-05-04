import React from "react";

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
  Img
} from "./component";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  Lighttext,
  headline,
  darkText,
  description,
  img,
  alt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Infowrapper>
          <Inforow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topline}</Topline>
                <Heading Lighttext={Lighttext}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
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
