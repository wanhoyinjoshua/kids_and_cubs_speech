import styled from "styled-components";

import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
export const HeroContainer = styled.div`
  display: flex;
  background-position: 20% 60%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: absolute;
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Herobg = styled.div`
  position: absolute;
`;

export const Heroh1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Herop = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Herobtnwrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Bubblepic = styled.img`
  animation: MoveUpDown 2s linear infinite;
  animation-delay: ${(props) => props.theme.delay};
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  position: absolute;
  background-color: ${(props) => props.theme.main};
  border-radius: 50%;
  border: none;

  width: ${(props) => props.theme.width};
  display: ${(props) => props.theme.display};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  @media screen and (max-width: 768px) {
    display: ${(props) => props.theme.displaymob};
    left: ${(props) => props.theme.leftmob};
    right: ${(props) => props.theme.rightmob};
    top: ${(props) => props.theme.topmob};
    bottom: ${(props) => props.theme.bottommob};
  }
`;
