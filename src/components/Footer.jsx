import React from "react";
// Here we import the Footer.css file to grant access to some additional classNames
import "../styles/Footer.css";

//we are importing the resume
import myResume from "../components/doc/simon_levey.pdf";
//we are importing the icons needed for this page
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/simon-levey-61011b231/"
        target="_blank"
      >
        <FaLinkedinIn size={30} />
      </a>
      <a href="https://github.com/lev8947" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href={myResume} download="simon_levey.pdf">
        <FaStackOverflow size={30} />
      </a>
    </div>
  );
}

export default Footer;