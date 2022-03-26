import React from "react";
import { Link } from "react-scroll";
import { BtnSpan, Buttons } from "./../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  id,
  topline,
  headline,
  lightText,
  darkText,
  description,
  alt,
  primary,
  image,
  dark,
  dark2,
  buttonLabel,
}) => {
  const Button = Buttons(Link);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    dark={dark ? 1 : 0}
                    to="contact"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    <BtnSpan> {buttonLabel}</BtnSpan>
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src="cotton.jpg" alt="cotton" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
