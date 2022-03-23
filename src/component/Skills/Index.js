import React from "react";
import GlowParticle from "../common/GlowParticle";
import {
  ProgressValue,
  ProgressBarRight,
  GitProgress,
  ReactProgress,
  HtmlProgress,
  JavascriptProgress,
  NodeProgress,
  SkillContainer,
} from "./SkillsElement";
const Index = () => {
  return (
    <SkillContainer id="skills">
      <GlowParticle />
      <GlowParticle />

      <div className="container py-5">
        <div className="row">
          {/* <!-- For demo purpose --> */}
          <div className="col-lg-12 mx-auto mb-5 text-white text-center">
            <h1 className="display-4">TECHNICAL SKILLS</h1>
          </div>
          {/* <!-- END --> */}

          <div className="col-xl-3 col-lg-6 mb-4">
            <div className="bg-white rounded-lg p-5 shadow">
              <h2 className="h6 font-weight-bold text-center mb-4">
                HTML & CSS
              </h2>

              {/* <!-- Progress bar 1 --> */}
              <div className="Progress progress mx-auto" data-value="80">
                <span className="progress-left">
                  <HtmlProgress className="progress-bar border-primary"></HtmlProgress>
                </span>
                <span className="progress-right">
                  <ProgressBarRight className="progress-bar border-primary"></ProgressBarRight>
                </span>
                <ProgressValue className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    75<sup className="small">%</sup>
                  </div>
                </ProgressValue>
              </div>
              {/* <!-- END --> */}

              {/* <!-- Demo info --> */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">72%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* <!-- END --> */}
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 mb-4">
            <div className="bg-white rounded-lg p-5 shadow">
              <h2 className="h6 font-weight-bold text-center mb-4">
                JAVASCRIPT
              </h2>

              {/* <!-- Javascript Progress  --> */}
              <div className="Progress progress mx-auto" data-value="72">
                <span className="progress-left">
                  <JavascriptProgress className="progress-bar border-danger"></JavascriptProgress>
                </span>
                <span className="progress-right">
                  <ProgressBarRight className="progress-bar border-danger"></ProgressBarRight>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    72<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* <!-- END --> */}

              {/* <!--  info--> */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">68%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">64%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* <!-- END --> */}
            </div>
          </div>

          {/* <!-- React Progress  --> */}
          <div className="col-xl-3 col-lg-6 mb-4">
            <div className="bg-white rounded-lg p-5 shadow">
              <h2 className="h6 font-weight-bold text-center mb-4">REACT</h2>

              <div className="Progress progress mx-auto" data-value="76">
                <span className="progress-left">
                  <ReactProgress className="progress-bar border-success"></ReactProgress>
                </span>
                <span className="progress-right">
                  <ProgressBarRight className="progress-bar border-success"></ProgressBarRight>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    76<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* <!-- END --> */}

              {/* <!-- react info --> */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">71%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">66%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* <!-- END --> */}
            </div>
          </div>

          {/* <!--Git Progress bar 4 --> */}
          <div className="col-xl-3 col-lg-6 mb-4">
            <div className="bg-white rounded-lg p-5 shadow">
              <h2 className="h6 font-weight-bold text-center mb-4">GIT</h2>

              <div className="Progress progress mx-auto" data-value="69">
                <span className="progress-left">
                  <GitProgress className="progress-bar border-danger"></GitProgress>
                </span>
                <span className="progress-right">
                  <ProgressBarRight className="progress-bar border-danger"></ProgressBarRight>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    69<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* <!-- END --> */}

              {/* <!-- Git info --> */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">67%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">64%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* <!-- END --> */}
            </div>
          </div>

          {/* <!--Node js Progress bar  --> */}

          <div className="col-xl-3 col-lg-6 mb-4">
            <GlowParticle />
            <div className="bg-white rounded-lg p-5 shadow">
              <h2 className="h6 font-weight-bold text-center mb-4">NODE JS</h2>

              <div className="Progress progress mx-auto" data-value="29">
                <span className="progress-left">
                  <NodeProgress className="progress-bar border-warning"></NodeProgress>
                </span>
                <span className="progress-right">
                  <ProgressBarRight className="progress-bar border-warning"></ProgressBarRight>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    54<sup className="small">%</sup>
                  </div>
                </div>
              </div>
              {/* <!-- END --> */}

              {/* <!-- Node info --> */}
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">27%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">17%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
              {/* <!-- END --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PROGRESS BAR --> */}

      <div className="container">
        <h1 className="display-4">Professional Skills</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="progress-outer progressOuter">
              <div className="progress progress1">
                <div
                  className="progress-bar progress-bar-success progress-bar-striped active progressActive progressBar"
                  style={{
                    width: "60%",
                    boxShadow: "1px 10px 10px rebeccapurple",
                  }}
                ></div>
                <div className="progress-value progressValue">60%</div>
                <span className="head"> COMMUNICATION</span>
              </div>
            </div>
            <div className="progress-outer progressOuter">
              <div className="progress progress1">
                <div
                  className="progress-bar progress-bar-success progress-bar-striped active progressActive progressBar"
                  style={{
                    width: "70%",
                    boxShadow: "-1px 10px 10px rebeccapurple",
                  }}
                ></div>
                <div className="progress-value progressValue">70%</div>
                <span className="head"> CREATIVITY </span>
              </div>
            </div>
            <div className="progress-outer progressOuter">
              <div className="progress progress1">
                <div
                  className="progress-bar progressBar progress-bar-warning progress-bar-striped active progressActive"
                  style={{
                    width: "67%",
                    boxShadow: "-1px 10px 10px orangered",
                  }}
                ></div>
                <div className="progress-value progressValue">67%</div>

                <span className="head"> TEAM WORK</span>
              </div>
            </div>

            <div className="progress-outer progressOuter">
              <div className="progress progress1">
                <div
                  className="progress-bar progressBar progress-bar-warning progress-bar-striped active progressActive"
                  style={{
                    width: "56%",
                    boxShadow: " -1px 10px 10px orangered",
                  }}
                ></div>
                <div className="progress-value progressValue">56%</div>
                <span className="head"> PROJECT MANANGEMENT </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlowParticle />
    </SkillContainer>
  );
};

export default Index;
