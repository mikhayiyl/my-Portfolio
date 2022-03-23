import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            spy={true}
            className={isOpen && "open"}
            onClick={toggle}
            to="about"
          >
            About
          </SidebarLink>
          <SidebarLink
            spy={true}
            className={isOpen && "open"}
            onClick={toggle}
            to="skills"
          >
            SKILLS
          </SidebarLink>

          <SidebarLink
            spy={true}
            className={isOpen && "open"}
            onClick={toggle}
            to="projects"
          >
            projects
          </SidebarLink>
          <SidebarLink
            spy={true}
            className={isOpen && "open"}
            onClick={toggle}
            to="services"
          >
            Contact
          </SidebarLink>
          <SidebarLink
            spy={true}
            className={isOpen && "open"}
            onClick={toggle}
            to="signup"
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
