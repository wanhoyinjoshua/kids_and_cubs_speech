import React from "react";
import {
  Nav,
  Navbarcontainer,
  NavLogo,
  MobileIcon,
  Navmenu,
  Navitem,
  Navlink,
  Navbutton,
  Navbuttonlink
} from "./navbarelement";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <Navbarcontainer>
          <NavLogo to="/">Kids and cubs clinic</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <Navmenu>
            <Navitem>
              <Navlink to="About">About</Navlink>
            </Navitem>
            <Navitem>
              <Navlink to="B">About</Navlink>
            </Navitem>
            <Navitem>
              <Navlink to="C">About</Navlink>
            </Navitem>
          </Navmenu>
          <Navbutton>
            <Navbuttonlink to="/signin">About</Navbuttonlink>
          </Navbutton>
        </Navbarcontainer>
      </Nav>
    </>
  );
}
