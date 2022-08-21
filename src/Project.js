import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
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
     psummary:"A Research project to analyze Twitter data on any productS"
   }
]

export default function Project() {
  return (
    <div>
      <h1> Project</h1>
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
    </div>
  );
}
