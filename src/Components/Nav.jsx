import React from "react";

import "../App.css";

const Nav = (props) => {
  return (
    <nav id="navbar" className="nav__container__actions">
      <ul>
        <li>
          <a activeClass="active">INTRO</a>
        </li>
        <li>
          <a activeClass="active">BIO</a>
        </li>
        <li>
          <a activeClass="active">BLOG</a>
        </li>
        <li>
          <a
            activeClass="active"
            onClick={() => props.fullpageApi.moveTo("work")}
          >
            WORK
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
