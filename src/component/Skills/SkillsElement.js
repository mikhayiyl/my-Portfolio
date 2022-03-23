import styled from "styled-components";

export const SkillContainer = styled.div`
  background: #ee82ee;
  background-image: repeating-conic-gradient(
    from 45deg,
    #111 0deg 90deg,
    #222 90deg 180deg
  );
  position: relative;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProgressBarRight = styled.span`

  animation: loading-1 1.8s linear forwards;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
`;

export const HtmlProgress = styled.span`

animation: html 1.8s linear forwards 1.8s;
@keyframes html {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
export const JavascriptProgress = styled.span`

animation: javascript 1.8s linear forwards 1.8s;
@keyframes javascript {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(79.2deg);
    transform: rotate(79.2deg);
  }
`;
export const ReactProgress = styled.span`

animation: react 1.8s linear forwards 1.8s;
@keyframes react {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(94deg);
    transform: rotate(94deg);
  }
`;
export const GitProgress = styled.span`

animation: git 1.8s linear forwards 1.8s;
@keyframes git {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(68deg);
    transform: rotate(68deg);
  }
`;
export const NodeProgress = styled.span`

animation: nodejs 1.6s linear forwards 1.6s;
@keyframes nodejs {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(14.4deg);
    transform: rotate(14.4deg);
  }
`;

export const ProgressValue = styled.div`
  position: absolute;
  color: #000;
  top: 0;
  left: 0;
`;
export const RoundedLg = styled.div`
  border-radius: 1rem;
`;

export const TextGray = styled.span`
  color: #aaa;
`;
export const Heading4 = styled.h4`
  line-height: 1rem;
`;
