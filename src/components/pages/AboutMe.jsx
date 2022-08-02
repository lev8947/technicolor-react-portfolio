import React from "react";
import "../../styles/About.css";
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="imgdivClass">
        <img
          className="imgclass"
          src={require(`../images/crimes.png`)}
          alt="Simon Levey"
        />
      </div>
      <p>
        What up? I'm Simmo ya home boy click click boom.
      </p>
    </div>
  );
}