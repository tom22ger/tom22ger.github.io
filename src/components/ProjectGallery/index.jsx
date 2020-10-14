/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Project from "./Project";

export default function ProjectGallery(props) {
  const renderedProjects = [];
  for (let p of props.projects) {
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
