import React, { useState } from "react";
import { BtnSpan, Button } from "../ButtonElements";
import video from "../../video/space.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroSpan,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import GlowParticle from "../common/GlowParticle";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <GlowParticle />
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span className="colorspan1"> Hi</span>, I'm{" "}
          <span className="colorspan2">Da</span>ncan <HeroSpan></HeroSpan>{" "}
        </HeroH1>
        <HeroH1>
          <span className="colorspan3">Fr</span>ont-end{" "}
          <span className="colorspan4">Dev</span>eloper <HeroSpan></HeroSpan>{" "}
        </HeroH1>
        <HeroH1>
          & <span className="colorspan5">Bui</span>ld{" "}
          <span className="colorspan6">U</span>ser{" "}
          <span className="colorspan7">In</span>terfaces <HeroSpan></HeroSpan>
        </HeroH1>

        <HeroP>
          Striving to make the web a Perfect & a Better place for all
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <BtnSpan>
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnSpan>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
