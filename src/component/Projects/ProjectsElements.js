import styled from "styled-components";

export const BodyScene = styled.div`
  background-color: #000;
  min-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  perspective: 14em;
  height: auto;
  perspective-origin: 50% calc(50% - 2em);
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    min-height: 900px;
  }

  @media screen and (max-width: 770px) {
    min-height: 750px;
  }
  @media screen and (max-width: 450px) {
    min-height: 780px;
  }
`;
export const SceneBox = styled.div`
  position: relative;
  transform-style: preserve-3d;
  animation: sceneRotate 30s infinite linear;

  @keyframes sceneRotate {
    to {
      transform: rotateY(360deg);
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const FloorContainer = styled.div`
  position: absolute;
  top: 17vh;
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-image: radial-gradient(#0000, #000 75%),
    repeating-conic-gradient(from 45deg, #e70fb8 0deg 90deg, #fff 90deg 180deg);

  background-size: 100%, 1em 1em;
  transform: translate(-50%, -50%) rotateX(90deg);

  @media screen and (min-width: 1760px) {
    width: 20em;
    height: 18em;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectTitle = styled.div`
  position: absolute;
  top: 3rem;
`;

export const ProjectBtn = styled.div`
  position: absolute;
  bottom: 7rem;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    bottom: 5rem;
  }

  @media screen and (max-width: 650px) {
    bottom: 9rem;
  }
  @media screen and (max-width: 450px) {
    bottom: 7rem;
  }
  @media screen and (max-width: 350px) {
    bottom: 11rem;
  }
`;
