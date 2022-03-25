import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => (
  <ReactFullpage
    /*
     * fullpage options
     * no need to hide licenseKey since it can only be
     * bounded with one domain
     */
    licenseKey={"E35F4022-024D47B0-A11F2302-99E37D51"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div id="main-section" className="section">
            <div className="text-container">
              <h1>
                I'm Simon Gaviria, full stack engineer, DJ, and drone pilot
              </h1>{" "}
              <h1>
                Originally from Queens, NY, but these days I'm mixing music
                somewhere in Manhattan
              </h1>
              <h1>
                Contact me or{" "}
                <button
                  id="main-button"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <h1>check out my site </h1>
                </button>
              </h1>
            </div>
          </div>
          <div id="bio-section" className="section">
            <div className="text-container">
              <h1>Bio</h1>
              <h3>A little more about me.</h3>
              <div>
                <h2 id="bio-content">
                  <p style={{ margin: 0 }}>
                    From a very young age, I always had an infatuation with
                    computers and problem solving. Though I did not know it, I
                    was always surrounded by code. Whether it was through video
                    games, to checking my phone, or just simple hobbies like
                    changing HTML on my Myspace page, programming will always a
                    big part of my life.
                  </p>
                  <p>
                    While getting my Computer science degree from CUNY Hunter
                    College, I decided to join an intensive, rigorous Full-Stack
                    Web development program to supplement my computer science
                    studies.
                  </p>
                  <p>
                    After finishing both programs, I've worked at many different
                    compnaies such as 2U, Peloton and Google. ... to add more
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div id="resume-section" className="section">
            <h1>Resume</h1>
            <div id="work-container">
              <div id="Google" className="resume-content-container">
                Developer Advocate
                <br />
                Classroom, Google | APRIL 2019 - CURRENT
                <br />
                <p>
                  <ul className="experience">
                    <li>
                      Worked with mobile developers and TPM's to create and
                      maintain test automation for digital, web and physical
                      products
                    </li>
                    <li>
                      Worked alongside UI and Core development teams to
                      understand test automation gaps and implement coverage
                    </li>
                    <li>
                      Worked with embedded systems team to test make testing an
                      integral part of the software development process
                      <li>
                        Created and implemented test suites for Android, iOS,
                        Tread and Bike teams for release products
                      </li>
                    </li>
                  </ul>
                </p>
                <br />
              </div>
              <div id="peloton" className="resume-content-container">
                SOFTWARE ENGINEER
                <br />
                PELOTON | APRIL 2019 - CURRENT
                <ul className="experience">
                  <li>
                    Worked with mobile developers and TPM's to create and
                    maintain test automation for digital, web and physical
                    products
                  </li>
                  <li>
                    Worked alongside UI and Core development teams to understand
                    test automation gaps and implement coverage
                  </li>
                  <li>
                    Worked with embedded systems team to test make testing an
                    integral part of the software development process
                    <li>
                      Created and implemented test suites for Android, iOS,
                      Tread and Bike teams for release products
                    </li>
                  </li>
                </ul>
              </div>
              <div id="2U" className="resume-content-container">
                CONTENT COORDINATOR
                <br />
                2U, INC. | SEPT 2018 - APRIL 2019
                <ul className="experience">
                  <li>
                    Worked with mobile developers and TPM's to create and
                    maintain test automation for digital, web and physical
                    products
                  </li>
                  <li>
                    Worked alongside UI and Core development teams to understand
                    test automation gaps and implement coverage
                  </li>
                  <li>
                    Worked with embedded systems team to test make testing an
                    integral part of the software development process
                    <li>
                      Created and implemented test suites for Android, iOS,
                      Tread and Bike teams for release products
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="relevant-experience" className="section">
            <div className="text-container">
              <h3>Code work</h3>
              <p>I have to put something here?</p>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
