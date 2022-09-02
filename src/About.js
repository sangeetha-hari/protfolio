import React from "react";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function About() {
  return (
    <section>
       {/* >>>>>>>>>>>>>>>>>About section detail<<<<<<<<<<<<<<<<<<<<<< */}
      <h1 className="largestyle"><b style={{color:"white"}}>About Me</b></h1>
      <div className="section2">
        
        <div className="contentabout">
        
          <h2>
          
            I am currently working as an Asst. Professor in Information Science and Technology Department. I enjoy gardening, painting, explore new Technologies and practicing yoga.
          </h2>
        </div>

        {/* Icons of git, linkedin twitter and mail */}
        <div>
        
          <a href="https://github.com/sangeetha-hari"><GitHubIcon fontSize="large" color="inherit"/>  </a>
          
          <a href="https://twitter.com/sangeetaharikan"><TwitterIcon fontSize="large" color="inherit" /></a>
          <a href=""><EmailIcon fontSize="large" color="inherit"/></a>
          <a href="https://www.linkedin.com/in/sangeetha-harikantra-b33b40233"><LinkedInIcon fontSize="large" color="inherit"/></a> 
        </div>
      </div>
      <br/><br/><br/>
      <a  href="#skills"><KeyboardDoubleArrowDown fontSize='large'/></a>

    </section>
  );
}
