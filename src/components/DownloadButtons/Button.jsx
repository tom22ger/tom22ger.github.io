import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function DownloadButton(props) {
  return (
    <a
      className="card"
      href={props.link}
      css={css`
        cursor: pointer;
        transition: all 250ms;
        width: 50%;
        text-decoration: none;
        color: #000;
        font-weight: 800;

        &:hover {
          box-shadow: 0 8px #000;
          transform: translateY(-4px);
        }
      `}
    >
      {props.type}
    </a>
  );
}
