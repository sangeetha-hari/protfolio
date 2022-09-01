
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import Profile from './propic2-blackWhite.jpg'
import { Container } from 'reactstrap';
import { useTheme } from '@mui/material/styles';
import {Routes, Route} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';




export default function App(){
  const theme = useTheme();
  return(
  <div className='App'>
<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><b>Sangeetha</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><b >Home</b></Nav.Link>
            <Nav.Link href="#about"><b >About</b></Nav.Link>
            <Nav.Link href="#skills"><b >Skills</b></Nav.Link>
            <Nav.Link href="#project"><b >Project</b></Nav.Link>
            <Nav.Link href="#contact"><b >Contact</b></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



{/* <NavigationBar /> */}


<a name="home"></a>
      <Home/>

{/*About me section start**************** */}
<a name="about"></a>
<About />
{/*About me section end**************** */}



{/*Skill section start**************** */}
<a name="skills"></a> 
 <Skills/> 
{/*Skill section end**************** */}


{/*Project section start**************** */}
<a name="project"></a>
<Project />

{/*Project section end**************** */}




{/*Contact section start**************** */}
<a name="contact"></a>
     <Contact/>
{/*Contact section end**************** */}

<Routes>
<Route path="#home" element={<Home />} />
<Route path="#" element={<Home />} />
<Route path="#about" element={<About />} />
<Route path="#skills" element={<Skills />} />
<Route path="#project" element={<Project />} />
<Route path="#contact" element={<Contact />} />
<Route path="*" element={<Home />} />
</Routes>

    </div>
  )
}

function Contact() {
  return <section>
    <h1 className="largestyle"><b style={{color:"white"}}>Contact</b></h1>
    <div className="d-flex justify-content-center align-items-center flx ">
        <div className='p-2 flex-fill'><img className='profile_pic' src={Profile} alt="" /></div>
        <div className='justify-content-end p-2 flex-fill'> 
        <div className="contact_icon">
        
          <a href="https://github.com/sangeetha-hari" className='linkstyle'><GitHubIcon fontSize="large" /> https://github.com/sangeetha-hari </a>
          
          <a href="https://twitter.com/sangeetaharikan" className='linkstyle'><TwitterIcon fontSize="large" />https://twitter.com/sangeetaharikan</a>
         
          <a href="https://www.linkedin.com/in/sangeetha-harikantra-b33b40233" className='linkstyle'><LinkedInIcon fontSize="large" />https://www.linkedin.com/in/sangeetha-harikantra-b33b40233</a> 
          <h4 href="" className='linkstyle'> <i>Mail me at:</i>  <EmailIcon fontSize="large" />harikantrasangeetha4@gmail.com</h4>
        </div>
        </div>
        {/* <div className='p-2 flex-fill'><img className='profile_pic' src={"https://i.pinimg.com/originals/0d/a5/cb/0da5cbca5d728a789100439958f50235.gif"} alt="" /></div> */}
      </div>

    
        
          

  </section>;
}

function Home() {
  return <section className='section-home'>

    <Container>
      <div className="d-flex justify-content-center align-items-center flx ">
        {/* <div className='p-2 flex-fill'><img className='profile_pic' src={Profile} alt="" /></div> */}
        <div className='justify-content-end p-2 flex-fill'> <h1> Hi, I am <br /> Sangeetha Suresh Harikantra</h1></div>
        <div className='p-2 flex-fill'><img className='profile_pic' src={"https://i.pinimg.com/originals/0d/a5/cb/0da5cbca5d728a789100439958f50235.gif"} alt="" /></div>
      </div>

      <br /><br />
      <a href='./resume_sangeetha.pdf'><Button variant="contained">
        Download Resume
      </Button></a>
      <a href="#about"><KeyboardDoubleArrowDown fontSize='large' />
        <i className="fa-solid fa-angle-down"></i>
      </a>
    </Container>
  </section>;
}
