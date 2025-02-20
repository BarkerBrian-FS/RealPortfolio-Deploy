import React from 'react';
import Nav from '../Components/topNav';
import spaceBgProject from '../images/spaceBgProject.jpg';
//import Video from '../Components/videoDisplay';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import ContactForm from '../Components/contactForm'
import spaceBg2 from '../images/spaceBg2.jpg'
import { motion } from 'framer-motion';
import '../Pages/About.css';
import EmblaCarousel from '../Components/emblaCarousel';
import AboutMe from  '../Components/AboutMe';
import Experience from '../Components/Experience';
import ContactButtons from '../Components/ContactButtons';
const About = () => {
    return(
    <>
        <div>
            <Nav/>
        </div>
        <div>
            <AboutMe/>
        </div>
        <div>
            <Experience/>            
        </div>
        <div id='projects' class='space' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBgProject})`}} >
            <div className='video'>
                <EmblaCarousel/>
            </div>
        </div>
        <div>
            <div id='contact' class='spaceBg2' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBg2})`}} >
                <div>
                    <ContactForm/>
                </div>
                <div>
                    <ContactButtons/>
                </div>
            </div>
        </div>
    </>
    )
};

export default About