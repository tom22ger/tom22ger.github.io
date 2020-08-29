/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Infobox(props) {
  return (
    <div>
      <h2>{props.section}</h2>
      <div
        className="card"
        css={css`
          text-align: left;
          & h5,
          & h6,
          & p,
          & ul,
          & li {
            margin: 0;
            font-size: 16px;
          }

          & p {
            margin-left: 20px;
          }

          & ul {
            list-style: none;
            padding-left: 24px;
          }

          & ul li::before {
            content: " - ";
          }

          & h6 span {
            color: #0080c6;
            font-weight: 700;
          }

          & h5 span {
            font-family: "Barlow Condensed";
            font-weight: 400;
          }

          ${props.styles};
        `}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
}
