import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  Sidebarmenu,
  Sidebarlink,
  Sidebtnroute,
  Sidebtnwrap
} from "./sidebarcomponents";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Sidebarmenu>
          <Sidebarlink to="about" onClick={toggle}>
            about
          </Sidebarlink>
          <Sidebarlink to="about" onClick={toggle}>
            about
          </Sidebarlink>
          <Sidebarlink to="about" onClick={toggle}>
            about
          </Sidebarlink>
          <Sidebarlink to="about" onClick={toggle}>
            about
          </Sidebarlink>
        </Sidebarmenu>

        <Sidebtnwrap>
          <Sidebtnroute to="/about">sign in</Sidebtnroute>
        </Sidebtnwrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
