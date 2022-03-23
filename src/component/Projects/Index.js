import React from "react";
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

      <ProjectBtn to="/projects" className="btn btn-warning">
        ALL PROJECTS
      </ProjectBtn>
    </BodyScene>
  );
}
