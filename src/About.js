import React from "react";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function About() {
  return (
    <section>
      <h1 className="largestyle"><b style={{color:"white"}}>About Me</b></h1>
      <div className="section2">
        
        <div className="contentabout">
        
          <h2>
          
            I am currently working as an Asst. Professor in Information Science and Technology Department. I enjoy garding, painting, explore new Technologies and praticing yoga
          </h2>
        </div>
        <div className="contact_icon">
        
          <a href="https://github.com/sangeetha-hari"><GitHubIcon fontSize="large" color="info"/> https://github.com/sangeetha-hari </a>
          
          <a href="https://twitter.com/sangeetaharikan"><TwitterIcon fontSize="large" color="info" />https://twitter.com/sangeetaharikan</a>
          <a href=""><EmailIcon fontSize="large" color="error"/>harikantrasangeetha4@gmail.com</a>
          <a href="https://www.linkedin.com/in/sangeetha-harikantra-b33b40233"><LinkedInIcon fontSize="large" color="inherit"/>https://www.linkedin.com/in/sangeetha-harikantra-b33b40233</a> 
        </div>
      </div>
      <br/>
      <a  href="#skills"><KeyboardDoubleArrowDown fontSize='large'/></a>

      
    </section>
  );
}
