import React from "react";
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

import arrow from "./arrow.svg";

function Skill(props) {
  return (
    <div
      css={css`
        border: 1px solid #000;
        display: inline-block;
        border-radius: 20px;
        font-weight: 700;
        padding: 2px 8px;
        line-height: 16px;
        font-size: 12px;
        margin: 4px;
      `}
    >
      {props.skill}
    </div>
  );
}

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false, expandedCard: null };
    this.collapseProject = this.collapseProject.bind(this);
    this.card = React.createRef();
  }

  collapseProject() {
    this.props.collapser();
  }

  render() {
    let renderedTags = [];
    for (let t of this.props.tags) {
      renderedTags.push(<Skill skill={t} />);
    }
    return (
      <div
        className="card full-project"
        ref={this.card}
        css={css`
          position: fixed;
          z-index: 10;
          margin: 0;
          background-color: #fff;
          top: 0;
          left: 0;
          right: 0;
          width: 100vw;
          height: 100%;
          border: none;
          border-radius: 0;
          text-align: center;
          overflow-y: scroll;
        `}
        style={{ display: this.props.expanded ? "block" : "none" }}
      >
        <div
          css={css`
            text-align: left;
            margin: auto;
            max-width: 600px;

            & h1,
            & p {
              text-align: left;
              margin: 4px auto;
            }

            & h5 {
              font-style: italic;
              font-weight: 400;
              margin: 0;
            }
          `}
        >
          {this.props.expanded && (
            <Global
              styles={css`
                html,
                body {
                  margin: 0;
                  height: 100%;
                  overflow: hidden;
                }
              `}
            />
          )}
          <div
            css={css`
              width: 100%;
              text-align: right;
              margin-bottom: 10px;
            `}
          >
            <button
              onClick={this.props.collapser}
              css={css`
                cursor: pointer;
                background: none;
                border: none;
                margin: 0;
                font-weight: 800;
                font-size: 24px;
              `}
            >
              X
            </button>
          </div>

          <img
            src={this.props.image}
            alt={this.props.name}
            css={css`
              display: block;
              border-radius: 4px;
              width: 100%;
            `}
          />
          <h1
            css={css`
              padding-top: 4px;
            `}
          >
            {this.props.name}
          </h1>
          <h5>{this.props.flavor}</h5>
          <p dangerouslySetInnerHTML={{ __html: this.props.explainer }}></p>
          {this.props.link !== "" && (
            <div
              css={css`
                text-align: right;
                margin: 20px auto;
              `}
            >
              <a
                href={this.props.link}
                css={css`
                  font-weight: 700;
                  color: ${this.props.color};
                  padding-right: 10px;
                  transition: all 250ms;

                  & svg {
                    height: 12px;
                    vertical-align: middle;
                    display: inline-block;
                    margin-left: 4px;
                  }

                  &:hover {
                    padding-right: 0px;
                  }
                `}
              >
                <span
                  css={css`
                    display: inline-block;
                    vertical-align: middle;
                  `}
                >
                  VISIT THE PROJECT HERE{" "}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill={this.props.color}
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  />
                </svg>
              </a>
            </div>
          )}
          <div
            css={css`
              text-align: center;
            `}
          >
            {renderedTags}
          </div>
        </div>
      </div>
    );
  }
}
