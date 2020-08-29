import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import arrow from "./arrow.svg";
import Full from "./Full";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expandProject = this.expandProject.bind(this);
    this.collapseProject = this.collapseProject.bind(this);
  }

  expandProject() {
    this.setState({
      expanded: true,
    });
  }

  collapseProject() {
    this.setState({
      expanded: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Full
          expanded={this.state.expanded}
          collapser={this.collapseProject}
          {...this.props}
        ></Full>
        <div
          className="card project-card"
          onClick={this.expandProject}
          css={css`
            cursor: pointer;
            transition: all 250ms;
            flex-basis: 250px;
            min-width: 250px;
            flex-grow: 0;

            & h4,
            & p {
              text-align: left;
              margin: 4px auto;
            }

            &:hover {
              box-shadow: 0 8px #000;
              transform: translateY(-4px);
            }
          `}
        >
          <div
            css={css`
              margin: auto;
              width: 100%;
              padding-top: 66.66%;
              position: relative;
            `}
          >
            <img
              src={this.props.image}
              alt={this.props.name}
              css={css`
                display: block;
                object-fit: cover;
                border-radius: 4px;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              `}
            />
          </div>
          <h4
            css={css`
              padding-top: 4px;
            `}
          >
            {this.props.name}
          </h4>
          <p>{this.props.flavor}</p>
        </div>
      </React.Fragment>
    );
  }
}
