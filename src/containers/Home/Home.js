import React from "react";
import "./Home.css";
import About from "../About/About";
import Videos from "../Videos/Videos";
import Projects from "../Projects/Projects";
import { IconLinks, Wallpaper, Prtcl } from "../../components";
import { isMobile } from "react-device-detect";

const Home = () => {
  return (
    <div className="All">
      <div className="Home">
        {!isMobile ? <Prtcl /> : null}

        <div className={!isMobile ? "MainText" : "mobile_MainText"}>
          <Wallpaper />

          <h1 id={!isMobile ? "name" : "mobile_name"}>Takyon</h1>
          {!isMobile ? <h2>/</h2> : null}

          <IconLinks />
        </div>

        <a href="#Content" className="seeMore">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            id="seeMore"
            class="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </a>
      </div>

      <div id="Content" className="Content">
        {/* <p id='underConstruction'>SITE UNDER CONSTRUCTION</p> */}
        <About />
        <Projects />
        <Videos />
      </div>
    </div>
  );
};

export default Home;
