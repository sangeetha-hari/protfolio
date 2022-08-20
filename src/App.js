import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Skills from './Skills';
import NavigationBar from './NavigationBar';
import Project from './Project';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';



export default function App(){
  return(
    <div className='App'>
Hello welcome to 
<NavigationBar />


<a name="home"></a>
<section className='section-home'>
<img src="" className="img-circle" alt="sangeetha-pic"/>
<h1 className='largestyle'> Hi, I am</h1>
<h1 className='largestyle'>Sangeetha</h1>
<h2 className='medium'> I like to learn New thinks</h2><br/><br/>
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