import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  Sidebarmenu,
  Sidebarlink
} from "./sidebarcomponents";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Sidebarmenu>
          <Sidebarlink to="about">about</Sidebarlink>
          <Sidebarlink to="about">about</Sidebarlink>
          <Sidebarlink to="about">about</Sidebarlink>
          <Sidebarlink to="about">about</Sidebarlink>
        </Sidebarmenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
