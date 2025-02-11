import React from 'react';
import Nav from '../Components/topNav';
import me from '../images/AboutBrian.png';
import spacebg from '../images/spacebg.jpg';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import galaxybg from '../images/galaxy.jpg'
import spaceBgProject from '../images/spaceBgProject.jpg';
import Video from '../Components/videoDisplay';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import ContactForm from '../Components/contactForm'
import spaceBg2 from '../images/spaceBg2.jpg'
import { motion } from 'framer-motion';
import '../Pages/About.css';

const About = () => {
    return(
        <>
        <div style={styles.Nav}>
            <Nav/>
        </div>
        <div className='body-space' style = {styles.bodySpace}>
            <div class='bg' style={{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spacebg})`}}>
            <div style={styles.about}>
                <div style={styles.intro}>
                    <h1 style={styles.name} class='name'>Brian Barker</h1>
                    <p style={styles.para}>Welcome! I am a hardworking veteran looking to enter the tech field.
                    I recently graduated from school for web development and design.
                    I have a passion for creating in the digital space and would love to find a company where I can contribute and grow my skills.</p>
                </div>
                <div>
                    <img src={me} alt='me' style={styles.img}/>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div id='experience' class='rocketBg' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${galaxybg})`}} >
                        <div style={styles.experience}>
                            <div style= {styles.htmlBlock}>
                                <img style={styles.html} src={html} alt='html'/>
                                <p>3 years of experience working with HTML5</p>
                            </div>
                            <div style={styles.cssBlock}>
                                <img style={styles.css} src={css} alt='css'/>
                                <p>3 years of experience working with CSS</p>
                            </div>
                            <div style={styles.jsBlock}>
                                <img style={styles.js} src={js} alt='javascript'/>
                                <p>3 years of experience working with Javascript</p>
                            </div>
                            <div style={styles.nodeBlock}>
                                <img style={styles.node} src={nodejs} alt='nodejs'/>
                                <p>3 years of experience working with NodeJs</p>
                            </div>
                            <div style={styles.reactBlock}>
                                <img style={styles.react} src={react} alt='react'/>
                                <p>3 years of experience working with React</p>
                            </div>
                            <div style={styles.mongoBlock}>
                                <img style={styles.mongo} src={mongo} alt='mongodb'/>
                                <p>3 years of experience working with MongoDb</p>
                            </div>
                            <div style={styles.figmaBlock}>
                                <img style={styles.figma} src={figma} alt='figma'/>
                                <p>3 years designing websites and apps with Figma</p>
                            </div>
                        </div>
            </div>
        </div>
        <div>
             <div id='projects' class='space' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBgProject})`}} >
                    <div className='video'>
                        <Video/>
                    </div>
            </div>
        </div>
        <div>
            <div>
                <div id='contact' class='spaceBg2' style= {{backgroundImage: `radial-gradient(transparent 40%, black 72%),url(${spaceBg2})`}} >
                    <div style={styles.contactForm}>
                        <ContactForm/>
                    </div>
                    <div style={styles.contactBtn}>
                        <div>
                            <a href='https://github.com/BarkerBrian-FS?tab=repositories'><img  style={styles.github} src={github} alt='github'/></a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/brian-barker-498537202/'><img  style={styles.linkedIn} src={linkedIn}  alt='linkedIn'/></a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    

        </>
    )
};

export default About

const styles={
    about:{
        display: 'flex',
        flexDirection: 'row',
    },
    img:{
        height: '950px',
        width: 'auto',
        marginTop: '6rem',
        marginRight: '-20rem',
    },
    name:{
        color: 'white',
        fontFamily: 'Anta, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '4rem',
        marginLeft: '20rem',
        marginTop: '6rem'
    },
    para:{
        fontFamily: 'Anta, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '1.5rem',
        color:'white',
        marginTop: '-2rem',
        marginLeft: '20rem',
        marginRight: '10rem'
    },
    Nav:{
        zIndex: 98
    },
    experience:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '60px',
        marginLeft: '400px',
    },
    html:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '200px'
    },
    htmlBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    css:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    cssBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    js:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    jsBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    nodeBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    node:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    reactBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    react:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    mongoBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    mongo:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    figmaBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem',
        color: 'white'
    },
    figma:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '200px'
    },
    github:{
        height: '105px',
        width: '105px',
        marginRight: '10px'
    },
    linkedIn:{
        height: '105px',
        width: '105px',
        marginLeft: '10px'
    },
    contactForm:{
        width: '100%',
    },
    contactBtn:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '43%',
        marginRight: 'auto',
        marginTop: '40px',
        justifyContent: 'spaceBetween',
        
    },
    
};