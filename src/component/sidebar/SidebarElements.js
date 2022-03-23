import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  z-index: 999;
  transition: 0.59s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
    transition: all 0.5s ease-in-out;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  padding: 2rem 0;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: translateX(100vw);

  &.open {
    transform: translateX(0);
  }

  &:nth-child(1) {
    transition-delay: 0.25s;
  }

  &:nth-child(2) {
    transition-delay: 0.35s;
  }

  &:nth-child(3) {
    transition-delay: 0.45s;
  }

  &:nth-child(4) {
    transition-delay: 0.55s;
  }
  &:nth-child(5) {
    transition-delay: 0.65s;
  }

  &:hover {
    color: #ff652f;
  }

  &.active {
    color: #ff652f;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: none;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;
