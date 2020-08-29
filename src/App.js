import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Media from "react-media";

import "./components/BioHeader";
import BioHeader from "./components/BioHeader";
import ProjectGallery from "./components/ProjectGallery";
import Infobox from "./components/Infobox";
import info from "./info.json";
import Skillbox from "./components/Skillbox";
import DownloadButtons from "./components/DownloadButtons";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <BioHeader />
      </div>

      <ProjectGallery projects={info.projects} />
      <Media
        queries={{
          mobile: "(max-width: 800px)",
          desktop: "(min-width: 801px)",
        }}
      >
        {(matches) => (
          <React.Fragment>
            {matches.mobile && (
              <div>
                <Infobox {...info.work} />
                <Infobox {...info.education} />
                <Skillbox skills={info.skills} />
                <Infobox {...info.activities} />
                <Infobox {...info.hobbies} />
                <DownloadButtons />
              </div>
            )}
            {matches.desktop && (
              <div style={{ maxWidth: "1000px", margin: "auto" }}>
                <div
                  style={{
                    display: "inline-block",
                    width: "66.66%",
                    verticalAlign: "top",
                  }}
                >
                  <Infobox {...info.work} />
                  <Skillbox skills={info.skills} />
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "33.33%",
                    verticalAlign: "top",
                  }}
                >
                  <Infobox {...info.education} />
                  <Infobox {...info.activities} />
                  <Infobox {...info.hobbies} />
                  <DownloadButtons />
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}

export default App;
