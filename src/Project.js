import React from "react";
import { Card,CardTitle, CardText } from 'reactstrap';
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Container } from "react-bootstrap";
const projectlist=[
  {
   pid:1,
    pname:"Graphics Project",
    psummary:"An animation project using OpenGL"
  },
  {
    pid:2,
     pname:"IVRS for college",
     psummary:"Built a IVR system for college and won Price in college level"
   },
   {
    pid:3,
     pname:"Opinion Mining",
     psummary:"A Research project to analyze Twitter data on any product"
   }
]

export default function Project() {
  return (
    <Container>
      <br/>
      <h1 className="largestyle"><b style={{color:"white"}}>Projects</b></h1>
      <section className="flxcard">
    
    {projectlist.map((el) => {
      return (
        <Card className="styleprojecctcard">
          <div >
          <CardTitle className="medium">{el.pname}</CardTitle>
          <CardText>{el.psummary}</CardText>
    
          </div>
        </Card>
      );
    })}
  </section>
  <a  href="#contact"><KeyboardDoubleArrowDown fontSize='large'/></a>
    </Container>
  );
}
