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
<NavigationBar />


<a name="home"></a>
<section className='section-home'>
  <Container className="flx">

  <Card variant="Contained" align="center">
            <div className="flx">
              <div><img className='profile_pic' src={Profile}  alt=""/></div>
              {/* <div className="home_style" > 
              <h1> Hi, I am <br/> Sangeetha<br/> I like</h1>
              </div> */}
            </div>
          </Card>
          <Card variant="outlined" align="center">
            <div className="flx">
              {/* <div><img className='profile_pic' src={Profile}  alt=""/></div> */}
              <div className="home_style" > 
              <h1> Hi, I am <br/> Sangeetha<br/> I like</h1>
              </div>
            </div>
          </Card>

    {/* <div><img  className="profile_pic" src={Profile} alt='sangi'/> </div>
    <div> 
      <h1 className='largestyle'> Hi, I am</h1>
      <h1 className='largestyle'>Sangeetha</h1>
      <h2 className='medium'> I like to </h2>
    </div> */}
    
  </Container>



{/* <span className='element'></span> */}
<br/><br/>
<KeyboardDoubleArrowDown fontSize='large'/>

<i class="fa-solid fa-angle-down"></i>

</section>

{/*About me section start**************** */}
<a name="about-section"></a>
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
<section>contact
<h4> gmail</h4>
<h4> moblie number</h4>
<h4> </h4>

</section>
{/*Contact section end**************** */}
    </div>
  )
}