import styled from "styled-components";
export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #0c0c0c;
  height: 800px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        100deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(100deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  display: block;
  position: relative;
  font-weight:400;
  color: transparent;
  font-size: 3rem;
  text-align: center;
  animation: text-color 0.5s ease forwards;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @keyframes text-color {
    100% {
      color: #fff;
    }
  }
  animation: text-color 0.5s ease forwards;
  
  

  &:nth-child(1) {
    animation-delay: 1s;

    span{ 
        animation-delay: 0.5s;
      }
    }
  }
  &:nth-child(2) {
    animation-delay: 2s;

    span{ 
      animation-delay: 1.5s;
    }
  }
  &:nth-child(3) {
    animation-delay: 3s;

    span{ 
      animation-delay: 2.5s;
    }
  }

  
  &:nth-child(1) HeroSpan {
    animation-delay: 10.5s;
  }
}
  `;

export const HeroSpan = styled.span`
  position: absolute;
  height: 100%;
  left: 0;
  width: 0%;
  background-color: #ff652f;
  border-radius: 1rem;
  animation: box 1s ease;

  // span animation
  @keyframes box {
    50% {
      left: 0;
      width: 100%;
      box-shadow: 2px 3px 4px 5px #fff;
    }
    100% {
      left: 100%;
      width: 0;
      box-shadow: 2px 3px 4px 5px #fff;
    }
  }
`;

export const HeroP = styled.p`
  color: transparent;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  animation: text-color 5s ease-in forwards;
  
}
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20000;
`;
