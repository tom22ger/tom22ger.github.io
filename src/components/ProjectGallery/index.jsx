import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Project from "./Project";

export default class ProjectGallery extends React.Component {
  render() {
    const renderedProjects = [];
    for (let p of this.props.projects) {
      renderedProjects.push(<Project {...p} />);
    }
    return (
      <div>
        <h2
          css={css`
            margin-bottom: 8px;
          `}
        >
          Featured Projects:
        </h2>
        <div
          css={css`
            display: flex;
            width: 100%;
            overflow-x: scroll;
            align-items: stretch;
          `}
        >
          {renderedProjects}
        </div>
      </div>
    );
  }
}
