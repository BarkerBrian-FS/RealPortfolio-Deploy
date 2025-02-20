import React from 'react';
import Nav from '../Components/topNav';
import spaceBgProject from '../images/spaceBgProject.jpg';
import ContactForm from '../Components/contactForm'
import spaceBg2 from '../images/spaceBg2.jpg'
import '../Pages/About.css';
import EmblaCarousel from '../Components/emblaCarousel';
import AboutMe from  '../Components/AboutMe';
import Experience from '../Components/Experience';
const About = () => {
    return(
    <>
        <div id = 'Nav'>
            <Nav/>
        </div>
        <div id = 'About'>
            <AboutMe/>
        </div>
        <div id = 'Experience'>
            <Experience/>            
        </div>
        <div id='projects'>
            <div className='video'>
                <EmblaCarousel/>
            </div>
        </div>
        <div>
            <div id='contact' >
                <div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </>
    )
};

export default About