import React from "react";
import { Card, CardTitle, CardText,CardBody,CardSubtitle,Button } from "reactstrap";
import KeyboardDoubleArrowDown from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Container } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
// } from 'reactstrap';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const projectlist = [
  {
    pid: 1,
    pimg:"https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg",
    pname: "Full Stack projects",
    psummary: " SocialMedia Management tool",
    gitlink1: "https://github.com/sangeetha-hari/sociapp_frontEnd.git",
    gitlink2: "https://github.com/sangeetha-hari/SociBackendAPI.git",
    deployed:"https://rad-bunny-352c80.netlify.app/"
  },
  {
    pid: 2,
    pimg:"https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg",
    pname: "Full Stack projects",
    psummary: "Rental Application",
    gitlink1: "https://github.com/sangeetha-hari/Rental_frontend.git",
    gitlink2: "https://github.com/sangeetha-hari/Rental_Backend_API.git",
    deployed:""
  },
  {
    pid: 2,
    pimg:"https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg",
    pname: "Full Stack projects",
    psummary: "Movie Apps",
    gitlink1: "https://github.com/sangeetha-hari/movieapp.git",
    gitlink2: "https://github.com/sangeetha-hari/nodemongo.git",
    deployed:""
  },
  {
    pid: 3,
    pimg:"https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png",
    pname: "ReactJS Projects",
    psummary: "Library system",
    gitlink1: "https://github.com/sangeetha-hari/library.git",
    deployed:"https://lovely-bienenstitch-61d630.netlify.app/"
  
  },
  {
    pid: 3,
    pimg:"https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png",
    pname: "ReactJS Projects",
    psummary: "Student-Teacher Dashboard",
    gitlink1: "https://github.com/sangeetha-hari/teacher-StudentApp.git",
    deployed:"https://ornate-parfait-f1e78e.netlify.app/"
  
  },

  {
    pid: 3,
    pimg:"https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png",
    pname: "ReactJS Projects",
    psummary: "Added item into cart",
    gitlink1: "https://github.com/sangeetha-hari/Rental_frontend.git",
    deployed:""
    
  },
  {
    pid: 4,
    pimg:"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    pname: "NodeJS Projects",
    psummary: "Student-Mentor APIs",
    gitlink1: "https://github.com/sangeetha-hari/mentor_studentNodeJS_API.git",
    deployed:"https://assign-mentor-cxlr.onrender.com/"
  },
  {
    pid: 4,
    pimg:"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    pname: "NodeJS Projects",
    psummary: "Hall-booking API",
    gitlink1: "https://github.com/sangeetha-hari/nodejs_API_Hall_booking.git",
    deployed:"https://nodejs-bookings-hall-api.onrender.com"
  },
    
  {
    pid: 5,
    pimg:"https://contentstatic.techgig.com/photo/93000110/what-makes-java-still-popular-among-developers.jpg?28608",
    pname: "Opinion Mining",
    psummary: "A Research project to analyze Twitter data on any product"
    
  },
  {
    pid: 6,
    pimg:"https://i.stack.imgur.com/NZ0Wp.png",
    pname: "Graphics Project",
    psummary: "An animation project using OpenGL",
  },
  {
    pid: 7,
    pimg:"https://wakeupandcode.com/wp-content/uploads/2019/03/C.NET_-1024x384-1.png",
    pname: "IVRS for college",
    psummary: "Built a IVR system for college and won Price in college level",
  }
];



export default function Project() {

  
  

  return (
   <div>
      <Container className="header">
        <br/>
        <br/>
        <br/>
        <h1 className="largestyle">
          <b style={{ color: "white" }}>Projects</b>
        </h1>
       
        <div className="project">
          {projectlist.map((item)=>{
            return(
<Card style={{ width: '18rem', marginTop:"2rem"}}>
        <img height={100}
    alt="Sample"
    src={item.pimg}
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    {item.pname}
    </CardSubtitle>
    <CardText style={{ color: "black" }} >
     {item.psummary} 
    </CardText>
    {item.pname==="Full Stack projects"?<p><Button>
      <a href={item.gitlink1} style={{ color: "black"}}>FrontEnd <GitHubIcon/></a> 
      </Button>" "
      <Button>
      <a href={item.gitlink2} style={{ color: "black"}}>BackEnd <GitHubIcon/></a> 
      </Button>
      </p>: 
      item.gitlink1?<Button>
      <a href={item.gitlink1} style={{ color: "black"}}> <GitHubIcon/></a> 
      </Button>: <></>}
    
  </CardBody>
        </Card>
            )
          })}
        
       
        </div>
        
        <a href="#contact">
          <KeyboardDoubleArrowDown fontSize="large" />
        </a>
      </Container>
      </div>
  );
}
