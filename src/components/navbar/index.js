import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  Navbarcontainer,
  NavLogo,
  MobileIcon,
  Navmenu,
  Navitem,
  Navlink,
  Navbutton,
  Navbuttonlink,
  Logotextcontainer
} from "./navbarelement";
import { FaBars } from "react-icons/fa";
import GlobalStyle from "../../fonts/font";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggletop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });
  return (
    <>
      <GlobalStyle />
      <Nav scrollNav={scrollNav}>
        <Navbarcontainer>
          <Logotextcontainer>
            <NavLogo scrollNav={scrollNav} onClick={toggletop}></NavLogo>
            <Navbutton>
              <Navbuttonlink scrollNav={scrollNav} onClick={toggletop}>
                <div className="logotag">KIDS AND CUBS CLINIC</div>
                <div className="logosubtag">Speech Pathology clinic</div>
              </Navbuttonlink>
            </Navbutton>
          </Logotextcontainer>

          <MobileIcon scrollNav={scrollNav} onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <Navmenu>
            <Navitem scrollNav={scrollNav}>
              <Navlink
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                First Section
              </Navlink>
            </Navitem>
            <Navitem scrollNav={scrollNav}>
              <Navlink
                to="B"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Second Section
              </Navlink>
            </Navitem>
            <Navitem scrollNav={scrollNav}>
              <Navlink
                to="C"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
              >
                Third Section
              </Navlink>
            </Navitem>
          </Navmenu>
        </Navbarcontainer>
      </Nav>
    </>
  );
};

export default Navbar;
