import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Intro from "./Components/Intro";
import Bio from "./Components/Bio";
import Resume from "./Components/Resume";
import Work from "./Components/Work";

import "./App.css";

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={["intro", "bio", "resume", "work"]}
    css="true"
    // fixedElements="#navbar"
    licenseKey={"E35F4022-024D47B0-A11F2302-99E37D51"}
    loopBottom="true"
    loopTop="true"
    menu="true"
    navigation={true} // Enable navigation dots
    scrollingSpeed={500} /* Options here */
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Nav fullpageApi={fullpageApi} />
          <ReactFullpage.Wrapper>
            <div className="section">
              <Intro />
            </div>
            <div className="section">
              <Bio callback={() => fullpageApi.moveTo("intro")} />
            </div>
            <div className="section">
              <Resume callback={() => fullpageApi.moveTo("intro")} />
            </div>
            <div className="section">
              <Work callback={() => fullpageApi.moveTo("intro")} />
            </div>
          </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);

const Nav = (props) => {
  return (
    <nav id="navbar">
      <ul id="navbar-items">
        <li>
          <a onClick={() => props.fullpageApi.moveTo("intro")}>INTRO</a>
        </li>
        <li>
          <a onClick={() => props.fullpageApi.moveTo("bio")}>BIO</a>
        </li>
        <li>
          <a onClick={() => props.fullpageApi.moveTo("resume")}>RESUME</a>
        </li>
        <li>
          <a onClick={() => props.fullpageApi.moveTo("work")}>WORK</a>
        </li>
      </ul>
    </nav>
  );
};

export default FullpageWrapper;
