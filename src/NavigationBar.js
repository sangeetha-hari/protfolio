import React from "react";

export default function NavigationBar() {
  return (
    <div className="nav">
        <ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#home"><b className="navbold">Home</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#about-section"><b className="navbold">About</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#skills"><b className="navbold">Skills</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#project"> <b className="navbold">Project</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#contact"><b className="navbold">Contact</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#contact"><b className="navbold">Contact</b></a>
  </li>
  </ul>
    </div> 
  );
}
