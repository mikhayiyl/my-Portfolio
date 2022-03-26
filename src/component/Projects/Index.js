import React from "react";
import { Link } from "react-router-dom";
import { BtnSpan, Buttons } from "../ButtonElements";
import Sliders from "../common/Sliders";
import {
  Wrapper,
  ProjectTitle,
  BodyScene,
  FloorContainer,
  ProjectBtn,
  SceneBox,
} from "./ProjectsElements";

export default function Index() {
  const Button = Buttons(Link);
  return (
    <BodyScene>
      <SceneBox>
        <FloorContainer></FloorContainer>
      </SceneBox>

      <Wrapper>
        <ProjectTitle className="col-lg-12 mx-auto mb-5 text-white text-center">
          <h1 id="projects" className="display-4">
            PROJECTS
          </h1>
        </ProjectTitle>
        <Sliders />
      </Wrapper>
      <ProjectBtn>
        <Button
          to="/projects"
          primary="true"
          dark="true"
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-80}
        >
          <BtnSpan>ALL PROJECTS</BtnSpan>
        </Button>
      </ProjectBtn>
    </BodyScene>
  );
}
