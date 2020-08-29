import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Button from "./Button";

export default function DownloadButton(props) {
  return (
    <div>
      <h2
        css={css`
          margin-bottom: 8px;
        `}
      >
        Resume Downloads:
      </h2>
      <div
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Button type="PDF" link="/assets/ThomasGerardResume.pdf"></Button>
        <Button type="SVG" link="/assets/ThomasGerardResume.svg"></Button>
      </div>
    </div>
  );
}
