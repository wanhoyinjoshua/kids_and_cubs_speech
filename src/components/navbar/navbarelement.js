import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")};
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
    transition: 0.8 all ease;
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
`;

export const NavLogo = styled.img`
  color: red;

  width: auto;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5 rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
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
    display: none;
  }
`;

export const Navbuttonlink = styled(LinkR)`
  border-radius: 50px;
  

  
  white-space: nowrap;
  padding: 10px 22px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: orange;
  }
`;
