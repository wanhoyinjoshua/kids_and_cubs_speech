import styled from "styled-components";
import "../../App.css";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  transition: all 0.2s ease-in-out;
  background: ${({ scrollNav }) => (scrollNav ? "#54CDEB" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.2s ease-in-out;
  }
`;
export const Navbarcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 760px) {
    padding: 0px;
  }
`;
export const Logotextcontainer = styled.div`
  width: auto;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5 rem;
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.div`
  background-image: ${({ scrollNav }) =>
    scrollNav ? 'url("/assets/gifs/1.gif")' : 'url("/assets/images/bear.svg")'};
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 80px;

  cursor: pointer;
  font-size: 1.5 rem;
  display: flex;

  text-decoration: none;
  @media screen and (max-width: 760px) {
    margin-left: 1px;
    width: 80px;
    height: 80px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: ${({ scrollNav }) => (scrollNav ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Navitem = styled.li`
  height: 80px;
  display: ${({ scrollNav }) => (scrollNav ? "block" : "none")};
`;

export const Navlink = styled(LinkS)`
  color: white;

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  cursor: pointer;

  &.active {
    border-bottom: 5px solid #01bf71;
    color: white;
  }
`;
export const Navbutton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    font-size: 8px;
  }
`;

export const Navbuttonlink = styled(LinkS)`
  white-space: nowrap;
  position: absolute;
  bottom: 20px;
  display: ${({ scrollNav }) => (scrollNav ? "block" : "none")};

  text-decoration: none;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    border-radius: 50px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: orange;
  }
  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;
