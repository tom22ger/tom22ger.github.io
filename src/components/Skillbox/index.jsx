/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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

export default function Skillbox(props) {
  let renderedSkillTypes = [];
  for (let i in props.skills) {
    let skills = [];
    for (let j of props.skills[i]) {
      skills.push(<Skill skill={j} />);
    }
    renderedSkillTypes.push(
      <div>
        <h5>{i}</h5>
        <div>{skills}</div>
      </div>
    );
  }

  return (
    <div>
      <h2>Skills:</h2>
      <div
        className="card"
        css={css`
          text-align: left;
          font-family: 16px;

          & h5 {
            text-transform: capitalize;
            font-size: 16px;
            margin: 0 0 2px;
          }
          & h5::after {
            content: ":";
          }
        `}
      >
        {renderedSkillTypes}
      </div>
    </div>
  );
}
