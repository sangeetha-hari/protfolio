import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Skills from './Skills';
import NavigationBar from './NavigationBar';
import Project from './Project';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import Typed from 'typed.js';
import { Loop } from '@mui/icons-material';
import Profile from './propic2-blackWhite.jpg'
import { Container } from 'reactstrap';
import Card from "@mui/material/Card";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {BrowserRouter,Navigate, Routes, Route,Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



// var options = {
//   strings: ["coding", 'sleeoing', 'eating'],
//   typeSpeed: 150,
//   loop:true
// };
// var typed = new Typed('.element', options);



export default function App(){
  const theme = useTheme();
  return(
  <div className='App'>
<Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home"><b style={{color:"white"}}>Sangeetha</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home"><b style={{color:"white"}}>Home</b></Nav.Link>
            <Nav.Link href="/about"><b style={{color:"white"}}>About</b></Nav.Link>
            <Nav.Link href="/skills"><b style={{color:"white"}}>Skills</b></Nav.Link>
            <Nav.Link href="/project"><b style={{color:"white"}}>Project</b></Nav.Link>
            <Nav.Link href="/contact"><b style={{color:"white"}}>Contact</b></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



{/* <NavigationBar /> */}


{/* <a name="home"></a> */}
      {/* <Home/> */}

{/*About me section start**************** */}
{/* <a name="about-section"></a> */}
{/* <About /> */}
{/*About me section end**************** */}



{/*Skill section start**************** */}
{/* <a name="skills"></a> */}
{/* <Skills/> */}
{/*Skill section end**************** */}


{/*Project section start**************** */}
{/* <a name="project"></a> */}
{/* <Project /> */}

{/*Project section end**************** */}




{/*Contact section start**************** */}
{/* <a name="contact"></a> */}
     {/* <Contact/> */}
{/*Contact section end**************** */}

<Routes>
<Route path="/home" element={<Home />} />
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/project" element={<Project />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<Home />} />
</Routes>

    </div>
  )
}

function Contact() {
  return <section>contact
    <h4> gmail</h4>
    <h4> moblie number</h4>
    <h4> </h4>

  </section>;
}

function Home() {
  return <section className='section-home'>

    <Container>
      <div className="d-flex justify-content-center align-items-center flx ">
        <div className='p-2 flex-fill'><img className='profile_pic' src={Profile} alt="" /></div>
        <div className='justify-content-end p-2 flex-fill'> <h1> Hi, I am <br /> Sangeetha<br /> I like</h1></div>
      </div>

      <br /><br />
      <a href="/about"><KeyboardDoubleArrowDown fontSize='large' />
        <i className="fa-solid fa-angle-down"></i>
      </a>
    </Container>
  </section>;
}
