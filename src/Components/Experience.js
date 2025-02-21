import React from 'react'
import { motion } from 'framer-motion';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import galaxyBg from '../images/galaxyBg.jpg'
import './Experience.css';

const skills = [
    { img: html, text: "3 years of experience working with HTML5" },
    { img: css, text: "3 years of experience working with CSS" },
    { img: js, text: "3 years of experience working with JavaScript" },
    { img: nodejs, text: "3 years of experience working with Node.js" },
    { img: react, text: "3 years of experience working with React" },
    { img: mongo, text: "3 years of experience working with MongoDB" },
    { img: figma, text: "3 years designing websites and apps with Figma" }
];

const Experience = () => {
    return (
        <div id='experience' className='rocketBg' style={{ backgroundImage: `radial-gradient(transparent 40%, black 72%),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${galaxyBg})` }}>
            <div className="experience" style = {styles.experience}>
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="exp-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div style = {styles.expBlock}>
                            <img src={skill.img} alt="skill" style={styles.logo}/>
                            <p style={styles.text}>{skill.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;


const styles={
  experience:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flexStart',
      height: '60%',
      flexWrap: 'wrap',
      marginLeft: '200px',
  },
  expBlock:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '30px',
      marginBottom: '30px',
  },
  logo:{
      height: '100px',
      width: '100px',
      display: 'flex',
  },
  text:{
      fontFamily: 'Anta, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      marginTop: '30px',
      marginBottom: '30px',
      fontSize: '1.5rem',
      color: 'white',
      marginLeft: '3rem',
  },
}