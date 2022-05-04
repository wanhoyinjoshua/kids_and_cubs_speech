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
import logo from "./pic.svg";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Navbarcontainer>
          <NavLogo to="/">
            <img src={logo} alt="hi" width="200" height="auto" />
          </NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <Navmenu>
            <Navitem>
              <Navlink to="/">About</Navlink>
            </Navitem>
            <Navitem>
              <Navlink to="/">About</Navlink>
            </Navitem>
            <Navitem>
              <Navlink to="/">About</Navlink>
            </Navitem>
          </Navmenu>
          <Navbutton>
            <Navbuttonlink to="/">About</Navbuttonlink>
          </Navbutton>
        </Navbarcontainer>
      </Nav>
    </>
  );
}
