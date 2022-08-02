import React from "react";
//importing the necessory pages
import "../styles/Section.css";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/PortFolio";
import Resume from "./pages/Resume";


function Section({ currentPage, handlePageChange }) {

  //check the currentpage and based on currentpage load the appropriate page
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <ContactMe />;
  };
  return <section className="content">{renderPage()}</section>;
}

export default Section;