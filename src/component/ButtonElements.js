import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  color: #fff;
  position: relative;
  overflow: hidden;
  &:hover {
    background: ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
    color: ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
    box-shadow: 0 0 10px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 30px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 60px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 100px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
    outline: 3px solid ${({ primary }) => (primary ? "#00ccff" : "#ff22bb")};
  }
  &:hover::before {
    width: 120%;
  }
  &:hover::before {
    background: ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
  }

  &::before {
    content: "";
    position: absolute;
    height: 400%;
    width: 40px;
    background: ${({ primary }) => (primary ? "#00ccff" : "#ff22bb")};
    transition: 1s;
    animation: btn 7s linear infinite;
    animation-delay: calc(0.33 * 1);
  }

  &::after {
    content: "";
    position: absolute;
    background: ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")};
    inset: 7px;
    transition: 0.5s;
  }

  @keyframes btn {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BtnSpan = styled.span`
  position: relative;
  color: #fff;
  z-index: 2;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  opacity: 1.5;
  text-transform: uppercase;
`;
