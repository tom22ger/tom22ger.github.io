/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import house from "./house.svg";
import phone from "./phone.svg";
import mail from "./mail.svg";

import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

export default function BioHeader(props) {
  return (
    <header className="card">
      <div
        css={css`
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <div
          css={css`
            margin-right: 10px;
          `}
        >
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            css={css`
              display: block;
              height: 150px;
              border-radius: 4px;
              @media (max-width: 700px) {
                height: 100px;
              }
            `}
          />
        </div>
        <div
          css={css`
            flex-grow: 1;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 48px;

              @media (max-width: 700px) {
                font-size: 5vw;
              }
            `}
          >
            Thomas Adrian Gerard
          </h1>
          <h6
            css={css`
              margin: 0;
              font-size: 16px;
              @media (max-width: 700px) {
                font-size: 11px;
              }
            `}
          >
            developer, designer, and digital-first journalist
          </h6>
          <div
            css={css`
              @media (max-width: 700px) {
                display: none;
              }
              margin-top: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              css={css`
                text-align: left;
                margin-right: 20px;

                & a {
                  display: block;
                  text-decoration: none;
                  color: #000;
                  font-size: 12px;
                  margin: 0 4px;
                }
                & a img {
                  margin-right: 4px;
                  height: 16px;
                  display: inline-block;
                  vertical-align: middle;
                }
              `}
            >
              <a target="_blank" rel="noopener">
                <img src={house} />
                San Francisco, California
              </a>
              <a href="mailto:thomasadrian@mac.com" target="_blank" rel="noopener">
                <img src={mail} />
                thomasadrian@mac.com
              </a>
            </div>
            <div>
              <div
                css={css`
                  white-space: nowrap;

                  & a img {
                    height: 18px;
                    margin: 0 3px;
                  }
                `}
              >
                <a href="https://twitter.com/tom22ger" target="_blank" rel="noopener">
                  <img src={twitter} />
                </a>
                <a href="https://instagram.com/tom22ger" target="_blank" rel="noopener">
                  <img src={instagram} />
                </a>
                <a href="https://github.com/tom22ger" target="_blank" rel="noopener">
                  <img src={github} />
                </a>
                <a href="https://linkedin.com/in/tom22ger" target="_blank" rel="noopener">
                  <img src={linkedin} />
                </a>
              </div>
              @tom22ger
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          @media (min-width: 701px) {
            display: none;
          }
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            text-align: left;

            & a {
              display: block;
              text-decoration: none;
              color: #000;
              @media (max-width: 700px) {
                font-size: 12px;
                margin: 0 4px;
              }
            }
            & a img {
              margin-right: 4px;
              height: 16px;
              display: inline-block;
              vertical-align: middle;
            }
          `}
        >
          <a target="_blank" rel="noopener">
            <img src={house} />
            San Francisco, California
          </a>
          <a href="mailto:thomasadrian@mac.com" target="_blank" rel="noopener">
            <img src={mail} />
            thomasadrian@mac.com
          </a>
        </div>
        <div>
          <div
            css={css`
              white-space: nowrap;

              & a img {
                height: 18px;
                margin: 0 3px;
              }
            `}
          >
            <a href="https://twitter.com/tom22ger" target="_blank" rel="noopener">
              <img src={twitter} />
            </a>
            <a href="https://instagram.com/tom22ger" target="_blank" rel="noopener">
              <img src={instagram} />
            </a>
            <a href="https://github.com/tom22ger" target="_blank" rel="noopener">
              <img src={github} />
            </a>
            <a href="https://linkedin.com/in/tom22ger" target="_blank" rel="noopener">
              <img src={linkedin} />
            </a>
          </div>
          @tom22ger
        </div>
      </div>
    </header>
  );
}
