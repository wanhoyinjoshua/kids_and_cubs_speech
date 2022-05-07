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
  Navbuttonlink
} from "./navbarelement";
import { FaBars } from "react-icons/fa";

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
      <Nav scrollNav={scrollNav}>
        <Navbarcontainer>
          <NavLogo onClick={toggletop} src="/assets/images/bear3.svg"></NavLogo>
           <Navbutton>
            <Navbuttonlink to="/signin">Kids and cubs clinci</Navbuttonlink>
          </Navbutton>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <Navmenu>
          
            <Navitem>
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
            <Navitem>
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
            <Navitem>
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
