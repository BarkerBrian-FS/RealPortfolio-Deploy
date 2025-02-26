import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';
import galaxyBg from '../images/galaxyBg.jpg';
import './Experience.css';

const skills = [
    { img: html, text: "HTML5", years: 3 },
    { img: css, text: "CSS", years: 3 },
    { img: js, text: "JavaScript", years: 3 },
    { img: nodejs, text: "Node.js", years: 3 },
    { img: react, text: "React.js", years: 3 },
    { img: mongo, text: "MongoDB", years: 3 },
    { img: figma, text: "Figma", years: 3 }
];

const Experience = () => {
    const [screenSize, setScreenSize] = useState(
        window.innerWidth <= 768 ? "mobile" : window.innerWidth <= 1024 ? "tablet" : "desktop"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setScreenSize("mobile");
            } else if (window.innerWidth <= 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Framer Motion Variants
    const variants = {
        desktop: { opacity: 1, y: 0, scale: 1 },
        tablet: { opacity: 1, y: 20, scale: 0.95 },
        mobile: { opacity: 1, y: 30, scale: 0.9 },
    };

    return (
        <div 
            id='experience' 
            className='rocketBg' 
            style={{
                backgroundImage: `radial-gradient(transparent 40%, black 72%),
                linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${galaxyBg})`
            }}
        >
            <div className="experience" style={styles.experience}>
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="exp-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <div style={styles.expBlock(screenSize)}>
                            <img 
                                className='expLogo' 
                                src={skill.img} 
                                alt={skill.text} 
                                loading="lazy" 
                                style={styles.logo(screenSize)} 
                            />
                            <p className='expText' style={styles.text(screenSize)}>
                                {skill.years}+ years of experience with {skill.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

const styles = {
    experience: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '80%',
        marginTop: '60px',
        flexWrap: 'wrap',
        padding: '0 20px',
    },
    expBlock: (screenSize) => ({
        display: 'flex',
        flexDirection: screenSize === "mobile" ? 'column' : 'row',
        alignItems: 'center',
        marginTop: screenSize === "mobile" ? '60px' : '5rem',
        marginBottom: '30px',
        flexWrap: 'wrap',
        textAlign: screenSize === "mobile" ? 'center' : 'left',
        maxWidth: '600px',
       
    }),
    logo: (screenSize) => ({
        height: screenSize === "mobile" ? '60px' : screenSize === "tablet" ? '70px' : '100px',
        width: screenSize === "mobile" ? '60px' : screenSize === "tablet" ? '70px' : '100px',
        flexShrink: 0,
    }),
    text: (screenSize) => ({
        fontFamily: 'Anta, sans-serif',
        fontSize: screenSize === "mobile" ? '1rem' : screenSize === "tablet" ? '1.2rem' : '1.5rem',
        color: 'white',
        marginLeft: screenSize === "mobile" ? '0' : '20px',
        marginTop: screenSize === "mobile" ? '10px' : '0',
    }),
};
