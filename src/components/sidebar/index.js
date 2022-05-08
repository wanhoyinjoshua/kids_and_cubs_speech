import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  Sidebarmenu,
  Sidebarlink,
  Sidebtnwrap,
  Sidebtnroute
} from "./sidebarcomponents";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Sidebarmenu>
          <Sidebarlink to="About" onClick={toggle}>
            about
          </Sidebarlink>
          <Sidebarlink to="B" onClick={toggle}>
            about
          </Sidebarlink>
          <Sidebarlink to="C" onClick={toggle}>
            about
          </Sidebarlink>
        </Sidebarmenu>

        <Sidebtnwrap>
          <Sidebtnroute
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9zM3Zj9q3mdsxXpxO05aG75hRqVVFh9qoSIhwoNujqD29NQ/viewform"
            target="blank"
          >
            Contact us now!
          </Sidebtnroute>
        </Sidebtnwrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
