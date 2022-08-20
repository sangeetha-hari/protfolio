import React from "react";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function About() {
  return (
    <section>
      <h1 className="largestyle">About Me</h1>
      <div className="section2">
        <div>
          image
          <a href=""><GitHubIcon fontSize="large"/></a>
          
          <a href=""><TwitterIcon fontSize="large"/></a>
          <a href=""><EmailIcon fontSize="large"/></a>
          <a href=""><LinkedInIcon fontSize="large"/></a> 
        </div>
        <div className="contentabout">
          {" "}
          <h2 className="medium">
            {" "}
            I am currently working as an Asst. Professor in Information Science
            and Technology Department.I enjoy garding, painting, explore new Technologies and
            praticing yoga{" "}
          </h2>
        </div>
      </div>

      <KeyboardDoubleArrowDown fontSize="large" />
    </section>
  );
}
